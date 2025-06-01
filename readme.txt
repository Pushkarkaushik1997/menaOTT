1: Install Dependencies:First, make sure you have Node.js installed on your system. 
Then, initialize a new Node.js project and install the necessary dependencies:

npm init -y
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin

xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
2: Create a webpack Configuration File:Create a file named webpack.client.js in your project root directory:
// webpack.client.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
};


xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
3: Create a Babel Configuration File:Create a file named .babelrc in your project root directory:
// .babelrc

{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
4:Create React Components:Create your React components in the src directory. For example, you might have an App.js file:

// src/App.js

import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;

xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
5:Create HTML Template:Create an index.html file in the src directory:
<!-- src/index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>

xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
6:Create Entry Point:Create an index.js file in the src directory:
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
7:Run the Development Server:Add the following script to your package.json:
"scripts": {
  "start": "webpack serve --mode development"
}


xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
8: you can run your app using:
npm start


xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx

                                        NOW SCSS loader
1 install these dependencies
npm install style-loader --save-dev
npm install css-loader --save-dev
npm install sass-loader --save-dev

xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx

2: Webpack Configuration:
Make sure that style-loader is properly configured in your webpack configuration (webpack.client.js). 
{
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
3 create scss file and and import in jsx file

// Define styles for the button
button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

// Hover effect for the button
button:hover {
  background-color: #2980b9;
}

xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx

// Import the styles.scss file
import './styles.scss';

xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------xxxxxxxxxxxxxxxx