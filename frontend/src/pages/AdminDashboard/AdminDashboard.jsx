import "./AdminDashboard.css";
import { useEffect, useState } from "react";
import { FaClipboardList, FaUsers, FaCheckCircle, FaClock, FaTasks, FaChartBar, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../../services/api";

function AdminDashboard() {
  const [stats, setStats] = useState({ totalComplaints: 0, totalUsers: 0, resolvedComplaints: 0, pendingComplaints: 0, inProgressComplaints: 0 });
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const [s, c] = await Promise.all([
          api.get("/complaints/dashboard"),
          api.get("/admin/complaints")
        ]);
        setStats(s.data || {});
        setComplaints((c.data || []).slice(-5).reverse());
      } catch (e) {
        console.error(e);
      }
    };
    load();
  }, []);

  const total = Number(stats.totalComplaints || 0);
  const resolved = Number(stats.resolvedComplaints || 0);
  const pending = Number(stats.pendingComplaints || 0);
  const inProgress = total - resolved - pending;

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>Welcome, Administrator</p>
        </div>

        <div className="admin-cards">
          <div className="admin-card"><FaClipboardList className="admin-icon"/><h2>{total}</h2><p>Total Complaints</p></div>
          <div className="admin-card"><FaUsers className="admin-icon"/><h2>{stats.totalUsers || 0}</h2><p>Registered Users</p></div>
          <div className="admin-card"><FaCheckCircle className="admin-icon"/><h2>{resolved}</h2><p>Resolved</p></div>
          <div className="admin-card"><FaClock className="admin-icon"/><h2>{pending}</h2><p>Pending</p></div>
        </div>

        <div className="recent-section">
          <h2>Recent Complaints</h2>
          {complaints.length === 0 ? <p>No complaints found.</p> : (
            <table>
              <thead><tr><th>ID</th><th>Citizen</th><th>Category</th><th>Status</th></tr></thead>
              <tbody>{complaints.map((item) => (
                <tr key={item.id}>
                  <td>#{item.id}</td>
                  <td>{item.user?.fullName || "Citizen"}</td>
                  <td>{item.category}</td>
                  <td><span className={`status ${(item.status || "").replace(/\s/g,"").toLowerCase()}`}>{item.status}</span></td>
                </tr>
              ))}</tbody>
            </table>
          )}
        </div>

        <div className="quick-actions">
          <h2>Complaint Status Statistics</h2>
          <div style={{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",marginBottom:30}}>
            <div style={{width:180,height:180,borderRadius:"50%",background:`conic-gradient(#f97316 0 ${total ? pending/total*360 : 0}deg,#4f46e5 ${total ? pending/total*360 : 0}deg ${total ? (pending+inProgress)/total*360 : 0}deg,#22c55e ${total ? (pending+inProgress)/total*360 : 0}deg 360deg)`,display:"grid",placeItems:"center"}}>
              <div style={{width:105,height:105,borderRadius:"50%",background:"#fff",display:"grid",placeItems:"center",fontWeight:700}}>{total}</div>
            </div>
            <div><p>🟠 Pending: {pending}</p><p>🔵 In Progress: {inProgress}</p><p>🟢 Resolved: {resolved}</p></div>
          </div>
          <h2>Quick Actions</h2>
          <div className="admin-buttons">
            <Link to="/admin/complaints" className="admin-btn"><FaTasks />Manage Complaints</Link>
            <Link to="/admin/users" className="admin-btn"><FaUsers />Manage Users</Link>
            <Link to="/admin/reports" className="admin-btn"><FaChartBar />View Reports</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;
