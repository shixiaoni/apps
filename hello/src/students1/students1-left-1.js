import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './students1.css';
import img from './images/1.jpg';



class Left1 extends Component {
    render() {
        return (
            <div className="lefthhh">
                <div className="tx">
                    <img src={img} alt=""/></div>
                <div className="gai"></div>
                <div className="yuan">
                    <img src={img} alt=""/></div>
                <ul className="left-z">
                    <li>WEB:1508A</li>
                    <li>人数:29人</li>
                    <li>总额:33000元</li>
                    <li>2017年2月16日</li>
                </ul>
            </div>
        );
    }
}
export default Left1;
