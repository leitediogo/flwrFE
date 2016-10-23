import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton'

class DecisionAppBarLeftIconMenu extends Component {
    constructor() {
        super()
        this.state = { decision: '', decisionList: [] }
    }
    render() {
        return (
            <MuiThemeProvider>
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Send feedback" />
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" />
                    </IconMenu>
            </MuiThemeProvider>
        )
    }

}
export default DecisionAppBarLeftIconMenu