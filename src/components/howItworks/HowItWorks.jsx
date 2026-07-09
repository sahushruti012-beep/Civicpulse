import "./HowItWorks.css";
import {
  FaUserPlus,
  FaSignInAlt,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Register",
    description: "Create your CivicPulse account in just a few seconds.",
  },
  {
    icon: <FaSignInAlt />,
    title: "Login",
    description: "Securely access your dashboard using your credentials.",
  },
  {
    icon: <FaClipboardList />,
    title: "Report Issue",
    description: "Submit civic complaints with location, category, and images.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Track Status",
    description: "Receive updates until your issue is resolved.",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">

        <h2 className="section-title">
          How CivicPulse Works
        </h2>

        <p className="section-subtitle">
          Reporting civic issues is simple, transparent, and efficient.
        </p>

        <div className="steps-grid">

          {steps.map((step, index) => (
            <div className="step-card" key={index}>

              <div className="step-number">
                {index + 1}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;