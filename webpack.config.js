//Konfiguracja Webpack
const path = require("path");
module.exports = {
  entry: "./scss/style.scss", // skad bierze plik wejsciowy sciezka !!! wazne
  output: {
    path: path.resolve("js"), // i gdzie wyrzuca outa !!! wazne
    filename: "out.js"
  },
  watch: true,
  module: {
    loaders: [
      {
          test: /\.scss$$/,
          exclude: /node_modules/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
