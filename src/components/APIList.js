
import React from 'react'
import { Component } from 'react'

class APIList extends Component {
    constructor() {
            super();
            this.state = {isVisible: true, itemList: 0, componentStatus:'init', someStateVar: 'A'};
        }

componentDidMount() {
        fetch('http://localhost:3000/api/Decisions') 
            .then(result=> {
                this.setState({someStateVar:'B'});
            });
            console.log ('LOG :: component Did Mount');
            console.log (this.state.isVisible);
            console.log (this.state.itemList);
            console.log (this.state.componentStatus);
            console.log (this.state.someStateVar);
    }

componentWillUnmount() {
    console.log ('LOG :: component Will Unmount');
    console.log (this.state.isVisible);
    console.log (this.state.itemList);
    console.log (this.state.componentStatus);
    console.log (this.state.someStateVar);
  }

componentDidUpdate(){
    console.log ('LOG :: component Did Update');
    console.log (this.state.isVisible);
    console.log (this.state.itemList);
    console.log (this.state.componentStatus);
    console.log (this.state.someStateVar);    
}
      render (){
        return (
             <div>
                <div>Items:</div>
                {this.state.json}          
            </div>
        )
    }
}

export default APIList