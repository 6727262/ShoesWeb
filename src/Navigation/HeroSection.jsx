import React from "react";

const HeroSection = () => {
  return (
    <>
      <main className="main-container container">
        <div className="hero-content ">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        <div className="btn">
            <button type="button" className="sm">Shop Now</button>
            <button id="ct">Category</button>
        </div>
        <div className="info">
            <p>Also available on</p>
         
<div className="brand-icons">
<img src="../src/Images/flipkart.png" alt="flipkart" />
<img src="../src/Images/amazon.png" alt="amazon" />
</div>
</div>



        </div>

        <div className="hero-img">
        <img src="../src/Images/shoe_image.png" alt="" />
      </div>
      </main>

     
    </>
  );
};

export default HeroSection;
