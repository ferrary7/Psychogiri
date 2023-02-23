import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import course1 from "../../images/course-2.svg";
import course2 from "../../images/course-4.svg";
import course3 from "../../images/course-5.svg";
import course4 from "../../images/course-1.svg";

SwiperCore.use([Pagination]);

function Courses() {
  return (
    <div className="courseSuper">
      <section className="courses" id="courses">
        <h1 className="heading">
          Our <span>Courses!</span>
        </h1>
        <Swiper
          className="course-slider"
          spaceBetween={20}
          grabCursor={true}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            540: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide className="slide">
            <img src={course1} alt="" />
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique, repellat!
            </p>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img src={course2} alt="" />
            <h3>Mathematics with Shubham</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique, repellat!
            </p>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img src={course3} alt="" />
            <h3>Physics with Aryan</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique, repellat!
            </p>
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img src={course4} alt="" />
            <h3>Mental Health - Main</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique, repellat!
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default Courses;
