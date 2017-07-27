import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <ul className='lang'>
          <li className='ru'>ru</li>
          <li className='en active'>en</li>
        </ul>
        <div className='more-info'>More information	&nbsp; &#8595;</div>
      </div>
    )
  }
}
