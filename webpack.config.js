const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./client/index.html", 
  filename: "./index.html"
});
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});
const envConfig = new webpack.DefinePlugin(envKeys);

module.exports ={
  entry: './client/js/index.js',
  output: { // NEW
    path: path.resolve(__dirname, 'dist'),
    filename: "app.bundle.js"
  }, // NEW Ends
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    htmlPlugin,
    envConfig
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/env']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: { name: '/static/[name].[ext]' }
      }
    ]
  }
};