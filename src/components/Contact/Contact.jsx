import React from 'react';
import { FaLocationArrow, FaPhoneAlt, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_fewi78f', // Replace with EmailJS service ID
        'template_v3mt8sf', // Replace with EmailJS template ID
        form.current,
        'ioJRtI-c_kD5a6Ile' // Replace with EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <div className="contact-container">
        <h1 className="contact-heading">CONTACT US</h1>
        <div className="contact-box">
          {/* Left Section */}
          <div className="contact-details">
            <div className="detail-item">
              <FaLocationDot className="icon" />
              <div>
                <h3>Location:</h3>
                <p>
                  MCT's Rajiv Gandhi Institute Of Technology,<br />
                  Juhu Versova Link Rd,<br />
                  Versova, Andheri West,<br />
                  Mumbai - 400053
                </p>
              </div>
            </div>

            <div className="detail-item">
              <FaPhoneAlt className="icon" />
              <div>
                <h3>Contact Info:</h3>
                <p>Prathamesh: +91 9920485637</p>
                <div className="social-icons">
                  <FaInstagram className="social-icon" onClick={() => window.open('https://www.instagram.com/prathamesh.kahar?igsh=Z3N0Z29iZnZuZG9r')} />
                  <FaLinkedin className="social-icon" onClick={() => window.open('https://www.linkedin.com/in/prathamesh-kahar-04a17527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} />
                  <SiGmail className="social-icon" onClick={() => window.open('mailto:prathmesh.kahar@gmail.com')} />
                </div>
                <p>Parth: +91 8767855711</p>
                <div className="social-icons">
                  <FaInstagram className="social-icon" onClick={() => window.open('https://www.instagram.com/parthkaskar?igsh=MThqaWNpaGR4Mnh4Zw==')} />
                  <FaLinkedin className="social-icon" onClick={() => window.open('https://www.linkedin.com/in/parth-kaskar-55a174306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} />
                  <SiGmail className="social-icon" onClick={() => window.open('mailto:parthkaskar08@gmail.com')} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="contact-form">
            <h2>Drop a Message</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                pattern="^[A-Za-z ]+$"
                title="Please enter a valid name (letters and spaces only)"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-z ]/g, '').slice(0, 30);
                }}
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No"
                required
                pattern="^\d{10}$"
                title="Please enter a valid 10-digit mobile number"
                onInput={(e) => {
                  // Remove non-digit characters and limit to 10 digits
                  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
