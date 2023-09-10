import './contact.css';
import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
  });

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.user_name) {
      newErrors.user_name = 'Please enter your full name';
    }
    if (!formData.user_email) {
      newErrors.user_email = 'Please enter your email address';
    } else if (!isValidEmail(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length === 0) {
      setMessage(true);

      emailjs
        .sendForm(
          'service_priya',
          'template_priya',
          formRef.current,
          'Suc5jl1DhK1guff4t'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.error(error);
          }
        );

      e.target.reset();

      setTimeout(() => {
        setMessage(false);
      }, 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages
        <br />
        and will respond asap if the valid email is provided :)
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
            onChange={handleChange}
          />
          {errors.user_name && <span className="error">{errors.user_name}</span>}
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
            onChange={handleChange}
          />
          {errors.user_email && <span className="error">{errors.user_email}</span>}
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
            onChange={handleChange}
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