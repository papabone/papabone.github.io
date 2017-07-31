import React, { Component } from 'react'
import mail from './mail.png'
import git from './git.png'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

export default class AboutDev extends Component {
  render() {
    return (
      <div className='text-block'>
        <h2 className='title'>About</h2>
        <div className='desc-wrap'>
          <div className='term'>About:</div>
          <div className='desc'>I'm freelance designer with 4+ years experienced in Web UI/UX and graphic Design Area. I have build more 200+  user interface and worked on a few other startups. </div>
        </div>
        <div className='desc-wrap skill'>
          <div className='term'>Skills:</div>
          <div className='desc'>
            <span>Adobe</span><span>Photoshop</span><span>Adobe</span>
            <span>Illustrator</span><span>Photoshop</span><span>Adobe</span>
            <span>Photoshop</span><span>Adobe</span><span>Photoshop</span>
          </div>
        </div>
        <div className='desc-wrap'>
          <div className='term'>Contacts:</div>
          <div className='desc'>
            <a href='mailto:PonomarenkoHelen3@gmai.com'>
              <img src={mail} alt='mail'/>PonomarenkoHelen3@gmai.com
            </a>
            <a href='mailto:PonomarenkoHelen3@gmai.com'>
              <img src={git} alt='gitHub'/>PonomarenkoHelen3@gmai.com
            </a>
          </div>
        </div>
      </div>
    )
  }
}
