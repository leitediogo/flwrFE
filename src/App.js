import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TextInput from './components/TextInput'
import Button from './components/Button'
import LikeButton from './components/LikeButton'
import Bootstrpjumbo from './components/Bootstrpjumbo'
import DecisionList from './components/DecisionList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Bora la começar com isto nharr <code>src/App.js</code> and save to reload.
        </p>
        <div><Button/></div>
        <div><TextInput/></div>
        <div><LikeButton/></div>
        <div><Bootstrpjumbo/></div>
        <div><DecisionList/></div>
      </div>
              
    );
  }
}

export default App;
