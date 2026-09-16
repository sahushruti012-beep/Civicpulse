import "./FAQ.css";
import { useState } from "react";

const data = [
  {
    question: "How do I report an issue?",
    answer: "Register, login, and click Report Issue from your dashboard.",
  },
  {
    question: "Can I track my complaint?",
    answer: "Yes. Every complaint has a status that updates in real time.",
  },
  {
    question: "Is CivicPulse free?",
    answer: "Yes. Citizens can use CivicPulse completely free of cost.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq">
      <div className="container">

        <h2 className="section-title">Frequently Asked Questions</h2>

        {data.map((item, index) => (
          <div
            className="faq-item"
            key={index}
            onClick={() => setActive(active === index ? null : index)}
          >
            <h3>{item.question}</h3>

            {active === index && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;