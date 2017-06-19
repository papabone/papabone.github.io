import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import InputAddLi from '../components/InputAddLi'
import Menu from '../components/menu'
import * as pageActions from '../actions/PageActions'
import * as userActions from '../actions/UserActions'
import * as inputAddLiActions from '../actions/InputAddLiActions'
import * as findLiActions from '../actions/FindLiActions'

class App extends Component {
  render() {
    const { user, page, inputAddLi, filtredLi, ownProps } = this.props
    const { getPhotos } = this.props.pageActions
    const { handleLogin } = this.props.userActions
    const { addLiFromInput } = this.props.inputAddLiActions
    const { findLi } = this.props.findLiActions

    console.log(ownProps)

    return(
    <div>
      <Menu />
      <Page
        photos={page.photos}
        year={page.year}
        getPhotos={getPhotos}
        fetching={page.fetching}
        error={page.error}
        name={user.name}/>
      <User
        name={user.name}
        handleLogin={handleLogin}
        error={user.error} />
      <InputAddLi
        inner={inputAddLi}
        addLiFromInput={addLiFromInput}
        filterdLi={filtredLi}
        findLi={findLi} />
    </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    user: state.user,
    page: state.page,
    inputAddLi: state.inputAddLi.filter( li => li.includes(state.filtredLi)),
    ownProps
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    inputAddLiActions: bindActionCreators(inputAddLiActions, dispatch),
    findLiActions: bindActionCreators(findLiActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
