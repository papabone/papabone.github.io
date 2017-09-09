import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './e404.css'
import * as e404Actions from '../../actions/e404Actions'

class E404 extends Component {

  componentDidMount(){
    const { showError404 } = this.props.e404Actions
    showError404(true)
  }
  componentWillUnmount(){
    const { showError404 } = this.props.e404Actions
    showError404(false)
  }
  render() {
    return (
      <div className='e404'>
        <div className='error-title'>
          <div className='item four'><span>4</span></div>
          <div className='item zero'><span>0</span></div>
          <div className='item four'><span>4</span></div>
        </div>
        <div className='error-sibtitle'>
          Страница не найдена
        </div>
        <Link to='/'>http://www.zen-b.com</Link>
      </div>
    )
  }
}
function mapStateToProps () {
  return {
  }
}
function mapDispatchToProps(dispatch) {
  return {
    e404Actions: bindActionCreators(e404Actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(E404)
