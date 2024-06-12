import React from 'react'
import "./Projects.css"
import Project1 from './Project1'

const Projects = () => {
  return (
    <div className='projects'>
      <div className="projects-heading">
        <div className="projects-head">
            <div className="line"></div>
            <span className="main1">PROJECTS</span>
            <div className="line"></div>
        </div>
        <div className="projects-main-head">Our Unique Latest Projects</div>
      </div>
      <Project1/>
    </div>
  )
}

export default Projects
