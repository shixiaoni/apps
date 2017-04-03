import React,{ Component } from 'react';
import './students1.css';



class Pop extends Component {
    render() {
        return (
            <div className="zsm" style={{display:this.props.flag==false?"none":"block"}}>
            <div className="mask">
                <div className="zsm-z">
                    <div className="zsm-z-s">
                        <p>{this.props.reward.type==1?"奖励加薪项目":"惩罚减薪项目"}</p>
                    </div>
                    <div className="zsm-z-x">
                        <div className="right-2-2-top-x">
                            <div className="right-2-2-top-z1-x">
                                <p>{this.props.reward.name}</p>
                            </div>
                            <div className="right-2-2-top-z2-x">
                                <p>{this.props.reward.type==1?"+":""} {this.props.reward.score}<span>$</span></p>
                            </div>
                        </div>
                        <div className="xxx">
                            <div className="xxxl" onClick={this.props.cancelMask}>取消</div>
                            <div className="xxxr" onClick={()=>this.props.changeScore(this.props.reward)}>确定</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Pop;