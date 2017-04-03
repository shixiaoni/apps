import React,{ Component } from 'react';
import './students1.css';
import { Router, Route, hashHistory ,IndexRoute ,IndexRedirect , Link,Redirect} from 'react-router';



class Right3 extends Component {
    constructor(props) {
        super(props);
        this.changeIndex = this.changeIndex.bind(this);
    }
    render() {
        var colors=["#5AC76C","#DEA033","#DE3333","#5AC6BB","#5A88C6","#885ac6","#ff7f50","#6495ed","#2f4f4f","#daa520"];
        return (
                            <li style={this.props.numColor==this.props.rewards.id?{backgroundColor:colors[this.props.index%5]}:{borderBottom:"1px solid"+colors[this.props.index%5]}}
                                 onClick={this.changeIndex}
                                 onMouseOver={()=>this.props.changeColor(this.props.rewards)}
                                 onMouseOut={()=>this.props.changeColor(0)}>
                                <div className="right-2-1-top">
                                    <div className="right-2-1-top-z1">
                                        <p style={this.props.numColor==this.props.rewards.id?{color:"#fff"}:{color:colors[this.props.index%5]}}>{this.props.rewards.name}</p>
                                    </div>
                                    <div className="right-2-1-top-z2">
                                        <p style={this.props.numColor==this.props.rewards.id?{color:"#fff"}:{color:colors[this.props.index%5]}}>+{this.props.rewards.score}</p>
                                        <span style={this.props.numColor==this.props.rewards.id?{color:"#fff"}:{}}>$</span>
                                    </div>
                                </div>
                            </li>
        );
    }
    changeIndex(val,index){
        this.props.changeContorl(this.props.index);
        this.props.showMask(this.props.reward);
    }
}
export default Right3;
