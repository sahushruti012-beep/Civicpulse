import "./AdminSettings.css";

function AdminSettings() {

  return (

    <div className="settings-page">

      <div className="container">

        <h1>Settings</h1>

        <p>
          Manage your administrator account and preferences.
        </p>

        {/* Profile */}

        <div className="settings-card">

          <h2>Profile Settings</h2>

          <input
            type="text"
            defaultValue="Administrator"
            placeholder="Name"
          />

          <input
            type="email"
            defaultValue="admin@civicpulse.com"
            placeholder="Email"
          />

          <input
            type="text"
            defaultValue="+91 9876543210"
            placeholder="Phone"
          />

          <button>
            Save Changes
          </button>

        </div>

        {/* Password */}

        <div className="settings-card">

          <h2>Security</h2>

          <input
            type="password"
            placeholder="Current Password"
          />

          <input
            type="password"
            placeholder="New Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button>
            Change Password
          </button>

        </div>

        {/* Notifications */}

        <div className="settings-card">

          <h2>Notifications</h2>

          <label>

            <input type="checkbox" defaultChecked />

            Email Notifications

          </label>

          <label>

            <input type="checkbox" defaultChecked />

            In-App Notifications

          </label>

          <label>

            <input type="checkbox" />

            SMS Notifications

          </label>

          <button>
            Save Preferences
          </button>

        </div>

      </div>

    </div>

  );

}

export default AdminSettings;