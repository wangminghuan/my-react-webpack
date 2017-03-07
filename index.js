require('./app/index.css');
/*var mod=require('./app/modB.js');
console.log("111111");
console.log('222222222');*/
import ReactDOM from 'react-dom';
import React from 'react';
var MyComponent=require("./app/componentA.jsx");
console.log('888888')
ReactDOM.render(
<MyComponent />,
document.getElementById("example"));
/*document.getElementById("example").innerHTML=mod.name;
*/