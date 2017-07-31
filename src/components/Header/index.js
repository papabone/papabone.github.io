import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DesName, DevName  } from './Names'
import Menu from '../../containers/Menu'
import './header.css'

export default class Header extends Component {
  render(){

    let Header = null
    if ( this.props.who == 'des' ){
      Header = (
        <div>
          <DesName />
          <Menu />
          <div className='keyword'><span>Web development. Graphic design.</span></div>
        </div>
      )
    } else if ( this.props.who == 'dev' ){
      Header = (
        <div>
          <div className='keyword'><span>Web development. Graphic design.</span></div>
          <Menu />
          <DevName />
        </div>
      )
    } else {
      Header = (
        <div>
          <DesName />
          <DevName />
        </div>
      )
    }

    return (
      <div className='header'>
        {Header}
      </div>
    )

  }
}

Header.propTypes = {
  who: PropTypes.string.isRequired
}
