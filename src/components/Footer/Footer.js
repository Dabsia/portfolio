import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <div className="input-areas">
          
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <i className="ri-plane-line"></i>
            </Link>
          </div>
          <small className="website-rights">TRVL © 2022</small>
          <div className="social-icons">
            <Link
              to="/"
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
            ></Link>
            <Link
              to="/"
              className="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
            ></Link>
            <Link
              to="/"
              className="social-icon-link linkedin"
              target="_blank"
              aria-label="LinkedIn"
            ></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;