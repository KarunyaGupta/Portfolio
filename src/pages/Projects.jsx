import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🤖 Code Review AI – Intelligent Code Analysis Tool',
    desc: 'An AI-powered platform that reviews code in real-time and provides instant suggestions for improvement. It helps developers enhance performance, security, and code quality with smart, automated insights.',
    ss: '/codereview.png',
    tech: ['React', 'Vite', 'Express', 'Google Generative AI(Gemini)'],
    live: '#',
    code: 'https://github.com/KarunyaGupta/CodeReview.ai'
  },
  {
  title: '🛒 E-Commerce Sales Performance & Profitability Analysis',
  desc: 'A data-driven Power BI dashboard that analyzes Amazon store sales to uncover trends, top-performing products, revenue patterns, and customer behavior. It helps in making informed business decisions through interactive visuals and KPIs.',
  ss: '/ecom.jpg',
  tech: ['PowerBI', 'Excel/CSV', 'DAX', 'Power Query'],
  live: '/e-commerce.png',
  code: 'https://drive.google.com/drive/folders/1vzF07kBsyB4jH2JHNkQQlG5VlMx5JfoO?usp=drive_link'
  },
  {
    title: '🚓 Uber Ride Analysis – End-to-End Business Intelligence Dashboard',
    desc: 'An interactive Power BI dashboard that analyzes Uber ride data to uncover booking trends, revenue patterns, rider behavior, and operational performance. The report supports data-driven decision-making through KPIs, drill-downs, vehicle insights, and location-based metrics.',
    ss: '/uber.jpg',
    tech: ['Pandas', 'DAX', 'PowerBI', 'KPIs'],
    live: 'https://app.powerbi.com/links/UgR2hEsl46?ctid=7211e667-d09c-4d22-8038-4d51ebe960a8&pbi_source=linkShare',
    code: 'https://drive.google.com/drive/folders/1T_n-1GsqTFy4hSpwvh56Ca4ufjxtppff?usp=drive_link'
  },
  {
  title: '💼 Portfolio Website',
  desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
  ss: '/portfolio.jpg',
  tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  live: '#',
  code: 'https://github.com/KarunyaGupta/Portfolio'
  },
  {
    title: '🩺 Pharmaceutical Sales Analysis Dashboard',
    desc: "This project analyzes a global Pharmaceutical Manufacturing Company's raw sales data to derive meaningful insights. The analysis focuses on performance metrics across different regions, distributors, customers, and sales teams.",
    ss: '/pharma.jpg',
    tech: ['Pandas', 'EDA', 'Python', 'Data Visiualization'],
    live: 'https://app.powerbi.com/links/zOIZyJ4BT2?ctid=7211e667-d09c-4d22-8038-4d51ebe960a8&pbi_source=linkShare&bookmarkGuid=0e8f3acb-8169-4858-8601-b763e080b62f',
    code: 'https://drive.google.com/drive/folders/1YC0a5DuxxCfen5qzGFMGiGuu1trLyyX_?usp=drive_link'
  },
  {
    title: '📊 ProfileX – Data Profiler',
    desc: 'Smart data profiling and preprocessing web app for CSV datasets — feature summary, missing value handling, and data visualization.',
    ss: '/ProfileX.png',
    tech: ['Streamlit', 'Pandas', 'Plotly',"Scikit-learn","Matplotlib","Seaborn","Visualization"],
    live: 'https://profilex.streamlit.app/',
    code: 'https://github.com/kunjdesai/ProfileX'
  },
  {
    title: '💰 Loan Status Prediction',
    desc: 'This is a Data Science and Machine Learning project aimed at building a classification model to predict whether a loan application will be approved or rejected based on applicant and loan attributes.',
    ss: '/loan.png',
    tech: ['scikit-learn', 'Numpy', 'Pandas',"Matplotlib"],
    live: '#',
    code: 'https://github.com/KarunyaGupta/Loan-Prediction-Py'
  },
  {
    title: '📽 Netflix Content Library',
    desc: 'This is a Data Analysis and Visualization project analyzing the Netflix content catalog (movies and TV shows). The goal is to draw insights and present findings using an interactive report created in Power BI.',
    ss: '/netflix.png',
    tech: ["PowerBI", 'Excel/CSV', 'DAX', 'Power Query'],
    live: '#',
    code: 'https://drive.google.com/drive/folders/1eaPT0P8CwNnIxo4qdMnV3zZpKeXt1cOk?usp=sharing'
  },
  {
    title: '🚓Bengaluru Rides Analysis (OLA)',
    desc: 'This is a data analysis and exploration project focused on understanding patterns and insights from a dataset of 100,000 rides taken in the city of Bengaluru.',
    ss: '/uber.jpg',
    tech: ['CSV', 'Numpy', 'Pandas',"Matplotlib"],
    live: '#',
    code: '#'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Source
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
