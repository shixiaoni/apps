import React, {Component} from 'react';
import {connect} from'react-redux'

class Super extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        // console.log(this.props)
        return (
            <div>123</div>
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

