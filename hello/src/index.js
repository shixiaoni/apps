import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import All1 from './students1/all1';
import Con1 from './students1/rcontainner1';
import Con2 from './students2/rcontainner2';
import Con3 from './students3/rcontainner3';
import All4 from './students4/all4';
import './students1/students1.css';


//import { browserHistory } from 'react-router';
import Entry from './students4/entry.js';
import {Router, Route, hashHistory, Redirect, IndexRedirect, IndexRoute} from 'react-router';
import Totalreducers from './container/reducers';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import Super from "./container/super";




let store=createStore(Totalreducers);
ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory}>

                <Route path="/" component={Entry}/>
                <Route path="/super" component={All4}/>

                <Route path="/student" component={All1}>
                    <IndexRoute component={Con1}/>
                    <Route path="repos" component={Con1}/>
                    <Route path="about" component={Con2}/>
                    <Route path="three" component={Con3}/>
                </Route>
            </Router>
        </Provider>,
    document.getElementById('root')
);