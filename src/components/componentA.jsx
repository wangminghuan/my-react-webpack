/*var modB=require("./modB.js");
var modC=require("./modC.js");

let message="It is works, hot modules, some time it is new !!!"+modB.name+"<h2>我是标题2</h2>";
  message+=modC.text;
  message+="是否重新刷新22222";
module.exports.message=message;*/
import React from 'react';
var MyComponent=React.createClass({
  getInitialState:function(){
    return {
    	clickCount:10
    }
  },
  handleClick:function(){
      this.setState(function(prevState, props){
        return {
           clickCount:prevState.clickCount+1
        }
     }, function(){
     console.log("render over!!")
    })
  },
  render:function(){
    return (
     <div>
      <button onClick={this.handleClick}>点击+1</button>
      <p>按钮被点击了{this.state.clickCount}次</p>
     </div>
    )
  }
});
module.exports=MyComponent;