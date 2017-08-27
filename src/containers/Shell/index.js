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
import * as langActions from '../../actions/langActions'

class Shell extends Component {
  render() {

    const lang = this.props.lang
    const UI = this.props.shell.UI
    const header = UI.header[lang]
    const middle = UI.middle[lang]
    const footer = UI.footer[lang]

    const { ownProps } = this.props
    const isPort = ( ownProps.location.pathname.indexOf('port') > 0 ) ? true : false
    const isAbout = ( ownProps.location.pathname.indexOf('about') > 0 ) ? true : false
    const isDes = ( ownProps.location.pathname.indexOf('des') > 0 ) ? true : false
    const isDev = ( ownProps.location.pathname.indexOf('dev') > 0 ) ? true : false
    const { changeLang } = this.props.langActions


    let MidGround = isPort || isAbout  ? <Picture/> : <ZenBox UI={middle}/>

    return (
      <div className={'shell enter '+ ( isDes ? 'des' : isDev ? 'dev' : '' ) + ( isPort ? ' port' : '' )}>
        <Header
          isDes={isDes}
          isDev={isDev}
          UI={header}/>
        <div className='content'>
          { this.props.children ? this.props.children : <Main />}
        </div>
        <Footer
          changeLang={changeLang}
          UI={footer}/>
        <Lines />
        {MidGround}
        <BackGround />
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    port: state.port,
    shell: state.shell,
    lang: state.lang.language,
    ownProps
  }
}

function mapDispatchToProps(dispatch) {
  return {
    langActions: bindActionCreators(langActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shell)
