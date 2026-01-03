import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>Resume Editor</h3>
          <p>
            Build professional, ATS-friendly resumes
            with live preview and PDF export.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img src="/icons/github.svg" alt="GitHub" />
            </a>
             <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <img src="/icons/facebook.svg" alt="facebook" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src="/icons/x.svg" alt="Twitter" />
            </a>
            <a href="mailto:example@email.com">
              <img src="/icons/minutemailer.svg" alt="Email" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <Link to="/">Home</Link>
            <Link to="/templates">Templates</Link>
            <Link to="/editor">Resume Editor</Link>
          </div>

          <div>
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Resume Editor. All rights reserved.
      </div>
    </footer>
  );
}
