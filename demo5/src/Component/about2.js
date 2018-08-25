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
    'ag','vhd','aghjtr',
    'ag1','vhd1','aghjtr1',
    'ag2','vhd2','aghjtr2'
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
    //初始化属性数据
    getDefaultProps(){
        return {
            data:[],
            text:'agaggg'
        }
    }
    //初始化状态数据
    getInitialstate(){
        return {
            num:0,
            //用属性数据更新状态数据
            text:this.porps.text
        }
    }
    componentWillMount(){
        
    }
    getDataId(e){
        //触发事件的属性 target
        //绑定事件的属性 currentTarget
        //console.log(e.currentTarget);
        //var id = e.currentTarget.getAttribute('data-id')
        console.log(e)
        console.log(arguments)
        document.body.style.background = 'url(img/bg_'+e+'.jpg)';
    }
    createList(){
        var _this = this;
        return this.props.data.map(function(val,index,arr){
            return (<p key="index" data-id={val} onClick={_this.getDataId.bind(_this,val)}>{val}</p>)
        })
    }
{/*
  *  ReactDom.render(<Nav></Nav>,document)
*/}
    changeState(){
        this.setState({
            num:++this.state.num
        })
    }
    render() {
        return (
            {/*
            { this.createList()}
            <List parentText={this.state.text}/>
            */}
            <div id='about'>
                About<br/>
                <Link to="/">主页</Link>
                <br/>
                <Link to="/main">main</Link>
            </div>
        )
    }
    //组件构建完成
    componentDidMount(){
        //组件创建之后
        this.setState({
            data:arr
        })
        //访问虚拟DOM
        console.log(ReactDOM.getDOMNode(this))
        console.log(ReactDOM.findDOMNode(this))
        window.onscrll = function(){
            if(window.scrrollY >= 200){
                this.setState(text:'返回顶部')
            }else{
                this.setState(text:'网站导航')
            }
        }.bind(this)
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
