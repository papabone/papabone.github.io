import React, { Component } from 'react'
import {Link} from 'react-router'
import './menu.css'

export default class Menu extends Component {
  render(){
    return (
      <ul className='ib menu'>
        <li><Link to='/'>Main</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    )
  }
}
