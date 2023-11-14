import React, { useState } from 'react';
import Person from '../assests/pngegg.png';
import axios from 'axios';


function Contact() {

    const[form, setForm] = useState({
        fullName : '',
        email : '',
        text : ''
    })

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3001/send-email', form);
        console.log(response.data);
  
        // Handle success or display an error to the user
      } catch (error) {
        console.error('Error sending email:', error);
      }
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