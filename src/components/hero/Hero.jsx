import "./Hero.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero">
      <div className="container hero-container">

        {/* Left Content */}
        <div className="hero-content" data-aos="fade-right">
          <span className="hero-tag">
            Smart City Management Platform
          </span>

          <h1>
            Report Civic Issues,
            <br />
            <span>Simplify City Management</span>
          </h1>

          <p>
            CivicPulse empowers citizens to report civic issues, track complaint
            progress, and collaborate with local authorities to build cleaner,
            safer, and smarter communities.
          </p>

          <div className="hero-buttons">
            <Link to="/report" className="primary-btn">
              Report Issue
            </Link>

            <Link to="/about" className="secondary-btn">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900"
            alt="Smart City"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;