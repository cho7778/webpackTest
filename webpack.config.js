const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve('./src/app.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    module: {
        // 여기서부터 로더를 추가할 수 있습니다.
        rules: [
            // {
            //     // test: path.resolve(./src/app.js) 로 하면 한 파일로 정할 수 있음
            //     test: /\.js$/,
            //     use: [
            //         path.resolve('./myLoader.js')
            //     ]
            // }
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 80 * 1024
                    }
                }
            }
        ]


    },
    plugin: [
        new webpack.BannerPlugin({
            banner: `마지막 빌드 시간은 ${new Date().toLocaleString()}입니다.`
        })]

}