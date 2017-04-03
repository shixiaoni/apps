import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import '../students1/students1.css';
import xsm from './img/xsm.png';



class Right1 extends Component {
    render() {
        return (
            <div className="jl">
                <div className="jl-tb">
                    <img src={xsm} alt=""/></div>
                <p>学生管理</p>
                <p>School management</p>
            </div>
        );
    }
}
export default Right1;
