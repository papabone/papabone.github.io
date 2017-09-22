import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './footer.css'
import { DevName  } from '../Header/Names'

export default class Footer extends Component {
  render() {
    const UI = this.props.UI
    const UIH = this.props.UIHeader
    const VW = this.props.VW
    return (
      <div className='footer'>
        <ul className='lang' onClick={::this.clicLangHandler}>
          <li
            className='ru'
            data-lang='ru'>
            {UI.ru}
          </li>
          <li
            className='en active'
            data-lang='en'>
            {UI.en}
          </li>
        </ul>
        <Link to='/portfolio-des' className='more-info about-des'>{UI.moreInf}	&nbsp; &#8595;</Link>
        <Link to='/portfolio-dev' className='more-info about-dev'>{UI.moreInf}	&nbsp; &#8595;</Link>
        {VW > 768 ? null : <DevName UI={UIH.dev}/>}
      </div>
    )
  }
  clicLangHandler(e){
    if (!e.target.dataset.lang) return;
    this.props.changeLang(e.target.dataset.lang)
    const allLang = e.currentTarget.children;
    for (var i = 0; i < allLang.length; i++) {
      allLang[i].classList.remove('active')
    }
    e.target.classList.add('active')
  }
}
Footer.propTypes = {
  changeLang: PropTypes.func.isRequired,
  UI : PropTypes.object.isRequired,
  UIHeader : PropTypes.object.isRequired,
  VW : PropTypes.number.isRequired
}
