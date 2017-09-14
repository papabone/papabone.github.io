import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NavLink from '../../components/NavLink'
import './menu.css'
import * as menuActions from '../../actions/menuActions'

class Menu extends Component {
  componentDidMount(){
    this.props.menuActions.openMenu()
  }
  componentWillUnmount(){
    this.props.menuActions.closeMenu()
  }
  render(){
    const lang = this.props.lang,
          UI = this.props.menu.UI[lang]
    return (
      <ul>
        <li>
          <NavLink to='/' onlyActiveOnIndex={true}>
            {UI.main.title}
            <p className='desc'>{UI.main.desc}</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/about-des'>
            {UI.desAbout.title}
            <p className='desc'>{UI.desAbout.desc}</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/portfolio-des'>
            {UI.desPort.title}
            <p className='desc'>{UI.desPort.desc}</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/about-dev'>
            {UI.devAbout.title}
            <p className='desc'>{UI.devAbout.desc}</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/portfolio-dev'>
            {UI.devPort.title}
            <p className='desc'>{UI.devPort.desc}</p>
          </NavLink>
        </li>
      </ul>
    )
  }

}

function mapStateToProps (state) {
  return {
    menu: state.menu,
    lang: state.lang.language,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    menuActions: bindActionCreators(menuActions, dispatch),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Menu)
