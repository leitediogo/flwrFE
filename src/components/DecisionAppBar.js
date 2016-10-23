import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DecisionAppBarLeftIconMenu from './DecisionAppBarLeftIconMenu'

class DecisionAppBar extends Component {
    constructor() {
        super()
        this.state = { decision: '', decisionList: [] }
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="DecisionAppBar1"
                        iconElementRight={<DecisionAppBarLeftIconMenu/>}
                        />
                </div>
            </MuiThemeProvider>
        )
    }
}
export default DecisionAppBar