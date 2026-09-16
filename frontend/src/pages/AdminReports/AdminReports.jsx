import "./AdminReports.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

function AdminReports() {
  const [stats, setStats] = useState({totalComplaints:0,pendingComplaints:0,resolvedComplaints:0,totalUsers:0});
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    Promise.all([api.get("/complaints/dashboard"), api.get("/admin/complaints")])
      .then(([s,c]) => { setStats(s.data||{}); setComplaints(c.data||[]); })
      .catch(console.error);
  }, []);

  const total=Number(stats.totalComplaints||0), pending=Number(stats.pendingComplaints||0), resolved=Number(stats.resolvedComplaints||0);
  const inProgress=Math.max(0,total-pending-resolved);
  const counts={};
  complaints.forEach(c=>counts[c.category]=(counts[c.category]||0)+1);
  const categories=Object.entries(counts).sort((a,b)=>b[1]-a[1]);

  return <div className="reports-page"><div className="container">
    <h1>Reports & Analytics</h1><p>Live complaint statistics from the CivicPulse database.</p>
    <div className="report-cards"><div className="report-card"><h2>{total}</h2><p>Total Complaints</p></div><div className="report-card"><h2>{resolved}</h2><p>Resolved</p></div><div className="report-card"><h2>{pending}</h2><p>Pending</p></div><div className="report-card"><h2>{inProgress}</h2><p>In Progress</p></div></div>
    <div className="report-section"><div className="report-table"><h2>Complaint Categories</h2><table><thead><tr><th>Category</th><th>Total</th></tr></thead><tbody>{categories.map(([cat,n])=><tr key={cat}><td>{cat}</td><td>{n}</td></tr>)}{categories.length===0&&<tr><td colSpan="2">No complaints yet.</td></tr>}</tbody></table></div>
    <div className="report-table"><h2>Complaint Status Chart</h2><div style={{display:"flex",gap:25,alignItems:"center",flexWrap:"wrap"}}><div style={{width:200,height:200,borderRadius:"50%",background:`conic-gradient(#f97316 0 ${total?pending/total*360:0}deg,#4f46e5 ${total?pending/total*360:0}deg ${total?(pending+inProgress)/total*360:0}deg,#22c55e ${total?(pending+inProgress)/total*360:0}deg 360deg)`,display:"grid",placeItems:"center"}}><div style={{width:120,height:120,borderRadius:"50%",background:"#fff",display:"grid",placeItems:"center",fontWeight:700}}>{total}</div></div><div><p>🟠 Pending: {pending}</p><p>🔵 In Progress: {inProgress}</p><p>🟢 Resolved: {resolved}</p></div></div></div></div>
  </div></div>;
}
export default AdminReports;
