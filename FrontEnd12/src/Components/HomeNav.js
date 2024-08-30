import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import './index.css';
import { colors } from '@mui/material';
import { Link } from 'react-router-dom'
import '../Pages/Signin'

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-primary">
        <div className="container">
          <marquee>
            <b>
              <h1 className="mt-4beat">Welcome to Delight Service</h1>
            </b>
          </marquee>
          <div className="row align-items-center">
            <div className="center-image">
              {/* <img src='../bg1.png' alt="Delight Service Logo" className="logo" /> */}
              <div className="col-md-6 text-center">
                {/* <Link to="/Signin" className="btn btn-light mr-2">Login</Link> */}

<div className='btncode'>
                <Link
                  to='/Signup'
                  className='link btn btn-primary btn-sm'
                  style={{ 'margin-bottom': '20px', 'width': '150px', 'background-color': '#0c993a' }}>
                  SignUp
                </Link>
<br/>

                <Link
                  to='/Signin'
                  className='link btn btn-primary btn-sm'
                  style={{ 'margin-right': '10px', 'width': '150px', 'background-color': '#0c993a' }}>
                  Signin
                </Link>
                </div>
                {/* <Link
                  to='/delite'
                  className='link btn btn-primary btn-sm'
                  style={{ 'margin-right': '10px' }}>
                  Demo
                </Link> */}

                {/* <a href="index.html" className="btn btn-light">Register</a> */}
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="container my-5">
        <div className="row">
          <div className="col text-center">
            <h2>About Us</h2>
            <p>
              Delight Service brings you the essence of home-cooked meals with our delightful tiffin spreads. We meticulously prepare each meal using only the freshest seasonal ingredients and traditional recipes, ensuring every bite tastes like home.
            </p>
            <center>
              <div className="col-md-6 text-center">
                {/* <Link to="/Signin" className="btn btn-light mr-2">Login</Link> */}


                {/* <Link
                  to='/Signup'
                  className='link btn btn-primary btn-sm'
                  style={{ 'margin-right': '10px' }}>
                  SignUp
                </Link>


                <Link
                  to='/Signin'
                  className='link btn btn-primary btn-sm'
                  style={{ 'margin-right': '10px' }}>
                  Signin
                </Link> */}

                {/* <Link
                  to='/delite'
                  className='link btn btn-primary btn-sm'
                  style={{ 'margin-right': '10px' }}>
                  Demo
                </Link> */}

                {/* <a href="index.html" className="btn btn-light">Register</a> */}
              </div>
            </center>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h2>Why Choose Delight Service?</h2>
            </div>
          </div>
          <div className="row text-center mt-4">
            <div className="col-md-3">
              <h4>Freshness</h4>
              <p>Enjoy freshly prepared meals crafted with seasonal ingredients.</p>
            </div>
            <div className="col-md-3">
              <h4>Variety</h4>
              <p>Explore a variety of options to cater to your dietary preferences.</p>
            </div>
            <div className="col-md-3">
              <h4>Convenience</h4>
              <p>We deliver right to your doorstep, whether at home or the office.</p>
            </div>
            <div className="col-md-3">
              <h4>Affordability</h4>
              <p>Budget-friendly pricing without compromising on quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="m" className="container my-5">
        <div className="row text-center">
          <div className="col">
            <h2>How It Works</h2>
          </div>
        </div>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <h4>Browse Options</h4>
            <p>Discover our menu and select your preferred dishes.</p>
          </div>
          <div className="col-md-4">
            <h4>Place Your Order</h4>
            <p>Create an account to start ordering your meals.</p>
          </div>
          <div className="col-md-4">
            <h4>Enjoy Delivery</h4>
            <p>Sit back and relax while we deliver your delicious tiffin right to you.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-light py-5">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            Have questions or special requests? Contact our friendly team at <a href="mailto:info@delightservice.com">info@delightservice.com</a>.
          </p>
        </div>
      </section>
      a<div>
        {/* Footer Section */}
        <footer className="bg-dark text-white text-center py-3">
          <p style={{ color: "red" }}>© 2024 Delight Service. All Rights Reserved. Design By BEROZGAARS.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
