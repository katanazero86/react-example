const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool : 'source-map',
    // devtool : 'inline-source-maps',
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css)/,
                use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options : {sourceMap: true, modules: {
                    localIdentName: '[local]-[hash:base64:5]'
                }} }],
            },
            {
                test: /\.(scss)/,
                exclude: /node_modules/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options : {sourceMap: true} },
                    { loader: 'sass-loader', options : {sourceMap: true} } 
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './index.css'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        })
    ],
    devServer: {
        compress: true, // enable gzip compression
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
        port: 9000,
        index: "index.html",
    },

}