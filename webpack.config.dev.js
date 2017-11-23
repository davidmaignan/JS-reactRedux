const webpack = require('webpack');
const path = require('path');

// http://kloc.io/setting-up-react-workflow-babel-webpack/

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  target: 'web',
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, include: path.join(__dirname, 'src'),
        use: [
          { loader: 'babel-loader', options: {
            babelrc: true
          }}
        ]
      }
    ]
  }
};

module.exports = config;
