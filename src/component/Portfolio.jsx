import React, { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function Portfolio() {
  const [img1, setImg1] = useState(null);
  const [name, setName] = useState("");
  const [desig, setDesig] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [skills, setSkills] = useState([""]);
  const [languages, setLanguages] = useState([]);
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [certifications, setCertifications] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const pdfRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Portfolio Submitted Successfully!");
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const addSkill = () => setSkills([...skills, ""]);

  const handleLanguageChange = (lang) => {
    if (languages.includes(lang)) {
      setLanguages(languages.filter((l) => l !== lang));
    } else {
      setLanguages([...languages, lang]);
    }
  };

  const handleDownloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${name || "My_Portfolio"}.pdf`);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "25px",
        flexWrap: "nowrap",
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Left Side - Form */}
      <div
        style={{
          width: "40%",
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          overflowY: "auto",
          height: "90vh",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            borderBottom: "2px solid #000",
            paddingBottom: "8px",
          }}
        >
          Enter Your Information
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <label>Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImg1(URL.createObjectURL(e.target.files[0]))}
          />

          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

          <label>Designation</label>
          <input
            type="text"
            value={desig}
            placeholder="Enter your designation"
            onChange={(e) => setDesig(e.target.value)}
          />

          <label>Phone</label>
          <input
            type="text"
            value={phone}
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            value={mail}
            placeholder="Enter your email"
            onChange={(e) => setMail(e.target.value)}
          />

          <label>Address</label>
          <input
            type="text"
            value={address}
            placeholder="Enter your address"
            onChange={(e) => setAddress(e.target.value)}
          />

          <label>Skills</label>
          {skills.map((skill, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Skill ${index + 1}`}
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
          ))}
          <button
            type="button"
            onClick={addSkill}
            style={{
              background: "#000",
              color: "#fff",
              border: "none",
              padding: "6px",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100px",
              alignSelf: "center",
            }}
          >
            + Add Skill
          </button>

          <label>Languages</label>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["English", "Urdu", "Punjabi"].map((lang) => (
              <label key={lang}>
                <input
                  type="checkbox"
                  value={lang}
                  checked={languages.includes(lang)}
                  onChange={() => handleLanguageChange(lang)}
                />{" "}
                {lang}
              </label>
            ))}
          </div>

          <label>Gender</label>
          <div style={{ display: "flex", gap: "15px" }}>
            {["Male", "Female", "Other"].map((g) => (
              <label key={g}>
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  onChange={() => setGender(g)}
                />{" "}
                {g}
              </label>
            ))}
          </div>

          <label>About Me</label>
          <textarea
            value={about}
            placeholder="Write something about yourself"
            onChange={(e) => setAbout(e.target.value)}
            rows="2"
          />

          <label>Education</label>
          <textarea
            value={education}
            placeholder="Your education background"
            onChange={(e) => setEducation(e.target.value)}
            rows="2"
          />

          <label>Experience</label>
          <textarea
            value={experience}
            placeholder="Your work experience"
            onChange={(e) => setExperience(e.target.value)}
            rows="2"
          />

          <label>Projects</label>
          <textarea
            value={projects}
            placeholder="Mention key projects"
            onChange={(e) => setProjects(e.target.value)}
            rows="2"
          />

          <label>Certifications</label>
          <textarea
            value={certifications}
            placeholder="List certifications"
            onChange={(e) => setCertifications(e.target.value)}
            rows="2"
          />

          <label>LinkedIn</label>
          <input
            type="text"
            value={linkedin}
            placeholder="Enter LinkedIn profile link"
            onChange={(e) => setLinkedin(e.target.value)}
          />

          <label>GitHub</label>
          <input
            type="text"
            value={github}
            placeholder="Enter GitHub profile link"
            onChange={(e) => setGithub(e.target.value)}
          />

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "10px",
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Side - CV Preview */}
      <div
        ref={pdfRef}
        style={{
          width: "50%",
          background: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          height: "90vh",
          overflowY: "auto",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {img1 && (
            <img
              src={img1}
              alt="Profile"
              style={{
                height: "120px",
                width: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #000",
              }}
            />
          )}
          <h1 style={{ marginTop: "10px" }}>{name || "Your Name"}</h1>
          <h3 style={{ fontWeight: "normal" }}>
            {desig || "Your Designation"}
          </h3>
        </div>

        <hr style={{ margin: "20px 0", border: "1px solid #000" }} />

        <p>
          <strong>Phone:</strong> {phone || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {mail || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {address || "N/A"}
        </p>
        <p>
          <strong>Gender:</strong> {gender || "N/A"}
        </p>

        <h3>Skills</h3>
        <ul>
          {skills.filter((s) => s).map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <h3>Languages</h3>
        <p>{languages.join(", ") || "N/A"}</p>

        <h3>About Me</h3>
        <p>{about || "Write a short bio about yourself."}</p>

        <h3>Education</h3>
        <p>{education || "Mention your educational background."}</p>

        <h3>Experience</h3>
        <p>{experience || "Mention your work experience."}</p>

        <h3>Projects</h3>
        <p>{projects || "Mention your completed projects."}</p>

        <h3>Certifications</h3>
        <p>{certifications || "List your certifications."}</p>

        <h3>Social Links</h3>
        <p>
          <strong>LinkedIn:</strong>{" "}
          {linkedin ? <a href={linkedin}>{linkedin}</a> : "N/A"}
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          {github ? <a href={github}>{github}</a> : "N/A"}
        </p>

        <button
          onClick={handleDownloadPDF}
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            width: "100%",
          }}
        >
          📄 Download PDF
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
