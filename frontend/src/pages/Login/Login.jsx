import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useState } from "react";
import api from "../../services/api";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/users/login", {
        email: email,
        password: password,
      });

      console.log("LOGIN RESPONSE:", response.data);

      if (response.data && response.data.message === "Login Successful") {
        // Save logged-in user
        localStorage.setItem(
          "user",
          JSON.stringify(response.data)
        );

        // Redirect according to role
        if (response.data.role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/citizen-dashboard");
        }
      } else {
        setError(
          response.data?.message || "Invalid Email or Password"
        );
      }
    } catch (err) {
      console.error("LOGIN ERROR:", err);

      if (err.response) {
        setError(
          err.response.data?.message ||
          "Invalid Email or Password"
        );
      } else if (err.request) {
        setError(
          "Cannot connect to server. Make sure Spring Boot is running on port 8080."
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="container login-container">

        {/* LEFT SIDE */}
        <div className="login-left">
          <h1>Welcome Back</h1>

          <p>
            Login to access your CivicPulse dashboard and manage
            your complaints.
          </p>

          <div className="login-placeholder">
            <h2>🔐 Secure Login</h2>

            <p>
              Access your CivicPulse account to report issues,
              track complaints, and help build a smarter city.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-card">

          <h2>Login</h2>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="input-box">
              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="input-box">
              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>
            </div>

            {/* OPTIONS */}
            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            {/* LOGIN BUTTON */}
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <p className="register-text">
            Don't have an account?

            <Link to="/register">
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;