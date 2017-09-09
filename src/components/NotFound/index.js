import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './notFound.css'

class E404 extends Component {
  render() {
    return (
      <div className='e404'>
        <div className='title'>
          <div className='item four'><span>4</span></div>
          <div className='item zero'><span>0</span></div>
          <div className='item four'><span>4</span></div>
        </div>
        <div className='sibtitle'>
          Страница не найдена
        </div>
        <Link to='/'>http://www.zen-b.com</Link>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    langActions: bindActionCreators(langActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(E404)
