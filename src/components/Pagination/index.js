import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './pagination.css'
import { Link } from 'react-router'

export default class Pagination extends Component {
  render() {
    const projects =  this.props.projects
    const filtredProjects = projects.filter( projects => projects.infoTipe == 'scrin')
    const project = this.props.project
    const UI = this.props.UI

    let prevProject = null
    let nextProject = null
    for (var i = 0; i < filtredProjects.length; i++) {
      if( filtredProjects[i].name == project.name ){
        i > 0 ? prevProject = filtredProjects[i - 1] :
          prevProject = filtredProjects[filtredProjects.length - 1]
        i == (filtredProjects.length - 1) ? nextProject = filtredProjects[0] :
          nextProject = filtredProjects[i + 1]
      }
    }

    return (
      <div
        className='pagination'>
        <Link
          to={'\/portfolio-des\/project-' + prevProject.name}
          className='control prev'>
          &larr; &nbsp; {UI.prev}
        </Link>
        <Link
          to={'\/portfolio-des\/project-' + nextProject.name}
          className='control next'>
          {UI.next}	&nbsp; &rarr;
        </Link>
      </div>
    )
  }
}

Pagination.propTypes = {
  projects: PropTypes.array.isRequired,
  project : PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
}
