const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const APIRoutes = require('./routes/index');
const webpackConfig = require('../../webpack/webpack.config');
// eslint-disable-next-line import/no-unresolved
const clientStats = require('../../public/dist/client/clientstats.json');
const CONSTANTS = require('./constants/constants');

const {
  output: { publicPath, path },
} = webpackConfig('production', 'client');
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
// eslint-disable-next-line global-require
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
const serverRender = require('../../public/dist/server/main.js').default;
app.use(publicPath, express.static(path));
app.use(serverRender({ clientStats }));
done();
