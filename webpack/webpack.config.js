const server = require('./webpack.server');
const client = require('./webpack.client');

const config = {
  server,
  client,
};

const webpackConfig = (env, type) => {
  const isProduction = env === 'production';
  return {
    name: type,
    target: type === 'client' ? 'web' : 'node',
    devtool: 'source-map',
    entry: config[type].entry(isProduction),
    output: config[type].output(isProduction),
    stats: 'verbose',
    mode: isProduction ? 'production' : 'development',
    module: config[type].module(isProduction),
    resolve: config[type].resolve(),
    plugins: config[type].plugins(isProduction),
    optimization: config[type].optimization(isProduction),
    performance: false,
  };
};
module.exports = webpackConfig;
