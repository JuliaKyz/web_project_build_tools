const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { resolve } = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: "main.[contenthash].js"
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({ // 2
            filename: '[name].[contenthash].css' // 3
        }),
    ],
    module: {
        rules: [
            { test: /\\.css$/,
                use:
                    [MiniCssExtractPlugin.loader, 'css-loader']
            },
            { test: /\\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, // 4
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};