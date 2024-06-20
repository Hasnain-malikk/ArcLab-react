import React from 'react'
import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Card = () => {

    useGSAP(()=>{
        gsap.from('.effect1',{
          y:50,
          duration:0.3,
          delay:0.23,
          opacity:0,
          scrollTrigger:{
            trigger:".effect1",
            scroller:"body",
            // markers:true,
            start:"top 92%"
          }
        })
      })
      useGSAP(()=>{
        gsap.from('.effect2',{
          y:50,
          duration:0.3,
          delay:0.28,
          opacity:0,
          scrollTrigger:{
            trigger:".effect2",
            scroller:"body",
            // markers:true,
            start:"top 92%"
          }
        })
      })
      useGSAP(()=>{
        gsap.from('.effect3',{
          y:50,
          duration:0.3,
          delay:0.33,
          opacity:0,
          scrollTrigger:{
            trigger:".effect3",
            scroller:"body",
            // markers:true,
            start:"top 92%"
          }
        })
      })
      useGSAP(()=>{
        gsap.from('.effect4',{
          y:50,
          duration:0.35,
          delay:0.45,
          opacity:0,
          scrollTrigger:{
            trigger:".effect4",
            scroller:"body",
            // markers:true,
            start:"top 92%"
          }
        })
      })

      useGSAP(()=>{
        gsap.to(".card",{
          marginTop:"-123px",
          // duration:1,
          scrollTrigger:{
            trigger:".card",
            scroller:"body",
            // markers:true,
            start:"top 100%",
            // end:"top 50%",
            // pin:true
            // scrub:2



          }
        })
      })
      
  return (
    <div className='card'>
      <div className="c2" id='a'>
        <div className="effect1">

        <div className="card-pic">
        <FontAwesomeIcon className='icon' icon={faGears} />
        </div>
        <div className="card-title">Design Process</div>
        <div className="card-paragraph">
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </div>
      </div>
        </div>
      <div className="c2" id='b'>
        <div className="effect2">

      <div className="card-pic">
        <FontAwesomeIcon className='icon' icon={faPeopleGroup} />
        </div>
        <div className="card-title">Supervision</div>
        <div className="card-paragraph">
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </div>
      </div>
        </div>
      <div className="c2" id='c'>
        <div className="effect3">

      <div className="card-pic">
      <FontAwesomeIcon className='icon' icon={faBriefcase} />
        </div>
        <div className="card-title">Budget Planning</div>
        <div className="card-paragraph">
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </div>
      </div>
        </div>
      <div className="c2" id='d'>
        <div className="effect4">

      <div className="card-pic">
      <FontAwesomeIcon className='icon' icon={faHouseChimney} />
        </div>
        <div className="card-title">Build a Home For You</div>
        <div className="card-paragraph">
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </div>
      </div>
        </div>
    </div>
  )
}

export default Card
