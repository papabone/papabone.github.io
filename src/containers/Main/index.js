import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListDes, ListDev } from '../../components/Lists'
import './main.css'

class Main extends Component {

  render() {

    const lang = this.props.lang
    const des = this.props.main.UI.des[lang]
    const dev = this.props.main.UI.dev[lang]

    return (
      <div className='main hidden-sm'>
        <ListDes UI={des}/>
        <ListDev UI={dev}/>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    main: state.main,
    lang: state.lang.language
  }
}
export default connect(mapStateToProps)(Main)
