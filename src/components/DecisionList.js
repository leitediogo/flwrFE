import React from 'react'
import { Component } from 'react'
import Superagent from 'superagent'

class DecisionList extends Component {
  //this is getInitialState
  constructor() {
    super();
    this.state = { decisionList: 'Init' };
    console.log("constructor Event: " + this.state.decisionList);
  }

  /*
    componentWillMount() {
      this.setState({ decisionList: 'componentWillMount' });
      console.log('componentWillMount Event: ' + this.state.decisionList);
    }
    */

  componentDidMount() {
    //Get Decision List
    let result = [];
    Superagent.get('http://localhost:3000/api/Decisions')
      .accept('json')
      .end(function (err, res) {
        if (err) throw err
        result = res.body;
        console.log(result);
      })
  }
  /*
    componentWillUnmount() {
      this.setState({ decisions: 'componentWillUnmount' });
      console.log('componentWillUnmount : ' + this.state.decisions);
      console.log('componentDidMount : ' + this.state.decisions);
    }
  */
  render() {
    return (
      <div>
        <p>aa</p>
      </div>
    );
  }

}

export default DecisionList