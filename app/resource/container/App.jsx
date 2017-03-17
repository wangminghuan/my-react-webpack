import React,{Component} from 'react';
import HelloMessage from '../components/componentA.jsx';
import TimeMessage from '../components/componentB.jsx';
class App extends Component{
  render() {
    return (
      <div>
        <HelloMessage />
        <TimeMessage />
      </div>
    )
      
  }
};
export default App