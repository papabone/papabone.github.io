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

    const custlink = menu.menuIsOpen ? null : <Link to='/menu' title={''+UI.menu} onFocus={this.handleFocus} onBlur={this.handleBlur}/>

    return (
      <div
        className={ 'menu-btn ' + (this.props.menu.menuIsOpen ? 'isOpend' : 'isClosed') }
        onClick={this.handleToggleMenu}
        tabIndex={ this.props.menu.menuIsOpen ? '0' : '-1' }
        onKeyDown={this.handleKeydown} >
        <div
          className='arrow-for-button'>
          {custlink}
          <button tabIndex='-1'></button>
        </div>
      </div>
    )
  }

  handleToggleMenu = (event) => {
        const { menu } = this.props,
        { go } = this.props.routerActions,
        shell = document.body.querySelector('.shell')
    if ( event.target.tagName == 'BUTTON'
    || event.target.classList.contains('arrow-for-button') ) {
      if(!menu.menuIsOpen)return;
      go(-1)
      shell.classList.add('leave')
    }

  }

  handleKeydown = (event) => {
    const { menu } = this.props,
          { go } = this.props.routerActions,
          shell = document.body.querySelector('.shell')
    if (   event.target.tagName == 'BUTTON'
          || event.target.classList.contains('arrow-for-button')
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

  handleFocus = (event) => {
    if ( event.target.nextElementSibling.tagName == 'BUTTON' ){
      event.target.nextElementSibling.classList.add('focus')
    }
  }
  handleBlur = (event) => {
    if ( event.target.nextElementSibling.tagName == 'BUTTON' ){
      event.target.nextElementSibling.classList.remove('focus')
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
