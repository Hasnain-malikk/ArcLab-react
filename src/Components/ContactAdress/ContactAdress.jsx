import React from 'react'
import "./ContactAdress.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactAdress = () => {
  return (
    <div className='contact-address'>
      <div className="c-address">
        <div className="c-pic">
        <FontAwesomeIcon icon={faMap} size='1.5x' id='map-icon' />
        </div>
        <div className="c-head">Address</div>
        <div className="c-para">
            <div>198 West 21th Street, Suite</div>
            <div>721 New York NY 10016</div>
        </div>
      </div>
      <div className="c-phone">
      <div className="c-pic">
        <FontAwesomeIcon icon={faPhone} size='1.5x' id='map-icon' />
        </div>
        <div className="c-head">Phone</div>
        <div className="c-para">
            <div>+ 1235 2355 98</div>
            {/* <div>721 New York NY 10016</div> */}
        </div>
      </div>
      <div className="c-email">
      <div className="c-pic">
        <FontAwesomeIcon icon={faPaperPlane} size='1.5x' id='map-icon' />
        </div>
        <div className="c-head">Email</div>
        <div className="c-para">
            <div>info@yoursite.com</div>
            {/* <div>721 New York NY 10016</div> */}
        </div>
      </div>
    </div>
  )
}

export default ContactAdress
