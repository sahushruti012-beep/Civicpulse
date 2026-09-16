import "./AdminSettings.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

function AdminSettings() {
  const savedUser = JSON.parse(localStorage.getItem("user") || "null");

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: ""
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [notifications, setNotifications] = useState({
    email: true,
    inApp: true,
    sms: false
  });

  useEffect(() => {
    if (!savedUser?.id) return;

    api.get(`/users/${savedUser.id}`)
      .then((response) => {
        const user = response.data;

        setProfile({
          fullName: user.fullName || "",
          email: user.email || "",
          phone: user.phone || ""
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Unable to load administrator details.");
      });
  }, []);

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const saveProfile = async () => {
    if (!savedUser?.id) {
      alert("Admin session not found. Please login again.");
      return;
    }

    try {
      const response = await api.put(
        `/users/update/${savedUser.id}`,
        {
          fullName: profile.fullName,
          phone: profile.phone,
          password: ""
        }
      );

      const updatedUser = {
        ...savedUser,
        ...response.data,
        message: "Login Successful"
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      setProfile({
        fullName: response.data.fullName || "",
        email: response.data.email || profile.email,
        phone: response.data.phone || ""
      });

      alert("Profile changes saved successfully.");
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
        "Unable to save profile changes."
      );
    }
  };

  const handlePasswordChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value
    });
  };

  const changePassword = async () => {
    if (!savedUser?.id) {
      alert("Admin session not found. Please login again.");
      return;
    }

    if (!password.currentPassword ||
        !password.newPassword ||
        !password.confirmPassword) {
      alert("Please fill all password fields.");
      return;
    }

    if (password.newPassword !== password.confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      const response = await api.put(
        `/users/change-password/${savedUser.id}`,
        {
          currentPassword: password.currentPassword,
          newPassword: password.newPassword
        }
      );

      alert(response.data);

      setPassword({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data ||
        error.response?.data?.message ||
        "Unable to change password."
      );
    }
  };

  const savePreferences = () => {
    localStorage.setItem(
      "notificationPreferences",
      JSON.stringify(notifications)
    );

    alert("Notification preferences saved.");
  };

  return (
    <div className="settings-page">
      <div className="container">

        <h1>Settings</h1>

        <p>
          Manage your administrator account and preferences.
        </p>

        {/* PROFILE SETTINGS */}

        <div className="settings-card">

          <h2>Profile Settings</h2>

          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleProfileChange}
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            value={profile.email}
            disabled
            placeholder="Email"
          />

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleProfileChange}
            placeholder="Phone"
          />

          <button onClick={saveProfile}>
            Save Changes
          </button>

        </div>

        {/* PASSWORD */}

        <div className="settings-card">

          <h2>Security</h2>

          <input
            type="password"
            name="currentPassword"
            value={password.currentPassword}
            onChange={handlePasswordChange}
            placeholder="Current Password"
          />

          <input
            type="password"
            name="newPassword"
            value={password.newPassword}
            onChange={handlePasswordChange}
            placeholder="New Password"
          />

          <input
            type="password"
            name="confirmPassword"
            value={password.confirmPassword}
            onChange={handlePasswordChange}
            placeholder="Confirm Password"
          />

          <button onClick={changePassword}>
            Change Password
          </button>

        </div>

        {/* NOTIFICATIONS */}

        <div className="settings-card">

          <h2>Notifications</h2>

          <label>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  email: e.target.checked
                })
              }
            />
            Email Notifications
          </label>

          <label>
            <input
              type="checkbox"
              checked={notifications.inApp}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  inApp: e.target.checked
                })
              }
            />
            In-App Notifications
          </label>

          <label>
            <input
              type="checkbox"
              checked={notifications.sms}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  sms: e.target.checked
                })
              }
            />
            SMS Notifications
          </label>

          <button onClick={savePreferences}>
            Save Preferences
          </button>

        </div>

      </div>
    </div>
  );
}

export default AdminSettings;