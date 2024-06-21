import React from 'react'
import Main2 from '../Components/Main/Main2'
import ServiceCards from '../Components/Service-cards/ServiceCards'
import Price1 from '../Components/Price-plans/Price1'

const Services = () => {
  return (
    <div>
      <Main2 heading="Services" page="SERVICES" />
      <ServiceCards/>
      <Price1/>
    </div>
  )
}

export default Services
