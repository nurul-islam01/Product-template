const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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

const client = {
  output: (isProduction = false) => {
    return {
      filename: isProduction ? 'static/js/[name].[chunkhash].js' : '[name].js',
      chunkFilename: isProduction
        ? 'static/js/[name].[chunkhash].js'
        : '[name].chunk.js',
      path: pathResolve('../public/dist/client'),
      publicPath: '/',
    };
  },
  plugins: (isProduction = false) => {
    const plugins = [
      webpackBar(isProduction),
      new LoadablePlugin(),
      new MiniCssExtractPlugin({
        filename: isProduction
          ? 'static/css/[name].[fullhash:8].css'
          : '[name].css',
        chunkFilename: isProduction
          ? 'static/css/[name].[fullhash:8].css'
          : '[name].css',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'public/manifest.json', to: 'static/js' },
          { from: 'public/robots.txt', to: '' },
          { from: 'public/sitemap.xml', to: '' },
          { from: 'public/favicon.ico', to: 'static/assets' },
          { from: 'public/logo512.png', to: 'static/assets' },
          { from: 'public/logo192.png', to: 'static/assets' },
          { from: 'public/service-worker.js', to: '' },
          { from: 'public/asset-manifest.json', to: '' },
        ],
      }),
      webpackDefinePlugin(isProduction),
    ];

    if (isProduction) {
      return [
        ...plugins,
        compressionPlugin(),
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          generateStatsFile: true,
          reportFilename: 'bundlereport.html',
          statsFilename: 'bundlestats.json',
        }),
        webpackModuleConcatenationPlugin(),
      ];
    }
    return [
      ...plugins,
      eslintPlugin(),
      new ReactRefreshWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ];
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
      loaders.sassLoader(),
      loaders.cssLoader(),
    ];
    return { rules };
  },
  optimization: (isProduction = false) => {
    return {
      minimize: isProduction,
      runtimeChunk: 'single',
      minimizer: [cssMinimizerPlugin(), terserPlugin()],
      splitChunks: splitChunksConfig(),
      emitOnErrors: true,
    };
  },
  entry: (isProduction = false) => {
    return isProduction
      ? ['babel-polyfill', pathResolve('../src/client/start.js')]
      : [
          'babel-polyfill',
          'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
          pathResolve('../src/client/start.js'),
        ];
  },
  resolve,
};

module.exports = client;
