import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './students1.css';
//import hhhhh from './images/hhhhh.png';


class Header extends Component {
    constructor(props) {
        super(props);
        this.whitchCourse = this.whitchCourse.bind(this);
    }
    whitchCourse() {
        let cycle;
        let time = new Date().getYear() + 1900;
        this.props.courseList.map((obj, index)=> {
            // console.log(this.props.courseList[index].cname);
            if (obj.cname == this.props.grade.course) {
                cycle = <ul className="sz">
                            <li>{time}&nbsp;第{index+1}教学周期</li>
                            <li>|</li>
                            <li>{this.props.courseList[index].cname}</li>
                        </ul>
            }
        }, this);
        return cycle
    }
    render() {
        return (
            <div className="nav">
                <p className="logo">数字媒体学院</p>
                {this.whitchCourse()}
                <ul className="sz1">
                    <li>任课老师: {this.props.grade.teacher}</li>
                    <li>|</li>
                    <li>{this.props.grade.header}</li>
                </ul>
                <div className="shezhi">
                    <img src={this.props.img} alt="" onClick={this.props.click}/>
                </div>
            </div>
        );
    }
}
export default Header;
