import React, {Component} from 'react';
import {connect} from 'react-redux';
import Con4 from './rcontainner4.js';

class Super extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        // console.log(this.props)
        return (
            <Con4/>
        );
    }
}
function maneger(state) {
    console.log(state);
    return state
}
const mapDispatchToProps = {
    // onSuper:teacherLoginData
};
export default connect(maneger,mapDispatchToProps)(Super);

