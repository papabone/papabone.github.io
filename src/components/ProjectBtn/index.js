import React, { Component } from 'react'
import './projectbtn.css'
import { Link } from 'react-router'

export default class MenuBtn extends Component {

  render(){

    return (
      <div
        className='project-btn isOpend' >
          <Link to='/portfolio-des' /> 
      </div>
    )
  }

}
