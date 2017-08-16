import React, { Component } from 'react'

import './zenbox.css'
import './animation.css'

export default class ZenBox extends Component {


  render() {
    return (
      <div   className='zen-box'>
        <div className='zen the-z'><span>z</span></div>
        <div className='zen the-e'><span>e</span></div>
        <div className='zen the-n'><span>n</span></div>
        <div className='box the-b'><span>b</span></div>
        <div className='box the-o'><span>o</span></div>
        <div className='box the-x'><span>x</span></div>
        <h2 className='description'>
          Front End
          <br/>Development
          <hr width='30%'/>Branding
        </h2>
      </div>
    )
  }
}
