import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "./ContactMe.css";

export function ContactMe() {
  const clearForm = () => {
    setFormData({
      email: '',
      message: ''
    });
  };
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = (e) => {
    if(formData.email !== '' && formData.message !== ''){
      e.preventDefault();
      setIsSending(true);
      emailjs.send(
        'service_1821iix',
        'template_bc3thh8',
        formData,
        '4cOsCjXcgzNunLLbS'
      ).then(() => {
        setIsSending(false);
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
      }).catch((err) => {
        setIsSending(false);
      });
    }
  };

  return (
    <div className="mainContainer contact-me-mainholder">
      <div id="contactMe" className="contact-me-container">
        <div className="sub-page-title">{'constactMe'}</div>
        <input
          type="text"
          className="contact-me-input"
          placeholder={'senderContact'}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          rows="4"
          className="contact-me-input"
          placeholder={'yourMessage'}
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          id="sendMessage"
          onClick={handleSendMessage}
          className={isSending ? 'sending' : isSent ? 'sent' : ''}
        >
          {isSending ? 'sending' : isSent ? 'sent' : 'send'}
        </button>
      </div>
    </div>
  );
}

