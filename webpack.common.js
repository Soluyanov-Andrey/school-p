const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // точка входа
    entry: './src/index.ts',
    // точка выхода
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
        
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
           


            {
                //
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options: {sourceMap: true}
                    },
                // Закоментировав можно убрать зжатия css
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true}
            
                    },
                //
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true}

                    }
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins: [
      
        new HtmlWebpackPlugin(
            {
                template: './src/index.html'
            }
        ),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css'

        }),

       // в предыдущей версии писал так
       // с этим модулем были проблемы установился v 2.0.2 и выдовал ошибку
       // сменил на ^1.0.0
       // new CleanWebpackPlugin([
       //    './dist/*.*'
       //])
       


        new CleanWebpackPlugin(),

    ]
}