import React from 'react'
import './Project5.css'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import proj5 from '/ReactJs/arclab-react/src/assets/project5.webp'

gsap.registerPlugin(ScrollTrigger);

const Project1 = () => {

  useGSAP(()=>{
    gsap.from('.project5-text',{
      y:50,
      duration:0.35,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:".project5-text",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  return (
    <div className='project5'>
      <div className="project5-pic">
        <img src={proj5} alt="" />
      </div>
      <div className="project5-text">
        <div className="project5-bar"></div>
        <div className="project5-name">{"BUILDING {12/07/2020}"}</div>
        <div className="project5-heading">Cultural Complex</div>
        <div className="project5-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</div>
        <div className="project5-portfolio">VIEW PORTFOLIO</div>
      </div>
    </div>
  )
}

export default Project1
