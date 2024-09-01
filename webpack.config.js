const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js', // Archivo de entrada
    output: {
        filename: 'bundle.js', // Archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
        clean: true, // Limpia la carpeta de salida en cada compilación
    },
    mode: 'development', // O 'production' para el código final
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
                
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(mp3|wav)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Ruta al archivo HTML en tu proyecto
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        // hot: true, // Habilita Hot Module Replacement (HMR)
        // open: true, // Abre automáticamente el navegador
        watchFiles: ['./src/**/*'], // Observa los cambios en los archivos fuente
    },
};
