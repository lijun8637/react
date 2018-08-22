import React, {Component} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import template from './temp/template';

import { NavBar, Icon } from 'antd-mobile';


class Mains extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div id='Main'>
                <div>main 页面</div>
                <Link to="/">index</Link>
                <br/>
                <Link to="/about">about</Link>

                <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() => console.log('onLeftClick')}
                  rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                  ]}
                >NavBar</NavBar>
            </div>
        )
    }
}
Mains.propTypes = {
  GetInitData: PropTypes.object
};
export default template({
    id: 'mains',
    url: '/getData',  // 如果页面初始化需要从服务端获取数据，可以在此配置接口
    data: {},
    subscribeData: ['GetInitData'],
    component: Mains
})
