import React,{ Component } from 'react';
import './students1.css';



class Pop extends Component {
    constructor(props){
        super(props);
        this.remove=this.remove.bind(this);
        this.sure=this.sure.bind(this);
        this.state={
            score:this.props.data.score
        }
    }
    render() {
        return (
            //<div></div>,
            <div className="zsm" style={this.props.name>-1?{display:"block"}:{display:"none"}}>
            <div className="mask">
                <div className="zsm-z">
                    <div className="zsm-z-s">
                        <p>{this.props.names.id<this.props.nameNum+4?"奖励加薪项目":"惩罚减新项目"}</p>
                    </div>
                    <div className="zsm-z-x">
                        <div className="right-2-2-top-x">
                            <div className="right-2-2-top-z1-x">
                                <p>{this.props.names.id<this.props.nameNum.id?this.props.names.name:this.props.names.name}</p>
                            </div>
                            <div className="right-2-2-top-z2-x">
                                <p>{this.props.names.id<this.props.nameNum.id?"+"+this.props.names.score:this.props.names.score}<span>$</span></p>
                            </div>
                        </div>
                        <div className="xxx">
                            <div className="xxxl" onClick={this.remove}>取消</div>
                            <div className="xxxr" onClick={this.sure}>确定</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
    remove(){
        this.props.changeBoxR(-1);
    }
    sure(){
        this.props.changeBoxR(-1);
        var score = (this.props.data.score)+=(this.props.names.id<8?this.props.names.score:this.props.names.score);
        this.setState({
            score:score
        })
    }
}
export default Pop;