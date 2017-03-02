var webpack=require('webpack');
var path=require("path");
module.exports={
	entry: path.resolve(__dirname, './index.js'),
	output:{
		path:path.resolve(__dirname, './build'),
		filename:'bundle.js'
	},
	devServer: { //webpack-dev-server的相关配置
        historyApiFallback: true,
        hot: true,    //配置过仍需在命令行中写入
        inline: true, //配置过仍需在命令行中写入
        progress: true,
    },
	module:{
		loaders:[]
	}

}