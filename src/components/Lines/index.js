import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './lines.css'

export default class Lines extends Component {
  render() {
    const isHidden = this.props.isHidden
    return (
      <div className={'lines ' + isHidden}>
      <div className='line'></div><div className='line'></div>
      <div className='line'></div><div className='line'></div>
      <div className='line hidden-sm'></div><div className='line hidden-sm'></div>
      <div className='line hidden-md hidden-sm'></div><div className='line hidden-md hidden-sm'></div>
      </div>
    )
  }
}
Lines.propTypes = {
  isHidden: PropTypes.string.isRequired,
}
