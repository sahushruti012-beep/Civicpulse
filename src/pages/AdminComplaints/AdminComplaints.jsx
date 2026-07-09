import "./AdminComplaints.css";
import { useState } from "react";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function AdminComplaints() {

  const complaints = [
    {
      id: "CP001",
      citizen: "Rahul",
      category: "Garbage",
      priority: "High",
      status: "Pending",
    },
    {
      id: "CP002",
      citizen: "Priya",
      category: "Water",
      priority: "Medium",
      status: "Resolved",
    },
    {
      id: "CP003",
      citizen: "Aman",
      category: "Road",
      priority: "High",
      status: "In Progress",
    },
    {
      id: "CP004",
      citizen: "Neha",
      category: "Street Light",
      priority: "Low",
      status: "Pending",
    },
  ];

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = complaints.filter((item) => {

    const matchesSearch =
      item.citizen.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || item.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="admin-complaints">

      <div className="container">

        <h1>Complaint Management</h1>

        <p>
          View, search and manage all reported complaints.
        </p>

        <div className="top-filter">

          <div className="search-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search by Complaint ID or Citizen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <select
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
          >

            <option>All</option>
            <option>Pending</option>
            <option>Resolved</option>
            <option>In Progress</option>

          </select>

        </div>

        <div className="table-wrapper">

          <table>

            <thead>

              <tr>

                <th>ID</th>
                <th>Citizen</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {filtered.map((item)=>(

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.citizen}</td>

                  <td>{item.category}</td>

                  <td>{item.priority}</td>

                  <td>

                    <span className={`status ${item.status.replace(" ","").toLowerCase()}`}>

                      {item.status}

                    </span>

                  </td>

                  <td>

                    <div className="action-icons">

                      <FaEye/>

                      <FaEdit/>

                      <FaTrash/>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminComplaints;