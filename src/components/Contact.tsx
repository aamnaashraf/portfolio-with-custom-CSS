import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="contact-heading" data-aos="zoom-in-up">Get in touch</h2>
          <p className="contact-description" data-aos="zoom-in-up">
            I am always excited to collaborate on interesting projects or hear new ideas. Whether you have a question or just want to say hello, feel free to reach out! 
            I aim to respond within 24 hours.
          </p>
          <div className="contact-item" data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> aamnaashraf501@gmail.com
          </div>
          <div className="contact-item" data-aos="zoom-in-up">
            <BsTelephone size={30} /> 03342570180
          </div>
        </div>
        <div className="contact-form">
          <div className="input-field" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="input-field" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="input-field" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" rows={8}></textarea>
          </div>
          <button className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
