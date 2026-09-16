import "./Stats.css";
import {
  FaCheckCircle,
  FaUsers,
  FaCity,
  FaSmile,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCheckCircle />,
    number: "500+",
    title: "Issues Resolved",
  },
  {
    icon: <FaUsers />,
    number: "1,200+",
    title: "Active Citizens",
  },
  {
    icon: <FaCity />,
    number: "50+",
    title: "Cities Connected",
  },
  {
    icon: <FaSmile />,
    number: "95%",
    title: "Citizen Satisfaction",
  },
];

function Stats() {
  return (
    <section className="stats">
      <div className="container">

        <h2 className="section-title">
          CivicPulse in Numbers
        </h2>

        <p className="section-subtitle">
          Our mission is to improve civic engagement by making complaint reporting transparent, efficient, and accessible.
        </p>

        <div className="stats-grid">

          {stats.map((item, index) => (
            <div className="stat-card" key={index}>

              <div className="stat-icon">
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <p>{item.title}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;