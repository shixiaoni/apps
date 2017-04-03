import React,{ Component } from 'react';
import '../students1/students1.css';
import xinchou from '../students4/images/xinchou.png';


class Right3 extends Component {
    render() {
        return (
            <div className="lspj">
                <ul>
                    <li className="lspj-tb-shang">
                        <p>
                            <img src={xinchou} alt=""/>
                        </p>
                        <div className="lspj-ptwo">
                            <p>历史平均薪酬</p>
                        </div>
                    </li>
                    <li className="lspj-pone">
                        <p>￥</p>
                        <p>{this.props.student.score}</p>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Right3;
