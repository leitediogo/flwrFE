import React from 'react'
import { Component } from 'react'

class FetchTest extends Component {
    constructor() {
        super()
        this.state = { decisionList: '' }
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/Decisions')
            .then(function (response) {
                console.log(JSON.stringify(response.body));
                return JSON.stringify(response.body);
            })
    }
    render() {
        return (
            <div> Decision List 2 : {this.state.decisionList} </div>
        )
    }

}

export default FetchTest