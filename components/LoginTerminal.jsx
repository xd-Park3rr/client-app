import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "./LoginTerminal.css";

const LoginTerminal = () => {
  const [isRegistered, setIsRegistered] = useState(true); // Toggle between login and registration
  const [formData, setFormData] = useState({ username: "", password: "", confirmPassword: "" });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify the captcha");
      return;
    }
    if (!isRegistered && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle form submission (API call)
    alert(`${isRegistered ? "Logged In" : "Registered"} as ${formData.username}`);
  };

  const handleCaptcha = (value) => {
    setCaptchaVerified(!!value); // Check if captcha is verified
  };

  return (
    <div className="main-content">
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isRegistered ? "Login" : "Register"}</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {!isRegistered && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}

        <ReCAPTCHA
          sitekey="Your-site-key-here"
          onChange={handleCaptcha}
          className="recaptcha-container"
        />

        <button type="submit" disabled={!captchaVerified}>
          {isRegistered ? "Login" : "Register"}
        </button>

        <p className="toggle-form">
          {isRegistered ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? " Register" : " Login"}
          </span>
        </p>
      </form>
    </div>
    </div>
  );
};

export default LoginTerminal;
