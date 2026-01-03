import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img src="../icons/Res.png" alt="Resume Editor Logo" className="logo-img" />
          <span className="logo-text">Resume Editor</span>
        </Link>

        {/* Actions */}
        <div className="navbar-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
