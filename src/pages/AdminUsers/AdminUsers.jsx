import "./AdminUsers.css";
import { useState } from "react";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash
} from "react-icons/fa";

function AdminUsers() {

  const users = [
    {
      id:1,
      name:"Shruti Sahu",
      email:"shruti@gmail.com",
      role:"Citizen",
      status:"Active"
    },
    {
      id:2,
      name:"Rahul Sharma",
      email:"rahul@gmail.com",
      role:"Citizen",
      status:"Active"
    },
    {
      id:3,
      name:"Admin",
      email:"admin@civicpulse.com",
      role:"Admin",
      status:"Active"
    },
    {
      id:4,
      name:"Priya",
      email:"priya@gmail.com",
      role:"Citizen",
      status:"Inactive"
    }
  ];

  const [search,setSearch]=useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="admin-users">

      <div className="container">

        <h1>User Management</h1>

        <p>Manage all registered users.</p>

        <div className="search-user">

          <FaSearch/>

          <input
            type="text"
            placeholder="Search user..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

        </div>

        <div className="users-table">

          <table>

            <thead>

              <tr>

                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {filteredUsers.map(user=>(

                <tr key={user.id}>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.role}</td>

                  <td>

                    <span className={`status ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>

                  </td>

                  <td>

                    <div className="action-icons">

                      <FaEye/>

                      <FaEdit/>

                      <FaTrash/>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default AdminUsers;