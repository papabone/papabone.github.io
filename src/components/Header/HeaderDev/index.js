import React, { Component } from 'react'
import { DevName } from '../Names'
import Menu from '../../../containers/Menu'

export default class HeaderDev extends Component {
  render(){
    return (
      <div className='head-wrap'>
        <Menu />
        <DevName />
      </div>
    )
  }
}
