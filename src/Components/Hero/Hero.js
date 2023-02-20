import React from 'react';
import './Hero.css'
import image from '../../images/homg-img.svg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="row">
        <div className="content">
          <h3>
            Learn Mental Health with <span>Psychoshala</span>
          </h3>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
