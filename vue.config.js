const path = require("path")
const webpack = require("webpack")
const CONFIG = process.env.CONFIG

function _resolve(dir) {
	return path.join(__dirname, "./", dir)
}
module.exports = {
	baseUrl: "/", //基本部署路径
	outputDir: "dist", //打包输出目录
	assetsDir: "static", //静态资源文件路径
	productionSourceMap: false, //生产环境开启资源地图
	devServer: {
		overlay: {
			warnings: true
		},
		port: 8080,
		disableHostCheck: true
	},
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				defaultConf: _resolve("config/" + CONFIG + ".js")
			})
		]
	},
	lintOnSave: true
}