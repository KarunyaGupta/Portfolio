import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      className="container"
      style={{
        padding: "60px 0",
        marginTop: 0,
      }}
    >
      {/* Responsive style for mobile */}
      <style>
        {`
          @media (max-width: 600px) {
            .container { padding-top: 0 !important; margin-top: 0 !important; }
            .card { padding-top: 8px !important; margin-top: 0 !important; }
          }
          @media (max-width: 400px) {
            .container { padding-top: 0 !important; margin-top: 0 !important; }
            .card { padding-top: 4px !important; margin-top: 0 !important; }
          }
        `}
      </style>
      <motion.div
        className="card"
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
          marginTop: 0,
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12, textAlign: "center" }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25, textAlign: "center" }}
        >
          A quick glance at my journey, skills, and achievements.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 Karunya Gupta
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc", textAlign: "justify" }}>
              Pre-final year Computer Science and Engineering Student | Chitkara University
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Rajpura, Punjab, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ 
              <a 
                href="mailto:mails.karunyagupta@gmail.com" 
                style={{cursor: 'pointer', color: '#ccc', textDecoration: 'none' }}
              >
                mails.karunyagupta@gmail.com
              </a>
              <br />
              📞 
              <span
                style={{cursor: 'pointer', color: '#ccc', textDecoration: 'none'}}
                title="Click to call or copy number"
                onClick={() => {
                  navigator.clipboard.writeText('+91 9805946982');
                  // alert('Phone number copied to clipboard!');
                }}
              >
                <a 
                  href="tel:+919805946982"
                  style={{ cursor: 'pointer', color: '#ccc', textDecoration: 'none' }}
                  onClick={e => e.stopPropagation()}
                >
                  +91 9805946982
                </a>
              </span>
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff"}}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc"  }}>
              Highly motivated and results-oriented Computer Science and Engineering student with a strong foundation in data
              analysis and business intelligence. Proficient in Python, SQL, and tools like Power BI and Tableau. Proven ability to create
              insightful dashboards, analyze complex datasets, and deliver data-driven solutions to improve business efficiency and
              decision-making.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.E. Computer Science and Engineering</strong> - Chitkara University, 2023–2027 <br />
              <span style={{ color: "#00ffd0", fontSize: "0.89em"}}>Specialization: Financial Technology (FinTech)</span><br />
              <span style={{ color: "#aaa" }}>GPA: 8.97</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board - Lord's Convent School</strong> (Himachal Pradesh Board, 2023) <br />
              <span style={{ color: "#00ffd0", fontSize: "0.89em", marginTop: 1}}>(PCM, Non Medical)</span><br />

              <span style={{ color: "#aaa" }}>Percentage: 89.8%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board - Lord's Convent School</strong> (Himachal Pradesh Board, 2020)
              <br />
              <span style={{ color: "#aaa" }}>Percentage: 88.9%</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, textAlign: "justify" }}>
            <li>1️⃣ <b>Codereview.ai:</b> An intelligent code analysis tool that provides instant feedback on your code using AI-powered suggestions.</li>
            <li>2️⃣ <b>skymatrix:</b> A scalable SaaS platform for advanced data visualization and analytics, enabling real-time business insights.</li>
            <li>3️⃣ <b>Employ Attrition:</b> A predictive analytics project focused on employee attrition, helping organizations retain top talent.</li>
            <li>4️⃣ <b>Financial Data Analysis:</b> Google Stock Performance and Market Volatility</li>
            <li>5️⃣ E-commerce Sales Performance & Profitability Analysis <b>(Amazon Store Data)</b></li>
            <li>6️⃣ <b>Transportation & Operations Data Analysis:</b> Uber Ride Performance</li>
            <li>7️⃣ <b>Pharma Insights:</b> A Complete Sales Analysis Dashboard</li>
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🏅 Achievements</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, textAlign: "justify" }}>
            <li>• <b>Winner</b> - DICE Technovision 2.0 Hackathon, Chitkara University</li>
            <li>• <b>First Place</b> - Model Making, Science Carnival, Chitkara University</li>
            <li>• <b>Amar Ujala Excellence Award</b> (2023)</li>
            <li>• <b>Chairperson</b> - IEEE-CIET WIE Student Affinity Group</li>
            {/* <li>• <b>Successfully organized National level hackathons</b> - HACK INDIA</li> */}
            <li>• <b>300+ LeetCode Questions</b> solved</li>
            <li>• <b>Meta Certified Data Analyst</b> (2024)</li>
            <li>• <b>Power BI Data Analytics Certification</b></li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "Java",
              "TensorFlow",
              "Numpy",
              "Pandas",
              "Matplotlib",
              "Seaborn",
              "Power BI",
              "Data Visualization",
              "MySQL",
              "MongoDB",
              "Git",
              "GitHub",
              "DAX",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity",
              "Google Suite",
              "Excel",
              "Tableau",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/u/karunyagupta" },
            { name: "💻 GitHub", link: "https://github.com/karunyagupta" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/karunyagupta" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Download & View Buttons - Responsive */}
        <style>
          {`
            @media (max-width: 600px) {
              .resume-btns {
                flex-direction: column !important;
                gap: 10px !important;
                align-items: stretch !important;
              }
              .resume-btns a {
                width: 100% !important;
                justify-content: center !important;
                font-size: 1rem !important;
                padding: 12px 0 !important;
              }
            }
          `}
        </style>
        <motion.div
          className="resume-btns"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 32,
            gap: 16,
          }}
        >
          <motion.a
            href="/Resume.pdf"
            download="Karunya_Gupta_Resume.pdf"
            className="btn code-btn"
            whileHover={{ scale: 1.08 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              borderRadius: 12,
              fontSize: '1.15rem',
              textDecoration: 'none',
              cursor: 'pointer',
              background: '#181818',
              color: '#06b6d4',
              border: '2px solid #06b6d4',
              fontWeight: 700,
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            <span style={{ fontSize: "1.3em", textAlign: "center" }}>⬇️</span> Download Resume (PDF)
          </motion.a>
          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn code-btn"
            whileHover={{ scale: 1.08 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              borderRadius: 12,
              fontSize: '1.15rem',
              textDecoration: 'none',
              cursor: 'pointer',
              background: '#181818',
              color: '#06b6d4',
              border: '2px solid #06b6d4',
              fontWeight: 700,
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            <span style={{ fontSize: "1.3em", textAlign: "center" }}>👁️</span> View Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
