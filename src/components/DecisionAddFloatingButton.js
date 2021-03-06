import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

let style = {
    margin: 12,
    marginRight: 20,
    marginLeft: 20
}

class DecisionAddFloatingButton extends Component {
    constructor() {
        super();
        this.state = { decisionState: '' }
    }
    render() {
        return (
            <MuiThemeProvider>
                <FloatingActionButton style={style} disabled={false} href="gotoAdd">
                    <ContentAdd />
                </FloatingActionButton>
            </MuiThemeProvider>
        )
    }
}


export default DecisionAddFloatingButton