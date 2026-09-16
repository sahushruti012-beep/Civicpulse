import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">
            Civic<span>Pulse</span>
          </h2>

          <p>
            Empowering citizens to report civic issues, track complaints,
            and build smarter communities together.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/report">Report Issue</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: support@civicpulse.com</p>
          <p>Phone: +91 9876543210</p>
          <p>India</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CivicPulse. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;