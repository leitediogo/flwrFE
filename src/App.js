import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DecisionList from './components/DecisionList'
import MaterialUITest from './components/MaterialUITest'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mortal Decision Maker</h2>
        </div>
        <p className="App-intro"> List of decisions for analisys.</p>
        <div><DecisionList/></div>
        <div><MaterialUITest/></div>
      </div>
              
    );
  }
}

export default App;
