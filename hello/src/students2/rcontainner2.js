import React, { Component } from 'react';
import '../students1/students1.css';
import Right1 from './students2-right-1';
import Right2 from './students2-right-2';


class Con2 extends Component {
    render() {
        // console.log(this.props.student);
        return (
            <div className="middle1">
                <div className="middle-inner">
                    <Right1 name={"学生管理"} />
                    <ul className="dg">
                        {
                            this.props.studentArr.map((obj,index)=>{
                                return(
                                    <Right2 key={index} obj={obj} index={index} showMask={this.props.showMask} numColor={this.props.numColor} changeColor={this.props.changeColor} changeContorl={this.props.changeContorl}/>
                                )
                            })
                        }
                        <li onClick={this.props.showMask}>+</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Con2;

