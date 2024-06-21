import React from 'react'
import "./ServiceCards.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faTreeCity } from '@fortawesome/free-solid-svg-icons';
import { faMenorah } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faDungeon } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const ServiceCards = () => {

  useGSAP(()=>{
    gsap.from('.sc1',{
      y:50,
      duration:0.35,
      delay:0.32,
      opacity:0,
      scrollTrigger:{
        trigger:".sc1",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.sc2',{
      y:50,
      duration:0.35,
      delay:0.34,
      opacity:0,
      scrollTrigger:{
        trigger:".sc2",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.sc3',{
      y:50,
      duration:0.35,
      delay:0.36,
      opacity:0,
      scrollTrigger:{
        trigger:".sc3",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.sc4',{
      y:50,
      duration:0.35,
      delay:0.38,
      opacity:0,
      scrollTrigger:{
        trigger:".sc4",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.sc5',{
      y:50,
      duration:0.35,
      delay:0.40,
      opacity:0,
      scrollTrigger:{
        trigger:".sc5",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.sc6',{
      y:50,
      duration:0.35,
      delay:0.42,
      opacity:0,
      scrollTrigger:{
        trigger:".sc6",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.sc7',{
      y:50,
      duration:0.35,
      delay:0.44,
      opacity:0,
      scrollTrigger:{
        trigger:".sc7",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })


  useGSAP(()=>{
    gsap.from('.sc8',{
      y:50,
      duration:0.35,
      delay:0.46,
      opacity:0,
      scrollTrigger:{
        trigger:".sc8",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  return (
    <>
    <div className='service-cards top'>
      <div className="s-card sc1">
        <div className="service-img">
        <FontAwesomeIcon icon={faListCheck} className="my-icon"/>
        </div>
        <div className="service-heading">Planning</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card sc2">
      <div className="service-img">
      <FontAwesomeIcon icon={faChair} className="my-icon" />
        </div>
        <div className="service-heading">Interior Design</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card sc3">
      <div className="service-img">
        <FontAwesomeIcon icon={faCouch} className="my-icon"/>
        </div>
        <div className="service-heading">Exterior Design</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card sc4">
        <div className="service-img">
        <FontAwesomeIcon icon={faTreeCity} className="my-icon"/>
        </div>
        <div className="service-heading">Decoration</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div></div>
    </div>
    <div className='service-cards bottom'>
      <div className="s-card sc5">
        <div className="service-img">
        <FontAwesomeIcon icon={faMenorah} className="my-icon"/>
        </div>
        <div className="service-heading">Furniture</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card sc6">
      <div className="service-img">
        <FontAwesomeIcon icon={faCopy} className="my-icon"/>
        </div>
        <div className="service-heading">Consultation</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card sc7">
      <div className="service-img">
        <FontAwesomeIcon icon={faDungeon} className="my-icon"/>
        </div>
        <div className="service-heading">Restoration</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card sc8"><div className="service-img">
        <FontAwesomeIcon icon={faBuilding} className="my-icon"/>
        </div>
        <div className="service-heading">Building</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div></div>
    </div>
    </>
  )
}

export default ServiceCards
