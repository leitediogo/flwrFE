import React from 'react'
import {Component} from 'react'
import utils from '../utils/Utils'

 class List extends Component {
    constructor() {
    super();
    this.state = { decisionList: 'Init' };
    console.log("List :: constructor " + this.state.decisionList);
  }

    componentDidMount (){
         console.log ('List :: componentDidMount');
         console.log(utils.getList());
         console.log(utils.getAPIList());
    }

     render (){
        return (
            <div>list component</div>
            );
    } 
 }

 export default List