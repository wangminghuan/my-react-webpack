import React,{Component} from 'react';
import pubSub from "PubSub";
import ComponentTips from '../components/Tips';
import ComponentEdit from '../components/Edit';
import initReactFastclick from 'react-fastclick';
initReactFastclick();
export default class extends Component{
  constructor(props){
  	super(props);
    //建立一个全局变量，用于订阅发布通道
    //window._pubSub=new pubSub();
  }
  render() {
    return (
      <div className="wrap">
        <ComponentEdit
        // title={'我是app传入数据'}
        />
        <ComponentTips />
      </div>
    )
  }
}
