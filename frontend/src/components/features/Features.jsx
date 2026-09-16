import "./Features.css";
import {
  FaBullhorn,
  FaMapMarkedAlt,
  FaUserShield,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBullhorn />,
    title: "Report Issues",
    description:
      "Report road damage, water leakage, garbage collection, streetlight failures, and other civic problems easily.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Track Complaints",
    description:
      "Monitor complaint progress in real time with status updates and notifications.",
  },
  {
    icon: <FaUserShield />,
    title: "Secure Login",
    description:
      "Safe authentication with role-based access for citizens and administrators.",
  },
  {
    icon: <FaChartLine />,
    title: "Smart Dashboard",
    description:
      "View complaint analytics, recent activities, and resolution statistics from one place.",
  },
];

function Features() {
  return (
    <section className="features">
      <div className="container">

        <h2 className="section-title">
          Why Choose CivicPulse?
        </h2>

        <p className="section-subtitle">
          CivicPulse connects citizens with local authorities through a
          transparent, secure, and easy-to-use complaint management platform.
        </p>

        <div className="features-grid">

          {features.map((feature, index) => (
            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;