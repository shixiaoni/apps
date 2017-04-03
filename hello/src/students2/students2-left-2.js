import React,{ Component } from 'react';
import '../students1/students1.css';



class Left21 extends Component {
    render() {
        return (
            <li onClick={()=>this.props.changeIndex(this.props.index)}
                style={this.props.clickedStudent==this.props.index?{backgroundColor:"#eed63b",color:"#333",fontWeight:"bold"}:{}}>{this.props.student.sname}</li>
        )
    }
}
export default Left21;
