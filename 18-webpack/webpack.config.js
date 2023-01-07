const path = require('path');
/**
 * Подключаем автоматическое изменение имен
 * подключаемых файлов в index.html
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        /**
         * Несколько входных файлов
         */
        index: './src/index.js',
        app: './src/App.js',
    },
    /**
     * Добавляем Liveserver
     */
    devServer: {
        static: './dist',
    },
    plugins: [
        /**
         * Создаем index.html с отслеживанием имен подключаемых файлов
         */
        new HtmlWebpackPlugin({
            title: 'Webpack',
        }),
    ],
    output: {
        /**
         * Генерируем несколько выходных файлов
         */
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                /**
                 * Подключаем css
                 */
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                /**
                 * Подключаем изображения
                 */
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                /**
                 * Подключаем шрифты
                 */
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
};
