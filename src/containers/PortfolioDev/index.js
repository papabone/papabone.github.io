import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as portActions from '../../actions/portActions'

class PortfolioDev extends Component {

  render() {

    const { tabLandings, tabOldPort, tabSPA} = this.props.portActions
    const { tabName } = this.props.port
    const port = this.props.port.portfolio
    const terms = port.terms
    const text = port.dev[tabName]

    return (
      <div className='text-block'>
        <h2 className='title'>Portfolio</h2>
        <div className='desc-wrap'>
          <div
            className='project-name'
            onClick={tabLandings}>
            Lands
          </div>
          <div
            className='project-name'
            onClick={tabOldPort}>
            Old Portfolio
          </div>
          <div
            className='project-name'
            onClick={tabSPA}>
            SPA
          </div>
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
