import React from "react";
import Img1 from "../assests/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg";
import Go from '../assests/appotg.jpg'
import Coding from '../assests/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg'
import Teach from '../assests/teach1.webp'

function Service() {
  return (
    <div className="service-body" id="services">
      <div className="service-polygon">
        <div className="service-title">
          <h2>Services We Offer</h2>
        </div>

        {/* Wrap the service cards in a container div */}
        <div className="service-container">
          <div className="serv-card">
          <div className="service-card">
            <img src={Go} alt="" />
            <div className="service-name">
              <p>Software on the Go for SME</p>
            </div>
          </div>

          {/* Second service card */}
          <div className="service-card2">
            <img src={Coding} alt="" />
            <div className="service-name">
              <p>App and Web Development</p>
            </div>
          </div>

          {/* Third service card */}
          <div className="service-card3">
            <img src={Teach} alt="" />
            <div className="service-name">
              <p>Programming Language Training</p>
            </div>
          </div>
          </div>
          <div className="apply-body">
            <div className="apply-img">
              <img src={Img1} alt="" />
            </div>
            <div className="apply-content">
              <div className="apply-container">
                 <h2>Apply for Admission</h2>
              <span>Fall 2023 applications are now avaliable</span>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
                you need to be sure there isn't anything embarrassing hidden in the middle of text</p>

                <button className='apply-btn'>Apply Now</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
