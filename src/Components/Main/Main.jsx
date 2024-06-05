import React from 'react'
import "./Main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  return (
    <div className='main'>
      <div className="content">
        <div className="main-bar">
          <div className="m-bar"></div>
        </div>
        <div className="main-heading">
          <div className="h1">Modern</div>
          <div className="h1">Innovative</div>
          <div className="h1">Architecture</div>
        </div>
        <div className="main-para">
          <div className="main-paragraph">
          From as low as $20 A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </div>
        </div>
        <div className="main-btn">
          <div className="btn1">
            <button>Explore Projects</button>
          </div>
          <div className="btn2">
            <div className="play"><FontAwesomeIcon icon={faPlay} /></div>
            <div className="watch">Watch the video</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
