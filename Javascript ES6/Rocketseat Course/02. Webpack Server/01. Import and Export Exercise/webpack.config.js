module.exports = {
	entry: './src/mainDev.js',
	output: {
		path: __dirname + '/public/',
		filename: 'main.js',
	},
	devServer: {
		contentBase: __dirname + '/public/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node.modules/,
				use: {
					loader: 'babel-loader',
				}
			}
		],
	},
};