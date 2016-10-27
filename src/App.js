import React, { Component } from 'react';
import './App.css';
import MaterialUITest from './components/MaterialUITest'
import DecisionAppBar from './components/DecisionAppBar'
import DecisionCardList from './components/DecisionCardList'
import DecisionAddFloatingButton from './components/DecisionAddFloatingButton'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let divstyle = { margin: 60 }

class App extends Component {
  render() {

    return (
      <div className="App">
        <DecisionAppBar />
        <div><DecisionCardList /></div>
        <DecisionAddFloatingButton />
        <div className="results">
          {this.props.children}
        </div>
        <div style={divstyle}><MaterialUITest /></div>
      </div>

    );
  }
}

export default App;
