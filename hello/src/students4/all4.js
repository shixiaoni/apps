import React,{ Component } from 'react';
import {connect} from 'react-redux'
import '../students1/students1.css';
import {leftLinkRight} from './actions';
import Con4 from './rcontainner4.js';
import Header from './students4-header.js';
import Left1 from './students4-left-1';
import Left2 from './students4-left-2.js';





class All4 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <div className="root-div">
                <Header store={this.props}/>
                <Con4 store={this.props}/>
                <div className="left">
                    <Left1 />
                    <Left2 store={this.props}/>
                </div>
            </div>
        );
    }
}
function maneger(state) {
 console.log(state);
    return {
        grade:state.teacherLoginData.grade,
        period:state.teacherLoginData.period,
        students:state.teacherLoginData.students,
        linkIndex:state.containerLink.linkIndex||0
    }
}

const mapDispatchToProps = {
    //onLink:leftLinkRight
};
export default connect(maneger,mapDispatchToProps)(All4);
