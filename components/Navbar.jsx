import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/Home">ParaTech</Link>
      </div>

      <div className={`navbar-links ${mobileMenuActive ? "mobile-active" : ""}`}>
        <Link to="/Home" onClick={() => setMobileMenuActive(false)}>Home</Link>
        <Link to="/AllServices" onClick={() => setMobileMenuActive(false)}>Services</Link>
        <Link to="/YourWebsite" onClick={() => setMobileMenuActive(false)}>Your Websites</Link>
        <Link to="/LoginTerminal" onClick={() => setMobileMenuActive(false)}>Login / Signup</Link>
      </div>

      <div className="navbar-toggle" onClick={toggleMobileMenu}>
      </div>
    </div>
  );
};

// window.onscroll = function() {
//   var navbar = document.querySelector('.navbar');
//   if (window.scrollY > 100) {
//       navbar.style.backgroundColor = '#2a2a2a';
//   } else {
//       navbar.style.backgroundColor = '#1e1e1e';
//   }
// }


export default Navbar;
