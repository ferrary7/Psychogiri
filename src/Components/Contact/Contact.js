import React from "react";
import "./Contact.css";
import contactImage from "../../images/contact-img.svg";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form from submitting
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const message = event.target.message.value;
    const subject = "I wanted to tell you that...";
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ANumber: ${number}%0D%0AMessage: ${message}`; // %0D%0A represents a line break in the email body
    window.location.href = `mailto:33shubhambhatt@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>Contact</span> Us
      </h1>
      <div className="row">
        <div className="image">
          <img src={contactImage} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <span style={{ textAlign: "left" }}>Your Name.</span>
          <input
            type="text"
            required
            placeholder="Your Full Name"
            maxLength="50"
            name="name"
            className="box"
          />
          <span style={{ textAlign: "left" }}>Your Email.</span>
          <input
            type="email"
            required
            placeholder="Your Email"
            maxLength="50"
            name="email"
            className="box"
          />
          <span style={{ textAlign: "left" }}>Your Number.</span>
          <input
            type="tel"
            required
            placeholder="Your Mobile Number"
            name="number"
            className="box"
          />
          <span style={{ textAlign: "left" }}>Message.</span>
          <textarea
            required
            placeholder="Type your message here"
            maxLength="500"
            name="message"
            className="box"
          ></textarea>
          <input
            type="submit"
            value="Send Your Message"
            className="btn"
            name="send"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
