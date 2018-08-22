import React, {Component} from 'react';
import { Router, Redirect, IndexRoute, hashHistory } from 'react-router';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

/*=================
   router.jsx 组件 专门用来管理路由的
==================*/

/*<HashRouter>
      	<Route path='/' component={Index}/>
      	<Route path='/main' component={Main}/>
   	</HashRouter>*/

import Index from '../Component/Index.js';
import Main from '../Component/main.js';
import About from '../Component/about.js';

const RouteConfig =(	
	<HashRouter>
        <Switch>
            <Route path="/" component={Index} exact />
            <Route path='/main' component={Main}/>
            <Route path='/about' component={About}/>
        </Switch>
    </HashRouter>			
  	
);


export default RouteConfig
