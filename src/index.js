require('./static/css/index.css');
require('./static/css/one.css');
//css建议都通过index引入，css之前的引入也可以使用@import，
//但是会导致自动补全插件对@import来的文件不执行。
import ReactDOM from 'react-dom';
import React from 'react';
var MyComponent=require("./components/componentA.jsx");
ReactDOM.render(
<MyComponent />,
document.getElementById("example"));
/*document.getElementById("example").innerHTML=mod.name;
*/
//webpack中的模块概念
/*ES2015 import
commonjs require()
AMD define 与 require
css/scss/less 中的 @import
存在于样式表中的 url() 或 html 中的 <img src=...> 的图片*/