import './contact.css';
import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    
    emailjs
      .sendForm(
        'service_priya', // Replace with your correct service ID
        'template_priya', // Replace with your correct template ID
        formRef.current,
        'Suc5jl1DhK1guff4t' // Replace with your correct API key
      )
      .then(
        (result) => {
          console.log(result.text);
          // You can add additional handling here if needed
        },
        (error) => {
          console.error(error);
          // Handle the error here, e.g., display an error message to the user
        }
      );
  
    e.target.reset();

    setTimeout(() => {
      setMessage(false);
    }, 5000);
  };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <div>priyakkrr21@gmail.com</div>
            <a href="mailto:priyakkrr21@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
