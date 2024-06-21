import React from 'react'
import './Project7.css'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import proj3 from '/ReactJs/arclab-react/src/assets/project7.jpg'

gsap.registerPlugin(ScrollTrigger);

const Project7 = () => {

  useGSAP(()=>{
    gsap.from('.project7-text',{
      y:50,
      duration:0.35,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:".project7-text",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  return (
    <div className='project7'>
      <div className="project7-pic">
        <img src={proj3} alt="" />
      </div>
      <div className="project7-text">
        <div className="project7-bar"></div>
        <div className="project7-name">{"BUILDING {12/07/2020}"}</div>
        <div className="project7-heading">Cultural Complex</div>
        <div className="project7-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</div>
        <div className="project7-portfolio">VIEW PORTFOLIO</div>
      </div>
    </div>
  )
}

export default Project7
