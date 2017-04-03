import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './students1.css';
//import hhhhh from './images/hhhhh.png';


class Header extends Component {
    render() {
        return (
            <div className="nav">
                    <p className="logo">数字媒体学院</p>
                    <ul className="sz">
                        <li>{this.props.per.year}年&nbsp;{this.props.per.name}</li>
                        <li>|</li>
                        <li>{this.props.per.course}</li>
                    </ul>
                    <ul className="sz1">
                        <li>任课老师: {this.props.gra.teacher}</li>
                        <li>|</li>
                        <li>班主任: {this.props.gra.header}</li>
                    </ul>
                    <a href="#" className="shezhi" onClick={()=>this.props.fnT(0)}>
                        <img src={this.props.img} alt=""/>
                    </a>
            </div>
        );
    }
}
export default Header;
