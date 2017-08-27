import React, { Component } from 'react'
import { connect } from 'react-redux'
import mail from './mail.png'
import git from './git.png'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

class AboutDev extends Component {
  render() {

    const lang = this.props.lang
    const UI = this.props.about.dev.UI[lang]
    const desc = this.props.about.dev.description[lang]

    return (
      <div className='text-block'>
        <h2 className='title'><span>{UI.title}</span></h2>
        <div className='desc-wrap'>
          <div className='term'>{UI.about}</div>
          <div className='desc'>{desc.about}</div>
        </div>
        <div className='desc-wrap skill'>
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
          <div className='term'>{UI.contacts}</div>
          <div className='desc'>
            <a href={'mailto\:'+desc.contacts.mail}>
              <img src={mail} alt='mail'/>
              {desc.contacts.mail}
            </a>
            <a href={desc.contacts.git}>
              <img src={git} alt='gitHub'/>
              {desc.contacts.git}
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
export default connect(mapStateToProps)(AboutDev)
