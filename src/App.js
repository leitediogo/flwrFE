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

function arrowTest(param1, param2) {
  return param1 + param2
}

//arrow functions test
const a = [
  "obi",
  "ani",
  "luke",
  "leia"
];
const alen = a.map(function (each) { return each + 'sa' });
const alenarrow = a.map(each => each + 'aa\n');


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{alenarrow}</p>
        <DecisionAppBar />
        <div><DecisionCardList /></div>
        <DecisionAddFloatingButton />
        <div style={divstyle}><MaterialUITest /></div>
      </div>

    );
  }
}

export default App;
