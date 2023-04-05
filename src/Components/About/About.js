import React from "react";
import image from "../../images/about-img1.svg";
import "./About.css";

function About() {
  return (
    <div className="aboutSuper">
      <section className="about" id="about">
        <div className="row">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <h3>What is Psychoshala?</h3>
            <p>
              Psychoshala acts as one stop solution to all your learning needs
              related to Psychology. ‌ ‌It is a club for students, aspiring
              practitioners, coaches, healers, psychologists and anyone who
              wants to learn and apply psychology concepts in their life.
            </p>
            <a href="#contact" className="btn">
              Contact Us!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
