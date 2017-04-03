import React,{ Component } from 'react';
import '../students1/students1.css';



class Right2 extends Component {
    constructor(props) {
        super(props);
        this.changeIndex = this.changeIndex.bind(this);
    }
    render() {
        return (
            <li onClick={this.changeIndex}>{this.props.obj.sname}</li>
        );
    }
    changeIndex(val,index){
        this.props.changeContorl(this.props.index);
        this.props.showMask(this.props.reward);
    }
}
export default Right2;
