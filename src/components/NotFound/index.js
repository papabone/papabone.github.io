import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
  render() {
    return (
      <div className='e404'>
        <div className='title'>404</div>
        <div>
          Страница не найдена. Вернуться на <Link to='/'>главную</Link>?
        </div>
      </div>
    )
  }
}
