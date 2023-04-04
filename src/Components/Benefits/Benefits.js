import React from "react";
import image from "../../images/course-1.svg";
import "./Benefits.css";

function Benefits() {
  return (
    <div className="bSuper">
      <section className="bAbout" id="bAbout">
        <div className="bRow">
          <div className="bImage">
            <img src={image} alt="" />
          </div>
          <div className="bContent">
            <h3>Extra Benefits</h3>
            <p>
              <ul>
                <li> 👉 30% off on Certificate Courses </li>
                <li> 👉 ‌20% off on all Offline Retreats </li>
                <li> 👉 20% off on all our Merchandise </li>
              </ul>
            </p>
            <button
              className="pricingButton"
              onClick={() => {
                window.open(
                  "https://pages.razorpay.com/pl_LYzxUpMLG0AlCA/view",
                  "_blank"
                );
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Benefits;
