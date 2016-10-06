import React from 'react'
import {Component} from 'react'
import utils from '../utils/Utils'

 class List extends Component {
     componentDidMount (){
         console.log ('List :: componentDidMount');
         console.log (utils.sum(1,6));
         console.log (utils.getList());
     }
     render (){
        return (
            <div>list component</div>
            );
    } 
 }

 export default List