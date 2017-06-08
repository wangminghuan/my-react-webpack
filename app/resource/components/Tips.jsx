import React,{Component} from 'react';
import './Tips.scss';
import device from "../../common/util/getDevice.js";
export default class extends Component{
  constructor(props){
        super(props);
    }
  render() {
    return (
      <p className="tips">
      <em>您目前使用的操所系统为：</em><i>{device}</i>
      </p>
    )

  }
}
