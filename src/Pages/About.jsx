import React from 'react'
import Main2 from '../Components/Main/Main2'
import Form from '../Components/Form/Form'
import Counter from '../Components/Counter/Counter'
import Price1 from '../Components/Price-plans/Price1'

const About = () => {
  return (
    <div>
      <Main2 heading="About Us" page="ABOUT US"/>
      <Form/>
      <Counter/>
      <Price1/>
    </div>
  )
}

export default About
