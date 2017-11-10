var fs = require('fs');
var url = require('url');
var path = require('path');
var webpack = require('webpack');

var DEBUG = !process.argv.production;

var GLOBALS = {
	'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
	'__DEV__': DEBUG
};

module.exports = {
	// Main entry directory and file
	entry: {
		app: [
			// 'webpack/hot/dev-server',
			path.join(__dirname, 'app', 'main.js')
		]
	},

	// Output directories and file
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
		publicPath: '/durandal-webpack/dist/'
	},

	// Custom plugins
	plugins: [
		new webpack.DefinePlugin(GLOBALS)
	]
	.concat(DEBUG ? [] : [
		new WebpackNotifierPlugin({ alwaysNotify: true }),
		new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: false
            })
	]),

	module: {
		rules: [
			{ test: /\.html$/, loader: 'html-loader' },
			{ test: /\.json$/, loader: 'json-loader' }
		]
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json'],

		modules: [
			'node_modules',
			'app'
		],

		alias: {
			'durandal/app': 'durandal/js/app',
      'durandal/activator': 'durandal/js/activator',
      'durandal/binder': 'durandal/js/binder',
      'durandal/composition': 'durandal/js/composition',
      'durandal/events': 'durandal/js/events',
			//changed Durandal to use overriden file for system.js - which fixes issue with webpack 2 throwing error on unknown required dependencies
			'durandal/system': 'overrides/system',
			'durandal/viewEngine': 'durandal/js/viewEngine',
      'durandal/viewLocator': 'durandal/js/viewLocator',
			'plugins': 'durandal/js/plugins',
			'transitions/entrance': 'durandal/js/transitions/entrance',
		}
	},

	externals: {
		jquery: 'jQuery'
	},

	devServer: {
		contentBase: __dirname,
		hot: false,
		inline: true,
		historyApiFallback: true,
		stats: { colors: true }
	}
};
