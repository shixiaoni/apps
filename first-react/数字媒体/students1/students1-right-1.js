import React,{ Component } from 'react';
import './students1.css';
import xinchou from './images/xinchou.png';



class Right1 extends Component {
    render() {
        return (



            <div className="middle-banner">
                 <div className="middle-banner-inner">
                    <div className="money">
                        <img src={xinchou} alt=""/>
                    </div>
                    <h1 className="banner-title">本教学周期薪酬</h1>
                    <h1 className="banner-score"><span>￥</span>{this.props.data.score}</h1>
                </div>
            </div>
        );
    }
}
export default Right1;
