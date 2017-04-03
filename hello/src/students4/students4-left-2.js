import React,{ Component } from 'react';
import '../students1/students1.css';



class Left2 extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
                <ul className="left-m">
                    {
                        this.props.store.students.map(function(obj,index){
                            return <li key={index}
                                       style={{cursor:"pointer"}}
                                       onClick={()=>this.props.onLink(index)}>{obj.sname}</li>
                        },this)
                    }
                </ul>
        );
    }
}
export default Left2;
