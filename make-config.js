var createConfig = require('hjs-webpack')

module.exports = function makeConfig(isDev) {
    var config = createConfig({
        isDev: isDev,
        in : './app/scripts/app.js',
        out: './dist',
        output: {
            publicPath: ''
        },
        html: function(ctx) {
            return ctx.defaultTemplate({
                publicPath: ''
            })
        },
        clearBeforeBuild: '!(locale|img|favicon.ico)'
    })

    // Handle js-ipfs-api
    config.module.loaders.push({
        test: /\.js$/,
        include: /node_modules\/(hoek|qs|wreck|boom|ipfs-api)/,
        loader: 'babel-loader'
    })

    config.externals = {
        net: '{}',
        fs: '{}',
        tls: '{}',
        console: '{}',
        'require-dir': '{}'
    }

    config.resolve = {
        modulesDirectories: [
            'node_modules'
        ],
        alias: {
            http: 'stream-http',
            https: 'https-browserify'
        }
    }

    return config;
}