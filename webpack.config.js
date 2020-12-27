const path = require('path')
const HWP = require('html-webpack-plugin')

// Key point to notice by creater suman mandal
// - If babel core v6 is used, then please install babel-loader v7 from npm
// - deafult npm install latest version from npm

module.exports = {

  entry: path.join(__dirname, '/src/index.js'),

  output: {
      filename: 'build.js',
      path: path.join(__dirname, '/dist')
  },

  module:{
      rules:[
        {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use : ["style-loader", "css-loader"]
        },
        {
          test: /\.svg$/,
          loader: "svg-inline-loader"
        }
      ]
  },

  plugins:[
    new HWP(  {template: path.join(__dirname,'/src/index.html')}  )
  ]
}