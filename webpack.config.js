const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    "mode": "none",
    "context": path.resolve(__dirname),
    "entry": {
        main: "./src/main.js",
		"bootstrap.min": "./src/bootstrap.min.js",
		"jquery.min": "./src/jquery.min.js",
		"jquery.lazy.min.js": "./src/jquery.lazy.min.js",
		"jquery.lazy.plugins.min.js": "./src/jquery.lazy.plugins.min.js"
    },
    "output": {
        "path": __dirname + '/dist/scripts',
        "filename": "[name].js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          }
    },
    devtool: "source-map",
	plugins: [
		new CopyPlugin({
		  patterns: [
			{ from: path.resolve(__dirname, "html"), to: path.resolve(__dirname, "dist") }
		  ],
		}),
	  ]
}