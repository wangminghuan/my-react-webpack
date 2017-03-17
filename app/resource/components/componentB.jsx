import React,{Component} from 'react';
import deviceInfo from '../../common/util/utils.js';
import './componentB.css'; 
class TimeMessage extends Component{
 
  render() {
    return (
      <h3 className="times">{deviceInfo}</h3>
    )
      
  }
};
export default TimeMessage

