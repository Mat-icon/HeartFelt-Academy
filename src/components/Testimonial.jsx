import React from "react";
import Test from "../assests/teach2.png";


function ImageCarousel() {
  return (
    <div className="client-body">
      <div className="client-title">
        <h3>Some Reviews from <br/><span>Our Students</span></h3>
      </div>
      <div className="c-design">&#8220;</div>
      <div className="client-container">
        <div className="c-card">
          <div className="c-u-content">
            <img src={Test} alt=""/>
            <p>John Doe</p>
          </div>
          <div className="c-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>

        <div className="c-card">
          <div className="c-u-content">
            <img src={''} alt=""/>
            <p>John Doe</p>
          </div>
          <div className="c-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>

        <div className="c-card">
          <div className="c-u-content">
            <img src={''} alt=""/>
            <p>John Doe</p>
          </div>
          <div className="c-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className="c-design2">&#8220;</div>
    </div>
  );
}

export default ImageCarousel;
