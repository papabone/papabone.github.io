import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NavLink from '../../components/NavLink'
import './menu.css'
import * as menuActions from '../../actions/menuActions'

import {
  ESC
} from '../../constants/key'

class Menu extends Component {

  render(){

    return (
    <nav
      className={ 'menu ' + (this.props.menu.menuIsOpen ? 'isOpend' : '') }
      onClick={this.handleToggleMenu}
      onKeyDown={this.handleKeydown}
      //onBlur={this.handleBlur}
    >
      <div
        className='arrow-for-button'>
        <button></button>
      </div>
      <ul>
        <li><NavLink to='/portfolio-des'>Portfolio</NavLink></li>
        <li><NavLink to='/about-des'>About</NavLink></li>
        <li><NavLink to='/' onlyActiveOnIndex={true}>Main</NavLink></li>
        <li><NavLink to='/about-dev'>About</NavLink></li>
        <li><NavLink to='/portfolio-dev'>Portfolio</NavLink></li>
      </ul>
    </nav>
    )
  }

  handleToggleMenu = (event) => {
    const { menu } = this.props,
          { openMenu, closeMenu } = this.props.menuActions
    if ( event.target.tagName == 'BUTTON'
    || event.target.classList.contains('arrow-for-button') ) {
      menu.menuIsOpen ? closeMenu() : openMenu()
    }

  }

  handleBlur = (event) => {
    const { closeMenu } = this.props.menuActions
    event.currentTarget.contains(event.relatedTarget) ? '' : closeMenu()
  }

  handleKeydown = (event) => {
    const { closeMenu } = this.props.menuActions

    if ( event.shiftKey || event.ctrlKey || event.altKey  || event.metaKey ) {
        return
    }

    else {
      switch (event.keyCode) {

        case ESC:
          closeMenu()
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    menuActions: bindActionCreators(menuActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
