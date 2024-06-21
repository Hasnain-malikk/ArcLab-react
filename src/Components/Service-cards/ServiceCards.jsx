import React from 'react'
import "./ServiceCards.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { faTreeCity } from '@fortawesome/free-solid-svg-icons';
import { faMenorah } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faDungeon } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

const ServiceCards = () => {
  return (
    <>
    <div className='service-cards top'>
      <div className="s-card">
        <div className="service-img">
        <FontAwesomeIcon icon={faListCheck} className="my-icon"/>
        </div>
        <div className="service-heading">Planning</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card">
      <div className="service-img">
      <FontAwesomeIcon icon={faChair} className="my-icon" />
        </div>
        <div className="service-heading">Interior Design</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card">
      <div className="service-img">
        <FontAwesomeIcon icon={faCouch} className="my-icon"/>
        </div>
        <div className="service-heading">Exterior Design</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card"><div className="service-img">
        <FontAwesomeIcon icon={faTreeCity} className="my-icon"/>
        </div>
        <div className="service-heading">Decoration</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div></div>
    </div>
    <div className='service-cards bottom'>
      <div className="s-card">
        <div className="service-img">
        <FontAwesomeIcon icon={faMenorah} className="my-icon"/>
        </div>
        <div className="service-heading">Furniture</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card">
      <div className="service-img">
        <FontAwesomeIcon icon={faCopy} className="my-icon"/>
        </div>
        <div className="service-heading">Consultation</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card">
      <div className="service-img">
        <FontAwesomeIcon icon={faDungeon} className="my-icon"/>
        </div>
        <div className="service-heading">Restoration</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
      </div>
      <div className="s-card"><div className="service-img">
        <FontAwesomeIcon icon={faBuilding} className="my-icon"/>
        </div>
        <div className="service-heading">Building</div>
        <div className="service-paragraph">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div></div>
    </div>
    </>
  )
}

export default ServiceCards
