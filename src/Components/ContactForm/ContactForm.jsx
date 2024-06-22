import React from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <div className="form-body">
        <input type="text" placeholder='Your Name' />
        <input type="text" placeholder='Your Email' />
        <input type="text" placeholder='Subject' />
        <textarea name="message" id="" placeholder='Message'></textarea>
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default ContactForm
