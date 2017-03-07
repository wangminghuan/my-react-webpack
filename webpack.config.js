var webpack=require('webpack');
var path=require("path");
//var glob = require('glob');
//node的glob模块允许你使用*等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则的文件。
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
var packCSS = new ExtractTextPlugin('./css/[name].min.css'); 

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports={
	entry: [
     'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=true',
	 APP_PATH+"/index.js"
	],
	output:{
		path: BUILD_PATH,
	    publicPath: '/',
	    filename: 'bundle.js'
	},
	externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
	module:{
		loaders:[
			{
	         test: /\.css$/,
	         include: path.resolve(__dirname, './src/static/css'),
	         //loader:ExtractTextPlugin.extract("style-loader","css-loader")
	         //loader: "style-loader!css-loader"
	         loader: ExtractTextPlugin.extract({
	         	fallback: "style-loader",
          		use: "css-loader"
          	})
           },
		 	{
			 	 test: /\.js[x]?$/,
		         //include: path.resolve(__dirname, 'app'),
		         exclude: /node_modules/,
		         loader: 'react-hot-loader!babel-loader' 
        	},
        	{
		        test: /\.(png|jpg)$/,
		        exclude: /node_modules/,
		        loader: 'url-loader?limit=40000'
      		}
		]
	},
	
	plugins:[
	    new ExtractTextPlugin('./index.css'),
        new webpack.NoEmitOnErrorsPlugin(), //允许错误不打断程序
        new webpack.HotModuleReplacementPlugin(),　　//webpack热替换插件  
        new webpack.NamedModulesPlugin(),// prints more readable module names in the browser console on HMR updates
    ]

}