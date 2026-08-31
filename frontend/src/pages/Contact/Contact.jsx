import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Have a question, suggestion, or feedback? We'd love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container contact-grid">
          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Address</h3>
            <p>Delhi, India</p>
          </div>

          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <h3>Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <p>support@civicpulse.com</p>
          </div>

          <div className="info-card">
            <FaClock className="info-icon" />
            <h3>Office Hours</h3>
            <p>Monday - Friday (9:00 AM - 6:00 PM)</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <h2 className="section-title">Send Us a Message</h2>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <input type="text" placeholder="Subject" />

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;