import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import App3 from './App3';

import './index.css';
import { Router, Route, hashHistory,IndexRoute,Redirect,IndexRedirect   } from 'react-router';


ReactDOM.render(
    <Router history={hashHistory}>
        <Router history={hashHistory}>
            <Redirect from="/" to="/student"/>
            <Route path="/student" component={App}>
                <IndexRoute component={App2}/>
                <Route path="repos" component={App2}/>
                <Route path="about" component={App3}/>
            </Route>
        </Router>
    </Router>,
    document.getElementById('root')
);
