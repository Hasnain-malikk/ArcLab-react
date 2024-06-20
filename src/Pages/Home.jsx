import React from 'react'
import Main from '../Components/Main/Main'
import Card from '../Components/Card/Card'
import Form from '../Components/Form/Form'
import Counter from '../Components/Counter/Counter'
import Projects from '../Components/Projects/Projects'
import Price from '../Components/Price-plans/Price'
import RecentBlog from '../Components/Recent-blog/RecentBlog'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

const Home = () => {

  // useGSAP(()=>{
  //   gsap.to(".Homeee",{
  //     scrollTrigger:{
  //       trigger:".main",
  //       scroller:"body",
  //       markers:true,
  //       start:"top 0",
  //       scrub:5
  //     }
  //   })
  // })

  return (
    <div className='Homeee'>
      <Main/>
      <Card/>
      <Form/>
      <Counter/>
      <Projects/>
      <Price/>
      <RecentBlog/>
    
    </div>
  )
}

export default Home
