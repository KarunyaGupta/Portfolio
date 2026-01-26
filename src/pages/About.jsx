import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "clamp(1rem, 4vw, 3rem) 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.7,
          background: "rgba(255,255,255,0.04)",
          padding: "clamp(1.5rem, 3vw, 3.5rem)",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
          boxSizing: "border-box",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textAlign: "center",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
            textAlign: "justify",
          }}
        >
          Hi, I’m <strong>Karunya Gupta</strong> - an aspiring{" "}
          <strong>Analyst</strong> and{" "}
          <strong></strong> with a passion for turning
          data into actionable insights.
        </p>
        <p className="text-gray-700 mb-4" style={{textAlign: "justify" }}>
          As a pre-final year
          <strong> B.E. Computer Science and Engineering</strong> student at
          <strong> Chitkara University</strong>, I combine academic learning with
          hands-on projects and leadership experience.
        </p>


        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">What I do</h2>
          <ul className="list-disc list-inside text-gray-700" style={{textAlign: "justify" }}>
          <li>
          <strong>Data Analysis & Visualization</strong> (Excel, Power BI, DAX, SQL, Python)
          </li>
          <li>
          <strong>Business Insights & Reporting</strong> : turning data into
          action
          </li>
          <li>
          <strong>Generative AI & Prompt Engineering</strong> : exploring real
          business applications
          </li>
          <li>
          <strong>Leadership & Collaboration</strong> through IEEE WIE initiatives
          </li>
          </ul>
          </div>


          <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">My approach</h2>
          <p className="text-gray-700" style={{textAlign: "justify" }}>
          I believe technology should be people-centered. I focus on building
          solutions that are insightful, easy to understand, and useful for
          decision-making. Leading IEEE WIE, organizing events, and collaborating
          with diverse teams has sharpened my communication, project
          management, and problem-solving skills.
          </p>
          </div>


          <div>
          <h2 className="text-xl font-medium mb-2">Open to</h2>
          <p className="text-gray-700" style={{textAlign: "justify" }}>
          Internships or projects in <strong>Business Analysis</strong> /{' '}
          <strong>FinTech Domain</strong>, semi-technical roles bridging
          technology and business, and collaborations in <strong>AI</strong>,
          analytics, and innovation-driven projects.
          </p>
          </div>


          <footer className="mt-6 text-sm text-gray-600" style={{textAlign: "justify" }}>
          <p>
          Let’s connect if you’re looking for an enthusiastic learner who combines my
          <strong> skills</strong> with <strong>analytical thinking</strong> and
          an eagerness to contribute to data-driven decision making.
          </p>
          </footer>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.2rem 1.4rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: 0,
                    fontSize: "1.05rem",
                  }}
                >
                  Bachelor of Engineering in Computer Science and Engineering
                </h4>
                <span style={{ display: "block", fontWeight: 500, color: "#00ffd0", marginTop: 0, marginBottom: "0.2rem", fontSize: "0.98rem", lineHeight: 1.2 }}>
                  Specialization: Financial Technology (FinTech)
                </span>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                  <strong>Chitkara University</strong> - Rajpura, Punjab
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  3rd Year (Pursuing) | GPA: 8.97
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2023 – 2027</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.2rem 1.4rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h4 style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "1.05rem" }}>
                  Higher Secondary Education (12th Grade)
                </h4>
                <span style={{ display: "block", fontWeight: 500, color: "#00ffd0", marginTop: 0, marginBottom: "0.2rem", fontSize: "0.98rem", lineHeight: 1.2 }}>
                  Science Stream (PCM + Computer Science)
                </span>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                  <strong>Lord's Convent School</strong> - Sarkaghat, Mandi, Himachal Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Himachal Pradesh Board (HPBOSE) | Percentage: 89.8%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2023</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.2rem 1.4rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h4 style={{ color: "var(--accent)", marginBottom: "0.4rem", fontSize: "1.05rem" }}>
                  Secondary Education (10th Grade)
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                  <strong>Lord's Convent School</strong> - Sarkaghat, Mandi, Himachal Pradesh,
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Himachal Pradesh Board (HPBOSE) | Percentage: 88.9%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2021</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Recommendations Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Recommendations
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* 1. Arushi Agarwal */}
            <div style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "1.2rem 1.4rem",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 15px rgba(0,255,200,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "0.7rem"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <img src="/public/rec_user/Arushi.jpg" alt="Arushi Agarwal" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--accent)" }} />
                <div>
                  <a href="https://www.linkedin.com/in/arushi-agarwal-568a48110/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                    Arushi Agarwal
                  </a><br />
                  <span style={{ fontSize: "0.97rem", color: "#00ffd0" }}>Soft Skills & Communication Trainer | ESOL Certified IELTS Trainer | Certified POSH Trainer | English Language Coach | Interview Expert</span>
                  <div style={{ fontSize: "0.85rem", color: "#aaa" }}>November 8, 2025 &bull; Mentor</div>
                </div>
              </div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.01rem", textAlign: "justify" }}>
                Karunya has effective communication skills that set him apart from the rest of the students. He took all the activities and challenges head-on in the sessions. He improves on the spot, that showcases his adaptability and presence of mind. I wish him all the best for his future endeavours.
              </div>
            </div>

            {/* 2. Harsh Kumar Sahu */}
            <div style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "1.2rem 1.4rem",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 15px rgba(0,255,200,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "0.7rem"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <img src="/public/rec_user/Harsh.jpg" alt="Harsh Kumar Sahu" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--accent)" }} />
                <div>
                  <a href="https://www.linkedin.com/in/hksahu/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                    HARSH KUMAR SAHU
                  </a><br />
                  <span style={{ fontSize: "0.97rem", color: "#00ffd0" }}>Mentor at IEEE CIET</span>
                  <div style={{ fontSize: "0.85rem", color: "#aaa" }}>October 14, 2025 &bull; Worked together</div>
                </div>
              </div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.01rem", textAlign: "justify" }}>
                Karunya did a wonderful job and performed exceptionally well during his tenure as the Promotion Coordinator at IEEE-CIET SB. His efforts greatly contributed to helping the team achieve its event targets. Not only did he excel in promotions, but he also showcased impressive skills in other areas, from organizing events to executing them flawlessly. His dedication and commitment truly make him a valuable team member.
              </div>
            </div>

            {/* 3. Sarthak Sadhotra */}
            <div style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "1.2rem 1.4rem",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 15px rgba(0,255,200,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "0.7rem"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <img src="/public/rec_user/Sarthak.jpg" alt="Sarthak Sadhotra" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--accent)" }} />
                <div>
                  <a href="https://www.linkedin.com/in/sarthak-sadhotra-1b7b1b1b1/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                    Sarthak Sadhotra
                  </a><br />
                  <span style={{ fontSize: "0.97rem", color: "#00ffd0" }}>AI PDM @CreateBytes | Building CBXperts | Mentor at IEEE-CIET</span>
                  <div style={{ fontSize: "0.85rem", color: "#aaa" }}>October 15, 2025 &bull; Worked together</div>
                </div>
              </div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.01rem", textAlign: "justify" }}>
                I’ve had the pleasure of working closely with Karunya during his journey at the IEEE-CIET Student Branch. As someone who has been part of IEEE for four years and currently serves as a mentor, I’ve seen his exceptional growth as a leader and team player.<br /><br />
                From being a Promotions Executive to now serving as WIE Chairperson, Karunya has consistently shown dedication, creativity, and leadership. His passion for data analytics and AI, combined with his analytical mindset and collaborative spirit, make him a true asset to any team.<br /><br />
                Highly recommended for roles that value leadership, innovation, and data-driven thinking.<br /><br />
                <span style={{ color: "#aaa", fontSize: "0.97rem" }}>Sarthak Sadhotra<br />Mentor, IEEE-CIET Student Branch</span>
              </div>
            </div>

            {/* 4. Harshita Gupta */}
            <div style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "1.2rem 1.4rem",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 15px rgba(0,255,200,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "0.7rem"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <img src="/public/rec_user/Harshita.jpg" alt="Harshita Gupta" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--accent)" }} />
                <div>
                  <a href="https://www.linkedin.com/in/harshita-gupta-090028290/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                    Harshita Gupta
                  </a><br />
                  <span style={{ fontSize: "0.97rem", color: "#00ffd0" }}>Google-Gemini Student Ambassador | Secretary @Chitkara ACM SC | Logistic Manager and Tech Head at @indiema</span>
                  <div style={{ fontSize: "0.85rem", color: "#aaa" }}>January 2, 2026 &bull; Studied together</div>
                </div>
              </div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.01rem", textAlign: "justify" }}>
                Karunya is a confident and driven individual with a solid team-oriented mindset. He takes ownership of his work, communicates clearly, and ensures tasks are executed efficiently.<br /><br />
                With a growing interest and understanding of FinTech and analytics, he actively works on strengthening his technical and analytical skills to solve practical problems. His ability to adapt, collaborate, and lead under pressure makes him a dependable team member.<br /><br />
                Karunya has the potential to add real value to any organization, and I highly recommend him for roles that require leadership, initiative, and a strong learning attitude.
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
