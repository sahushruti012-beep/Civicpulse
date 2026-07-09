import "./Profile.css";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClipboardList,
  FaCheckCircle,
  FaSpinner,
  FaClock
} from "react-icons/fa";

function Profile() {
  return (
    <div className="profile-page">

      <div className="container">

        <div className="profile-card">

          <div className="profile-header">

            <FaUserCircle className="profile-avatar"/>

            <h1>Shruti Sahu</h1>

            <p>Citizen Account</p>

          </div>

          <div className="profile-details">

            <div className="detail">

              <FaEnvelope className="detail-icon"/>

              <div>

                <h4>Email</h4>

                <p>shruti@email.com</p>

              </div>

            </div>

            <div className="detail">

              <FaPhone className="detail-icon"/>

              <div>

                <h4>Phone</h4>

                <p>+91 9876543210</p>

              </div>

            </div>

            <div className="detail">

              <FaMapMarkerAlt className="detail-icon"/>

              <div>

                <h4>Address</h4>

                <p> Kolkata, West Bengal</p>

              </div>

            </div>

          </div>

          <h2>Complaint Statistics</h2>

          <div className="stats-grid">

            <div className="stat-box">

              <FaClipboardList/>

              <h3>15</h3>

              <p>Total</p>

            </div>

            <div className="stat-box">

              <FaCheckCircle/>

              <h3>10</h3>

              <p>Resolved</p>

            </div>

            <div className="stat-box">

              <FaSpinner/>

              <h3>3</h3>

              <p>In Progress</p>

            </div>

            <div className="stat-box">

              <FaClock/>

              <h3>2</h3>

              <p>Pending</p>

            </div>

          </div>

          <div className="profile-buttons">

            <button>Edit Profile</button>

            <button className="secondary-btn">
              Change Password
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;