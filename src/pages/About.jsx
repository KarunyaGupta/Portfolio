import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import Btn from "../components/Btn";

const EDUCATION = [
  {
    icon: FaUniversity,
    title: "Bachelor of Engineering in Computer Science and Engineering",
    spec: "Specialization: Financial Technology (FinTech)",
    place: "Chitkara University Institute of Engineering and Technology — Rajpura, Punjab",
    detail: "Final Year | GPA: 9.2",
    period: "2023 – Present",
  },
  {
    icon: FaGraduationCap,
    title: "Higher Secondary Education (12th Grade)",
    spec: "Science Stream (PCM + Computer Science)",
    place: "Lord's Convent School — Sarkaghat, Mandi, Himachal Pradesh",
    detail: "Himachal Pradesh Board (HPBOSE) | Percentage: 89.8%",
    period: "Completed in 2023",
  },
  {
    icon: FaSchool,
    title: "Secondary Education (10th Grade)",
    spec: "",
    place: "Lord's Convent School — Sarkaghat, Mandi, Himachal Pradesh",
    detail: "Himachal Pradesh Board (HPBOSE) | Percentage: 88.9%",
    period: "Completed in 2021",
  },
];

const RECS = [
  {
    name: "Arushi Agarwal",
    img: "rec_user/Arushi.jpg",
    link: "https://www.linkedin.com/in/arushi-agarwal-568a48110/",
    role: "Soft Skills & Communication Trainer | ESOL Certified IELTS Trainer | Certified POSH Trainer | English Language Coach | Interview Expert",
    meta: "November 8, 2025 • Mentor",
    text: "Karunya has effective communication skills that set him apart from the rest of the students. He took all the activities and challenges head-on in the sessions. He improves on the spot, that showcases his adaptability and presence of mind. I wish him all the best for his future endeavours.",
  },
  {
    name: "HARSH KUMAR SAHU",
    img: "rec_user/Harsh.jpg",
    link: "https://www.linkedin.com/in/hksahu/",
    role: "Mentor at IEEE CIET",
    meta: "October 14, 2025 • Worked together",
    text: "Karunya did a wonderful job and performed exceptionally well during his tenure as the Promotion Coordinator at IEEE-CIET SB. His efforts greatly contributed to helping the team achieve its event targets. Not only did he excel in promotions, but he also showcased impressive skills in other areas, from organizing events to executing them flawlessly. His dedication and commitment truly make him a valuable team member.",
  },
  {
    name: "Sarthak Sadhotra",
    img: "rec_user/Sarthak.jpg",
    link: "https://www.linkedin.com/in/sarthak-sadhotra-1b7b1b1b1/",
    role: "AI PDM @CreateBytes | Building CBXperts | Mentor at IEEE-CIET",
    meta: "October 15, 2025 • Worked together",
    text: "I\u2019ve had the pleasure of working closely with Karunya during his journey at the IEEE-CIET Student Branch. As someone who has been part of IEEE for four years and currently serves as a mentor, I\u2019ve seen his exceptional growth as a leader and team player. From being a Promotions Executive to now serving as WIE Chairperson, Karunya has consistently shown dedication, creativity, and leadership. His passion for data analytics and AI, combined with his analytical mindset and collaborative spirit, make him a true asset to any team. Highly recommended for roles that value leadership, innovation, and data-driven thinking.",
  },
  {
    name: "Harshita Gupta",
    img: "rec_user/harshita.jpg",
    link: "https://www.linkedin.com/in/harshita-gupta-090028290/",
    role: "Google-Gemini Student Ambassador | Secretary @Chitkara ACM SC | Logistic Manager and Tech Head at @indiema",
    meta: "January 2, 2026 • Studied together",
    text: "Karunya is a confident and driven individual with a solid team-oriented mindset. He takes ownership of his work, communicates clearly, and ensures tasks are executed efficiently. With a growing interest and understanding of FinTech and analytics, he actively works on strengthening his technical and analytical skills to solve practical problems. His ability to adapt, collaborate, and lead under pressure makes him a dependable team member. Karunya has the potential to add real value to any organization, and I highly recommend him for roles that require leadership, initiative, and a strong learning attitude.",
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5 },
};

export default function AboutMe() {
  return (
    <div className="ds-page">
      <section className="ds-section">
        <div className="ds-container ds-container--narrow">
          <SectionHeading
            eyebrow="About Me"
            title="Get to know me"
            subtitle="Product analyst, final-year FinTech student, and someone who loves turning data into decisions."
          />

          {/* Intro */}
          <motion.div className="ds-card" style={{ textAlign: "justify", lineHeight: 1.8 }} {...reveal}>
            <p style={{ marginTop: 0, color: "var(--text-soft)" }}>
              Hi, I&rsquo;m <strong style={{ color: "#fff" }}>Karunya Gupta</strong> &mdash; a{" "}
              <strong style={{ color: "#fff" }}>Product Analyst</strong> and final-year{" "}
              <strong style={{ color: "#fff" }}>B.E. Computer Science and Engineering</strong> student at{" "}
              <strong style={{ color: "#fff" }}>Chitkara University</strong>. I&rsquo;m passionate about turning
              data, user behavior, and business context into clear, actionable insights.
            </p>
            <p style={{ color: "var(--text-soft)" }}>
              Currently, I&rsquo;m working in analytics and product-focused problem solving, while also
              strengthening my skills in data analysis, business strategy, and AI-driven decision making.
            </p>

            <h3 style={{ color: "var(--accent-2)", marginBottom: 8 }}>What I do</h3>
            <ul style={{ color: "var(--text-soft)", paddingLeft: "1.2rem", margin: 0 }}>
              <li><strong style={{ color: "#fff" }}>Product &amp; Data Analysis</strong> using SQL, Python, Excel, and Databricks</li>
              <li><strong style={{ color: "#fff" }}>Business Insights &amp; Reporting</strong> to support decisions and improve outcomes</li>
              <li><strong style={{ color: "#fff" }}>Dashboarding &amp; Storytelling</strong> with clear, data-driven narratives</li>
              <li><strong style={{ color: "#fff" }}>Leadership &amp; Collaboration</strong> through IEEE WIE and team-based initiatives</li>
            </ul>

            <h3 style={{ color: "var(--accent-2)", margin: "1.2rem 0 8px" }}>My approach</h3>
            <p style={{ color: "var(--text-soft)", margin: 0 }}>
              I believe strong solutions come from combining data, curiosity, and clear communication. I focus on
              understanding the problem first, then using analytics and collaboration to create practical,
              impact-driven outcomes. My experience in leadership and projects has strengthened my ability to work
              across teams and deliver with clarity.
            </p>

            <h3 style={{ color: "var(--accent-2)", margin: "1.2rem 0 8px" }}>Open to</h3>
            <p style={{ color: "var(--text-soft)", margin: 0 }}>
              Opportunities in <strong style={{ color: "#fff" }}>Analytics</strong>,{" "}
              <strong style={{ color: "#fff" }}>FinTech</strong>, and data-driven roles where I can contribute,
              learn fast, and create measurable impact.
            </p>

            <div className="section-cta" style={{ justifyContent: "flex-start", marginTop: "1.6rem" }}>
              <Btn to="/experience" variant="secondary" size="sm">View Experience &rarr;</Btn>
              <Btn to="/resume" variant="ghost" size="sm">View Resume &rarr;</Btn>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="ds-section ds-section--tint">
        <div className="ds-container ds-container--narrow">
          <SectionHeading eyebrow="Academics" title="Education" />
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {EDUCATION.map((e, i) => {
              const Icon = e.icon;
              return (
                <motion.div
                  key={i}
                  className="ds-card ds-card--hover"
                  {...reveal}
                  style={{ display: "flex", alignItems: "center", gap: "1.1rem", flexWrap: "wrap" }}
                >
                  <Icon size={38} color="var(--accent)" style={{ flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <h4 style={{ color: "#f2f6ff", margin: "0 0 4px", fontSize: "1.05rem" }}>{e.title}</h4>
                    {e.spec && (
                      <span style={{ display: "block", fontWeight: 500, color: "var(--accent-2)", marginBottom: 4, fontSize: "0.95rem" }}>
                        {e.spec}
                      </span>
                    )}
                    <p style={{ color: "var(--text-soft)", margin: "0 0 2px" }}>{e.place}</p>
                    <p style={{ color: "var(--text-muted)", margin: "0 0 2px" }}>{e.detail}</p>
                    <p style={{ color: "var(--text-muted)", margin: 0 }}>{e.period}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="ds-section">
        <div className="ds-container ds-container--narrow">
          <SectionHeading eyebrow="Kind Words" title="Recommendations" />
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {RECS.map((r, i) => (
              <motion.div key={i} className="ds-card" {...reveal} style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <img
                    src={r.img}
                    alt={r.name}
                    style={{ width: 46, height: 46, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--accent)" }}
                  />
                  <div>
                    <a href={r.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-2)", textDecoration: "none", fontWeight: 600 }}>
                      {r.name}
                    </a>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-soft)" }}>{r.role}</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{r.meta}</div>
                  </div>
                </div>
                <p style={{ color: "var(--text-soft)", fontSize: "0.98rem", textAlign: "justify", margin: 0, lineHeight: 1.7 }}>
                  {r.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="section-cta">
            <Btn to="/contact" variant="primary">Let&rsquo;s connect &rarr;</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
