import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import '../students1/students1.css';
import xinchou from '../students4/images/xinchou.png';



class RightRight extends Component {
    render() {
        return (
            <div className="right-shang-right">
                <ul>
                    <li className="tb-shang">
                        <p><img src={xinchou} alt=""/></p>
                        <div className="ptwo">
                            <p>本教学周期薪酬</p>
                        </div>
                    </li>
                    <li className="pone">
                        <p>￥</p>
                        <p>{this.props.student.score}</p>
                    </li>
                </ul>
            </div>
        );
    }
}
export default RightRight;
