import React,{ Component } from 'react';
import '../students1/students1.css';
import teacher from './images/111.png';
import teacher1 from './images/class_15.png';
import teacher2 from './img/444.png';


class Right5 extends Component {
    render() {
        return (
            <div className="llgg">
                <div className="llgg-left">
                    <div className="llgg-left-one">
                        <ul>
                            <li>
                                <img src={teacher} alt=""/>
                            </li>
                            <li>学期</li>
                        </ul>
                    </div>
                    <div className="llgg-left-two">
                        <select className="" id="dizq">
                            <option value="">第一教学周期</option>
                            <option value="">第二教学周期</option>
                        </select>
                        <div className="xlbq">
                            <img src={teacher2} alt=""/>
                        </div>
                    </div>
                    <div className="cfx"></div>
                </div>
                <div className="llgg-right">
                    <div className="llgg-left-one1">
                        <ul>
                            <li>
                                <img src={teacher1} alt=""/>
                            </li>
                            <li>课程</li>
                        </ul>
                    </div>
                    <div className="llgg-left-two1">第三门课程《HTML/CSS》</div>
                    <div className="cfx1"></div>
                </div>
            </div>
        );
    }
}
export default Right5;
