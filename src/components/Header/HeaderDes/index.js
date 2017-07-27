import React, { Component } from 'react'
import { DesName } from '../Names'
import Menu from '../../../containers/Menu'

export default class HeaderDes extends Component {
  render(){
    return (
      <div className='head-wrap'>
        <DesName />
        <Menu />
      </div>
    )
  }
}
