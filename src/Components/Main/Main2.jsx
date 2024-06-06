import React from 'react'
import "./Main2.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Main2 = () => {
  return (
    <div className='main2'>
     <div className="main2-content">
      <div className="main2-breadcrumb">
        <Link className='link' to="/">HOME</Link><span><FontAwesomeIcon className='greater' icon={faGreaterThan} /></span><span style={{fontSize:"14px",fontWeight:"500"}} >ABOUT US</span><span><FontAwesomeIcon className='greater'  icon={faGreaterThan} /></span>
      </div>
      <div className="main2-heading">About Us</div>
     </div>
    </div>
  )
}

export default Main2
