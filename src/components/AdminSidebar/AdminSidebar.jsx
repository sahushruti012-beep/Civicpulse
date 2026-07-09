import "./AdminSidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">

      <h2>CivicPulse</h2>

      <NavLink to="/admin">
        <FaTachometerAlt />
        Dashboard
      </NavLink>

      <NavLink to="/admin/complaints">
        <FaClipboardList />
        Complaints
      </NavLink>

      <NavLink to="/admin/users">
        <FaUsers />
        Users
      </NavLink>

      <NavLink to="/admin/reports">
        <FaChartBar />
        Reports
      </NavLink>

      <NavLink to="/admin/settings">
        <FaCog />
        Settings
      </NavLink>

      <button className="logout-btn">
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
}

export default AdminSidebar;