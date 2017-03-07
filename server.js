
/*var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var express = require('express');
var webpack = require('webpack');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddleware = require('webpack-hot-middleware');

var server = new WebpackDevServer(webpack(config), {
    contentBase: config.output.publicPath,
    hot: true,　　//开启热调试
    inline: true,
    historyApiFallback: true,
    compress: true,
    filename: "bundle.js",
    watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
    stats: {
        colors: true
    }
});
server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('listening at localhost:3000...');
});*/

// dev-server.js
var express = require('express');
var webpack = require('webpack');
var path = require('path');
var webpackConfig = require('./webpack.config');


var app = express();

// webpack编译器
var compiler = webpack(webpackConfig);

// webpack-dev-server中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    contentBase: "/",
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
});
//中间件热加载
var hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);
app.use(express.static(path.join(__dirname, 'app')));
// 路由
app.set('views','./app/');
app.get('/', function(req, res) {
    res.send('地址栏输入 localhost:3000/ + 你的页面文件夹名称 访问对应页面哦');
});
/*app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});*/

/*app.get('/:viewname?', function(req, res, next) {
	console.log(req.params);
    var viewname = req.params.viewname ? req.params.viewname + '.html' : 'index.html';
    res.sendFile( __dirname + "/" + viewname );
    //var filepath = path.join(compiler.outputPath, viewname);

    // 使用webpack提供的outputFileSystem
   /* compiler.outputFileSystem.readFile(filepath, function(err, result) {
        if (err) {
            // something error
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });*/
//});

var port = 3000;
module.exports = app.listen(port, function(err) {
    if (err) {
        // do something
        return console.error(err);
    }

    console.log('Listening at http://localhost:' + port + '\n')
})