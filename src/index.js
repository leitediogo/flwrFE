import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router'
import DecisionAppBar from './components/DecisionAppBar'
import DecisionCardList from './components/DecisionCardList'
import Decision from './components/Decision'
ReactDOM.render(
  //this.props.children
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/decision" component={Decision} />
      </Route>
      <Route path="/appBar" component={DecisionAppBar} />
      <Route path="/cardList" component={DecisionCardList} />

    </Router>
  ),
  document.getElementById('root')
);