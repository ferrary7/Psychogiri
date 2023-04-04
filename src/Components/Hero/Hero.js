import React from "react";
import "./Hero.css";
import image from "../../images/homg-img.svg";

const Home = () => {
  return (
    <div className="hero">
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>
              Psychology Club for All the <span>Practitioners</span>
            </h3>
          </div>
          <div className="image">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
