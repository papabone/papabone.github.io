import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as portActions from '../../actions/portActions'

class PortfolioDev extends Component {

  componentDidMount(){
    this.activateTab()
  }

  render() {
    const { tabNumDev } = this.props.port
    const port = this.props.port.portfolio.dev
    const terms = port.terms
    const text = port.projects[tabNumDev]

    return (
      <div
        className='text-block'
        onClick={this.handleClick}
        >
        <h2 className='title'><span>Portfolio</span></h2>
        <div className='desc-wrap'>
          {
            port.projects.map((item, index) =>
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
        <div className='desc-wrap skill'>
          <div className='desc'>
            {text.desc}
          </div>
        </div>
        <div className='desc-wrap'>
          <div className='term'>{terms.customer}</div>
          <div className='desc'>{text.customer}</div>
        </div>
        <div className='desc-wrap skill'>
          <div className='term'>{terms.technologies}</div>
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
    if( !event.target.classList.contains('project-name') )return;
    const numer = event.target.dataset.numer
    this.props.portActions.tabNumDev(+numer)
    const tabs = event.currentTarget.querySelectorAll('.project-name')
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active')
    }
    event.target.classList.add('active')
  }

  activateTab = () => {
    const tabs = document.body.querySelectorAll('.project-name')
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    portActions: bindActionCreators(portActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDev)
