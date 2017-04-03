import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// class TodoList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {items: ['hello', 'world', 'click', 'me']};
//         this.handleAdd = this.handleAdd.bind(this);
//     }
//
//
//     handleAdd() {
//         const newItems = this.state.items.concat([
//             prompt('Enter some text')
//         ]);
//         this.setState({items: newItems});
//     }
//
//     handleRemove(i) {
//         let newItems = this.state.items.slice();
//         newItems.splice(i, 1);
//         this.setState({items: newItems});
//     }
//
//     render() {
//         const items = this.state.items.map((item, i) => (
//             <div key={item} onClick={() => this.handleRemove(i)}>
//                 {item}
//             </div>
//         ));
//
//         return (
//             <div>
//                 <button onClick={this.handleAdd}>Add Item</button>
//                 <ReactCSSTransitionGroup
//                     transitionName="example"
//                     transitionEnterTimeout={500}
//                     transitionLeaveTimeout={300}>
//                     {items}
//                 </ReactCSSTransitionGroup>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <TodoList />,
//     document.getElementById('root')
// );
//



// var LikeButton = React.createClass({
//     getInitialState: function () {
//         return {liked: false};
//     },
//
//     handleClick: function (event) {
//         this.setState({liked: !this.state.liked});
//     },
//
//     render: function () {
//         var text = this.state.liked ? 'like' : 'haven\'t liked';
//         return (
//             <p onClick={this.handleClick}>
//                 You {text} this. Click to toggle.
//             </p>
//         );
//     }
// });

class LikeButton2 extends Component {
    //固定写法
    constructor(props) {
        super(props);
        //全局状态
        this.state = {
            liked: false
        }
        //绑定函数
        this.handleClick=this.handleClick.bind(this)
    }
    //自定义函数
    handleClick(event) {
        this.setState({liked: !this.state.liked});
    }
    //渲染
    render() {
        //this.state取值
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            //事件触发
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
}




// var names = ['Alice', 'Emily', 'Kate'];
//
// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, 123</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
// }


// class App extends Component {
//     render() {
//         return (
//             <div>12312312312</div>
//         );
//     }
// }

ReactDOM.render(
    <LikeButton2/>,
    document.getElementById('root')
);
