import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "../Register/Register.css";

export default function ForgotPassword(){
 const nav=useNavigate(); const [form,setForm]=useState({email:"",phone:"",newPassword:"",confirm:""}); const [error,setError]=useState(""); const change=e=>setForm({...form,[e.target.name]:e.target.value});
 const submit=async e=>{e.preventDefault();setError("");if(form.newPassword!==form.confirm)return setError("Passwords do not match.");try{const r=await api.put(`/users/forgot-password?email=${encodeURIComponent(form.email)}&phone=${encodeURIComponent(form.phone)}&newPassword=${encodeURIComponent(form.newPassword)}`);if(r.data==="Password Reset Successfully"){alert(r.data);nav("/login")}else setError(r.data)}catch(err){setError(err.response?.data||"Password reset failed.")}};
 return <div className="register-page"><div className="container"><div className="register-card"><h1>Reset Password</h1><p>Enter your registered email and phone number.</p>{error&&<div>{error}</div>}<form onSubmit={submit}><input name="email" type="email" placeholder="Email Address" value={form.email} onChange={change} required/><input name="phone" placeholder="Phone Number" value={form.phone} onChange={change} required/><input name="newPassword" type="password" placeholder="New Password" value={form.newPassword} onChange={change} required/><input name="confirm" type="password" placeholder="Confirm Password" value={form.confirm} onChange={change} required/><button type="submit">Reset Password</button></form><p><Link to="/login">Back to Login</Link></p></div></div></div>
}
