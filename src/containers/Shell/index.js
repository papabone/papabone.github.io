import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import Main from '../Main'
import Picture from '../../components/Picture'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ZenBox from '../../components/ZenBox'
import Lines from '../../components/Lines'
import BackGround from '../../components/BackGround'
import { connect } from 'react-redux'
import * as appActions from '../../actions/appActions'

class Shell extends Component {

  render() {
    const { who, ownProps } = this.props
    const isPort = ownProps.location.pathname.indexOf('portfolio')

    let MidGround = who.who == 'main' ? <ZenBox /> : <Picture />;

    return (
      <div className={'shell ' + ( who.who == 'main' ? '' : who.who ) + ( isPort ? ' port' : '')}>
        <Header
          who={who.who}/>
        <div className='content'>
          { this.props.children ? this.props.children : <Main />}
        </div>
        <Footer />
        <Lines />
        {MidGround}
        <BackGround
          who={who.who}/>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    who: state.who,
    ownProps
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shell)
