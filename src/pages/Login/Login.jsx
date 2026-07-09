import "./Login.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <div className="container login-container">

        {/* Left Side */}

        <div className="login-left">

          <h1>Welcome Back</h1>

          <p>
            Login to access your CivicPulse dashboard and manage your complaints.
          </p>

          <div className="login-placeholder">
           <h2>🔐 Secure Login</h2>
           <p>
             Access your CivicPulse account to report issues, track complaints,
             and help build a smarter city.
             </p>
        </div>

        </div>

        {/* Right Side */}

        <div className="login-card">

          <h2>Login</h2>

          <form>

            <div className="input-box">

              <FaEnvelope className="input-icon"/>

              <input
                type="email"
                placeholder="Email Address"
              />

            </div>

            <div className="input-box">

              <FaLock className="input-icon"/>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />

              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >

                {showPassword ? <FaEyeSlash/> : <FaEye/>}

              </span>

            </div>

            <div className="login-options">

              <label>

                <input type="checkbox"/>

                Remember Me

              </label>

              <Link to="#">
                Forgot Password?
              </Link>

            </div>

            <button type="submit">
              Login
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