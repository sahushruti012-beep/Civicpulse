import "./MyComplaints.css";
import { useState } from "react";

function MyComplaints() {

  const complaints = [
    {
      id: 1,
      title: "Road Damage",
      category: "Road",
      status: "Pending",
      date: "10 Jul 2026"
    },
    {
      id: 2,
      title: "Garbage Collection",
      category: "Garbage",
      status: "Resolved",
      date: "08 Jul 2026"
    },
    {
      id: 3,
      title: "Street Light",
      category: "Electricity",
      status: "In Progress",
      date: "05 Jul 2026"
    }
  ];

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredComplaints = complaints.filter((complaint) => {

    const matchesSearch =
      complaint.title.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || complaint.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="complaints-page">

      <div className="container">

        <h1>My Complaints</h1>

        <p>
          Track and manage all your reported civic issues.
        </p>

        <div className="filter-section">

          <input
            type="text"
            placeholder="Search Complaint..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>All</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>

        </div>

        <div className="table-container">

          <table>

            <thead>

              <tr>

                <th>Issue</th>

                <th>Category</th>

                <th>Status</th>

                <th>Date</th>

              </tr>

            </thead>

            <tbody>

              {filteredComplaints.map((complaint) => (

                <tr key={complaint.id}>

                  <td>{complaint.title}</td>

                  <td>{complaint.category}</td>

                  <td>

                    <span
                      className={`status ${complaint.status
                        .replace(" ", "")
                        .toLowerCase()}`}
                    >
                      {complaint.status}
                    </span>

                  </td>

                  <td>{complaint.date}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default MyComplaints;