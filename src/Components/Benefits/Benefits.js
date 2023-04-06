import React, { useState, useEffect } from "react";
import image from "../../images/benefits.svg";
import "./Benefits.css";

function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const benefitsList = [
    { text: "👉 30% off on Certificate Courses", color: "red" },
    { text: "👉 20% off on all Offline Retreats", color: "green" },
    { text: "👉 20% off on all our Merchandise", color: "orange" },
  ];

  return (
    <div className="bSuper">
      <section className="bAbout" id="bAbout">
        <div className="bRow">
          <div className="bImage">
            <img src={image} alt="" />
          </div>
          <div className="bContent">
            <h3>Extra Benefits 🤩</h3>
            <p>
              <ul>
                {benefitsList.map((item, index) => (
                  <li
                    key={index}
                    className={index === activeIndex ? "active" : ""}
                    style={{
                      color: index === activeIndex ? item.color : "initial",
                      transform:
                        index === activeIndex ? "scale(1.2)" : "scale(1)",
                    }}
                  >
                    {item.text}
                  </li>
                ))}
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
