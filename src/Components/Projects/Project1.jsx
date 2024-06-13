import React from 'react'
import './Project1.css'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import proj1 from '/ReactJs/arclab-react/src/assets/project1.webp'

gsap.registerPlugin(ScrollTrigger);

const Project1 = () => {

  useGSAP(()=>{
    gsap.from('.project1-text',{
      y:50,
      duration:0.35,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:".project1-text",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  return (
    <div className='project'>
      <div className="project1-pic">
        <img src={proj1} alt="" />
      </div>
      <div className="project1-text">
        <div className="project1-bar"></div>
        <div className="project1-name">{"EXTERIOR {12/07/2020}"}</div>
        <div className="project1-heading">Geometric Building</div>
        <div className="project1-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</div>
        <div className="project1-portfolio">VIEW PORTFOLIO</div>
      </div>
    </div>
  )
}

export default Project1
