import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import All1 from './students1/all1';
import All2 from './students2/all2';


class Zh extends Component {
    constructor(props) {
        super(props);
        this.changeTwo = this.changeTwo.bind(this);
        this.state = {
            num1:1
        }
    }
    render() {
        return (
            <div>
                <All1 fn={this.changeTwo} nameNum1={this.state.num1}/>
                <All2 fn={this.changeTwo} nameNum1={this.state.num1}/>
            </div>
        );
    }
    changeTwo(val){
        this.setState({
            num1:val
        })
    }
}



ReactDOM.render(
    <Zh/>,
    document.getElementById('root')
);
