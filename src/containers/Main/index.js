import React, { Component } from 'react'
import { ListDes, ListDev } from '../../components/Lists'
import './main.css'

export default class Main extends Component {

  render() {
    return (
      <div className='main'>
        <ListDes />
        <ListDev />
      </div>
    )
  }
}
