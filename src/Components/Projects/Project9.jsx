import React from 'react'
import './Project9.css'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import proj9 from '/ReactJs/arclab-react/src/assets/project9.jpg'

gsap.registerPlugin(ScrollTrigger);

const Project9 = () => {

  useGSAP(()=>{
    gsap.from('.project9-text',{
      y:50,
      duration:0.35,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:".project9-text",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  return (
    <div className='project9'>
      <div className="project9-pic">
        <img src={proj9} alt="" />
      </div>
      <div className="project9-text">
        <div className="project9-bar"></div>
        <div className="project9-name">{"BUILDING {12/07/2020}"}</div>
        <div className="project9-heading">Decoration</div>
        <div className="project9-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</div>
        <div className="project9-portfolio">VIEW PORTFOLIO</div>
      </div>
    </div>
  )
}

export default Project9
