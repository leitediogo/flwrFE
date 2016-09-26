
import React from 'react'
import { Component } from 'react'

class LoopbackList extends Component {
    constructor() {
            super();
            this.state = { items: [] };
        }

componentDidMount() {
        fetch('http://localhost:3000/api/Decisions') 
            .then(result=> {
                this.setState({items:[1,2,3]});
            });
            console.log ('LOG :: component Did Mount');
            console.log (this.state.items[0]);
    }

componentWillUnmount() {
    console.log ('LOG :: componentWill Unmount');
  }

componentDidUpdate(){
    console.log ('LOG :: componentDid Update');
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

export default LoopbackList