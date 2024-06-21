import React from 'react'
import "./RecentBlog1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import img5 from "/ReactJs/arclab-react/src/assets/img-5.jpg"
import img6 from "/ReactJs/arclab-react/src/assets/img-6.jpg"
import img7 from "/ReactJs/arclab-react/src/assets/img-7.jpg"
import img8 from "/ReactJs/arclab-react/src/assets/img-8.jpg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const RecentBlog1 = ({id}) => {
  
  useGSAP(()=>{
    gsap.from('.rb',{
      y:50,
      duration:0.35,
      delay:0.32,
      opacity:0,
      scrollTrigger:{
        trigger:".rb",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.bc5',{
      y:50,
      duration:0.35,
      delay:0.32,
      opacity:0,
      scrollTrigger:{
        trigger:".bc5",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.bc6',{
      y:50,
      duration:0.35,
      delay:0.34,
      opacity:0,
      scrollTrigger:{
        trigger:".bc6",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.bc7',{
      y:50,
      duration:0.35,
      delay:0.36,
      opacity:0,
      scrollTrigger:{
        trigger:".bc7",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.bc8',{
      y:50,
      duration:0.35,
      delay:0.38,
      opacity:0,
      scrollTrigger:{
        trigger:".bc8",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  return (
    <div className='recent-blog'>
      <div className="projects-heading rb" id={id} >
        <div className="projects-head">
            <div className="line"></div>
            <span className="main1">Blog</span>
            <div className="line"></div>
        </div>
        <div className="projects-main-head">&nbsp;&nbsp;Recent Blog</div>
      </div>
      <div className="blog-cards mrg">
        <div className="b-card bc5">
          <div className="blog-card-pic">
            <img src={img5} alt="" />
          </div>
          <div className="blog-card-date">JUNE 01, 2020 ADMIN  &nbsp; <FontAwesomeIcon icon={faComment} size="1x" />&nbsp; 3</div>
          <div className="blog-card-heading">Make Peace With Your Broken Pieces</div>
        </div>
        <div className="b-card bc6">
        <div className="blog-card-pic">
            <img src={img6} alt="" />
          </div>
          <div className="blog-card-date">JUNE 01, 2020 ADMIN  &nbsp; <FontAwesomeIcon icon={faComment} size="1x" />&nbsp; 3</div>
          <div className="blog-card-heading">Make Peace With Your Broken Pieces</div>
        </div>
        <div className="b-card bc7">
        <div className="blog-card-pic">
            <img src={img7} alt="" />
          </div>
          <div className="blog-card-date">JUNE 01, 2020 ADMIN  &nbsp; <FontAwesomeIcon icon={faComment} size="1x" />&nbsp; 3</div>
          <div className="blog-card-heading">Make Peace With Your Broken Pieces</div>
        </div>
        <div className="b-card bc8">
        <div className="blog-card-pic">
            <img src={img8} alt="" />
          </div>
          <div className="blog-card-date">JUNE 01, 2020 ADMIN  &nbsp; <FontAwesomeIcon icon={faComment} size="1x" />&nbsp; 3</div>
          <div className="blog-card-heading">Make Peace With Your Broken Pieces</div>
        </div>
      </div>
    </div>
  )
}

export default RecentBlog1
