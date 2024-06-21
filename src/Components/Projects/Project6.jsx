import React from 'react'
import "./Project6.css"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import proj6 from "/ReactJs/arclab-react/src/assets/project6.jpg"

gsap.registerPlugin(ScrollTrigger);

const Project6 = () => {

    useGSAP(()=>{
        gsap.from('.project6-text',{
          y:50,
          duration:0.35,
          delay:0.3,
          opacity:0,
          scrollTrigger:{
            trigger:".project6-text",
            scroller:"body",
            // markers:true,
            start:"top 92%"
          }
        })
      })

  return (
    <div className='project6'>
    <div className="project6-text">
      <div className="project1-bar"></div>
      <div className="project1-name">{"FURNITURE {12/07/2020}"}</div>
      <div className="project1-heading">Twin Office</div>
      <div className="project1-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</div>
      <div className="project1-portfolio">VIEW PORTFOLIO</div>
    </div>
    <div className="project1-pic">
      <img src={proj6} alt="" />
    </div>
  </div>
  )
}

export default Project6
