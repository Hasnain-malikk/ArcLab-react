import React from 'react'
import "./Form.css"
import formPic from "/ReactJs/arclab-react/src/assets/form-pic.webp"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Form = () => {

  useGSAP(()=>{
    gsap.from('.form-text',{
      y:50,
      duration:0.35,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:".form-text",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })
  useGSAP(()=>{
    gsap.from('.form-box',{
      y:50,
      duration:0.35,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:".form-box",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })
  useGSAP(()=>{
    gsap.from('.form-btn',{
      y:50,
      duration:0.35,
      delay:0.3,
      opacity:0,
      scrollTrigger:{
        trigger:".form-box",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })
  // useGSAP(()=>{
  //   gsap.from('.form-head',{
  //     y:50,
  //     duration:0.35,
  //     delay:0.3,
  //     opacity:0,
  //     scrollTrigger:{
  //       trigger:".form-box",
  //       scroller:"body",
  //       // markers:true,
  //       start:"top 92%"
  //     }
  //   })
  // })

  return (
    <div className='form'>
      <div className="form-text">
        <div className="form-heading">ArchLab</div>
        <div className="form-para1">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
        <div className="form-para2" style={{marginBottom:"15px"}} >On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</div>
      </div>
      <div className="form-pic">
        <img src={formPic} alt="" />
      </div>
      <div className="form-contact">
        <div className="form-head">
          <div className="normal">BE PART OF OUR BUSINESS</div>
          <div className="bold">Request A Quote</div>
        </div>
        <div className="form-box">
          <input className='inpt' type="text" placeholder='First Name' />
          <input className='inpt' type="text" placeholder='Last Name' />
          <input className='inpt' type="text" placeholder='Select Your Services' />
          <input className='inpt' type="text" placeholder='Phone' />
          <input className='inpt' type="text" placeholder='Message' />
        </div>
        <div className="form-btn">
          <button>Request A Quote</button>
        </div>
      </div>
    </div>
  )
}

export default Form
