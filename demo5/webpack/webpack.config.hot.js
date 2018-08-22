/**
 * npm run hot
 * 构建开发环境
 */
process.env.NODE_ENV = 'dev';
var path = require('path');
var webpack = require('webpack');
var pathConfig = require('../pathConfig');
var webpackBase =  require('./webpack.config.base');


module.exports = Object.assign(webpackBase,{
    devtool: 'cheap-module-eval-source-map',
    plugins: [
    	//["import", {"libraryName": "antd-mobile", "style": true}],
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});
