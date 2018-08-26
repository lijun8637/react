import React, {Component} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import template from './temp/template';

//bind 绑定当前作用域

var h1 = React.createElement(
    'h1',
    {
        style:{
            color:'red'
        }
    },
    '内容'
)  
//var h1 = <h1 style={{color:'red'}}>内容</h1>
var arr = [1,2,3,4,5,6,6]

arr = [
    ['ag','vhd','aghjtr'],
    ['ag1','vhd1','aghjtr1'],
    ['ag2','vhd2','aghjtr2']
]
var List = React.createClass({
    createList:function(){
        return arr.map(function(val,index,arr){
            return (<li key="index">{val}</li>)
        })
    },
    // 定义渲染方法
    render: function () {
        // 输出虚拟dom
        return (
            <ul>
                {this.createList()}
            </ul>
        )
    }
})
class About extends Component {
    var _this = this;

    getDefaultProps(){
        return {
            data:['默认标题']
        }
    }
    getInitialstate(){
        return {
            num:0
        }
    }
    createItem(arr){
        return arr.map(function(val,index,arr){
            return (<a href="" key={index}>{val}</a>)
        })
    }
    constructor() {
        super();
        this.state = {}
    }
    createList(){
        return _this.props.data.map(function(val,index,arr){
            return (<p key="index" style={{
                display:_this.state.num % _this.props.data.length === index ? 'block':'none'
            }}>{_this.createItem(val)}</p>)
        })
    }
{/*
  *  ReactDom.render(<Nav data={arr}></Nav>,document)
*/}
    changeState(){
        this.setState({
            num:++this.state.num
        })
    }
    render() {
        return (
            {/*
            <span onClick={this.changeState}>换一换</span>
            { this.createList()}
            */}
            <div id='about'>
                About<br/>
                <Link to="/">主页</Link>
                <br/>
                <Link to="/main">main</Link>
            </div>
        )
    }
    componentDidMount(){
        //组件创建之后
    }

    //1 即将接收新的属性数据
    componentWillReceiveProps(newProps){
        this.setState({text:newProps.text})
    }
    //2 组件是否应该更新 必须返回布尔值
    shouldComponentUpdate(newProps,newState){
        if(newProps.text === this.newState.text){
            return false;
        }
        return true;
    }
    //3组件即将更新 
    componentWillUpdate(){

    }
    //4 render 可访问新属性、新状态数据，不能访问dom 被创建期复用了
    //5 组件更新完成
    componentDidUpdate(oldProps,oldState){
        //通过this访问新属性、状态
        //ReactDom.findDOMNode(this) 访问dom
        console.log(5,this,arguments,ReactDom.findDOMNode(this))
    }
    //销毁期
    componentWillUnmount(){
        
    }
}

About.propTypes = {
  GetInitData: PropTypes.object
};
export default template({
    id: 'about',
    url: '/getData',  // 如果页面初始化需要从服务端获取数据，可以在此配置接口
    data: {},
    subscribeData: ['GetInitData'],
    component: About
})
