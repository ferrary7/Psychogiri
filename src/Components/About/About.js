import React from 'react';
import image from '../../images/about-img.svg'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="row">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>Why Choose Psychogiri?</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum sint distinctio, ex consectetur dolores
            voluptatum aut et iure. Reiciendis illo explicabo labore suscipit perferendis praesentium. Excepturi non,
            neque aliquid placeat corrupti illum blanditiis et ad.
          </p>
          <a href="#contact" className="btn">
            Contact Us!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
