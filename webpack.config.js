const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada de la aplicación
    output:{
        filename: 'bundle.js', //nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos CSS
                use: ['syle-loader','cdd-loader'], //Loaders para procesas archivos css
            },
            {
                test: /\.js$/, // Regex para identificar archivos JS
                exclude: /node_modules/, //Excluir ña carpeta node_modules
                use: {
                    loader: 'babel-loader', //Loader para pasar JS moderno a JS más antiguo para todos los navergadores
                    options: {
                        presents: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta principal
        compress: true, //Habilitar la compresión gzip
        port: 9000, //Puerto del servidor de desarrollo
    },
};