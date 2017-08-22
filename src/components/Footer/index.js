import React, { Component } from 'react'
import { Link } from 'react-router'
import './footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <ul className='lang'>
          <li className='ru'>ru</li>
          <li className='en active'>en</li>
        </ul>
        <Link to='/portfolio-des' className='more-info about-des'>More information	&nbsp; &#8595;</Link>
        <Link to='/portfolio-dev' className='more-info about-dev'>More information	&nbsp; &#8595;</Link>
      </div>
    )
  }
}
