import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './Edit.scss';

export default class extends Component{
 static defaultProps={
  title:"请提交数据以供测试"
 }
 static propTypes={
   title:PropTypes.string.isRequired
 }
 // PropTypes.string.isRequired：string指示数据类型必须为string，否则控制台会有警告
 // isRequired表示该数据必须从父级传入，是必传项，如果父级不传则会有警告
 // 开发环境使用，线上环境不建议带入
 constructor(props){
        super(props);
    }
  handleClick= ()=>{
  	alert("提交成功！")
  }
  render() {
    return (
      <div className="edit">
      	<span>{this.props.title}</span>
      	<textarea></textarea>
      	<input type="submit" onClick={this.handleClick} value="提交"/>
      </div>
    )

  }
};
// 如果不想用ES7语法，可以直接用下面这种方式这是默认props
// ComponentEdit.defaultProps={
//   title:"请提交数据以供测试"
// }
