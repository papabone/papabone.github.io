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
import {
  ENTER
} from '../../constants/key'

class Shell extends Component { 
  render() {

    const lang = this.props.lang
    const UI = this.props.shell.UI
    const header = UI.header[lang]
    const middle = UI.middle[lang]
    const footer = UI.footer[lang]
    const { changeLang } = this.props.langActions

    const { ownProps, port } = this.props
    const isPort = ( ownProps.location.pathname.indexOf('port') > 0 ) ? true : false
    const isAbout = ( ownProps.location.pathname.indexOf('about') > 0 ) ? true : false
    const isDes = ( ownProps.location.pathname.indexOf('des') > 0 ) ? true : false
    const isDev = ( ownProps.location.pathname.indexOf('dev') > 0 ) ? true : false
    const { isE404 } = this.props.e404
    const { menuIsOpen } = this.props.menu
    const isProject = port.projectIsOpen ? true : false

    let MidGround = isPort || isAbout  ? <Picture/> : <ZenBox UI={middle}/>

    return (
      <div
        onKeyDown={this.handleKeydown}
        className={'shell enter '+
                      ( isDes ? 'des' : isDev ? 'dev' : '' ) +
                      ( isPort ? ' port' : '' ) +
                      ( isE404 ? ' isE404' : '' ) +
                      ( menuIsOpen ? ' menu' : '' ) +
                      ( isProject ? ' project' : '' ) }>
        <Header
          isDes={isDes}
          isDev={isDev}
          UI={header}
          menuIsOpen={menuIsOpen}
          projectIsOpen={isProject}
          isHidden={ isE404 ? 'hidden' : '' } />
        <div className='content'>
          { this.props.children ? this.props.children : <Main />}
        </div>
        <Footer
          changeLang={changeLang}
          UI={footer}
          UIHeader={header}/>
        <Lines
          isHidden={ isE404 || menuIsOpen || isProject ? 'hidden' : '' }/>
        { isE404 || menuIsOpen || isProject ? null : MidGround }
        <BackGround />
      </div>
    )
  }

  handleKeydown = (event) => {
    if (  event.target.classList.contains('menu-btn')
          || event.shiftKey
          || event.ctrlKey
          || event.altKey
          || event.metaKey ) {
        return
    }  else {
      switch (event.keyCode) {

        case ENTER:
          event.target.click();
          console.log('s')
          break

        default:
          break
      }
    }
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
