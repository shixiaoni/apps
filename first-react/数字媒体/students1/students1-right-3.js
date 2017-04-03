import React,{ Component } from 'react';
import './students1.css';



class Right3 extends Component {
    constructor(props){
        super(props);
        this.changeColor=this.changeColor.bind(this);
        this.state={
            color:"",
            num:0
        }
    }
    render() {
        var names=this.props.rew;
        var colors=["#5AC76C","#DEA033","#DE3333","#5AC6BB","#5A88C6","#885ac6","#ff7f50","#6495ed","#2f4f4f","#daa520"];
        return (
            <ul className="right-2">
                {
                    names.map(function(value,index){
                        return(
                            <li key={index} onClick={()=>this.props.fn(index)} onMouseOver={()=>this.changeColor(value)} style={this.state.num==value.id-2?{backgroundColor:colors[index>=colors.length?index-colors.length:index],color:"#fff"}:{borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,borderBottomWidth:"1px",borderColor:colors[index>=colors.length?index-colors.length:index],borderStyle:"solid",color:colors[index>=colors.length?index-colors.length:index]}} onMouseOut={()=>this.changeColorleave(value)}>
                                <div className="right-2-1-top">
                                    <div className="right-2-1-top-z1">
                                        <p style={this.state.num==value.id-2?{color:this.state.color}:{color:colors[index]}}>{names[index].name}</p>
                                    </div>
                                    <div className="right-2-1-top-z2">
                                        <p style={this.state.num==value.id-2?{color:this.state.color}:{}}>+{names[index].score}</p><span>$</span>
                                    </div>
                                </div>
                            </li>
                        )
                    },this)
                }
            </ul>
        );
    }
    changeColor(val){
        this.setState({
            num:val.id-2,
            color:'#fff'
        })
    }
    changeColorleave(val){
        this.setState({
            num:0,
            color:'#fff'
        })
    }
}
export default Right3;

