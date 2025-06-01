const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  entry: './src/tv/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/tizen'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Regex test for TypeScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: 'ts-loader' // Use ts-loader for TypeScript files
      },
      {
          test: /\.(js|jsx)$/, // Regex test for JavaScript/JSX files
          exclude: /node_modules/, // Exclude node_modules directory
          use: {
              loader: 'babel-loader', // Use babel-loader for JavaScript/JSX files
              options: {
                  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'] // Babel presets configuration
              }
          }
      },
      {
          test: /\.css$/, // Regex test for CSS files
          exclude: /node_modules/, // Exclude node_modules directory
          use: ['style-loader', 'css-loader'] // Use style-loader and css-loader for CSS files
      },
      {
          test: /\.scss$/, // Regex test for SCSS files
          exclude: /node_modules/, // Exclude node_modules directory,
          use: ['style-loader', 'css-loader','sass-loader'], // Use style-loader and css-loader and sass loader for SCSS files
        
      },
      {
          test: /\.(png|svg|ttf)$/i, // Regex test for image and font files
          type: "asset/resource" // Asset module type for handling resources
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tv/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3004,
  },
};
