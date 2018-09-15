const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugins = require('html-webpack-plugin');
const paths = {
    srcPath: resolve(__dirname, 'src'),
    distPath: resolve(__dirname, 'dist'),
    assetsPath: resolve(__dirname, 'assets')
};

module.exports = {
	entry: resolve(paths.srcPath, 'index.js'),
	output: {
		path: paths.distPath,
		publicPath: '/',
		filename: '[name].js'
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, 
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['react-hot-loader/babel']
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ 
						loader: 'css-loader',
						options: {
								modules: true,
								localIdentName: '[path][name]__[local]--[hash:base64:5]',
								sourceMap: true,
								camelCase: true
						}
					}
				]
			}
		]
	}, 
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugins({
			template: resolve(paths.assetsPath, 'index.tpl.html')
		})
	],
	devServer: {
		contentBase: paths.distPath,
		host: '0.0.0.0',
		port: 8001,
		hot: true
	}
};