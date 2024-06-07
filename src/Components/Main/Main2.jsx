import React from 'react'
import "./Main2.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { useGSAP } from '@gsap/react';
import gsap from "gsap"

const Main2 = ({heading,page}) => {

  useGSAP(()=>{
    gsap.from('.main2-content',{
      y:50,
      duration:0.4,
      delay:0.4,
      opacity:0
    })
  })

  return (
    <div className='main2'>
     <div className="main2-content">
      <div className="main2-breadcrumb">
        <Link className='link' to="/">HOME</Link><span><FontAwesomeIcon className='greater' icon={faGreaterThan} /></span><span style={{fontSize:"12px",fontWeight:"500",color:"rgba(0, 0, 0, 0.7)"}} >{page}</span><span><FontAwesomeIcon className='greater'  icon={faGreaterThan} /></span>
      </div>
      <div className="main2-heading">{heading}</div>
     </div>
    </div>
  )
}

export default Main2
