import React, { Component } from 'react';
import Left1 from './students4-left-1';
import Left21 from '../students2/students2-left-2';
import '../students1/students1.css';


class Leftc extends Component {
    render() {
        console.log(this.props.pathname);
        return (
            <div className="left">
                <Left1 />
                <ul className="left-m1">
                    {
                        this.props.pathname=="/student/repos"||this.props.pathname=="/student/three"?this.props.students.map((obj,index)=>{
                            return (
                                <Left21 student={obj} key={index} changeIndex={this.props.changeIndex} index={index} clickedStudent={this.props.clickedStudent}/>
                            )
                        },this):<li onClick={()=>this.props.changeIndex(this.props.clickedStudent)} style={{backgroundColor:"#eed63b",color:"#333",fontWeight:"bold"}}>学生管理</li>
                    }
                </ul>
            </div>

        );
    }
}

export default Leftc;
