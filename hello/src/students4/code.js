import React, { Component } from 'react';
import './entry.css';

class Code extends Component{
    constructor(props) {
        super(props);
        this.clickButton = this.clickButton.bind(this);
        this.state = {identifying_code: ''};
    }
    clickButton(){
        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        function getFourNumber() {
            let num = "";
            for (let i = 0; i < 4; i++) {
                switch (getRandomArbitrary(0, 3)) {
                    case 0:
                        num += String.fromCharCode(getRandomArbitrary(65, 91));
                        break;
                    case 1:
                        num += String.fromCharCode(getRandomArbitrary(97, 123));
                        break;
                    default:
                        num += String.fromCharCode(getRandomArbitrary(48, 58));
                }
            }
            return num;
        }
        const iden=getFourNumber();
        this.setState({identifying_code:iden});
        this.props.getId(iden)
    }
    componentWillMount() {
        this.clickButton();
    }
    render () {
        return (
            <div className="miss">
                <div className="yzmt">{this.state.identifying_code}</div>
                <input type="text" placeholder="验证码" id="yzm"/>

                <input type="button" value="看不清换一张" id="hq" onClick={this.clickButton}/>
            </div>
        )
    }
}
export default Code;
