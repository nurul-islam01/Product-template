const fs = require('fs');
const webpack = require('webpack');

const {
  pathResolve,
  webpackBar,
  webpackDefinePlugin,
  eslintPlugin,
  webpackModuleConcatenationPlugin,
  compressionPlugin,
  loaders,
  cssMinimizerPlugin,
  terserPlugin,
  splitChunksConfig,
  resolve,
} = require('./webpack.common');

const isServer = true;
const server = {
  output: (isProduction = false) => {
    return {
      path: pathResolve('../public/dist/server'),
      filename: isProduction ? 'main.js' : '[name].js',
      libraryTarget: 'commonjs2',
    };
  },
  plugins: (isProduction = false) => {
    const plugins = [
      webpackBar(isProduction, isServer),
      webpackDefinePlugin(isProduction),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ];

    if (isProduction) {
      return [
        ...plugins,
        compressionPlugin(),
        webpackModuleConcatenationPlugin(),
      ];
    }
    return [...plugins, eslintPlugin()];
  },
  module: () => {
    const rules = [
      {
        oneOf: [
          loaders.urlLoader,
          loaders.babelLoader,
          loaders.babelLoaderPresetReactEnv,
          loaders.pdfLoader,
          loaders.fileLoader,
        ],
      },
      loaders.sassLoader(isServer),
      loaders.cssLoader(isServer),
    ];
    return { rules };
  },
  optimization: (isProduction = false) => {
    return {
      minimize: isProduction,
      minimizer: [cssMinimizerPlugin(), terserPlugin()],
      splitChunks: splitChunksConfig(),
    };
  },
  externals: () => {
    const externals = fs
      .readdirSync(pathResolve('../node_modules'))
      .filter((x) => !/\.bin/.test(x))
      .reduce((external, mod) => {
        const etrnls = external;
        etrnls[mod] = `commonjs ${mod}`;
        return etrnls;
      }, {});

    externals['react-dom/server'] = 'commonjs react-dom/server';
    return externals;
  },
  entry: (isProduction = false) => {
    return isProduction
      ? ['babel-polyfill', pathResolve('../src/server/renderer/renderer.js')]
      : [
          'regenerator-runtime/runtime.js',
          pathResolve('../src/server/renderer/renderer.js'),
        ];
  },
  resolve,
};

module.exports = server;
