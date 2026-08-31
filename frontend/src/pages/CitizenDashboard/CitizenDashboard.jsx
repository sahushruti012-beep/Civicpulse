import "./CitizenDashboard.css";
import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaCheckCircle,
  FaSpinner,
  FaClock,
  FaPlusCircle,
  FaUser,
} from "react-icons/fa";

function CitizenDashboard() {
  return (
    <div className="dashboard">

      <div className="container">

        {/* Header */}

        <div className="dashboard-header">

          <h1>Welcome Back 👋</h1>

          <p>
            Manage your civic complaints and track their progress.
          </p>

        </div>

        {/* Statistics */}

        <div className="dashboard-cards">

          <div className="dashboard-card">

            <FaClipboardList className="dashboard-icon"/>

            <h2>15</h2>

            <p>Total Complaints</p>

          </div>

          <div className="dashboard-card">

            <FaCheckCircle className="dashboard-icon"/>

            <h2>10</h2>

            <p>Resolved</p>

          </div>

          <div className="dashboard-card">

            <FaSpinner className="dashboard-icon"/>

            <h2>3</h2>

            <p>In Progress</p>

          </div>

          <div className="dashboard-card">

            <FaClock className="dashboard-icon"/>

            <h2>2</h2>

            <p>Pending</p>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="quick-actions">

          <h2>Quick Actions</h2>

          <div className="action-buttons">

            <Link to="/report" className="action-btn">

              <FaPlusCircle />

              Report Issue

            </Link>

            <Link to="/my-complaints" className="action-btn">

              <FaClipboardList />

              My Complaints

            </Link>

            <Link to="/profile" className="action-btn">

              <FaUser />

              Profile

            </Link>

          </div>

        </div>

        {/* Recent Complaints */}

        <div className="recent-complaints">

          <h2>Recent Complaints</h2>

          <table>

            <thead>

              <tr>

                <th>Issue</th>

                <th>Category</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Water Leakage</td>

                <td>Water Supply</td>

                <td>
                  <span className="status progress">
                    In Progress
                  </span>
                </td>

              </tr>

              <tr>

                <td>Street Light</td>

                <td>Electricity</td>

                <td>
                  <span className="status resolved">
                    Resolved
                  </span>
                </td>

              </tr>

              <tr>

                <td>Garbage Collection</td>

                <td>Sanitation</td>

                <td>
                  <span className="status pending">
                    Pending
                  </span>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default CitizenDashboard;