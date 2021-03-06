const path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
            { test: /\.jpe?g$/, loader: "url-loader?mimetype=image/jpeg" },
            { test: /\.gif$/, loader: "url-loader?mimetype=image/gif" },
        ]
    },
    devServer: {
        publicPath: '/output'
    },
    plugins: [
        new Webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'general.css',
        }),
    ],
};