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
          <Link
            to='/portfolio-des'
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}/>
          <button tabIndex='-1'></button>
        </div>
      </div>
    )
  }

  handleFocus = (event) => {
    if ( event.target.nextElementSibling.tagName == 'BUTTON' ){
      event.target.nextElementSibling.classList.add('focus')
    }
  }
  handleBlur = (event) => {
    if ( event.target.nextElementSibling.tagName == 'BUTTON' ){
      event.target.nextElementSibling.classList.remove('focus')
    }
  }
}
