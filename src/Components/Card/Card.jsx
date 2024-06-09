import React from 'react'
import "./Card.css"
import system from "/ReactJs/arclab-react/src/assets/system.png"

const Card = () => {
  return (
    <div className='card'>
      <div className="c2">
        <div className="card-pic">
            <img src={system} alt="" />
        </div>
        <div className="card-title">Design Process</div>
        <div className="card-paragraph"></div>
      </div>
      <div className="c1"></div>
      <div className="c2"></div>
      <div className="c1"></div>
    </div>
  )
}

export default Card
