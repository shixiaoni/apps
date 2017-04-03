import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './students1.css';
import jfjs1 from './img/jfjs1.png';


class Right4 extends Component {
    render() {
        return (
                    <div className="cf">
                        <div className="cf-tb">
                            <img src={jfjs1} alt=""/></div>
                        <p>惩罚减薪项目</p>
                        <p>Punish pay project</p>
                    </div>
        );
    }
}
export default Right4;
