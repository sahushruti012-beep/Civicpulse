import "./AdminDashboard.css";
import {
  FaClipboardList,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaTasks,
  FaChartBar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminDashboard() {

  const recentComplaints = [
    {
      id: "CP001",
      citizen: "Rahul",
      category: "Garbage",
      status: "Pending",
    },
    {
      id: "CP002",
      citizen: "Priya",
      category: "Water Supply",
      status: "Resolved",
    },
    {
      id: "CP003",
      citizen: "Aman",
      category: "Road Damage",
      status: "In Progress",
    },
  ];

  return (
    <div className="admin-dashboard">

      <div className="container">

        <div className="admin-header">

          <h1>Admin Dashboard</h1>

          <p>Welcome, Administrator</p>

        </div>

        <div className="admin-cards">

          <div className="admin-card">

            <FaClipboardList className="admin-icon"/>

            <h2>120</h2>

            <p>Total Complaints</p>

          </div>

          <div className="admin-card">

            <FaUsers className="admin-icon"/>

            <h2>60</h2>

            <p>Registered Users</p>

          </div>

          <div className="admin-card">

            <FaCheckCircle className="admin-icon"/>

            <h2>90</h2>

            <p>Resolved</p>

          </div>

          <div className="admin-card">

            <FaClock className="admin-icon"/>

            <h2>30</h2>

            <p>Pending</p>

          </div>

        </div>

        <div className="recent-section">

          <h2>Recent Complaints</h2>

          <table>

            <thead>

              <tr>

                <th>ID</th>
                <th>Citizen</th>
                <th>Category</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {recentComplaints.map((item) => (

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.citizen}</td>

                  <td>{item.category}</td>

                  <td>

                    <span
                      className={`status ${item.status.replace(" ","").toLowerCase()}`}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <div className="admin-buttons">

            <Link to="/admin/complaints" className="admin-btn">

              <FaTasks />

              Manage Complaints

            </Link>

            <Link to="/admin/users" className="admin-btn">

              <FaUsers />

              Manage Users

            </Link>

            <Link to="/admin/reports" className="admin-btn">

              <FaChartBar />

              View Reports

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;