var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/app/controller/index.js',
        about: './src/app/controller/about.js',
        managedIT: './src/app/controller/managedIT.js',
        ITBlog: './src/app/controller/ITBlog.js',
        banking: './src/app/controller/banking.js',
        caseStudies: './src/app/controller/caseStudies.js',
        contact: './src/app/controller/contact.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                loader:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.html$/,
                use:['html-loader']
            },
            {
                test:/\.(png|jpg|svg)$/,
                use:[{
                    loader: "file-loader",
                    options: {
                        limit: 10000,
                        name: '[name].[ext]',
                        outputPath: "img/",
                        publicPath: "img/",
                        // limit: 2000000,
                    }
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/app/view/index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/app/view/about.html',
            chunks:['about']
        }),
        new HtmlWebpackPlugin({
            filename: 'banking.html',
            template: './src/app/view/banking.html',
            chunks:['banking']
        }),
        new HtmlWebpackPlugin({
            filename: 'caseStudies.html',
            template: './src/app/view/caseStudies.html',
            chunks:['caseStudies']
        }),
        new HtmlWebpackPlugin({
            filename: 'managedIT.html',
            template: './src/app/view/managedIT.html',
            chunks:['managedIT']
        }),
        new HtmlWebpackPlugin({
            filename: 'ITBlog.html',
            template: './src/app/view/ITBlog.html',
            chunks:['ITBlog']
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/app/view/contact.html',
            chunks:['contact']
        })
    ],
    devServer:{
        contentBase: './dist'
    }
}