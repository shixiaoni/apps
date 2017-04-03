import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import '../students1/students1.css';
import img from '../students4/images/1.jpg';



class RightLeft extends Component {
    render() {
        return (
            <div className="right-shang-left">
                <div className="zjj">{this.props.student.sname}</div>
                <div className="jjjs">
                    <ul>
                        <li>学号:{this.props.student.sno}</li>
                        <li>市场部:{this.props.student.market}</li>
                        <li>入学时间:{this.props.student.updateTime}</li>
                        <li>学制:{this.props.student.term}</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default RightLeft;
