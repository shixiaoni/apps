import React,{ Component } from 'react';
import './students1.css';
import { Router, Route, hashHistory ,IndexRoute ,IndexRedirect , Link,Redirect} from 'react-router';


class Right5 extends Component {
    constructor(props) {
        super(props);
        this.changeIndex = this.changeIndex.bind(this);
    }
    render() {
        // console.log(this.props.rewards);
        return (
            <li onClick={this.changeIndex}>
                <div className="ydd2">
                    <div className="yy2"></div>
                    <div className="yyl2">
                        <p>{this.props.rewards.score}</p>
                        <span>$</span>
                    </div>
                    <div className="yyz2">
                        <p>{this.props.rewards.name}</p>
                    </div>
                </div>
            </li>
        )
    }
    changeIndex(val,index){
        this.props.changeContorl(this.props.index);
        this.props.showMask(this.props.reward);
    }
}

export default Right5;
