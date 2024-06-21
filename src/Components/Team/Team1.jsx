import React from 'react'
import "./Team1.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Team1 = () => {

  useGSAP(()=>{
    gsap.from('.pp1',{
      y:50,
      duration:0.35,
      delay:0.32,
      opacity:0,
      scrollTrigger:{
        trigger:".pp1",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.pp2',{
      y:50,
      duration:0.35,
      delay:0.34,
      opacity:0,
      scrollTrigger:{
        trigger:".pp2",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.pp3',{
      y:50,
      duration:0.35,
      delay:0.36,
      opacity:0,
      scrollTrigger:{
        trigger:".pp3",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.pp4',{
      y:50,
      duration:0.35,
      delay:0.38,
      opacity:0,
      scrollTrigger:{
        trigger:".pp4",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.pp5',{
      y:50,
      duration:0.35,
      delay:0.40,
      opacity:0,
      scrollTrigger:{
        trigger:".pp5",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.pp6',{
      y:50,
      duration:0.35,
      delay:0.42,
      opacity:0,
      scrollTrigger:{
        trigger:".pp6",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  useGSAP(()=>{
    gsap.from('.pp7',{
      y:50,
      duration:0.35,
      delay:0.44,
      opacity:0,
      scrollTrigger:{
        trigger:".pp7",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })


  useGSAP(()=>{
    gsap.from('.pp8',{
      y:50,
      duration:0.35,
      delay:0.46,
      opacity:0,
      scrollTrigger:{
        trigger:".pp8",
        scroller:"body",
        // markers:true,
        start:"top 92%"
      }
    })
  })

  return (
    <div className='teammm'>
    <div className='team1' >  
      <div className="person1 pp1">
        <div className="person-img">
          <div className="team1-person-name">
            <div className="team1-name">
            <div className="first-name">PENNY</div>
            <div className="last-name">ROBIONSON</div>
            </div>
          </div>
        </div>
        <div className="person-job">ARCHITECT</div>
      </div>
      <div className="person1 pp2">
      <div className="person-img1">
          <div className="team1-person-name">
            <div className="team1-name">
            <div className="first-name">JHON</div>
            <div className="last-name">ARRON</div>
            </div>
          </div>
        </div>
        <div className="person-job">ARCHITECT</div>
      </div>
      <div className="person1 pp3">
      <div className="person-img2">
          <div className="team1-person-name">
            <div className="team1-name">
            <div className="first-name">SANSA</div>
            <div className="last-name">STARK</div>
            </div>
          </div>
        </div>
        <div className="person-job">ARCHITECT</div>
      </div>
      <div className="person1 pp4">
      <div className="person-img3">
          <div className="team1-person-name">
            <div className="team1-name">
            <div className="first-name">JAIME</div>
            <div className="last-name">LANNISTER</div>
            </div>
          </div>
        </div>
        <div className="person-job">ARCHITECT</div>
      </div>
    </div>
    <div className='team1 team2' >  
      <div className="person1 pp5">
        <div className="person-img4">
          <div className="team1-person-name">
            <div className="team1-name">
            <div className="first-name">LORD</div>
            <div className="last-name">VARUS</div>
            </div>
          </div>
        </div>
        <div className="person-job">ARCHITECT</div>
      </div>
      <div className="person1 pp6">
      <div className="person-img5">
          <div className="team1-person-name">
            <div className="team1-name">
            <div className="first-name">RAMSAY</div>
            <div className="last-name">BOLTON</div>
            </div>
          </div>
        </div>
        <div className="person-job">ARCHITECT</div>
      </div>
      <div className="person1 pp7">
      <div className="person-img6">
          <div className="team1-person-name">
            <div className="team1-name">
            <div className="first-name">JORAH</div>
            <div className="last-name">MORMONT</div>
            </div>
          </div>
        </div>
        <div className="person-job">ARCHITECT</div>
      </div>
      <div className="person1 pp8">
      <div className="person-img7">
          <div className="team1-person-name">
            <div className="team1-name">
            <div className="first-name">AEGON</div>
            <div className="last-name">TARGARYEN</div>
            </div>
          </div>
        </div>
        <div className="person-job">ARCHITECT</div>
      </div>
    </div>
    </div>
  )
}

export default Team1
