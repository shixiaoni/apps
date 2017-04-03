import React,{ Component } from 'react';
import './students1.css';
import Right1 from './students1-right-1';
import Right2 from './students1-right-2';
import Right3 from './students1-right-3';
import Right4 from './students1-right-4';
import Right5 from './students1-right-5';




class Con1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="middle">
                    <div className="right">
                        <Right1 title={"本教学周期薪酬"} score={this.props.student.score} click1={this.props.click1}/>
                        <Right2 name={"奖励加薪项目"}/>
                        <ul className="right-2">
                            {
                                this.props.rewards.map((obj,index)=>{
                                    if(obj.type==1){
                                        return (
                                            <Right3
                                                key={index}
                                                rewards={obj}
                                                showMask={this.props.showMask}
                                                obj={obj}
                                                 //num={this.props.num}
                                                changeContorl={this.props.changeContorl}
                                                index={index}
                                                numColor={this.props.numColor}
                                                changeColor={this.props.changeColor}

                                                />
                                        )
                                    }
                                },this)
                            }
                        </ul>
                        <Right4 name={"惩罚减薪项目"} bg={"#544B14"} color={"#fff"} marginTop={"0"}/>
                        <ul className="right-3">
                            {
                                this.props.rewards.map((obj,index)=>{
                                    if(obj.type==2){
                                        return (
                                            <Right5 key={index}
                                                       rewards={obj}
                                                       showMask={this.props.showMask}
                                                       index={index} num={this.props.num}
                                                       changeContorl={this.props.changeContorl}/>
                                        )
                                    }
                                },this)
                            }
                        </ul>
                    </div>
            </div>
        );
    }
}
export default Con1;