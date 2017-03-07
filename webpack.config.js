var webpack=require('webpack');
var path=require("path");
//var glob = require('glob');
//node的glob模块允许你使用*等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则的文件。
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
//var packCSS = new ExtractTextPlugin('./css/[name].min.css'); 

// 获取指定路径下的入口文件
function getEntries(globPath) {
	return;
    var files = glob.sync(globPath),
        entries = {};

    files.forEach(function(filepath) {
        // 取倒数第二层(view下面的文件夹)做包名
        console.log(filepath);
        var split = filepath.split('/');
        var name = split[split.length - 2];

        entries[name] = './' + filepath;
    });

    return entries;
}

var entries = getEntries('app/*/index.js');

module.exports={
	entry: [
     'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true',
	 path.resolve(__dirname, './index.js')
	],
	output:{
		path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
	},
	module:{
		loaders:[
			{
	         test: /\.css$/,
	         include: path.resolve(__dirname, 'app'),
	         loader: "style-loader!css-loader"
	         /*loader: ExtractTextPlugin.extract({
	         	fallback: "style-loader",
          		use: "css-loader"
          	})*/
           },
		 	{
			 	 test: /\.js[x]?$/,
		         //include: path.resolve(__dirname, 'app'),
		         exclude: /node_modules/,
		         loader: 'react-hot-loader!babel-loader' 
        	}
		]
	},
	plugins:[
	    //new ExtractTextPlugin('./app/index.min.css'),
        new webpack.NoEmitOnErrorsPlugin(), //允许错误不打断程序
        new webpack.HotModuleReplacementPlugin(),　　//webpack热替换插件  
        new webpack.NamedModulesPlugin(),// prints more readable module names in the browser console on HMR updates
    ]

}