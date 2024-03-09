import React from 'react'
import Layout from '../components/Layout/Layout'
import './ContactUs.css';

const Contact = () => {
  return (
    <>
    <Layout title={"Contact-Ecommerce App"}></Layout>
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <h2>Send us a message</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
</>
  )
}

export default Contact