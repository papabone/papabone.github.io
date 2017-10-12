import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DesName, DevName  } from './Names'
import MenuBtn from '../../containers/MenuBtn'
import ProjectBtn from '../../components/ProjectBtn'
import './header.css'

export default class Header extends Component {

  render(){

    const UI = this.props.UI
    const isHidden = this.props.isHidden

    let Header = null
    if ( this.props.projectIsOpen ){
      Header = (
        <div>
          <DesName UI={UI.des}/>
          <ProjectBtn />
        </div>
      )
    } else if ( this.props.isDes ){
      Header = (
        <div>
          <DesName UI={UI.des}/>
          <MenuBtn />
          <div className='keyword'><span>{UI.des.keyword}</span></div>
        </div>
      )
    } else if ( this.props.isDev ){
      Header = (
        <div>
          <div className='keyword'><span>{UI.dev.keyword}</span></div>
          <MenuBtn />
          <DevName UI={UI.dev}/>
        </div>
      )
    } else if ( this.props.menuIsOpen ){
      Header = (
        <div>
          <h2 className='title'><span>{UI.menu}</span></h2>
          <MenuBtn />
        </div>
      )
    } else {
      Header = (
        <div>
          <DesName UI={UI.des}/>
          <DevName UI={UI.dev}/>
          <MenuBtn />
        </div>
      )
    }

    return (
      <div className={'header ' + isHidden}>
        {Header}
      </div>
    )

  }

}

Header.propTypes = {
  isDes : PropTypes.bool.isRequired,
  isDev : PropTypes.bool.isRequired,
  UI : PropTypes.object.isRequired,
  isHidden: PropTypes.string.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  projectIsOpen: PropTypes.bool.isRequired,
}
