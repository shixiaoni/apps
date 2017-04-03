import React,{ Component } from 'react';
import '../students1/students1.css';
import RightLeft from './students3-right-1-left.js';
import RightRight from './students3-right-1-right.js';


class Right1 extends Component {
    render() {
        return (
            <div className="qqqq">
                <RightLeft student={this.props.student}/>
                <RightRight student={this.props.student}/>
            </div>
        );
    }
}
export default Right1;
