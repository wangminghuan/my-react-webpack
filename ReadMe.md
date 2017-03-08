## webpack+react 配置说明

### 1 开始
安装依赖  

	npm install

开启express服务，浏览器自动跳转到http://localhost:3000

    npm run start
支持热更新+自动刷新
### 2 构建
运行

    npm run build

自动在build目录生成压缩后的js文件和css文件。已设置默认不打包react和react-dom库，css默认补全前缀

### 3 项目结构
待补充

### 4 其他说明

1. 第一次系统配置webpack,比较粗糙，但可以实现基本的自动刷新-构建-发布自动化流程
2. `webpack-dev-server`经测试只能实现自动刷新，对css文件可以实现热更新，但js文件是全刷新。对于`webpack-dev-middleware + webpack-hot-middleware + express`同样也是如此。
3. 其实`webpack-dev-server`就是官方通过封装 `webpack-dev-middleware + webpack-hot-middleware + express` 实现的，通过直接调用中间件，可以实现更多的个性化定制。
4. 关于HMR(hot module replacement), 其实是需要loader支持的，css-loader支持热更新，而普通的js loader是不支持的，如：babel-loader, 但是react-hot-loader是支持热更新的。这就是为什么react可以实现热更新，普通开发实现不了的原因。浏览器报错信息也可以看到：模块已经更新，但是模块处理器不知道如何更新
5. 继续踩坑中~