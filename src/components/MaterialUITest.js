import React from 'react'
import {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AutoComplete from 'material-ui/AutoComplete';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class MaterialUITest extends Component {
    
    constructor (props){
        super(props);
        this.state={dataSource: []}
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="DecisionAppBar1"/>
                    <AppBar title="DecisionAppBar2"
                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                        iconElementRight={<FlatButton label="testBut" />} />
               
                    <FlatButton label="Default" />
                    <FlatButton label="Primary" primary={true} />
                    <FlatButton label="Secondary" secondary={true} />
                    <FlatButton label="Disabled" disabled={true} />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default MaterialUITest