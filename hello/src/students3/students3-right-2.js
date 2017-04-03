import React,{ Component } from 'react';
import '../students1/students1.css';
import today from '../students4/images/today.png';


class Right2 extends Component {
    render() {
        return (
            <div className="jl">
                <div className="jl-tb">
                    <img src={today} alt=""/>
                </div>
                <p>今日奖罚记录</p>
            </div>
        );
    }
}
export default Right2;
