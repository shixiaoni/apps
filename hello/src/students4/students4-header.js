import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import '../students1/students1.css';
import hhhhh from './img/hhhhh.png';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav">
                <p className="logo">数字媒体学院</p>
                <ul className="sz">
                    <li>数字媒体: {this.props.store.grade.gname}</li>
                    <li>|</li>
                    <li>{this.props.store.period.name}</li>
                </ul>
                <div className="shezhi">
                    <img src={hhhhh} alt="" onClick={this.props.click}/>
                </div>
            </div>
        );
    }
}
export default Header;
