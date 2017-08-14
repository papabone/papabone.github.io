import React, { Component } from 'react'
import './pic.css'

export default class Picture extends Component {

  componentDidMount(){
    this.changePicture()
  }
  componentDidUpdate(){
    this.changePicture()
  }

  render() {
    return (
      <div className='picture'>
        <span className='pic'/>
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
}
