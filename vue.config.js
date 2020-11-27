// const BundleTracker = require("webpack-bundle-tracker");
module.exports = {
	devServer: {
	proxy: {
		'^/api/': {
		target: 'http://127.0.0.1:8000/api/contact/',
		ws: false,
		}
		}
	},
	// outputDir must be added to Django's TEMPLATE_DIRS
	outputDir: './dist/',
	// assetsDir must match Django's STATIC_URL
	assetsDir: 'static',
}

// module.exports = {
// 	// on Windows you might want to set publicPath: "http://127.0.0.1:8080/"
// 	publicPath: "http://127.0.0.1:8080/",
// 	outputDir: "./dist/",
// 	assetsDir: 'static',

// 	configureWebpack: {
// 		devServer: {
// 			historyApiFallback: true,
// 		},
// 	},

// 	chainWebpack: (config) => {
// 		config
// 			.plugin("BundleTracker")
// 			.use(BundleTracker, [{ filename: "./webpack-stats.json" }]);

// 		config.output.filename("bundle.js");

// 		config.optimization.splitChunks(false);

// 		config.resolve.alias.set("__STATIC__", "static");

// 		config.devServer
// 			// the first 3 lines of the following code have been added to the configuration
// 			.public("http://127.0.0.1:8080")
// 			.host("127.0.0.1")
// 			.port(8080)
// 			.hotOnly(true)
// 			.watchOptions({ poll: 1000 })
// 			.https(false)
// 			.disableHostCheck(true)
// 			.headers({ "Access-Control-Allow-Origin": ["*"] });
// 	},
// 	// uncomment before executing 'npm run build'
// 	// css: {
// 	// 	extract: {
// 	// 	filename: 'bundle.css',
// 	// 	chunkFilename: 'bundle.css',
// 	// 	},
// 	// }
// };
