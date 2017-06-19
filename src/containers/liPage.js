import React from 'react'
import { connect } from 'react-redux'
import Menu from '../components/menu'

const LiPage = ({li, ownProps}) => {
  console.log(ownProps);
  return (
    <div>
      <Menu />
      <div>{li}</div>
    </div>
  )
};


function mapStateToProps (state, ownProps) {
  return {
    li: state.inputAddLi.find(inputAddLi => inputAddLi === ownProps.params.idm ),
    ownProps
  }
}

export default connect(mapStateToProps)(LiPage)
