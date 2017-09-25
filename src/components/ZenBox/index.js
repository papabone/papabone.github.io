import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './zenbox.css'

export default class ZenBox extends Component {
  render() {
    const UI = this.props.UI
    return (
      <div   className='zen-box'>
        <div className='zen the-z'><span>z</span></div>
        <div className='zen the-e'><span>e</span></div>
        <div className='zen the-n'><span>n</span></div>
        <h2 className='description'>
          <div>
            {UI.frontEnd}
            <br/>{UI.development}
            <hr width='30%'/>{UI.branding}
          </div>
        </h2>
        <div className='box the-b'><span>b</span></div>
        <div className='box the-o'><span>o</span></div>
        <div className='box the-x'><span>x</span></div>    
      </div>
    )
  }
}
ZenBox.propTypes = {
  UI : PropTypes.object.isRequired
}
