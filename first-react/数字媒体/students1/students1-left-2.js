import React,{ Component } from 'react';
import './students1.css';



class Left2 extends Component {
    constructor(props){
        super(props);
        this.changeBackground=this.changeBackground.bind(this);
        this.state={
            clickDiv:1
        }
    }
    render() {
        var names=this.props.stu;
        return (
                <ul className="left-m">
                    {
                        names.map(function(obj,index){
                            return(
                                <li key={index} data={obj} onClick={()=>this.changeBackground(names,index)} style={this.state.clickDiv==obj.id?{backgroundColor:"#efd63b",color:"#323433",fontWeight:"bold",
    fontSize:"18px"}:{}}>{names[index].sname}</li>
                            )
                        },this)
                    }
                </ul>
        );
    }
    changeBackground(names,index){
        this.props.fn(index);
        this.setState({
            clickDiv:names[index].id
        })

    }
}
export default Left2;
