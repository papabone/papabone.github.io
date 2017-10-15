import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//import NavLink from '../../components/NavLink'
import './menubtn.css'
import * as menuActions from '../../actions/menuActions'
import { routerActions } from 'react-router-redux'
import { Link } from 'react-router'

import {
  ENTER
} from '../../constants/key'

class MenuBtn extends Component {

  render(){
    const { menu } = this.props,
          lang = this.props.lang,
          UI = this.props.shell.UI.header[lang]

    const custlink = menu.menuIsOpen
      ? <span className='close-btn' tabIndex='0'/>
      : <Link to='/menu' title={''+UI.menu} />

    return (
      <div
        className={ 'menu-btn ' + (this.props.menu.menuIsOpen ? 'isOpend' : 'isClosed') }
        onClick={this.handleToggleMenu}
        onKeyDown={this.handleKeydown} >
          {custlink}
      </div>
    )
  }

  handleToggleMenu = (event) => {
        const { menu } = this.props,
        { go } = this.props.routerActions,
        shell = document.body.querySelector('.shell')
    if ( event.target.classList.contains('close-btn') ) {
      if(!menu.menuIsOpen)return;
      go(-1)
      shell.classList.add('leave')
    }

  }

  handleKeydown = (event) => {
    const { menu } = this.props,
          { go } = this.props.routerActions,
          shell = document.body.querySelector('.shell')
    if ( event.target.classList.contains('close-btn')
          || event.shiftKey
          || event.ctrlKey
          || event.altKey
          || event.metaKey ) {
        return
    }  else {
      switch (event.keyCode) {

        case ENTER:
          if(!menu.menuIsOpen)return;
          go(-1)
          shell.classList.add('leave')

          console.log('m')
          break

          default:
          break
      }
    }
  }

}

function mapStateToProps (state) {
  return {
    menu: state.menu,
    shell: state.shell,
    lang: state.lang.language,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    menuActions: bindActionCreators(menuActions, dispatch),
    routerActions: bindActionCreators(routerActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBtn)
