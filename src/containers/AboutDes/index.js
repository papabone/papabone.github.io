import React, { Component } from 'react'
import { connect } from 'react-redux'
import mail from './mail.png'

class AboutDes extends Component {
  render() {

    const lang = this.props.lang
    const UI = this.props.about.des.UI[lang]
    const desc = this.props.about.des.description[lang]

    return (
      <div className='text-block'>
        <h2 className='title'><span>{UI.title}</span></h2>
        <div className='desc-wrap'>
          <div className='term'>{UI.about}</div>
          <div className='desc'>{desc.about}</div>
        </div>
        <div className='desc-wrap'>
          <div className='term'>{UI.skills}</div>
          <div className='desc'>
          {
            desc.skills.map((item, index) =>
                <span key={index}>{item}</span>
            )
          }
          </div>
        </div>
        <div className='desc-wrap'>
          <div className='term'>{UI.education}</div>
          <div className='desc'>
          {
            desc.education.map((item, index) =>
                <span key={index}>{item}</span>
            )
          }
          </div>
        </div>
        <div className='desc-wrap'>
          <div className='term'>{UI.contacts}</div>
          <div className='desc'>
            <a href={'mailto\:' + desc.contacts}>
              <img src={mail} alt='mail'/>
              {desc.contacts}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    about: state.about,
    lang: state.lang.language
  }
}
export default connect(mapStateToProps)(AboutDes)
