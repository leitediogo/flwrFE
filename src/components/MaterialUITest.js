import React from 'react'
import {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class MaterialUITest extends Component {
    render (){
        return (
        <MuiThemeProvider>
              <div>
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