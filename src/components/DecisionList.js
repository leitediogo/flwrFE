import React from 'react'
import { Component } from 'react'
import utils from '../utils/Utils'

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
    utils.testInvokeAPISuperagent('http://localhost:3000/api/Decisions');
   var list=utils.testGetList('some param');
   console.log (list);
    
    //console.log('componentDidMount: ' + aaa);
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