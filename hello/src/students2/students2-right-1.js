import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import '../students1/students1.css';
import xsm from './img/xsm.png';



class Right1 extends Component {
    render() {
        return (
            <div className="jl" style={{backgroundColor:this.props.bg}}>
                <div className="jl-tb" style={{marginTop:this.props.marginTop}}>
                    <img src={xsm} alt=""/></div>
                <p style={{color:this.props.color}}>{this.props.name}</p>
            </div>
        );
    }
}
export default Right1;
