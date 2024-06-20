import React from 'react'
import './Price.css'
import pic1 from '/ReactJs/arclab-react/src/assets/project1.webp'
import pic2 from '/ReactJs/arclab-react/src/assets/project2.webp'
import pic3 from '/ReactJs/arclab-react/src/assets/project3.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Price1 = () => {

    useGSAP(()=>{
        gsap.from('.paap',{
          y:50,
          duration:0.35,
          delay:0.32,
          opacity:0,
          scrollTrigger:{
            trigger:".paap",
            scroller:"body",
            // markers:true,
            start:"top 92%"
          }
        })
      })

      useGSAP(()=>{
        gsap.from('.b1',{
          y:50,
          duration:0.35,
          delay:0.32,
          opacity:0,
          scrollTrigger:{
            trigger:".b1",
            scroller:"body",
            // markers:true,
            start:"top 92%"
          }
        })
      })

      useGSAP(()=>{
        gsap.from('.b2',{
          y:50,
          duration:0.35,
          delay:0.34,
          opacity:0,
          scrollTrigger:{
            trigger:".b2",
            scroller:"body",
            // markers:true,
            start:"top 92%"
          }
        })
      })

      useGSAP(()=>{
        gsap.from('.b3',{
          y:50,
          duration:0.35,
          delay:0.36,
          opacity:0,
          scrollTrigger:{
            trigger:".b3",
            scroller:"body",
            // markers:true,
            start:"top 92%"
          }
        })
      })

  return (
    <div className='price' >
      <div className="projects-heading pap paap">
        <div className="projects-head">
            <div className="line"></div>
            <span className="main1">PRICING</span>
            <div className="line"></div>
        </div>
        <div className="projects-main-head">&nbsp;&nbsp;&nbsp;&nbsp;Price & Plans</div>
      </div>
      <div className="price-card">
        <div className="price-card-body b1">
        <div className="price-card-img">
            <img src={pic1} alt="" />
        </div>
        <div className="price-card-text">
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Planning Solution
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            10 Construction Drawings
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Selection Materials
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Unlimited Revision
            </div>
        </div>
        <div className="price-card-btn">
            <div className="gs-price">
                <span id='cy' >$</span>
                <span id='p' >78</span>
                <span id='t' >/mon</span>
            </div>
            <div className="gs-btn">
                <button>GET STARTED</button>
            </div>
        </div>
        </div>
        <div className="price-card-body b2">
        <div className="price-card-img">
            <img src={pic2} alt="" />
        </div>
        <div className="price-card-text">
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Planning Solution
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            10 Construction Drawings
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Selection Materials
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Unlimited Revision
            </div>
        </div>
        <div className="price-card-btn">
            <div className="gs-price">
                <span id='cy' >$</span>
                <span id='p' >88</span>
                <span id='t' >/mon</span>
            </div>
            <div className="gs-btn">
                <button>GET STARTED</button>
            </div>
        </div>
        </div>
        <div className="price-card-body b3">
        <div className="price-card-img">
            <img src={pic3} alt="" />
        </div>
        <div className="price-card-text">
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Planning Solution
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            10 Construction Drawings
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Selection Materials
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Unlimited Revision
            </div>
        </div>
        <div className="price-card-btn">
            <div className="gs-price">
                <span id='cy'>$</span>
                <span id='p'>98</span>
                <span id='t'>/mon</span>
            </div>
            <div className="gs-btn">
                <button>GET STARTED</button>
            </div>
        </div>
        </div>
    
      </div>
    </div>
  )
}

export default Price1
