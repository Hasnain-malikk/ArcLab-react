import React from 'react'
import Main from '../Components/Main/Main'
import Card from '../Components/Card/Card'
import Form from '../Components/Form/Form'
import Counter from '../Components/Counter/Counter'
import Projects from '../Components/Projects/Projects'
import Price from '../Components/Price-plans/Price'
import RecentBlog from '../Components/Recent-blog/RecentBlog'


const Home = () => {
  return (
    <div>
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
