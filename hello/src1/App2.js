import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends Component {
    render() {
        return (
            <div className="App">
                {
                    this.props.id+" "+this.props.des
                }
            </div>
        );
    }
}

export default App2;
