import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => (
  <div className="home">
    <Navbar />
    <div className="content">
      <div className="contact-info">
        <h2>Contact</h2>
        <p>Phone number: +380 73 103 07 25</p>
        <p>Email: info@artedante.com</p>
      </div>
      <div className="contact-form">
        <h2>Leave your contact info – hear from us the same day!</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="phone">Phone number:</label>
          <input type="text" id="phone" name="phone" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
);

export default Home;
