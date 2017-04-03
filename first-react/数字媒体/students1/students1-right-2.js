import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './students1.css';
import tjfl from './img/tjfl.png';



class Right2 extends Component {
    render() {
        return (
                    <div className="jl">
                        <div className="jl-tb">
                            <img src={tjfl} alt=""/></div>
                        <p>奖励加薪项目</p>
                        <p>Incentive pay program</p>
                    </div>
        );
    }
}
export default Right2;
