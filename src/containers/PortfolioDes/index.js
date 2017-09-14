import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as portActions from '../../actions/portActions'
import { Link } from 'react-router'

class PortfolioDes extends Component {

  componentDidMount(){
    this.activateTab()
    this.activateFilterTab()
    this.enterAnimation()
  }
  componentDidUpdate(){
    this.leaveAnimation()
    this.activateTab()
    this.activateFilterTab()
    setTimeout(this.enterAnimation,700)
  }

  render() {
    const lang = this.props.lang
    const { tabNumDes } = this.props.port
    const port = this.props.port.portfolio.des
    const UI = port.UI[lang]
    const projects = port.projects[lang]
    const filtredProjects = projects.filter( proj => proj.type == this.props.port.projectFilter)
    const text = filtredProjects[tabNumDes]

    const moreInfo = (
      text.infoTipe == 'scrin' ?
      <Link
        to={'\/portfolio-des\/project-' + text.name}
        className='more-info'>
        { UI.moreInfo[0] }	&nbsp; &#8594;
      </Link>
      :
      <a
        href={text.linkURL}
        className='more-info'>
        { UI.moreInfo[1] }	&nbsp; &#8594;
      </a>
    )

    return (
      <div
        className='text-block'
        onClick={this.handleClick}
        >
        <h2 className='title'><span>{UI.title}</span></h2>
        <div className='desc-wrap'>
          <div
            className='project-filter'
            data-name='web'>
            {UI.web}
          </div>
          <div
            className='project-filter'
            data-name='branding'>
            {UI.branding}
          </div>
        </div>
        <div className='desc-wrap'>
          {
            filtredProjects.map((item, index) =>
              <div
                key={index}
                className='project-name'
                data-numer={'' + index}
                data-name={'' + item.name}>
                {item.title}
              </div>
            )
          }
        </div>
        <div className='desc-wrap'>
          <div className='term'>{UI.about}</div>
          <div className='desc'>{text.desc}</div>
        </div>
        <div className='desc-wrap'>
          {moreInfo}
        </div>
      </div>

    )
  }

  handleClick = (event) => {
    if( event.target.classList.contains('project-name') ) {
      const numer = event.target.dataset.numer
      const projName = event.target.dataset.name
      this.props.portActions.tabNumDes(+numer, projName)
      const tabs = event.currentTarget.querySelectorAll('.project-name')
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active')
      }
      event.target.classList.add('active')
    } else if ( event.target.classList.contains('project-filter') ) {
      const name = event.target.dataset.name
      this.props.portActions.filterPtoject(name)
      const filterTabs = event.currentTarget.querySelectorAll('.project-filter')
      for (var j = 0; j < filterTabs.length; j++) {
        filterTabs[j].classList.remove('active')
      }
      event.target.classList.add('active')
    }
  }

  activateTab = () => {
    const tabs = document.body.querySelectorAll('.project-name')
    const { tabNumDes } = this.props.port

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active')
      if( tabNumDes != +tabs[i].dataset.numer ) continue;
      tabs[i].classList.add('active')
    }
  }
  activateFilterTab = () => {
    const filterTabs = document.body.querySelectorAll('.project-filter')
    const { projectFilter } = this.props.port

    for (var i = 0; i < filterTabs.length; i++) {
      filterTabs[i].classList.remove('active')
      if( projectFilter != filterTabs[i].dataset.name ) continue;
      filterTabs[i].classList.add('active')
    }
  }

  leaveAnimation(){
    const desc = document.body.querySelector('.desc')
    desc.classList.remove('enter-desc')
    desc.classList.add('leave-desc')
  }
  enterAnimation(){
    const desc = document.body.querySelector('.desc')
    desc.classList.remove('leave-desc')
    desc.classList.add('enter-desc')
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

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDes)
