import React, { Component } from 'react'
import './projectbtn.css'
import { Link } from 'react-router'

export default class MenuBtn extends Component {

  render(){

    return (
      <div
        className='project-btn isOpend' >
        <div
          className='arrow-for-button'>
          <Link to='/portfolio-des'/>
          <button></button>
        </div>
      </div>
    )
  }
}
