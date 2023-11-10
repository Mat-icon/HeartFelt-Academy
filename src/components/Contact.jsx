import React, { useState } from 'react'
import Person from '../assests/pngegg.png'

function Contact() {

    const[form, setForm] = useState({
        fullName : '',
        email : '',
        text : ''
    })


    function handleSubmit(e){
        e.preventDefault();

        console.log('Form Data', form)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
  return (
    <div className="contact-body" id='contact'>
        <div className="contact-title">
            <h2>Need Any Help?</h2>
        </div>
        <div className="contact-flex">
              <img src={Person} alt=''/>
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <div className="form-title">
                    <h3>Contact Us</h3>
                    <span>Application & Enquiries</span>
                </div>
                <input placeholder='Full name' name = 'fullName' value={form.fullName} onChange={handleChange} type='text' required/> 
                <input placeholder='Email' name = 'email' value={form.email} type='email' onChange={handleChange} required/> 
                <textarea rows={10} cols={20} name=  'text' placeholder='Write a message...' onChange={handleChange} value={form.text} required />
                <button className='contact-send' type='submit' >Send a message</button>
            </form>
        </div>
        </div>
      
    </div>
  )
}

export default Contact