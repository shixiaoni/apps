import React,{ Component } from 'react';
import '../students1/students1.css';
import Right1 from './students3-right-1';
import Right2 from './students3-right-2';
import Right3 from './students3-right-3';
import Right4 from './students3-right-4';
import Right5 from './students3-right-5';
import Right6 from './students3-right-6';
import Right7 from './students3-right-7';
import Right8 from './students3-right-8';
import Right9 from './students3-right-9';



class Con3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="middle" >
                <div className="right">
                    <Right1 student={this.props.student}/>
                    <Right2/>
                    <Right3/>
                    <Right4 student={this.props.student}/>
                    <Right5/>
                    <Right6/>
                    <Right7/>
                    <Right8/>
                    <Right9 add={this.props.add}/>
                </div>
            </div>
        );
    }
}
export default Con3;
