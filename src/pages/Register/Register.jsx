import "./Register.css";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useState } from "react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="register-page">

      <div className="container">

        <div className="register-card">

          <h1>Create Account</h1>

          <p>
            Join CivicPulse and help build a smarter and cleaner city.
          </p>

          <form>

            <div className="input-box">

              <FaUser className="input-icon" />

              <input
                type="text"
                placeholder="Full Name"
              />

            </div>

            <div className="input-box">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="Email Address"
              />

            </div>

            <div className="input-box">

              <FaPhone className="input-icon" />

              <input
                type="tel"
                placeholder="Phone Number"
              />

            </div>

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />

              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
              />

              <span
                className="password-toggle"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

            <label className="terms">

              <input type="checkbox" />

              I agree to the Terms & Conditions

            </label>

            <button type="submit">
              Create Account
            </button>

          </form>

          <p className="login-text">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;