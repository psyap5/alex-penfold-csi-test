var path = require('path');

module.exports = {
    entry: {
        main: './Scripts/Application.ts'
    },
    output: {
       publicPath: "/",
       path: path.resolve(__dirname, 'wwwroot/js'),
       filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    externals: {
        'angular': 'angular',
        'jquery': 'jquery'
    }
};
