import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="nike-about-us-container">
      <h1>About Nike</h1>
      <p>
        At Nike, we believe in the power of sport to inspire and unite. Our mission is to bring innovation and inspiration to every athlete in the world.
      </p>
      <div className="mission-vision">
        <h2>Our Mission</h2>
        <p>To create groundbreaking sports innovations, by making products more sustainable and accessible.</p>
        <h2>Our Vision</h2>
        <p>To remain the most authentic, connected, and distinctive brand in the world.</p>
      </div>
      <div className="product-gallery">
        <h2>Iconic Products</h2>
        <div className="product-item">
          <img src="https://m.media-amazon.com/images/I/615zuAmxr0L._SY625_.jpg" alt="Nike Air Max" />
          <h3>Nike Air Max</h3>
        </div>
        <div className="product-item">
          <img src="https://m.media-amazon.com/images/I/71XWmB0HhyL._SY625_.jpg" alt="Nike Dunk" />
          <h3>Nike Dunk</h3>
        </div>
        <div className="product-item">
          <img src="https://sneakernews.com/wp-content/uploads/2021/05/nike-dunk-low-team-red-white-1.jpg" alt="Nike React" />
          <h3>Nike React</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;