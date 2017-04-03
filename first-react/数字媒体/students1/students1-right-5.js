import React,{ Component } from 'react';
import './students1.css';



class Right5 extends Component {
    render() {
        var names=this.props.rew;
        return (
            <ul className="right-3">
                {
                    names.map(function(value,index){
                        return(
                            <li key={index} onClick={()=>this.props.fn(index+this.props.aa)}>
                                <div className="ydd2">
                                    <div className="yy2"></div>
                                    <div className="yyl2">
                                        <p>{names[index].score}</p>
                                        <span>$</span>
                                    </div>
                                    <div className="yyz2">
                                        <p>{names[index].name}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    },this)
                }
            </ul>
        );
    }
}
export default Right5;
