const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
// 	template: './public/index.html',
// 	filename: 'index.html',
// 	inject: 'body'
// })

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{test: /\.js$/, loader:'babel-loader',exclude: /node_modules/ },
			{test: /\.less$/, loader:'style-loader'},
			{test: /\.less$/, loader: 'css-loader', query: {modules: true, localIdentName: '[name]__[local]___[hash:base64:5]'}},
			{test: /\.less$/, loader: 'less-loader'}
		]
	},
	devServer:{
		contentBase:path.join(__dirname, "public")
	}
	// plugins: [HtmlWebpackPluginConfig]
}