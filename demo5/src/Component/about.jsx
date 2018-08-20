import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router'
import PropTypes from 'prop-types';
import template from './temp/template';

class About extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div id='Mains'>
                About
                //<Link to="/">主页</Link>
                //<Link to="/index">Index</Link>
            </div>
        )
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
