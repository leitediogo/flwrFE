import React from 'react'
import {Component} from 'react'
import utils from '../utils/Utils'
import agent from 'superagent'

class List extends Component {
  constructor() {
    super();
    this.state = { decisionName: 'none', decisionNames: [] };
    console.log("List :: constructor " + this.state.decisionList);
  }

  componentDidMount() {
    console.log('List :: componentDidMount');
    console.log(utils.getList());
    console.log(utils.getAPIList());
    let decisions = [];
    let decisionNamesList = [];
    agent.get('http://localhost:3000/api/Decisions').then(function onResult(res) {
      decisions = res.body;
      console.log('Decision Name : ' + decisions[1].name);
      this.setState({ decisionName: decisions[0].name });
      for (var i=0;i<decisions.length; i++){
        decisionNamesList.push(decisions[i].name);
      }
      this.setState({ decisionNames: decisionNamesList });
    }.bind(this));
  }

  render() {
    return (
      <div>
        First Decision Name: {this.state.decisionName}
        Decision List : {this.state.decisionNames}
      </div>
    );
  }
}

export default List