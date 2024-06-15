import React from 'react'
import './Price.css'
import pic1 from '/ReactJs/arclab-react/src/assets/project1.webp'
import pic2 from '/ReactJs/arclab-react/src/assets/project2.webp'
import pic3 from '/ReactJs/arclab-react/src/assets/project3.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Price = () => {
  return (
    <div className='price' >
      <div className="projects-heading pap">
        <div className="projects-head">
            <div className="line"></div>
            <span className="main1">PRICING</span>
            <div className="line"></div>
        </div>
        <div className="projects-main-head">&nbsp;&nbsp;&nbsp;&nbsp;Price & Plans</div>
      </div>
      <div className="price-card">
        <div className="price-card-body">
        <div className="price-card-img">
            <img src={pic1} alt="" />
        </div>
        <div className="price-card-text">
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Planning Solution
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            10 Construction Drawings
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Selection Materials
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Unlimited Revision
            </div>
        </div>
        <div className="price-card-btn">
            <div className="gs-price">
                <span id='cy' >$</span>
                <span id='p' >78</span>
                <span id='t' >/mon</span>
            </div>
            <div className="gs-btn">
                <button>GET STARTED</button>
            </div>
        </div>
        </div>
        <div className="price-card-body">
        <div className="price-card-img">
            <img src={pic2} alt="" />
        </div>
        <div className="price-card-text">
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Planning Solution
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            10 Construction Drawings
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Selection Materials
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Unlimited Revision
            </div>
        </div>
        <div className="price-card-btn">
            <div className="gs-price">
                <span id='cy' >$</span>
                <span id='p' >88</span>
                <span id='t' >/mon</span>
            </div>
            <div className="gs-btn">
                <button>GET STARTED</button>
            </div>
        </div>
        </div>
        <div className="price-card-body">
        <div className="price-card-img">
            <img src={pic3} alt="" />
        </div>
        <div className="price-card-text">
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Planning Solution
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            10 Construction Drawings
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Selection Materials
            </div>
            <div className="p1">
            <FontAwesomeIcon className='fa-icon' icon={faCircleCheck} size="1x" />
            Unlimited Revision
            </div>
        </div>
        <div className="price-card-btn">
            <div className="gs-price">
                <span id='cy'>$</span>
                <span id='p'>98</span>
                <span id='t'>/mon</span>
            </div>
            <div className="gs-btn">
                <button>GET STARTED</button>
            </div>
        </div>
        </div>
    
      </div>
    </div>
  )
}

export default Price
