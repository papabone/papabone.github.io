import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './project.css'
import * as portActions from '../../actions/portActions'
import Pagination from '../../components/Pagination'

class Project extends Component {
  componentDidMount(){
    this.props.portActions.openProject()
  }
  componentWillUnmount(){
    this.props.portActions.closeProject()
  }
  render() {

    const lang = this.props.lang
    const port = this.props.port.portfolio.des
    const projects = port.projects[lang]
    const UI = port.UI[lang]
    const project = projects.filter( projects => projects.name == this.props.params.project)[0]

    if (!project) location.replace('/#/e404')

    let bannerImg = null
    try {
      bannerImg = require( './banner-' + project.name + '.jpg' )
    } catch(e) {
      bannerImg = require( './banner-default.jpg' )
      console.log('requireError banner')
    }
    const bannerStyle = {
      backgroundImage: 'url(' + bannerImg + ')'
    }

    const bgColor = project.bgColor
    const presentationStyle = {
      backgroundColor: bgColor,
    }

    const image = []
    if ( project.quantityOfImg > 0 ){
      for (var j = 1; j <= project.quantityOfImg; j++) {
        try {
          let img = require( './kurortguru/'+ j +'.jpg' )
          image.push(img)
        } catch(e) {
          console.log('requireError img №'+j)
        }
      }
    }

    return (
      <div
        className='presentation'
        style={presentationStyle}>
        <div
          className='banner'
          style={bannerStyle}/>
        <div className='text-block'>
          <h2 className='title'><span>{project.title}</span></h2>
          <div className='desc'>{project.shortDesc}</div>
        </div>
        <Pagination
          projects={projects}
          project={project}
          UI={UI}/>
        <div className='image'>
          {
            image.map((item, index) =>
              <div key={index}><img key={index} src={item}/></div>
            )
          }
        </div>
        <div
          className='pseudo-footer'>
          <Pagination
            projects={projects}
            project={project}
            UI={UI}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    port: state.port,
    lang: state.lang.language
  }
}

function mapDispatchToProps(dispatch) {
  return {
    portActions: bindActionCreators(portActions, dispatch)
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(Project)
