import "./Profile.css";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaClipboardList,
  FaCheckCircle,
  FaSpinner,
  FaClock,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import api from "../../services/api";

const emptyPassword = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export default function Profile() {
  const savedUser = JSON.parse(localStorage.getItem("user") || "null");

  const [user, setUser] = useState(savedUser);
  const [stats, setStats] = useState({
    total: 0,
    resolved: 0,
    inProgress: 0,
    pending: 0,
  });
  const [editing, setEditing] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [profileForm, setProfileForm] = useState({
    fullName: savedUser?.fullName || "",
    phone: savedUser?.phone || "",
  });
  const [passwordForm, setPasswordForm] = useState(emptyPassword);

  useEffect(() => {
    if (!savedUser?.id) return;

    const load = async () => {
      try {
        const [userResponse, statsResponse] = await Promise.all([
          api.get(`/users/${savedUser.id}`),
          api.get(`/complaints/dashboard/${savedUser.id}`),
        ]);

        const data = userResponse.data;
        setUser(data);
        setProfileForm({
          fullName: data.fullName || "",
          phone: data.phone || "",
        });
        setStats(statsResponse.data || {});
      } catch (error) {
        console.error("Profile load:", error);
      }
    };

    load();
  }, []);

  const saveProfile = async (event) => {
    event.preventDefault();

    if (!profileForm.fullName.trim()) {
      alert("Full name cannot be empty.");
      return;
    }

    try {
      setSaving(true);

      const response = await api.put(`/users/update/${savedUser.id}`, {
        fullName: profileForm.fullName.trim(),
        phone: profileForm.phone.trim(),
      });

      const updated = { ...savedUser, ...response.data };
      localStorage.setItem("user", JSON.stringify(updated));
      setUser(response.data);
      setEditing(false);
      alert("Profile updated successfully.");
    } catch (error) {
      console.error("Profile update:", error);
      alert(error.response?.data?.message || "Unable to update profile.");
    } finally {
      setSaving(false);
    }
  };

  const changePassword = async (event) => {
    event.preventDefault();

    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
      alert("Please fill all password fields.");
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    if (passwordForm.newPassword.length < 4) {
      alert("New password must contain at least 4 characters.");
      return;
    }

    try {
      setChangingPassword(true);

      const response = await api.put(`/users/change-password/${savedUser.id}`, {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword,
      });

      alert(response.data);
      setPasswordForm(emptyPassword);
      setPasswordOpen(false);
    } catch (error) {
      console.error("Change password:", error);
      alert(error.response?.data || "Unable to change password.");
    } finally {
      setChangingPassword(false);
    }
  };

  if (!savedUser) {
    return (
      <div className="profile-page">
        <div className="container">
          <div className="profile-card">
            <h2>Please login to view your profile.</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-card">
          <div className="profile-header">
            <FaUserCircle className="profile-avatar" />
            <h1>{user?.fullName || "User"}</h1>
            <p>{user?.role === "ADMIN" ? "Administrator" : "Citizen Account"}</p>
          </div>

          <div className="profile-details">
            <div className="detail">
              <FaEnvelope className="detail-icon" />
              <div><h4>Email</h4><p>{user?.email || "-"}</p></div>
            </div>
            <div className="detail">
              <FaPhone className="detail-icon" />
              <div><h4>Phone</h4><p>{user?.phone || "Not provided"}</p></div>
            </div>
          </div>

          <h2>Complaint Statistics</h2>
          <div className="stats-grid">
            <div className="stat-box"><FaClipboardList /><h3>{stats.total || 0}</h3><p>Total</p></div>
            <div className="stat-box"><FaCheckCircle /><h3>{stats.resolved || 0}</h3><p>Resolved</p></div>
            <div className="stat-box"><FaSpinner /><h3>{stats.inProgress || 0}</h3><p>In Progress</p></div>
            <div className="stat-box"><FaClock /><h3>{stats.pending || 0}</h3><p>Pending</p></div>
          </div>

          {editing && (
            <form className="profile-edit" onSubmit={saveProfile}>
              <h3>Edit Profile</h3>
              <input
                value={profileForm.fullName}
                onChange={(e) => setProfileForm({ ...profileForm, fullName: e.target.value })}
                placeholder="Full Name"
                required
              />
              <input
                value={profileForm.phone}
                onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                placeholder="Phone"
              />
              <button type="submit" disabled={saving}>{saving ? "Saving..." : "Save Changes"}</button>
              <button type="button" className="secondary-btn" onClick={() => setEditing(false)} disabled={saving}>Cancel</button>
            </form>
          )}

          {passwordOpen && (
            <form className="profile-edit" onSubmit={changePassword}>
              <h3>Change Password</h3>
              <input
                type="password"
                value={passwordForm.currentPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                placeholder="Current Password"
                required
              />
              <input
                type="password"
                value={passwordForm.newPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                placeholder="New Password"
                required
              />
              <input
                type="password"
                value={passwordForm.confirmPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                placeholder="Confirm New Password"
                required
              />
              <button type="submit" disabled={changingPassword}>
                {changingPassword ? "Changing..." : "Change Password"}
              </button>
              <button type="button" className="secondary-btn" onClick={() => setPasswordOpen(false)} disabled={changingPassword}>Cancel</button>
            </form>
          )}

          <div className="profile-buttons">
            <button type="button" onClick={() => { setEditing(true); setPasswordOpen(false); }}>
              Edit Profile
            </button>
            <button type="button" className="secondary-btn" onClick={() => { setPasswordOpen(true); setEditing(false); }}>
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
