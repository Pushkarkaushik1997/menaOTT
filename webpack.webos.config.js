const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const packageJson = require('./package.json');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mode: 'production',
  target: ["web", "es5"],
  entry: './src/tv/index.tsx',
  output: {
    path: path.resolve(__dirname, `dist/webos/${process.env.npm_package_version}`),
    filename: 'bundle.webos.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Regex test for TypeScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: 'ts-loader' // Use ts-loader for TypeScript files
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ["@babel/preset-env", '@babel/preset-react', '@babel/preset-typescript', {
                  "targets": {
                      "browsers": ["last 2 versions", "ie >= 11"]
                  }
              }]
          ]
          }
        },
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
    new CopyPlugin({
      patterns: [
          {
              from: 'webos_template/appinfo.template.json', // Path to your appinfo template
              to: `appinfo.json`, // Output path for appinfo.json
              transform(content) {
                  const appInfo = JSON.parse(content.toString());
                  appInfo.version = packageJson.version;
                  appInfo.id = packageJson.name;
                  appInfo.title = packageJson.name;
                  appInfo.vendor = packageJson.vendor;
                  return JSON.stringify(appInfo, null, 2);
              },
          },
          {
            from: 'webos_template/icon.png', // Path to your appinfo template
            to: `icon.png`, // Output path for appinfo.json
          },
          {
            from: 'webos_template/largeIcon.png', // Path to your appinfo template
            to: `largeIcon.png`, // Output path for appinfo.json
          }
      ],
  }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3005,
  },
};
