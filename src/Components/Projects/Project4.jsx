import React from 'react'
import "./Project4.css"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import proj4 from "/ReactJs/arclab-react/src/assets/project4.webp"

gsap.registerPlugin(ScrollTrigger);

const Project2 = () => {

    useGSAP(()=>{
        gsap.from('.project4-text',{
          y:50,
          duration:0.35,
          delay:0.3,
          opacity:0,
          scrollTrigger:{
            trigger:".project4-text",
            scroller:"body",
            // markers:true,
            start:"top 92%"
          }
        })
      })

  return (
    <div className='project4'>
    <div className="project4-text">
      <div className="project1-bar"></div>
      <div className="project1-name">{"FURNITURE {12/07/2020}"}</div>
      <div className="project1-heading">Twin Office</div>
      <div className="project1-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</div>
      <div className="project1-portfolio">VIEW PORTFOLIO</div>
    </div>
    <div className="project1-pic">
      <img src={proj4} alt="" />
    </div>
  </div>
  )
}

export default Project2
