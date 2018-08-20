import React, {Component} from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom'

/*=================
   router.jsx 组件 专门用来管理路由的
==================*/

import Index from '../Component/Index.jsx';
import Mains from '../Component/main.jsx';
import About from '../Component/about.jsx';

/*const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
})*/

const RouteConfig =(
  <HashRouter>
      <Route path='/' component={Index}/>
      	//<IndexRoute component={Index}></IndexRoute>
      	//<Route path="/about" component={About} />
      	//<Route path="/index" component={Index} />
      
   </HashRouter>
);
export default RouteConfig
