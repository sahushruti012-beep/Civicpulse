import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About CivicPulse</h1>

          <p>
            CivicPulse is a Smart City Complaint Management Platform that
            empowers citizens to report civic issues, track complaint
            progress, and collaborate with local authorities to build
            cleaner, safer, and smarter communities.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container mission-grid">

          <div className="mission-card">
            <h2>Our Mission</h2>

            <p>
              Our mission is to simplify civic issue reporting by providing
              a transparent, efficient, and user-friendly digital platform
              that connects citizens with local government authorities.
            </p>
          </div>

          <div className="mission-card">
            <h2>Our Vision</h2>

            <p>
              Our vision is to create smarter and more connected cities where
              technology enables faster problem resolution, better governance,
              and active citizen participation.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">

          <h2 className="section-title">
            Our Core Values
          </h2>

          <p className="section-subtitle">
            These principles guide every feature and decision behind
            CivicPulse.
          </p>

          <div className="values-grid">

            <div className="value-card">
              <h3>Transparency</h3>

              <p>
                Every complaint can be tracked from submission to
                resolution, ensuring complete transparency.
              </p>
            </div>

            <div className="value-card">
              <h3>Accountability</h3>

              <p>
                Government authorities receive organized complaint records
                to improve public services efficiently.
              </p>
            </div>

            <div className="value-card">
              <h3>Innovation</h3>

              <p>
                We use modern technology to simplify communication between
                citizens and local administrations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Platform Highlights */}
      <section className="highlights-section">
        <div className="container">

          <h2 className="section-title">
            Platform Highlights
          </h2>

          <p className="section-subtitle">
            CivicPulse offers powerful features to improve civic engagement
            and city management.
          </p>

          <div className="highlight-grid">

            <div className="highlight-card">
              <h3>✔ Easy Complaint Reporting</h3>
            </div>

            <div className="highlight-card">
              <h3>✔ Real-Time Complaint Tracking</h3>
            </div>

            <div className="highlight-card">
              <h3>✔ Secure User Authentication</h3>
            </div>

            <div className="highlight-card">
              <h3>✔ Smart Analytics Dashboard</h3>
            </div>

            <div className="highlight-card">
              <h3>✔ Citizen Participation</h3>
            </div>

            <div className="highlight-card">
              <h3>✔ Responsive Across All Devices</h3>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;