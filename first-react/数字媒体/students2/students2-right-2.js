import React,{ Component } from 'react';
import '../students1/students1.css';



class Right2 extends Component {
    render() {
        var names=this.props.stu;
        return (
                <ul className="dg">
                    {
                        names.map(function(value,index){
                            return(
                                <li key={index} onClick={()=>this.props.fn(index+5)}>{names[index].sname}</li>
                            )
                        },this)
                    }
                </ul>
        );
    }
}
export default Right2;
