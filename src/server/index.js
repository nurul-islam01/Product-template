/* eslint-disable global-require */
/* eslint-disable import/extensions */
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const APIRoutes = require('./routes/index');
const CONSTANTS = require('./constants/constants');
const webpackConfig = require('../../webpack/webpack.config');

const DEV = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT || CONSTANTS.PORT;

const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/a/', APIRoutes);

let isBuilt = false;
const done = () =>
  !isBuilt &&
  app.listen(PORT, () => {
    isBuilt = true;
    // eslint-disable-next-line no-console
    console.log(
      `:::::::: Portfolio is runnig at http://localhost:${PORT} ::::::::`
    );
  });

if (DEV) {
  global.$RefreshReg$ = () => {};
  // @ts-expect-error
  global.$RefreshSig$ = () => () => {};
  // eslint-disable-next-line global-require

  const clientConfigDev = webpackConfig(process.env.NODE_ENV, 'client');
  const {
    output: { publicPath },
  } = clientConfigDev;
  // eslint-disable-next-line global-require
  const compiler = webpack([
    clientConfigDev,
    webpackConfig(process.env.NODE_ENV, 'server'),
  ]);
  const clientCompiler = compiler.compilers[0];
  const options = { publicPath, stats: { colors: true }, writeToDisk: true };
  const devMiddleware = webpackDevMiddleware(compiler, options);
  app.use(devMiddleware);
  app.use(webpackHotMiddleware(clientCompiler));
  app.use(webpackHotServerMiddleware(compiler));
  devMiddleware.waitUntilValid(done);
} else {
  // eslint-disable-next-line global-require
  const clientConfigProd = webpackConfig(process.env.NODE_ENV, 'client');
  const {
    output: { publicPath, path },
  } = clientConfigProd;
  // eslint-disable-next-line global-require

  webpack([
    clientConfigProd,
    webpackConfig(process.env.NODE_ENV, 'server'),
  ]).run((err, stats) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(':::::::: Error ocurred ::::::::', err);
      return false;
    }
    const clientStats = stats.toJson().children[0];

    fs.writeFile(
      `${process.cwd()}/public/dist/client/clientstats.json`,
      JSON.stringify(clientStats),
      'utf8',
      (error) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
        // eslint-disable-next-line import/no-unresolved
        const serverRender =
          require('../../public/dist/server/main.js').default;
        app.use(publicPath, express.static(path));
        app.use(serverRender({ clientStats }));
        done();
        return false;
      }
    );
    return false;
  });
}
