import React,{Component} from 'react';
import './Edit.scss'; 
class ComponentEdit extends Component{
 constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
  handleClick(){
  	alert("提交成功！")
  }
  render() {
    return (
      <div className="edit">
      	<span>请输入内容提交（仅供测试）</span>
      	<textarea></textarea>
      	<input type="submit" onClick={this.handleClick} value="提交"/>
      </div>
    )
      
  }
};
export default ComponentEdit

