const cssnext = require('postcss-cssnext');
const cssimport = require('postcss-import');
const path = require('path');

// whitelist of components (and their deps) installed
// via npm install (in node_modules)
const whitelist = require('./whitelist.json');

// ignore all packages in node_modules, except for things in the whitelist
const excludeRegExp = whitelist.length
    ? new RegExp(`node_modules.(?!${whitelist.join("|")})`)
    : path.resolve(__dirname, '../../node_modules/');


module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: excludeRegExp
            },

            {
                test: /\.css?$/,
                loaders: ['style', 'css-loader?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]', 'postcss-loader'],
                include: path.resolve(__dirname, '../../')
            },

            {
                test : /\.json$/,
                loader  : 'json'
            },

            {
                test: /\.(png|jpe?g|gif|svg|mp3|mpe?g)$/,
                loader: "file-loader?name=static/assets/[name]-[hash:2].[ext]"
            }

        ]

    },

    cssLoader: {
        modules: true
    },

    postcss : [
        cssimport({ path: process.cwd() }),
        cssnext()
    ]
}
