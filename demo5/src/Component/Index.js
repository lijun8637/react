import React, {Component,ReactDOM} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import template from './temp/template';

/*============= 群主页 ==============*/

class Index extends Component {
    constructor() {
        super();
        this.state = {
            "info":{
                "title":"",
                "name":"",
                "author":"",
                "license":"",
                "Github":"",
                "npm":""
            }
        }
    }
    render() {
        let {GetInitData} = this.props;
        let info = this.state.info;
        if(GetInitData.get('initData')!= undefined){
            info = GetInitData.get('initData').data.info;
        }
        return (
            <div id='IndexComp'>
                <Link to="/main">main</Link>
                <br/>
                <Link to="/about">about</Link>

                <div className="comt">
                    <div className="clearfloat">
                        <div className="logo"></div>
                        <h2 className="title">zwebcli<br/>脚手架</h2>
                    </div>
                    <div className="git">
                        <span className="author">Author:</span>
                        <span className="author_name">{info.author}</span>
                        <span><a href={info.Github}>Github</a></span>
                        <span><a href={info.npm}>npm</a></span>
                    </div>
                    <div className="icon">
                        
                    </div>
                </div>
            </div>
        )
    }
}
Index.propTypes = {
  GetInitData: PropTypes.object
};
export default template({
    id: 'index',
    url: '/getData',  // 如果页面初始化需要从服务端获取数据，可以在此配置接口
    data: {},
    subscribeData: ['GetInitData'],
    component: Index
})
