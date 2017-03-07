require('./static/css/index.css');
import ReactDOM from 'react-dom';
import React from 'react';
var MyComponent=require("./static/js/componentA.jsx");
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