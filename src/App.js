import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DecisionList from './components/DecisionList'
import MaterialUITest from './components/MaterialUITest'
import DecisionCardList from './components/DecisionCardList'
import DecisionAppBar from './components/DecisionAppBar'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let divstyle = {margin: 60}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><DecisionList/></div>
        <DecisionAppBar/>
        <div style={divstyle}><DecisionCardList/></div>
        <div style={divstyle}><MaterialUITest/></div>           
      </div>
              
    );
  }
}

export default App;
