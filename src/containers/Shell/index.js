import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../Main'
import Picture from '../../components/Picture'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ZenBox from '../../components/ZenBox'
import Lines from '../../components/Lines'
import BackGround from '../../components/BackGround'
import * as langActions from '../../actions/langActions'

class Shell extends Component {
  render() {

    const lang = this.props.lang
    const UI = this.props.shell.UI
    const header = UI.header[lang]
    const middle = UI.middle[lang]
    const footer = UI.footer[lang]
    const { changeLang } = this.props.langActions

    const { ownProps } = this.props
    const isPort = ( ownProps.location.pathname.indexOf('port') > 0 ) ? true : false
    const isAbout = ( ownProps.location.pathname.indexOf('about') > 0 ) ? true : false
    const isDes = ( ownProps.location.pathname.indexOf('des') > 0 ) ? true : false
    const isDev = ( ownProps.location.pathname.indexOf('dev') > 0 ) ? true : false
    const { isE404 } = this.props.e404
    const { menuIsOpen } = this.props.menu

    let MidGround = isPort || isAbout  ? <Picture/> : <ZenBox UI={middle}/>

    return (
      <div className={'shell enter '+
                      ( isDes ? 'des' : isDev ? 'dev' : '' ) +
                      ( isPort ? ' port' : '' ) +
                      ( isE404 ? ' isE404' : '' ) +
                      ( menuIsOpen ? ' menu' : '' )}>
        <Header
          isDes={isDes}
          isDev={isDev}
          UI={header}
          menuIsOpen={menuIsOpen}
          isHidden={ isE404 ? 'hidden' : '' }/>
        <div className='content'>
          { this.props.children ? this.props.children : <Main />}
        </div>
        <Footer
          changeLang={changeLang}
          UI={footer}/>
        <Lines
          isHidden={ isE404 || menuIsOpen? 'hidden' : '' }/>
        { isE404 || menuIsOpen ? null : MidGround }
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
    e404: state.e404,
    menu: state.menu,
    ownProps
  }
}

function mapDispatchToProps(dispatch) {
  return {
    langActions: bindActionCreators(langActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shell)
