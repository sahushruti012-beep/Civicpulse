import "./AdminSidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

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

      <button type="button" className="logout-btn" onClick={logout}>
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
}
