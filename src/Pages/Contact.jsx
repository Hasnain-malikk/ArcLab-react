import React from 'react'
import Main2 from '../Components/Main/Main2'
import ContactForm from '../Components/ContactForm/ContactForm'
import Heading from '../Components/Heading/Heading'
import ContactAdress from '../Components/ContactAdress/ContactAdress'

const Contact = () => {
  return (
    <div>
      <Main2 heading="Contact us" page="CONTACT US" />
      <ContactForm/>
      <Heading/>
      <ContactAdress/>
    </div>
  )
}

export default Contact
