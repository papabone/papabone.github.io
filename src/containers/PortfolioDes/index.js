import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as portActions from '../../actions/portActions'

class PortfolioDes extends Component {

  componentDidMount(){
    this.activateTab()
    this.activateFilterTab()
  }
  componentDidUpdate(){
    this.activateTab()
    this.activateFilterTab()
  }

  render() {
    const { tabNumDes } = this.props.port
    const port = this.props.port.portfolio.des
    const terms = port.terms
    const filtredProjects = port.projects.filter( proj => proj.type == this.props.port.projectFilter)
    const text = filtredProjects[tabNumDes]

    return (
      <div
        className='text-block'
        onClick={this.handleClick}
        >
        <h2 className='title'>Portfolio</h2>
        <div className='desc-wrap'>
          <div
            className='project-filter'
            data-name='web'>
            Web design
          </div>
          <div
            className='project-filter'
            data-name='branding'>
            Branding
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
          <div className='term'>{terms.about}</div>
          <div className='desc'>{text.desc}</div>
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

}

function mapStateToProps (state) {
  return {
    port: state.port,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    portActions: bindActionCreators(portActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDes)
