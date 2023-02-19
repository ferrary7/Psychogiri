import React from 'react';
import './Contact.css';
import contactImage from '../../images/contact-img.svg';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading"><span>Contact</span> Us</h1>
      <div className="row">
        <div className="image">
          <img src={contactImage} alt="" />
        </div>
        <form action="" method="post">
          <span style={{ textAlign: 'left' }}>Your Name.</span>
          <input type="text" required placeholder="Your Full Name" maxLength="50" name="name" className="box" />
          <span style={{ textAlign: 'left' }}>Your Email.</span>
          <input type="email" required placeholder="Your Email" maxLength="50" name="email" className="box" />
          <span style={{ textAlign: 'left' }}>Your Number.</span>
          <input type="tel" required placeholder="Your Mobile Number" className="box" />
          <span style={{ textAlign: 'left' }}>Select Your Course.</span>
          <select name="courses" className="box" required>
            <option value="" disabled selected>Select Your Course! --</option>
            <option value="loremIpsum">Lorem Ipsum</option>
            <option value="mathematics">Mathematics with Shubham</option>
            <option value="physics">Physics with Aryan</option>
            <option value="mentalHealth">Mental Health - Main</option>
          </select>
          <input type="submit" value="Send Your Message" className="btn" name="send" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
