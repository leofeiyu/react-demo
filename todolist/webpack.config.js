const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, 'view'),
        filename: "bundle.js"
    },

    devServer: {
        contentBase: './view',
        historyApiFallback: true,
        inline: true
    }
}