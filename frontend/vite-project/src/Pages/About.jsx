import React from 'react'
import Layout from '../components/Layout/Layout'
import { FaReact, FaHeart } from 'react-icons/fa';
import './AboutUs.css';

const About = () => {
  return (
    <>
        <Layout title={"About Us-Ecommerce App"}></Layout>
        <div className="about-us-container">
      <h1>About Us</h1>
      <div className="about-info">
        <p>We are a passionate team dedicated to delivering high-quality products.</p>
        <p>Our mission is to make your online shopping experience enjoyable and hassle-free.</p>
      </div>
      <div className="animated-images">
        <img src="https://source.unsplash.com/random/200x200" alt="Random 1" />
        <img src="https://source.unsplash.com/random/200x201" alt="Random 2" />
        <img src="https://source.unsplash.com/random/200x202" alt="Random 3" />
      </div>
      <div className="react-icons">
        <FaReact className="react-icon" />
        <FaHeart className="react-icon" />
      </div>
    </div>
    </>
  )
}

export default About