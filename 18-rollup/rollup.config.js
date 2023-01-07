import styles from 'rollup-plugin-styles';

export default {
    input: './index.js',
    output: {
        file: './build/bundle.js',
        format: 'cjs',
        assetFileNames: '[name]-[hash][extname]',
    },
    plugins: [
        styles({
            /*
             * генерация стилей во внешнем файле
             */
            // mode: ['extract', 'bundle.css'],
        }),
    ],
};
