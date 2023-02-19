import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './Review.css';
import user1 from '../../images/pic-1.png';
import user2 from '../../images/pic-2.png';
import user3 from '../../images/pic-3.png';
import user4 from '../../images/pic-4.png';
import user5 from '../../images/pic-2.png';


function Reviews() {
  const swiperContainer = React.useRef(null);

  React.useEffect(() => {
    new Swiper(swiperContainer.current, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        Reviews from <span>Students!</span>
      </h1>

      <div className="swiper reviews-slider" ref={swiperContainer}>
        <div className="swiper-wrapper">
          <div className="swiper-slide slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              necessitatibus atque fuga delectus numquam consequatur velit autem
              distinctio possimus culpa!
            </p>
            <div className="user">
              <img src={user1} alt="" />
              <div className="user-info">
                <h3>Aryan Sharma</h3>
                <div className="stars">
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>


          <div className="swiper-slide slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              necessitatibus atque fuga delectus numquam consequatur velit autem
              distinctio possimus culpa!
            </p>
            <div className="user">
              <img src={user2} alt="" />
              <div className="user-info">
                <h3>Neel Patel</h3>
                <div className="stars">
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star-half-alt">⭐</i>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              necessitatibus atque fuga delectus numquam consequatur velit autem
              distinctio possimus culpa!
            </p>
            <div className="user">
              <img src={user3} alt="" />
              <div className="user-info">
                <h3>Rajat Gaur</h3>
                <div className="stars">
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star-half-alt">⭐</i>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              necessitatibus atque fuga delectus numquam consequatur velit autem
              distinctio possimus culpa!
            </p>
            <div className="user">
              <img src={user4} alt="" />
              <div className="user-info">
                <h3>Aryan Sharma</h3>
                <div className="stars">
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide slide">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              necessitatibus atque fuga delectus numquam consequatur velit autem
              distinctio possimus culpa!
            </p>
            <div className="user">
              <img src={user5} alt="" />
              <div className="user-info">
                <h3>Chirag Cawda</h3>
                <div className="stars">
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star">⭐</i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Reviews;
