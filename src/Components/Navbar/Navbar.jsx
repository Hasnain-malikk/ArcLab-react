import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useGSAP(()=>{
  //   gsap.to(".navbar",{
  //     position:"fixed",
  //     boxShadow: "0 0 5px 0px rgba(0,0,0,0.5)",
  //     backgroundColor:"white",
  //     height:"5%",
  //     // transition:"0.3 all ease-out",
  //     scrollTrigger:{
  //       trigger:".stnav",
  //       scroller:"body",
  //       markers:true,
  //       start:"top 30%",
  //       // end:"top 70%"
  //     }
  //   })
  // })

  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <Link className='brand' id='title' to="#">ArcLab.</Link>

      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
        <Link to="/services">Services</Link>
        <Link to="/project">Project</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
