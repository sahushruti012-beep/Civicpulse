import "./MyComplaints.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkedAlt } from "react-icons/fa";
import api from "../../services/api";

function MyComplaints() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [ratingId, setRatingId] = useState(null);
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");

  const load = () => {
    if (user?.id) api.get(`/complaints/user/${user.id}`).then(r=>setComplaints(r.data||[])).catch(console.error);
  };
  useEffect(load, []);

  const submitRating = async () => {
    try {
      const res = await api.put(`/complaints/rate/${ratingId}?rating=${rating}&feedback=${encodeURIComponent(feedback)}`);
      setComplaints(prev=>prev.map(c=>c.id===ratingId?res.data:c));
      setRatingId(null); setFeedback("");
      alert("Thank you for your feedback and rating!");
    } catch (e) { alert("Rating is available only for resolved complaints."); }
  };

  const filtered = complaints.filter(c =>
    (c.title||"").toLowerCase().includes(search.toLowerCase()) &&
    (status==="All" || c.status===status)
  );

  return <div className="complaints-page"><div className="container">
    <h1>My Complaints</h1><p>Track, review and rate all your reported civic issues.</p>
    <div className="filter-section"><input placeholder="Search Complaint..." value={search} onChange={e=>setSearch(e.target.value)}/><select value={status} onChange={e=>setStatus(e.target.value)}><option>All</option><option>Pending</option><option>In Progress</option><option>Resolved</option></select></div>
    <div className="table-container"><table><thead><tr><th>ID</th><th>Issue</th><th>Category</th><th>Location</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody>{filtered.map(c=><tr key={c.id}><td>#{c.id}</td><td>{c.title}</td><td>{c.category}</td><td>{c.location}</td><td><span className={`status ${(c.status||"").replace(/\s/g,"").toLowerCase()}`}>{c.status}</span></td>
      <td><div style={{display:"flex",gap:8,flexWrap:"wrap"}}><Link to={`/track/${c.id}`} className="action-btn"><FaMapMarkedAlt/> Track</Link>{c.status==="Resolved" && <button className="action-btn" onClick={()=>{setRatingId(c.id);setRating(c.rating||5);setFeedback(c.feedback||"")}}><FaStar/> {c.rating?"Rated":"Rate"}</button>}</div></td>
      </tr>)}</tbody></table>{filtered.length===0&&<p>No complaints found.</p>}</div>
    {ratingId && <div className="rating-box"><h2>Rate Complaint #{ratingId}</h2><div className="stars">{[1,2,3,4,5].map(n=><button key={n} className={n<=rating?"selected":""} onClick={()=>setRating(n)}>★</button>)}</div><textarea value={feedback} onChange={e=>setFeedback(e.target.value)} placeholder="Share your feedback..."/><div><button className="action-btn" onClick={submitRating}>Submit Rating</button><button className="action-btn" onClick={()=>setRatingId(null)}>Cancel</button></div></div>}
  </div></div>;
}
export default MyComplaints;
