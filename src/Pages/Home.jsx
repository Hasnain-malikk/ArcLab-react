import React from 'react'
import Main from '../Components/Main/Main'
import Card from '../Components/Card/Card'
import Form from '../Components/Form/Form'
import Counter from '../Components/Counter/Counter'

const Home = () => {
  return (
    <div>
      <Main/>
      <Card/>
      <Form/>
      {/* <hr style={{display:"inline-block", height:"70px"}}/> */}
      <Counter/>

    </div>
  )
}

export default Home
