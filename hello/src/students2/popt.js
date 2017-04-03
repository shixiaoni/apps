import React , { Component } from 'react';
import './../students1/students1.css';

class Popt extends Component {
    constructor(props) {
        super(props);
        this.changeObj = this.changeObj.bind(this);
    }
    render() {
        // console.log(this.props.reward);
        return (
            <div  className="popup_box" style={{display:this.props.flag==false?"none":"block"}}>
                <div className="popup_box_bg">
                    <div className="popup">
                        <p>学生基本信息</p>
                        <form action="">
                            <label htmlFor="">
                                <div className="label_div">姓名</div>
                                <input type="text" placeholder={this.props.students.sname} ref="names"/>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">班级</div>
                                <select name="" id="">
                                    <option value="">1508A</option>
                                    <option value="">1509A</option>
                                </select>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">学号</div>
                                <input type="text" placeholder={this.props.students.sno}/>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">性别</div>
                                <select name="" id="">
                                    <option value="">女</option>
                                    <option value="">男</option>
                                </select>
                            </label>
                            <label htmlFor="">
                                <div className="label_div">身份证</div>
                                <input type="text" placeholder="174597392020189405"/>
                            </label>
                            <label htmlFor="">
                                <div className="close" onClick={this.props.cancelMask}>取消</div>
                                <div className="close1" type="button" value="" onClick={this.changeObj}>确定</div>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    changeObj(){
        let obj={
            "id": 1,
            "pid": 1,
            "sname": "张壮壮",
            "sex": "1",
            "identity": "123",
            "sno": "160201",
            "init": 100000,
            "score": 10425,
            "status": "1",
            "createTime": null,
            "updateTime": "2017-03-05 17:36:33",
            "market": "鲁东市场部",
            "pic": null,
            "beginsDate": null,
            "term": "一年",
            "birthday": "123"
        };
        obj.sname=this.refs.names.value;
        this.props.students.push(obj);
        console.log(this.props.students);
        this.props.cancelMask(false);
    }
}

export default Popt;

