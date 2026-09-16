import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaClock, FaSpinner, FaArrowLeft } from "react-icons/fa";
import api from "../../services/api";
import "./TrackComplaint.css";

function TrackComplaint() {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get(`/complaints/${id}`)
      .then(r => setComplaint(r.data))
      .catch(() => setError("Complaint not found."));
  }, [id]);

  const status = complaint?.status || "Pending";
  const steps = ["Pending", "In Progress", "Resolved"];
  const current = steps.indexOf(status);

  if (error) return <div className="track-page"><div className="track-card"><h2>{error}</h2><Link to="/my-complaints">Back to My Complaints</Link></div></div>;
  if (!complaint) return <div className="track-page"><div className="track-card"><h2>Loading complaint...</h2></div></div>;

  return (
    <div className="track-page">
      <div className="track-card">
        <Link to="/my-complaints" className="back-link"><FaArrowLeft/> Back to My Complaints</Link>
        <h1>Track Complaint #{complaint.id}</h1>
        <p className="track-title">{complaint.title}</p>
        <p><b>Category:</b> {complaint.category} &nbsp; | &nbsp; <b>Location:</b> {complaint.location}</p>
        <div className="timeline">
          {steps.map((s, i) => (
            <div className={`timeline-step ${i <= current ? "done" : ""}`} key={s}>
              <div className="timeline-icon">{i===0 ? <FaClock/> : i===1 ? <FaSpinner/> : <FaCheckCircle/>}</div>
              <div><h3>{s}</h3><p>{i < current ? "Completed" : i === current ? "Current status" : "Waiting"}</p></div>
            </div>
          ))}
        </div>
        <div className="current-status">Current status: <strong>{status}</strong></div>
        <p className="tracking-note">This tracking view shows the complaint's current workflow status.</p>
      </div>
    </div>
  );
}
export default TrackComplaint;
