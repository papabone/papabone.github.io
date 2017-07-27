import React, { Component } from 'react'
import { DesName, DevName } from '../Names'

export default class HeaderMain extends Component {
  render(){
    return (
      <div className='head-wrap'>
        <DesName />
        <DevName />
      </div>
    )
  }
}
