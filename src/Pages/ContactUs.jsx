// ContactUs.js

import React from 'react';
import './ContactUs.css';
import emailjs from 'emailjs-com'; 
import Layout from '../Layout/Layout';

const ContactUs = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_g91yxp7','template_4iwkdwo',e.target,'pUheTyZY8Au058-HG'
        ).then(res=>{
            alert("Email Sent Successfully!!")
            console.log(res);
        }).catch(err=>console.log(err));
    }
  return (
    <Layout>
    <div className="contact-us-container">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={sendEmail}>
      
        <label >Name</label>
        <input type="text" id="name" name="name" placeholder="Enter name"/>

        <label >Email</label>
        <input type="email" id="email" name="user_email"  placeholder="Enter email"/>

        <label >Message</label>
        <textarea id="message" name="message" rows="4" placeholder="Write your message here"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
    </Layout>
  );
};

export default ContactUs;