import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './bg.css'

export default class BackGround extends Component {
  render() {
    return (
      <div className={'background ' + this.props.who}>
      </div>
    )
  }
}

BackGround.propTypes = {
  who: PropTypes.string.isRequired
}
