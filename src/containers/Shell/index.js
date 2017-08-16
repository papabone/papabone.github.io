import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import Main from '../Main'
import Picture from '../../components/Picture'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ZenBox from '../../components/ZenBox'
import Lines from '../../components/Lines'
import BackGround from '../../components/BackGround'
import { connect } from 'react-redux'
import * as appActions from '../../actions/appActions'

class Shell extends Component {
  render() {
    const { ownProps } = this.props
    const isPort = ( ownProps.location.pathname.indexOf('port') > 0 ) ? true : false
    const isAbout = ( ownProps.location.pathname.indexOf('about') > 0 ) ? true : false
    const isDes = ( ownProps.location.pathname.indexOf('des') > 0 ) ? true : false
    const isDev = ( ownProps.location.pathname.indexOf('dev') > 0 ) ? true : false

    let MidGround = isPort || isAbout  ? <Picture/> : <ZenBox />

    return (
      <div className={'shell enter '+ ( isDes ? 'des' : isDev ? 'dev' : '' ) + ( isPort ? ' port' : '' )}>
        <Header
          isDes={isDes}
          isDev={isDev}/>
        <div className='content'>
          { this.props.children ? this.props.children : <Main />}
        </div>
        <Footer />
        <Lines />
        {MidGround}
        <BackGround />
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    who: state.who,
    port: state.port,
    ownProps
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shell)
