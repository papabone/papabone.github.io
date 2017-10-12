import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as portActions from '../../actions/portActions'

class PortfolioDev extends Component {

  componentDidMount(){
    this.activateTab()
  }

  render() {
    const lang = this.props.lang
    const { tabNumDev } = this.props.port
    const port = this.props.port.portfolio.dev
    const UI = port.UI[lang]
    const projects = port.projects[lang]
    const text = projects[tabNumDev]

    return (
      <div
        className='text-block'
        onClick={this.handleClick}
        >
        <h2 className='title'><span>{UI.title}</span></h2>
        <div className='desc-wrap'>
          {
            projects.map((item, index) =>
              <div
                key={index}
                className='project-filter project-name'
                data-numer={'' + index}
                data-name={'' + item.name}
                tabIndex='0'>
                {item.title}
              </div>
            )
          }
        </div>
        <div className='desc-wrap skill'>
          <div className='desc'>
            {text.desc}
          </div>
        </div>
        <div className='desc-wrap'>
          <div className='term'>{UI.customer}</div>
          <div className='desc'>{text.customer}</div>
        </div>
        <div className='desc-wrap skill'>
          <div className='term'>{UI.technologies}</div>
          <div className='desc'>
          {
            text.technologies.map((item, index) =>
              <span key={index}>
                {item}
              </span>
            )
          }
          </div>
        </div>
      </div>

    )
  }

  handleClick = (event) => {
    if( !event.target.classList.contains('project-filter') )return;
    const numer = event.target.dataset.numer
    this.props.portActions.tabNumDev(+numer)
    const tabs = event.currentTarget.querySelectorAll('.project-filter')
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active')
    }
    event.target.classList.add('active')
  }

  activateTab = () => {
    const tabs = document.body.querySelectorAll('.project-filter')
    const { tabNumDev } = this.props.port

    for (var i = 0; i < tabs.length; i++) {
      if( tabNumDev != tabs[i].dataset.numer ) continue;
      tabs[i].classList.add('active')
    }
  }

}

function mapStateToProps (state) {
  return {
    port: state.port,
    lang: state.lang.language,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    portActions: bindActionCreators(portActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDev)
