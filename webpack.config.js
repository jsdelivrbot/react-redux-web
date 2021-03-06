module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
         }
        //  , {
        //     test: /\.js$/,
        //     loader: "eslint-loader",
        //     exclude: /node_modules/
        // }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 5000
    }
};
