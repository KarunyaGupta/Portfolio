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

        {/* Profile Header - Row with Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div style={{ flex: 1, minWidth: 220 }}>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 Karunya Gupta
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc", textAlign: "justify" }}>
              Final year Computer Science and Engineering Student -
              <br />Chitkara University
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
              flex: 1,
              minWidth: 220,
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
            <p style={{ marginTop: 6, color: "#ccc", textAlign:'justify'  }}>
              Highly motivated and results-oriented Computer Science and Engineering student with a strong foundation in data
              analysis and business intelligence. Proficient in Python, SQL, and tools like Power BI and Tableau. Proven ability to create
              insightful dashboards, analyze complex datasets, and deliver data-driven solutions to improve business efficiency and
              decision-making.
            </p>
          </motion.div>
        </motion.div>

        {/* Brief Experience Section */}
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
            💼 Experience
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, textAlign: "left" }}>
            <li>
              <strong>Product Analyst @ Snapdeal</strong>
              <br />
              <span style={{ color: "#aaa" }}>
                Working on data-driven insights, reporting, automation and business problem-solving to support post-product decisions.
              </span>
            </li>
            <li style={{ marginTop: 10 }}>
              <strong>Chairperson, WIE IEEE-CIET SB</strong>
              <br />
              <span style={{ color: "#aaa" }}>
                Led initiatives, coordinated events, and built a collaborative environment for student growth.
              </span>
            </li>
            <li style={{ marginTop: 10 }}>
              <strong>Analytics & Research Projects</strong>
              <br />
              <span style={{ color: "#aaa" }}>
                Built dashboards and analytical solutions using Python, SQL, Power BI, and Excel.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
              <strong>B.E. Computer Science and Engineering</strong> - Chitkara University, 2023–Present <br />
              <span style={{ color: "#00ffd0", fontSize: "0.89em"}}>Specialization: Financial Technology (FinTech)</span><br />
              <span style={{ color: "#aaa" }}>GPA: 9.2</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board - Lord's Convent School</strong> (Himachal Pradesh Board, 2023) <br />
              <span style={{ color: "#00ffd0", fontSize: "0.89em", marginTop: 1}}>Science Stream (PCM + Computer Science)</span><br />

              <span style={{ color: "#aaa" }}>Percentage: 89.8%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board - Lord's Convent School</strong> (Himachal Pradesh Board, 2021)
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
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, textAlign: "left" }}>
            <li>1️⃣ <b>Codereview.ai:</b> An intelligent code analysis tool that provides instant feedback on your code using AI-powered suggestions.</li>
            <li style={{ marginTop: 8 }}>2️⃣ <b>Skymatrix:</b> A scalable SaaS platform for advanced data visualization and analytics, enabling real-time business insights.</li>
            <li style={{ marginTop: 8 }}>3️⃣ <b>Employee Attrition:</b> A predictive analytics project focused on employee attrition, helping organizations retain top talent.</li>
            <li style={{ marginTop: 8 }}>4️⃣ <b>Financial Data Analysis:</b> Google Stock Performance and Market Volatility</li>
            <li style={{ marginTop: 8 }}>5️⃣ E-commerce Sales Performance & Profitability Analysis <b>(Amazon Store Data)</b></li>
            <li style={{ marginTop: 8 }}>6️⃣ <b>Transportation & Operations Data Analysis:</b> Uber Ride Performance</li>
            <li style={{ marginTop: 8 }}>7️⃣ <b>Pharma Insights:</b> A Complete Sales Analysis Dashboard</li>
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🏅 Achievements</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, textAlign: "left" }}>
            <li>• <b>Winner</b> - DICE Technovision 2.0 Hackathon, Chitkara University</li>
            <li style={{ marginTop: 8 }}>• <b>First Place</b> - Model Making, Science Carnival, Chitkara University</li>
            <li style={{ marginTop: 8 }}>• <b>Amar Ujala Excellence Award</b> (2023)</li>
            <li style={{ marginTop: 8 }}>• <b>Chairperson</b> - IEEE-CIET WIE Student Affinity Group</li>
            {/* <li style={{ marginTop: 8 }}>• <b>Successfully organized National level hackathons</b> - HACK INDIA</li> */}
            <li style={{ marginTop: 8 }}>• <b>300+ LeetCode Questions</b> solved</li>
            <li style={{ marginTop: 8 }}>• <b>Meta Certified Data Analyst</b> (2025)</li>
            <li style={{ marginTop: 8 }}>• <b>Power BI Data Analytics Certification with ChatGPT</b></li>
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
              "DataBricks",
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
            .resume-cta-btn {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              padding: 0.78rem 1rem;
              border-radius: 999px;
              font-size: 0.95rem;
              font-weight: 600;
              text-decoration: none;
              transition: transform 0.2s ease, background 0.2s ease;
            }

            .resume-cta-btn-primary {
              background: linear-gradient(90deg, var(--accent), #00b4ff);
              color: #fff;
            }

            .resume-cta-btn-secondary {
              background: rgba(255, 255, 255, 0.06);
              color: #eef7ff;
              border: 1px solid rgba(255, 255, 255, 0.08);
            }

            @media (max-width: 600px) {
              .resume-btns {
                flex-direction: column !important;
                align-items: stretch !important;
              }
              .resume-cta-btn {
                width: 100% !important;
                font-size: 0.95rem;
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
            flexWrap: "wrap",
            marginTop: 32,
            gap: 12,
          }}
        >
          <motion.a
            href="/What_makes_me_unique.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-cta-btn resume-cta-btn-secondary"
            whileHover={{ scale: 1.04 }}
          >
            <span>🗣</span> Why Me? SharkTank Style Pitch
          </motion.a>

          <motion.a
            href="/Resume.pdf"
            download="Karunya_Gupta_Resume.pdf"
            className="resume-cta-btn resume-cta-btn-secondary"
            whileHover={{ scale: 1.04 }}
          >
            <span>⬇️</span> Download Resume (PDF)
          </motion.a>

          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-cta-btn resume-cta-btn-secondary"
            whileHover={{ scale: 1.04 }}
          >
            <span>👁️</span> View Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
