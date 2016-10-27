import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Decision extends Component {
    render() {
        return (
       
             <MuiThemeProvider>
             <div>
                <TextField
                    hintText="Insert Decision Title"
                    floatingLabelText="Decision Title"
                    />
                    <br/>
                    <TextField
                    hintText="Insert Decision Descritption"
                    floatingLabelText="Decision Description"
                    />
                    </div>
             </MuiThemeProvider>
        
        )
    }

}

export default Decision