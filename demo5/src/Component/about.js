import React, {Component} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
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
                <Link to="/">主页</Link>
                <Link to="/main">main</Link>
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
