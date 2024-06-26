import React from 'react'
import Main2 from '../Components/Main/Main2'
import Project1 from '/ReactJs/arclab-react/src/Components/Projects/Project1'
import Project2 from '/ReactJs/arclab-react/src/Components/Projects/Project2'
import Project3 from '/ReactJs/arclab-react/src/Components/Projects/Project3'
import Project4 from '/ReactJs/arclab-react/src/Components/Projects/Project4'
import Project5 from '/ReactJs/arclab-react/src/Components/Projects/Project5'
import Project6 from '/ReactJs/arclab-react/src/Components/Projects/Project6'
import Project7 from '../Components/Projects/Project7'
import Project8 from '../Components/Projects/Project8'
import Project9 from '../Components/Projects/Project9'
import Pagination from '../Components/Pagination/Pagination'


const Project = () => {
  return (
    <div>
      <Main2 heading="Projects" page="PROJECTS"/>
      <Project1/>
      <Project2/>
      <Project3/>
      <Project4/>
      <Project5/>
      <Project6/>
      <Project7/>
      <Project8/>
      <Project9/>
      <Pagination/>
    </div>
  )
}

export default Project
