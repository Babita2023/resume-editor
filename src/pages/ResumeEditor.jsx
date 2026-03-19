import React, { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import "./Resume.css"; // Import CSS

const ResumeEditor = () => {
  const [resume, setResume] = useState({
    name: "",
    contact: "",
    email: "",
    location: "",
    summary: "",
    education: [{ degree: "", institution: "", date: "" }],
    skills: "",
    experience: [{ role: "", company: "", date: "" }],
    projects: "",
  });

  const resumeRef = useRef(null);

  const handleChange = (field, value) => {
    setResume({ ...resume, [field]: value });
  };

  const handleArrayChange = (section, index, key, value) => {
    const updatedArray = [...resume[section]];
    updatedArray[index][key] = value;
    setResume({ ...resume, [section]: updatedArray });
  };

  const generatePDF = () => {
    const input = resumeRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("resume.pdf");
    });
  };

  // Extract up to 5 skills
  // const skillList = resume.skills ? resume.skills.split(",").slice(0, 5) : [];
  // const [tools, setTools] = useState("");

  const [extraSkills, setExtraSkills] = useState([""]);
  const [projects, setProjects] = useState([
    { title: "", date: "", details: "" },
  ]);

  // Extract up to 4 projects
  // const projectList = resume.projects ? resume.projects.split("\n").slice(0, 4) : [];

  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="main">
      <Navbar />

      <div className="app-container">



        {/* Left Side - Form */}
        <div className="form-container flex flex-col">
       
          <h2>Fill in Your Details</h2>

          {step === 1 && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="input-field"
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <input
                type="text"
                placeholder="Contact"
                className="input-field"
                onChange={(e) => handleChange("contact", e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <input
                type="text"
                placeholder="Linkedin Profile"
                className="input-field"
                onChange={(e) => handleChange("location", e.target.value)}
              />
              <h2>Summary</h2>
              <textarea
                placeholder="Summary"
                className="input-field"
                onChange={(e) => handleChange("summary", e.target.value)}
              />
            </>
          )}

          {step === 2 && (
            <>
              <h3>Experience</h3>
              {resume.experience.map((exp, index) => (
                <div key={index} className="experience-input">
                  <input
                    type="text"
                    placeholder="Job Role"
                    className="input-field"
                    onChange={(e) =>
                      handleArrayChange(
                        "experience",
                        index,
                        "role",
                        e.target.value,
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Job Position"
                    className="input-field"
                    onChange={(e) =>
                      handleArrayChange(
                        "experience",
                        index,
                        "position",
                        e.target.value,
                      )
                    }
                  />

                  <input
                    type="text"
                    placeholder="Company"
                    className="input-field"
                    onChange={(e) =>
                      handleArrayChange(
                        "experience",
                        index,
                        "company",
                        e.target.value,
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Year"
                    className="input-field date-field"
                    onChange={(e) =>
                      handleArrayChange(
                        "experience",
                        index,
                        "date",
                        e.target.value,
                      )
                    }
                  />
                </div>
              ))}

              <h3>Education</h3>
              {resume.education.map((edu, index) => (
                <div key={index} className="education-input">
                  <input
                    type="text"
                    placeholder="Degree"
                    className="input-field"
                    onChange={(e) =>
                      handleArrayChange(
                        "education",
                        index,
                        "degree",
                        e.target.value,
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Institution"
                    className="input-field"
                    onChange={(e) =>
                      handleArrayChange(
                        "education",
                        index,
                        "institution",
                        e.target.value,
                      )
                    }
                  />
                  <input
                    type="text"
                    placeholder="Year"
                    className="input-field date-field"
                    onChange={(e) =>
                      handleArrayChange(
                        "education",
                        index,
                        "date",
                        e.target.value,
                      )
                    }
                  />
                </div>
              ))}
            </>
          )}

          {step === 3 && (
            <>
              {/* Skills Section */}
              <div className="skills-title-row">
                <h3>Skills</h3>
                {extraSkills.length < 4 && (
                  <button
                    onClick={() => setExtraSkills([...extraSkills, ""])}
                    className="add-btn"
                  >
                    Add Skill
                  </button>
                )}
              </div>

              {extraSkills.map((skill, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Skill ${index + 1}`}
                  className="input-field"
                  value={skill}
                  onChange={(e) => {
                    const updated = [...extraSkills];
                    updated[index] = e.target.value;
                    setExtraSkills(updated);
                  }}
                />
              ))}

              {/* Projects Section */}
              <div className="project-title-row">
                <h3>Projects</h3>
                <button
                  onClick={() =>
                    setProjects([
                      ...projects,
                      { title: "", date: "", details: "" },
                    ])
                  }
                  className="add-btn"
                >
                  Add Project
                </button>
              </div>

              {projects.map((project, index) => (
                <div key={index} className="project-section">
                  <div className="project-header">
                    <input
                      type="text"
                      placeholder="Project Title"
                      className="input-field"
                      value={project.title}
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[index].title = e.target.value;
                        setProjects(updated);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Date"
                      className="input-field date-field"
                      value={project.date}
                      onChange={(e) => {
                        const updated = [...projects];
                        updated[index].date = e.target.value;
                        setProjects(updated);
                      }}
                    />
                  </div>
                  <textarea
                    placeholder="Project details..."
                    className="input-field"
                    value={project.details}
                    onChange={(e) => {
                      const updated = [...projects];
                      updated[index].details = e.target.value;
                      setProjects(updated);
                    }}
                  ></textarea>
                </div>
              ))}
            </>
          )}

          {/* Navigation Buttons */}
          <div className="form-navigation">
            {step > 1 && <button onClick={prevStep}>Previous</button>}
            {step < 3 && <button onClick={nextStep}>Next</button>}
            {step === 3 && (
              <button onClick={generatePDF} id="download-btn">
                Download as PDF
              </button>
            )}
          </div>
        </div>

        {/* Right Side - Resume Preview */}

        <div className="resume-preview-wrapper">
          <div className="resume-container" ref={resumeRef}>
            <div className="resume-header">
              <h1>{resume.name || "Your Name"}</h1>
              <p>
                {resume.contact} | {resume.email} | {resume.location}
              </p>
            </div>

            <div className="resume-section">
              <h2>Summary</h2>
              <p>{resume.summary}</p>
            </div>

            <div className="resume-section">
              <h2>Skills</h2>

              {/* Additional Skills */}
              {extraSkills.filter((skill) => skill.trim() !== "").length >
                0 && (
                <>
                  <ul>
                    {extraSkills.map((skill, index) =>
                      skill.trim() !== "" ? (
                        <li key={index}>{skill.trim()}</li>
                      ) : null,
                    )}
                  </ul>
                </>
              )}
            </div>

            <div className="resume-section">
              <h2>Experience</h2>
              {resume.experience.map((exp, index) => (
                <div key={index} className="resume-item">
                  <div className="resume-text">
                    <p>
                      <strong>{exp.role}</strong> - {exp.position}
                    </p>
                    <p> {exp.company} </p>
                  </div>
                  <div className="resume-date">
                    <p>{exp.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="resume-section">
              <h2>Education</h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="resume-item">
                  <div className="resume-text">
                    <p>
                      <strong>{edu.degree}</strong> - {edu.institution}
                    </p>
                  </div>
                  <div className="resume-date">
                    <p>{edu.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="resume-section">
              <h2>Projects</h2>

              {projects
                .filter((proj) => proj.title || proj.details)
                .map((proj, index) => (
                  <div key={index} className="project-preview">
                    <div className="project-header">
                      <strong>{proj.title}</strong>
                      <span className="project-date">{proj.date}</span>
                    </div>
                    <p>{proj.details}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeEditor;
