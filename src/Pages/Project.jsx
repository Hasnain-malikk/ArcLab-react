import React from 'react'
import Main2 from '../Components/Main/Main2'
import Project1 from '/ReactJs/arclab-react/src/Components/Projects/Project1'
import Project2 from '/ReactJs/arclab-react/src/Components/Projects/Project2'
import Project3 from '/ReactJs/arclab-react/src/Components/Projects/Project3'
import Project4 from '/ReactJs/arclab-react/src/Components/Projects/Project4'
import Project5 from '/ReactJs/arclab-react/src/Components/Projects/Project5'


const Project = () => {
  return (
    <div>
      <Main2 heading="Projects" page="PROJECTS"/>
      <Project1/>
      <Project2/>
      <Project3/>
      <Project4/>
      <Project5/>
    </div>
  )
}

export default Project
