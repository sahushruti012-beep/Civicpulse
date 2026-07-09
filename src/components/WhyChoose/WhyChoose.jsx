import "./WhyChoose.css";
import {
  FaBolt,
  FaShieldAlt,
  FaUsers,
  FaMobileAlt,
  FaChartPie,
  FaBell,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaBolt />,
    title: "Fast Complaint Registration",
    description:
      "Report civic issues within minutes using a simple and user-friendly interface.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Platform",
    description:
      "Your information is protected with secure authentication and role-based access.",
  },
  {
    icon: <FaUsers />,
    title: "Citizen Engagement",
    description:
      "Encourages active participation between citizens and local authorities.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Works seamlessly across mobile phones, tablets, and desktops.",
  },
  {
    icon: <FaChartPie />,
    title: "Smart Analytics",
    description:
      "Visual dashboards help administrators understand complaint trends.",
  },
  {
    icon: <FaBell />,
    title: "Real-time Updates",
    description:
      "Receive notifications whenever your complaint status changes.",
  },
];

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="container">

        <h2 className="section-title">
          Why Choose CivicPulse?
        </h2>

        <p className="section-subtitle">
          CivicPulse makes communication between citizens and government
          authorities faster, smarter, and more transparent.
        </p>

        <div className="why-grid">

          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;