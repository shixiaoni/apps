import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, hashHistory, browserHistory} from 'react-router';


class App extends Component {
  constructor(props){
    super(props);
    this.click=this.click.bind(this);
    this.state={
      data:{
        id:1,
        name:"tom",
        des:"abc"
      }
    }
  }
  render() {
    let children;
    if(this.props.location.pathname=="/student/about"){
      children=this.props.children;
    }else{
      children = React.cloneElement(this.props.children, {
        id: this.state.data.id,
        des: this.state.data.des
      });
    }
    console.log(this.props);
    return (
        <div className="App">
          <div>
            <button onClick={this.click}>点我啊</button>
          </div>
          {
            children
          }
        </div>
    );
  }
  click() {
    if(this.props.location.pathname=="/student/about"){
      hashHistory.push("/student/repos")
    }else{
      hashHistory.push("/student/about")
    }
  }
}

export default App;
