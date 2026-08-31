import "./ReportIssue.css";
import { useState } from "react";

function ReportIssue() {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "",
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Complaint Submitted Successfully!");
  };

  return (
    <div className="report-page">

      <div className="container">

        <div className="report-card">

          <h1>Report a Civic Issue</h1>

          <p>
            Help us improve your city by reporting civic problems.
          </p>

          <form onSubmit={handleSubmit}>

            <label>Issue Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter issue title"
              onChange={handleChange}
              required
            />

            <label>Category</label>

            <select
              name="category"
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>

              <option>Road Damage</option>

              <option>Water Supply</option>

              <option>Garbage</option>

              <option>Street Light</option>

              <option>Drainage</option>

              <option>Electricity</option>

              <option>Other</option>

            </select>

            <label>Priority</label>

            <select
              name="priority"
              onChange={handleChange}
              required
            >

              <option value="">Select Priority</option>

              <option>Low</option>

              <option>Medium</option>

              <option>High</option>

            </select>

            <label>Location</label>

            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              onChange={handleChange}
              required
            />

            <label>Description</label>

            <textarea
              rows="6"
              name="description"
              placeholder="Describe the issue..."
              onChange={handleChange}
              required
            />

            <label>Upload Image</label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />

            <button type="submit">

              Submit Complaint

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ReportIssue;