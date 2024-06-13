import React from 'react'
import './Project3.css'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import proj3 from '/ReactJs/arclab-react/src/assets/project3.webp'

gsap.registerPlugin(ScrollTrigger);

const Project1 = () => {

  useGSAP(()=>{
    gsap.from('.project3-text',{
      y:50,
      duration:0.35,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:".project3-text",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  return (
    <div className='project3'>
      <div className="project3-pic">
        <img src={proj3} alt="" />
      </div>
      <div className="project3-text">
        <div className="project3-bar"></div>
        <div className="project3-name">{"BUILDING {12/07/2020}"}</div>
        <div className="project3-heading">Cultural Complex</div>
        <div className="project3-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</div>
        <div className="project3-portfolio">VIEW PORTFOLIO</div>
      </div>
    </div>
  )
}

export default Project1
