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
                    <li>WEB{this.props.gra.gname}</li>
                    <li>人数:{this.props.gra.gcount}人</li>
                    <li>总额:{this.props.gra.ginit}元</li>
                    <li>{this.props.gra.updateTime}</li>
                </ul>
            </div>
        );
    }
}
export default Left1;
