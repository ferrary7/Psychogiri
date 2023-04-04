import React from "react";
import image from "../../images/course-2.svg";
import "./Join.css";

function Join() {
  return (
    <div className="joinSuper">
      <section className="joinAbout" id="joinAbout">
        <div className="joinRow">
          <div className="joinContent">
            <h3>Why join Psychoshala?</h3>
            <p>
              <ul>
                <li> 👉 Weekly Discussions on Important Concepts </li>
                <li> 👉 ‌Buddy Practice sessions </li>
                <li> 👉 ‌Get E-books, PDFs and Ppts </li>
                <li> 👉 ‌Free Access to Short Workshops ‌ </li>
                <li> 👉 Opportunity to Conduct Sessions ‌ </li>
              </ul>
            </p>
            <a href="#contact" className="JoinBtn">
              Contact Us!
            </a>
          </div>
          <div className="joinImage">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Join;
