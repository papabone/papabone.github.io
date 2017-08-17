import React, { Component } from 'react'
import './pic.css'

export default class Picture extends Component {

  componentDidMount(){
    this.changePicture()
    this.enterAnimation()
  }
  componentDidUpdate(){
    this.leaveAnimation()
    setTimeout(this.changePicture,700)
    setTimeout(this.enterAnimation,700)
  }

  render() {
    return (
      <div className='picture'>
        <div className='pic'>
          <span className='cover'><span className='jalousie item1'></span></span>
          <span className='cover'><span className='jalousie item2'></span></span>
          <span className='cover'><span className='jalousie item3'></span></span>
          <span className='cover'><span className='jalousie item4'></span></span>
        </div>
      </div>
    )
  }

  changePicture() {
    if ( !document.body.querySelector('.project-name.active') ) return;
    const project = document.body.querySelector('.project-name.active')
    const projName = project.dataset.name
    const picture = document.body.querySelector('.pic')
    picture.className = 'pic ' + projName
  }
  leaveAnimation(){
    const picture = document.body.querySelector('.pic')
    picture.classList.remove('enter-pic')
    picture.classList.add('leave-pic')
  }
  enterAnimation(){
    const picture = document.body.querySelector('.pic')
    picture.classList.remove('leave-pic')
    picture.classList.add('enter-pic')
  }
}
