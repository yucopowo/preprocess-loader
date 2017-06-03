var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: {
        test: path.resolve(__dirname, 'src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: "[name].js",
        libraryTarget: 'umd'
    },

    resolve: {
        alias: {
        }
    },

    externals: {
    },

    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: './index.js',
                    options: {
                        context: {
                            NODE_ENV: process.env.NODE_ENV
                        },
                        options:{
                            // type: 'js'
                        }
                    }
                }
            }

        ]
    },

    plugins: [

    ]
};

