import "./AdminComplaints.css";
import { useEffect, useState } from "react";
import { FaSearch, FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import api from "../../services/api";

function AdminComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [selected, setSelected] = useState(null);
  const [editStatus, setEditStatus] = useState("");

  const load = async () => {
    try {
      const res = await api.get("/admin/complaints");
      setComplaints(res.data || []);
    } catch (e) {
      console.error(e);
      alert("Unable to load complaints.");
    }
  };

  useEffect(() => { load(); }, []);

  const filtered = complaints.filter((c) => {
    const q = search.toLowerCase();
    const citizen = c.user?.fullName || "";
    return (`${c.id} ${citizen} ${c.title} ${c.category}`).toLowerCase().includes(q)
      && (status === "All" || c.status === status);
  });

  const updateStatus = async (c) => {
    try {
      const res = await api.put(`/admin/complaints/${c.id}?status=${encodeURIComponent(editStatus)}`);
      setComplaints(prev => prev.map(x => x.id === c.id ? res.data : x));
      setSelected(res.data);
      alert("Complaint status updated.");
    } catch (e) {
      console.error(e);
      alert("Unable to update complaint.");
    }
  };

  const deleteComplaint = async (id) => {
    if (!window.confirm("Delete this complaint?")) return;
    try {
      await api.delete(`/admin/complaints/${id}`);
      setComplaints(prev => prev.filter(x => x.id !== id));
      setSelected(null);
      alert("Complaint deleted.");
    } catch (e) { alert("Unable to delete complaint."); }
  };

  return (
    <div className="admin-complaints">
      <div className="container">
        <h1>Complaint Management</h1>
        <p>View, search and manage all reported complaints.</p>
        <div className="top-filter">
          <div className="search-box"><FaSearch/><input placeholder="Search by ID, citizen, title..." value={search} onChange={e=>setSearch(e.target.value)}/></div>
          <select value={status} onChange={e=>setStatus(e.target.value)}>
            <option>All</option><option>Pending</option><option>In Progress</option><option>Resolved</option>
          </select>
        </div>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>ID</th><th>Citizen</th><th>Category</th><th>Status</th><th>Rating</th><th>Action</th></tr></thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id}>
                  <td>#{c.id}</td><td>{c.user?.fullName || "Citizen"}</td><td>{c.category}</td>
                  <td><span className={`status ${(c.status||"").replace(/\s/g,"").toLowerCase()}`}>{c.status}</span></td>
                  <td>{c.rating ? `${c.rating}/5` : "—"}</td>
                  <td><div className="action-icons">
                    <button onClick={()=>{setSelected(c);setEditStatus(c.status)}}><FaEye/></button>
                    <button onClick={()=>{setSelected(c);setEditStatus(c.status)}}><FaEdit/></button>
                    <button onClick={()=>deleteComplaint(c.id)}><FaTrash/></button>
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length===0 && <p>No complaints found.</p>}
        </div>
      </div>
      {selected && (
        <div className="modal-backdrop" onClick={()=>setSelected(null)}>
          <div className="user-modal complaint-modal" onClick={e=>e.stopPropagation()}>
            <button className="close-btn" onClick={()=>setSelected(null)}><FaTimes/></button>
            <h2>Complaint #{selected.id}</h2>
            <p><b>Citizen:</b> {selected.user?.fullName || "Citizen"}</p>
            <p><b>Email:</b> {selected.user?.email || "—"}</p>
            <p><b>Title:</b> {selected.title}</p>
            <p><b>Category:</b> {selected.category}</p>
            <p><b>Location:</b> {selected.location}</p>
            <p><b>Description:</b> {selected.description}</p>
            <p><b>Rating:</b> {selected.rating ? `${selected.rating}/5` : "Not rated"}</p>
            <p><b>Feedback:</b> {selected.feedback || "No feedback yet"}</p>
            <label>Status</label>
            <select value={editStatus} onChange={e=>setEditStatus(e.target.value)}>
              <option>Pending</option><option>In Progress</option><option>Resolved</option>
            </select>
            <div className="modal-actions"><button onClick={()=>updateStatus(selected)}>Update Status</button><button className="cancel-btn" onClick={()=>setSelected(null)}>Close</button></div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AdminComplaints;
