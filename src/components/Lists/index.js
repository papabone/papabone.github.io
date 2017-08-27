import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './list.css'

export class ListDes extends Component {
  render() {
    const UI = this.props.UI
    return (
      <div className='list'>
        <ul className='list-des'>
          <li><Link to='/about-des'>{UI.about}</Link></li>
          <li><Link to='/portfolio-des'>{UI.portfolio}</Link></li>
        </ul>
      </div>
    )
  }
}

export class ListDev extends Component {
  render() {
    const UI = this.props.UI
    return (
      <div className='list'>
        <ul className='list-dev'>
          <li><Link to='/about-dev'>{UI.about}</Link></li>
          <li><Link to='/portfolio-dev'>{UI.portfolio}</Link></li>
        </ul>
      </div>
    )
  }
}
ListDes.propTypes = {
  UI : PropTypes.object.isRequired
}
ListDev.propTypes = {
  UI : PropTypes.object.isRequired
}
