import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DesName, DevName  } from './Names'
import Menu from '../../containers/Menu'
import './header.css'

export default class Header extends Component {

  render(){

    const UI = this.props.UI

    let Header = null
    if ( this.props.isDes ){
      Header = (
        <div>
          <DesName UI={UI.des}/>
          <Menu />
          <div className='keyword'><span>{UI.des.keyword}</span></div>
        </div>
      )
    } else if ( this.props.isDev ){
      Header = (
        <div>
          <div className='keyword'><span>{UI.dev.keyword}</span></div>
          <Menu />
          <DevName UI={UI.dev}/>
        </div>
      )
    } else {
      Header = (
        <div>
          <DesName UI={UI.des}/>
          <DevName UI={UI.dev}/>
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
  isDes : PropTypes.bool.isRequired,
  isDev : PropTypes.bool.isRequired,
  UI : PropTypes.object.isRequired
}
