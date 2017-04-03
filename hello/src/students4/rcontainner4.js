import React,{ Component } from 'react';
import '../students1/students1.css';
import Right4 from './students4-right-4';
import Right5 from './students4-right-5';
import Right6 from './students4-right-6';
import Right7 from './students4-right-7';
import Leftc from './lcontainner.js';
import Header from './students4-header.js';




class Con4 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="middle" >
                    <div className="right">
                        <Right5/>
                        <Right6/>
                        <Right7/>
                        <Right4 store={this.props}/>
                    </div>
                </div>
        );
    }
}
export default Con4;
