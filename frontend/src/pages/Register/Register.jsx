import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import api from "../../services/api";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault(); setError("");
    if (form.password !== form.confirmPassword) return setError("Passwords do not match.");
    if (form.password.length < 4) return setError("Password must contain at least 4 characters.");
    try {
      setLoading(true);
      await api.post("/users/register", {
        fullName: form.fullName, email: form.email, phone: form.phone, password: form.password
      });
      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally { setLoading(false); }
  };

  return <div className="register-page"><div className="container"><div className="register-card">
    <h1>Create Account</h1><p>Join CivicPulse and help build a smarter and cleaner city.</p>
    {error && <div className="login-error">{error}</div>}
    <form onSubmit={submit}>
      <div className="input-box"><FaUser className="input-icon"/><input name="fullName" value={form.fullName} onChange={change} placeholder="Full Name" required/></div>
      <div className="input-box"><FaEnvelope className="input-icon"/><input type="email" name="email" value={form.email} onChange={change} placeholder="Email Address" required/></div>
      <div className="input-box"><FaPhone className="input-icon"/><input name="phone" value={form.phone} onChange={change} placeholder="Phone Number" required/></div>
      <div className="input-box"><FaLock className="input-icon"/><input type={showPassword ? "text" : "password"} name="password" value={form.password} onChange={change} placeholder="Password" required/><span className="password-toggle" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</span></div>
      <div className="input-box"><FaLock className="input-icon"/><input type={showConfirm ? "text" : "password"} name="confirmPassword" value={form.confirmPassword} onChange={change} placeholder="Confirm Password" required/><span className="password-toggle" onClick={()=>setShowConfirm(!showConfirm)}>{showConfirm?<FaEyeSlash/>:<FaEye/>}</span></div>
      <label className="terms"><input type="checkbox" required/> I agree to the Terms & Conditions</label>
      <button type="submit" disabled={loading}>{loading ? "Creating Account..." : "Create Account"}</button>
    </form>
    <p className="login-text">Already have an account? <Link to="/login">Login</Link></p>
  </div></div></div>;
}
export default Register;
