import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menu from '../components/menu'

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Auto from '../components/autoComlete'

injectTapEventPlugin();

class About extends Component {

  render(){
    const { ownProps } = this.props
    console.log(ownProps)
    return (
      <div>
        <Menu />
        <div>Something about App...</div>
        <MuiThemeProvider
          muiTheme={getMuiTheme(baseTheme)}>
          <div>
            <br/>
            <Auto />
            <br />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    ownProps
  }
}

export default connect(mapStateToProps)(About)
