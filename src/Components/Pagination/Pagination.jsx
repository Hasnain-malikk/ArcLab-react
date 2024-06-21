import React from 'react'
import './Pagination.css'

const Pagination = () => {
  return (
    <div className='pagination'>
      <div className="pagi">{`<`}</div>
      <div className="pagi" id='active'  >1</div>
      <div className="pagi">2</div>
      <div className="pagi">3</div>
      <div className="pagi">4</div>
      <div className="pagi">5</div>
      <div className="pagi">{`>`}</div>
    </div>
  )
}

export default Pagination
