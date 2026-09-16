import "./CitizenDashboard.css";
import { Link } from "react-router-dom";
import { FaClipboardList, FaCheckCircle, FaSpinner, FaClock, FaPlusCircle, FaUser, FaMapMarkedAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../../services/api";

function CitizenDashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const [stats, setStats] = useState({total:0,resolved:0,inProgress:0,pending:0});
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    if (user?.id) {
      api.get(`/complaints/dashboard/${user.id}`).then(r=>setStats(r.data||{})).catch(console.error);
      api.get(`/complaints/recent/${user.id}`).then(r=>setRecent(r.data||[])).catch(console.error);
    }
  }, []);

  const total=Number(stats.total||0), pending=Number(stats.pending||0), inProgress=Number(stats.inProgress||0), resolved=Number(stats.resolved||0);

  return <div className="dashboard"><div className="container">
    <div className="dashboard-header"><h1>Welcome Back {user?.fullName?`👋, ${user.fullName}`:"👋"}</h1><p>Manage your civic complaints and track their progress.</p></div>
    <div className="dashboard-cards">
      <div className="dashboard-card"><FaClipboardList className="dashboard-icon"/><h2>{total}</h2><p>Total Complaints</p></div>
      <div className="dashboard-card"><FaCheckCircle className="dashboard-icon"/><h2>{resolved}</h2><p>Resolved</p></div>
      <div className="dashboard-card"><FaSpinner className="dashboard-icon"/><h2>{inProgress}</h2><p>In Progress</p></div>
      <div className="dashboard-card"><FaClock className="dashboard-icon"/><h2>{pending}</h2><p>Pending</p></div>
    </div>

    <div style={{background:"#fff",padding:25,borderRadius:16,margin:"25px 0",boxShadow:"0 8px 25px rgba(0,0,0,.07)"}}>
      <h2>Complaint Status Statistics</h2>
      <div style={{display:"flex",gap:30,alignItems:"center",flexWrap:"wrap"}}>
        <div style={{width:190,height:190,borderRadius:"50%",background:`conic-gradient(#f97316 0 ${total?pending/total*360:0}deg,#4f46e5 ${total?pending/total*360:0}deg ${total?(pending+inProgress)/total*360:0}deg,#22c55e ${total?(pending+inProgress)/total*360:0}deg 360deg)`,display:"grid",placeItems:"center"}}>
          <div style={{width:112,height:112,borderRadius:"50%",background:"#fff",display:"grid",placeItems:"center",fontWeight:700,fontSize:22}}>{total}</div>
        </div>
        <div><p>🟠 Pending — {pending}</p><p>🔵 In Progress — {inProgress}</p><p>🟢 Resolved — {resolved}</p></div>
      </div>
    </div>

    <div className="quick-actions"><h2>Quick Actions</h2><div className="action-buttons">
      <Link to="/report" className="action-btn"><FaPlusCircle/>Report Issue</Link>
      <Link to="/my-complaints" className="action-btn"><FaClipboardList/>My Complaints</Link>
      <Link to="/profile" className="action-btn"><FaUser/>Profile</Link>
    </div></div>

    <div className="recent-complaints"><h2>Recent Complaints</h2>{recent.length===0?<p>No complaints reported yet.</p>:<table><thead><tr><th>Issue</th><th>Category</th><th>Status</th><th>Track</th></tr></thead><tbody>{recent.map(c=><tr key={c.id}><td>{c.title}</td><td>{c.category}</td><td>{c.status}</td><td><Link to={`/track/${c.id}`}><FaMapMarkedAlt/> Track</Link></td></tr>)}</tbody></table>}</div>
  </div></div>;
}
export default CitizenDashboard;
