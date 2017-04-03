import React,{ Component } from 'react';
import './entry.css';
import cccc from './img/dddd.gif';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {teacherLoginData} from './actions'
import Code from './code.js';
import ReactDOM from 'react-dom';

class Entry extends Component {
    constructor(props) {
        super(props);
        this.login=this.login.bind(this)
        this.getIden = this.getIden.bind(this);
        this.state={
            college:"数字媒体web",
            authority:"学生",
            username: "admin",
            password: "admin",
            id:""
        }
    }
    render() {
        return (
             <div className="box">
                   <img src={cccc} alt=""/>
                   <form action="">
                           <select className="innerbox1" ref="college">
                               <option className="innerbox2 web" value="0">数字媒体WEB</option>
                               <option className="innerbox2 ui" value="1">数字媒体UI</option>
                           </select>
                           <select className="innerbox3" ref="authority">
                               <option className="innerbox4 gh" value="0">学生</option>
                               <option className="innerbox4 cj" value="1">教师</option>
                               <option className="innerbox4 gl" value="2">管理员</option>
                           </select>
                           <input type="text" placeholder="user" ref="username" id="yh"/>
                           <input type="password" placeholder="password" ref="password" id="mm"/>

                           <Code getId={this.getIden} ref="identify"/>
                           <input type="submit" value="登录" id="btn" onClick={this.login}/>
                   </form>
             </div>
        )
    }

    //判断点击登录按钮时 校验数据输入是否正确
    login() {
            let user = this.refs.username.value;
            let password = this.refs.password.value;
            let college = parseInt(ReactDOM.findDOMNode(this.refs.college).value)+1;
            let authority = this.refs.authority.value;
            let identify = ReactDOM.findDOMNode(this.refs.identify).children[1].value;

            if((identify.toLowerCase() == this.state.id.toLowerCase())){
                fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${user}&password=${password}&roleType=1&officeType=1`)
                    .then(json=>json.json())
                    .then(json=> {
                        if (json.status == 201) {
                            alert(json.message);
                        } else if (json.status == 200) {
                            if(authority==1){
                                this.props.onSuper(json);
                                hashHistory.push("/student/repos");
                            }else if(authority==2){
                                this.props.onSuper(json);
                                hashHistory.push("/super");
                            }
                        }
                    }, err=> {
                        alert("服务器异常");
                    })
            }else {
                alert("验证码错误")
            }

        }


    //用来把验证码的内容传过来  判断不分大小写 是否输入正确
    getIden(value) {
        this.setState({
            id: value
        })
    }
 }
function maneger(state) {
// console.log(state);
    return {

    }
}

const mapDispatchToProps = {
    onSuper:teacherLoginData
};
export default connect(maneger,mapDispatchToProps)(Entry);
// export default connect(select)(login);