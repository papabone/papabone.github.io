import React, { Component } from 'react'
import mail from './mail.png'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

export default class AboutDes extends Component {
  render() {
    return (
      <div className='text-block'>
        <h2 className='title'><span>About</span></h2>
        <div className='desc-wrap'>
          <div className='term'>About:</div>
          <div className='desc'>I'm freelance designer with 4+ years experienced in Web UI/UX and graphic Design Area. I have build more 200+  user interface and worked on a few other startups. </div>
        </div>
        <div className='desc-wrap'>
          <div className='term'>Skills:</div>
          <div className='desc'>Adobe Photoshop<br/>Adobe Illustrator</div>
        </div>
        <div className='desc-wrap'>
          <div className='term'>Education:</div>
          <div className='desc'>European Humanities University. Media and visual design. Belarusian Trade and Economics University. Marketing.</div>
        </div>
        <div className='desc-wrap'>
          <div className='term'>Contacts:</div>
          <div className='desc'>
            <a href='mailto:PonomarenkoHelen3@gmai.com'>
              <img src={mail} alt='mail'/>
            </a>
            PonomarenkoHelen3@gmai.com
          </div>
        </div>
      </div>
    )
  }
}
