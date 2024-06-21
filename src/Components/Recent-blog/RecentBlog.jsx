import React from 'react'
import "./RecentBlog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import img1 from "/ReactJs/arclab-react/src/assets/img-1.webp"
import img2 from "/ReactJs/arclab-react/src/assets/img-2.webp"
import img3 from "/ReactJs/arclab-react/src/assets/img-3.webp"
import img4 from "/ReactJs/arclab-react/src/assets/img-4.webp"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const RecentBlog = ({id}) => {
  
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
    gsap.from('.bc1',{
      y:50,
      duration:0.35,
      delay:0.32,
      opacity:0,
      scrollTrigger:{
        trigger:".bc1",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.bc2',{
      y:50,
      duration:0.35,
      delay:0.34,
      opacity:0,
      scrollTrigger:{
        trigger:".bc2",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.bc3',{
      y:50,
      duration:0.35,
      delay:0.36,
      opacity:0,
      scrollTrigger:{
        trigger:".bc3",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.bc4',{
      y:50,
      duration:0.35,
      delay:0.38,
      opacity:0,
      scrollTrigger:{
        trigger:".bc4",
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
      <div className="blog-cards">
        <div className="b-card bc1">
          <div className="blog-card-pic">
            <img src={img1} alt="" />
          </div>
          <div className="blog-card-date">JUNE 01, 2020 ADMIN  &nbsp; <FontAwesomeIcon icon={faComment} size="1x" />&nbsp; 3</div>
          <div className="blog-card-heading">Make Peace With Your Broken Pieces</div>
        </div>
        <div className="b-card bc2">
        <div className="blog-card-pic">
            <img src={img2} alt="" />
          </div>
          <div className="blog-card-date">JUNE 01, 2020 ADMIN  &nbsp; <FontAwesomeIcon icon={faComment} size="1x" />&nbsp; 3</div>
          <div className="blog-card-heading">Make Peace With Your Broken Pieces</div>
        </div>
        <div className="b-card bc3">
        <div className="blog-card-pic">
            <img src={img3} alt="" />
          </div>
          <div className="blog-card-date">JUNE 01, 2020 ADMIN  &nbsp; <FontAwesomeIcon icon={faComment} size="1x" />&nbsp; 3</div>
          <div className="blog-card-heading">Make Peace With Your Broken Pieces</div>
        </div>
        <div className="b-card bc4">
        <div className="blog-card-pic">
            <img src={img4} alt="" />
          </div>
          <div className="blog-card-date">JUNE 01, 2020 ADMIN  &nbsp; <FontAwesomeIcon icon={faComment} size="1x" />&nbsp; 3</div>
          <div className="blog-card-heading">Make Peace With Your Broken Pieces</div>
        </div>
      </div>
    </div>
  )
}

export default RecentBlog
