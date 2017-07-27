import React, { Component } from 'react'
import { Link } from 'react-router'
import './list.css'

export class ListDes extends Component {
  render() {
    return (
      <div className='list'>
        <ul className='list-des'>
          <li><Link to='/about-des'>About</Link></li>
          <li><Link to='/portfolio-des'>Portfolio</Link></li>
        </ul>
      </div>
    )
  }
}

export class ListDev extends Component {
  render() {
    return (
      <div className='list'>
        <ul className='list-dev'>
          <li><Link to='/about-dev'>About</Link></li>
          <li><Link to='/portfolio-dev'>Portfolio</Link></li>
        </ul>
      </div>
    )
  }
}
