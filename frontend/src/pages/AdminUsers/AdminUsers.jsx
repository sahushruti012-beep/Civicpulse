import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import api from "../../services/api";
import "./AdminUsers.css";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({ fullName: "", phone: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const loadUsers = async () => {
    try {
      const response = await api.get("/users/all");
      setUsers(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Load users:", error);
      alert("Unable to load users. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const openView = (user) => setSelectedUser(user);

  const openEdit = (user) => {
    setEditingUser(user);
    setForm({
      fullName: user.fullName || "",
      phone: user.phone || "",
    });
  };

  const closeModals = () => {
    if (!saving) {
      setSelectedUser(null);
      setEditingUser(null);
    }
  };

  const saveUser = async (event) => {
    event.preventDefault();

    if (!editingUser) return;

    const fullName = form.fullName.trim();
    if (!fullName) {
      alert("Full name cannot be empty.");
      return;
    }

    try {
      setSaving(true);

      const response = await api.put(`/users/update/${editingUser.id}`, {
        fullName,
        phone: form.phone.trim(),
      });

      const updated = response.data;

      setUsers((current) =>
        current.map((user) =>
          user.id === editingUser.id
            ? { ...user, ...updated, fullName, phone: form.phone.trim() }
            : user
        )
      );

      setEditingUser(null);
      alert("User updated successfully.");
    } catch (error) {
      console.error("Update user:", error);
      alert(error.response?.data?.message || "Failed to update user.");
    } finally {
      setSaving(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await api.delete(`/users/${id}`);
      setUsers((current) => current.filter((user) => user.id !== id));
      alert("User deleted successfully.");
    } catch (error) {
      console.error("Delete user:", error);
      alert(
        error.response?.data ||
          "Unable to delete this user. Delete associated complaints first if required."
      );
    }
  };

  if (loading) {
    return (
      <div className="admin-users-page">
        <div className="users-card">
          <h1>Users</h1>
          <p>Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-users-page">
      <div className="users-header">
        <div>
          <h1>Users</h1>
          <p>Manage registered CivicPulse users.</p>
        </div>
        <div className="user-count">Total Users: {users.length}</div>
      </div>

      <div className="users-card">
        <div className="users-table-scroll">
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="6" className="no-users">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.fullName || "—"}</td>
                    <td>{user.email || "—"}</td>
                    <td>{user.phone || "—"}</td>
                    <td>
                      <span className="role-badge">{user.role || "USER"}</span>
                    </td>
                    <td>
                      <div className="action-icons">
                        <button type="button" title="View" onClick={() => openView(user)}>
                          <FaEye />
                        </button>
                        <button type="button" title="Edit" onClick={() => openEdit(user)}>
                          <FaEdit />
                        </button>
                        <button
                          type="button"
                          title="Delete"
                          className="danger"
                          onClick={() => deleteUser(user.id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUser && (
        <div className="modal-backdrop" onClick={closeModals}>
          <div className="user-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelectedUser(null)}>
              <FaTimes />
            </button>
            <h2>User Details</h2>
            <div className="user-detail-row"><span>ID</span><strong>{selectedUser.id}</strong></div>
            <div className="user-detail-row"><span>Name</span><strong>{selectedUser.fullName || "—"}</strong></div>
            <div className="user-detail-row"><span>Email</span><strong>{selectedUser.email || "—"}</strong></div>
            <div className="user-detail-row"><span>Phone</span><strong>{selectedUser.phone || "Not provided"}</strong></div>
            <div className="user-detail-row"><span>Role</span><strong>{selectedUser.role || "USER"}</strong></div>
            <button type="button" className="modal-primary" onClick={() => setSelectedUser(null)}>Close</button>
          </div>
        </div>
      )}

      {editingUser && (
        <div className="modal-backdrop" onClick={closeModals}>
          <form className="user-modal" onSubmit={saveUser} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setEditingUser(null)}>
              <FaTimes />
            </button>
            <h2>Edit User</h2>

            <label htmlFor="admin-user-name">Full Name</label>
            <input
              id="admin-user-name"
              name="fullName"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              required
            />

            <label htmlFor="admin-user-phone">Phone</label>
            <input
              id="admin-user-phone"
              name="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <div className="modal-actions">
              <button type="submit" className="modal-primary" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </button>
              <button
                type="button"
                className="modal-secondary"
                disabled={saving}
                onClick={() => setEditingUser(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
