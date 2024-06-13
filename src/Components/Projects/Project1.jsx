import React from 'react'
import './Project1.css'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Project1 = ({name,heading,pic}) => {

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
        <img src={pic} alt="" />
      </div>
      <div className="project1-text">
        <div className="project1-bar"></div>
        <div className="project1-name">{name}</div>
        <div className="project1-heading">{heading}</div>
        <div className="project1-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</div>
        <div className="project1-portfolio">VIEW PORTFOLIO</div>
      </div>
    </div>
  )
}

export default Project1
