const { resolve } = require('path');
const { SwcJsMinimizerRspackPlugin } = require('@rspack/core');

const buildTarget = process.env.BUILD_TARGET;

const entryFile = `index.js`;
const targetConfig = buildTarget === 'es5' ? ['web', 'es5'] : ['web'];
const outputDir = `dist/standard/${buildTarget}`;

module.exports = [
  {
    mode: 'production',
    entry: `./src/${entryFile}`,
    target: targetConfig,
    output: {
      filename: 'app.min.js',
      path: resolve(__dirname, outputDir),
    },
    optimization: {
      minimizer: [
        new SwcJsMinimizerRspackPlugin({
          extractComments: false,
          compress: true,
          mangle: true,
        }),
      ],
    },
    devtool: false,
    performance: {
      hints: false,
    },
  },
  {
    mode: 'development',
    entry: `./src/${entryFile}`,
    target: targetConfig,
    output: {
      filename: 'app.js',
      path: resolve(__dirname, outputDir),
    },
    performance: {
      hints: false,
    },
    devtool: process.env.INCLUDE_SOURCEMAP ? 'source-map' : false,
  },
];
