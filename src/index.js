import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router'
import DecisionAppBar from './components/DecisionAppBar'
import DecisionCardList from './components/DecisionCardList'

ReactDOM.render(
  (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/appBar" component={DecisionAppBar}/>
    <Route path="/cardList" component={DecisionCardList}/>
  </Router>
),
  document.getElementById('root')
);