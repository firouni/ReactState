import React, {component} from 'react';
import './App.css';
import Person from './Component/Profile';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state= {
      show: false
    }
  }
  Alpha =()=> {
    this.setState({
      show: !this.state.show
    })
    console.log(this.state.show)
  }
  render() {
    return (
      <div>
        {this.state.show && <Person/>}
        <button onClick={()=>this.Alpha()} > {this.state.show ? 'hide' : 'show'} </button>
      </div>
    )
  }
}