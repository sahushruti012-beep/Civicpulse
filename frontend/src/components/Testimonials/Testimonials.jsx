import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Citizen",
    feedback:
      "CivicPulse made reporting road damage incredibly easy. I could track my complaint until it was resolved.",
  },
  {
    name: "Priya Verma",
    role: "Resident",
    feedback:
      "The dashboard is simple and transparent. I received updates without visiting any government office.",
  },
  {
    name: "Amit Singh",
    role: "Community Volunteer",
    feedback:
      "A great initiative that encourages citizens to actively participate in improving their city.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Citizens Say</h2>

        <p className="section-subtitle">
          Hear from people who have used CivicPulse to report and track civic issues.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <FaQuoteLeft className="quote-icon" />

              <p>{item.feedback}</p>

              <h4>{item.name}</h4>

              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;