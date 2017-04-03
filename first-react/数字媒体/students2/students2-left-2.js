import React,{ Component } from 'react';
import '../students1/students1.css';



class Left2 extends Component {
    render() {
        var names=this.props.stu;
        return (
            <ul className="left-m1">
                <li>学生管理</li>
            </ul>
        );
    }
}
export default Left2;
