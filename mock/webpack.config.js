const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',

    devServer: {
        contentBase: './view',//告诉开发服务器(dev server)，在哪里查找文件
        port: 5060,
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true//设置为true，当源文件改变时会自动刷新页面
    },

    entry: "./src/index.js",

    output:{
        path: path.resolve(__dirname, 'view'),
        filename: "bundle.js"
    },

    module: {
        rules: [{
            test: /\.js$/,//一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
            exclude: /node_modules/,//手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）
            use: 'babel-loader' //loader的名称（必须）
        }]
    },

	plugins: [
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('./manifest.json'),
		})
	]
}