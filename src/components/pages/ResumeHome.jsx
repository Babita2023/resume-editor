import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer.jsx'

import "./ResumeHome.css";


export default function ResumeHome() {
  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Build a Professional Resume <br />
          That Gets You Hired
        </h1>

        <p>
          Create, edit, and preview your resume in real time.
          Simple, fast, and ATS-friendly.
        </p>

        <div className="hero-buttons">
           <Link to="/editor" className="primary-btn">Create</Link>
          <button className="secondary-btn">View Templates</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>Live Preview</h3>
          <p>See your resume update instantly as you type.</p>
        </div>

        <div className="feature-card">
          <h3>ATS Friendly</h3>
          <p>Clean layout designed for modern applicant tracking systems.</p>
        </div>

        <div className="feature-card">
          <h3>Export as PDF</h3>
          <p>Download your resume instantly in high-quality PDF format.</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    
  );
}
