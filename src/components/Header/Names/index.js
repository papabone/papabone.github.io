import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './names.css'

export class DesName extends Component {
  render(){
    const UI = this.props.UI
    return(
      <div className='name name-des'>
        <h2>{UI.profession}</h2>
        <p>{UI.name}</p>
      </div>
    )
  }
}

export class DevName extends Component {
  render(){
    const UI = this.props.UI
    return(
      <div className='name name-dev'>
        <h2>{UI.profession}</h2>
        <p>{UI.name}</p>
      </div>
    )
  }
}

DevName.propTypes = {
  UI : PropTypes.object.isRequired
}
DesName.propTypes = {
  UI : PropTypes.object.isRequired
}
