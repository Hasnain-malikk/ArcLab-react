import React from 'react'
import "./Projects.css"
import Project1 from './Project1'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  useGSAP(()=>{
    gsap.from('.projects-heading',{
      y:50,
      duration:0.35,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:".projects-heading",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

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
