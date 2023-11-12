import React, { useState } from 'react'
import Person from '../assests/pngegg.png'


function Contact() {
    const [form, setForm] = useState({
      fullName: '',
      email: '',
      text: '',
    });


  
    function handleSubmit(e) {
        e.preventDefault();
          const config = {
     SecureToken : '24c57912-1ec0-4929-b9b0-3fbaaf4d2598',
      To : 'matthewameh007@gmail.com',
      From : form.email,
      Subject : 'thanks for contacting',
      Body : form.text
    }
        // Perform any additional form validation here
     if(window.Email){
      window.Email.send(config).then(() => alert('email sent sucessfully'))
     }
    
      }
      
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    return (
      <div className="contact-body" id="contact">
        <div className="contact-title">
          <h2>Need Any Help?</h2>
        </div>
        <div className="contact-flex">
          <img src={Person} alt="Person" />
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-title">
                <h3>Contact Us</h3>
                <span>Application & Enquiries</span>
              </div>
              <input
                placeholder="Full name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                type="text"
                required
              />
              <input
                placeholder="Email"
                name="email"
                value={form.email}
                type="email"
                onChange={handleChange}
                required
              />
              <textarea
                rows={10}
                cols={20}
                name="text"
                placeholder="Write a message..."
                onChange={handleChange}
                value={form.text}
                required
              />
              <button className="contact-send" type="submit">
                Send a message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  