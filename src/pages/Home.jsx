import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../CSS/Home.css'

import SectionHeading from '../components/SectionHeading'
import Btn from '../components/Btn'

import { BsGithub, BsLinkedin, BsEnvelopeFill, BsWhatsapp, BsInstagram } from 'react-icons/bs'

import photo from '../../public/photo.webp'

const professions = [
  'Product Analyst',
  'Data & Business Analytics',
  'FinTech Enthusiast',
  'Meta Certified Analyst',
]

const quickLinks = [
  { Icon: BsGithub, title: 'GitHub', link: 'https://github.com/karunyagupta' },
  { Icon: BsLinkedin, title: 'LinkedIn', link: 'https://www.linkedin.com/in/karunyagupta/' },
  { Icon: BsEnvelopeFill, title: 'Email', link: 'mailto:mails.karunyagupta@gmail.com' },
  { Icon: BsWhatsapp, title: 'WhatsApp', link: 'https://wa.me/+919805946982' },
  { Icon: BsInstagram, title: 'Instagram', link: 'https://www.instagram.com/ig_karunya_/' },
]

const highlights = [
  { label: 'Location', value: 'Mandi, Himachal Pradesh' },
  { label: 'Expertise', value: 'Python · Power BI · Analytics' },
]

const stats = [
  { num: '9.2', label: 'GPA (B.E. CSE)' },
  { num: '15+', label: 'Analytics Projects' },
  { num: '18+', label: 'Certifications' },
  { num: '300+', label: 'LeetCode Solved' },
]

const topSkills = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Power BI', logo: '/logos/powerbi.png' },
  { name: 'Tableau', logo: '/logos/Tableau.png' },
  { name: 'Pandas', logo: '/logos/pandas-img.png' },
  { name: 'NumPy', logo: '/logos/numpy.png' },
  { name: 'Databricks', logo: '/logos/DataBricks.png' },
  { name: 'Excel', logo: '/logos/excel.png' },
  { name: 'Google Analytics', logo: '/logos/GoogleAnalytics.png' },
  { name: 'Git & GitHub', logo: '/logos/github.png' },
]

const expPreview = [
  {
    role: 'Product Analyst',
    org: 'Snapdeal',
    meta: 'Mar 2026 – Present · Internship',
    logo: '/logos/snapdeal.webp',
  },
  {
    role: 'WIE Chairperson',
    org: 'IEEE-CIET Student Branch',
    meta: 'Jul 2025 – Present · Leadership',
    logo: '/logos/ieeeciet.webp',
  },
  {
    role: 'Marketing Lead',
    org: 'Hack With Her',
    meta: 'Jan 2025 – Mar 2025 · 750+ registrations',
    logo: '/logos/hwh.webp',
  },
]

const projPreview = [
  {
    title: "Snapdeal's Influencer Hub",
    desc: 'A centralized platform digitizing Snapdeal\u2019s end-to-end influencer workflow: onboarding, campaigns, payments and remarks.',
    ss: '/projects/snapdeal.png',
    tags: ['Product', 'Workflow Automation'],
  },
  {
    title: 'SkyMetrics: Aviation Intelligence',
    desc: 'A data engineering + BI solution turning complex aviation datasets into strategic pricing and logistics insights.',
    ss: '/projects/skymatrix.webp',
    tags: ['Power BI', 'ETL', 'DAX'],
  },
  {
    title: 'Employee Attrition Analytics',
    desc: 'An interactive HR dashboard surfacing the key drivers of employee turnover across roles, departments and tenure.',
    ss: '/projects/hr.webp',
    tags: ['Power BI', 'SQL', 'Python'],
  },
]

const blogPreview = [
  {
    title: 'Campus Placement: From Rejection to Selection',
    date: 'June 2026',
    category: 'Career Journey',
    excerpt:
      'How a first-interview rejection became the turning point that led to a better analytics offer — and what the journey taught me.',
  },
  {
    title: 'My Life as a WIE Chairperson at IEEE-CIET SB',
    date: 'April 2026',
    category: 'Leadership',
    excerpt:
      'Behind the scenes of leading a student branch: coordination, mentorship, and learning that leadership is about impact, not authority.',
  },
]

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
}

export default function Home() {
  return (
    <div className="home-wrap ds-page">
      {/* ============ HERO ============ */}
      <section className="home-section" id="top">
        <div className="home-top">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="photo-card"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="photo-glow"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="photo-shell"
            >
              <motion.img
                src={photo}
                alt="Karunya Gupta"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9 }}
                className="profile-photo"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="home-info"
          >
            <span className="eyebrow">Analytics · Product · FinTech</span>
            <h1 className="home-title">
              Hi, I&rsquo;m <span className="home-name">Karunya Gupta</span>
            </h1>
            <p className="typing-effect">Product Analyst @Snapdeal | AceVector</p>
            <p className="home-summary">
              I turn data into practical insights, connect strategy with execution, and enjoy building
              solutions that create measurable impact.
            </p>

            <div className="profession-tags">
              {professions.map((role, i) => (
                <motion.span key={i} whileHover={{ y: -2 }} className="profession-tag">
                  {role}
                </motion.span>
              ))}
            </div>

            <div className="info-cards">
              {highlights.map((info, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 220 }}
                  className="info-card"
                >
                  <strong>{info.label}</strong>
                  <p>{info.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="section-cta" style={{ justifyContent: 'flex-start', marginTop: '1.6rem' }}>
              <Btn to="/projects" variant="primary">View My Work</Btn>
              <Btn href="/Resume.pdf" download="Karunya_Gupta_Resume.pdf" variant="secondary">
                Download Resume
              </Btn>
              <Btn to="/contact" variant="ghost">Contact Me</Btn>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="quick-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="quick-links-title">Connect with me</h2>
          <div className="quick-links-list">
            {quickLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                title={item.title}
                aria-label={item.title}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 250 }}
                className="quick-link-item"
              >
                <item.Icon className="quick-link-img" aria-hidden="true" />
              </motion.a>
            ))}
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <span>Scroll to explore</span>
            <span>&darr;</span>
          </div>
        </motion.div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section className="ds-section ds-section--tint" id="about">
        <div className="ds-container">
          <SectionHeading
            eyebrow="About Me"
            title="Turning data into decisions"
            subtitle="A final-year B.E. Computer Science student specializing in FinTech, focused on analytics, product thinking and clear storytelling."
          />
          <motion.div className="about-preview" {...reveal}>
            <div className="ds-card about-preview__text">
              <p>
                Hi, I&rsquo;m <strong>Karunya Gupta</strong> &mdash; a Product Analyst and final-year
                <strong> B.E. Computer Science</strong> student at Chitkara University. I&rsquo;m passionate
                about turning data, user behavior and business context into clear, actionable insights.
              </p>
              <p>
                I work across product and data analysis using SQL, Python, Excel and Databricks, build
                dashboards that tell a story, and lead teams through IEEE WIE and community initiatives.
              </p>
              <Btn to="/about" variant="secondary" size="sm">Read full story &rarr;</Btn>
            </div>
            <div className="about-preview__facts">
              <div className="ds-card about-fact">
                <strong>Education</strong>
                <p>B.E. CSE (FinTech) · Chitkara University · GPA 9.2</p>
              </div>
              <div className="ds-card about-fact">
                <strong>Focus Areas</strong>
                <p>Business · Product · Data &amp; Financial Analytics</p>
              </div>
              <div className="ds-card about-fact">
                <strong>Open To</strong>
                <p>Analytics &amp; FinTech roles with measurable impact</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="ds-section" style={{ paddingTop: 0 }}>
        <div className="ds-container">
          <motion.div className="stats-strip" {...reveal}>
            {stats.map((s, i) => (
              <div className="ds-card stat-item" key={i}>
                <div className="stat-item__num">{s.num}</div>
                <p className="stat-item__label">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ SKILLS PREVIEW ============ */}
      <section className="ds-section ds-section--tint" id="skills">
        <div className="ds-container">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Skills & Tools"
            subtitle="The core toolkit I use to analyze data, build dashboards and ship insights."
          />
          <motion.div className="skills-chip-cloud" {...reveal}>
            {topSkills.map((s) => (
              <span className="skills-chip" key={s.name}>
                <img src={s.logo} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                {s.name}
              </span>
            ))}
          </motion.div>
          <div className="section-cta">
            <Btn to="/skills" variant="secondary">Explore all skills &rarr;</Btn>
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCE PREVIEW ============ */}
      <section className="ds-section" id="experience">
        <div className="ds-container">
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked & led"
            subtitle="A snapshot of my journey across product, analytics and leadership roles."
          />
          <motion.div className="exp-preview" {...reveal}>
            {expPreview.map((e, i) => (
              <div className="ds-card ds-card--hover exp-row" key={i}>
                <img className="exp-row__logo" src={e.logo} alt={e.org} loading="lazy" decoding="async" />
                <div className="exp-row__body">
                  <p className="exp-row__role">{e.role}</p>
                  <p className="exp-row__org">{e.org}</p>
                  <p className="exp-row__meta">{e.meta}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <div className="section-cta">
            <Btn to="/experience" variant="secondary">View full experience &rarr;</Btn>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS PREVIEW ============ */}
      <section className="ds-section ds-section--tint" id="projects">
        <div className="ds-container">
          <SectionHeading
            eyebrow="Featured Work"
            title="Projects"
            subtitle="A blend of product, analytics dashboards and real-world business impact."
          />
          <motion.div className="preview-grid preview-grid--3" {...reveal}>
            {projPreview.map((p, i) => (
              <motion.div
                className="ds-card ds-card--hover proj-card"
                key={i}
                whileHover={{ y: -6 }}
              >
                <img className="proj-card__img" src={p.ss} alt={p.title} loading="lazy" />
                <div className="proj-card__body">
                  <h3 className="proj-card__title">{p.title}</h3>
                  <p className="proj-card__desc">{p.desc}</p>
                  <div className="proj-card__tags">
                    {p.tags.map((t) => (
                      <span className="proj-card__tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="section-cta">
            <Btn to="/projects" variant="primary">See all projects &rarr;</Btn>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATES + GALLERY split ============ */}
      <section className="ds-section" id="highlights">
        <div className="ds-container">
          <motion.div className="preview-grid preview-grid--2" {...reveal}>
            <div className="ds-card ds-card--hover" style={{ textAlign: 'center', padding: '2rem 1.4rem' }}>
              <div style={{ fontSize: '2rem' }}>🏅</div>
              <h3 style={{ margin: '0.6rem 0 0.4rem', color: '#f2f6ff' }}>Certifications</h3>
              <p className="ds-subheading" style={{ margin: '0 auto 1.2rem' }}>
                18+ certificates across analytics, FinTech and blockchain — from Meta, Deloitte, INSEAD and more.
              </p>
              <Btn to="/certificates" variant="secondary" size="sm">View certificates &rarr;</Btn>
            </div>
            <div className="ds-card ds-card--hover" style={{ textAlign: 'center', padding: '2rem 1.4rem' }}>
              <div style={{ fontSize: '2rem' }}>📸</div>
              <h3 style={{ margin: '0.6rem 0 0.4rem', color: '#f2f6ff' }}>Gallery</h3>
              <p className="ds-subheading" style={{ margin: '0 auto 1.2rem' }}>
                Moments from events, achievements and the journey — a look beyond the résumé.
              </p>
              <Btn to="/gallery" variant="secondary" size="sm">Open gallery &rarr;</Btn>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ BLOG PREVIEW ============ */}
      <section className="ds-section ds-section--tint" id="blog">
        <div className="ds-container">
          <SectionHeading
            eyebrow="Writing"
            title="From the Blog"
            subtitle="Thoughts and reflections on career, leadership and finance."
          />
          <motion.div className="preview-grid preview-grid--2" {...reveal}>
            {blogPreview.map((b, i) => (
              <div className="ds-card ds-card--hover blog-preview-card" key={i}>
                <div className="blog-preview-card__meta">
                  <span>{b.date}</span>
                  <span className="ds-badge">{b.category}</span>
                </div>
                <h3 className="blog-preview-card__title">{b.title}</h3>
                <p className="blog-preview-card__excerpt">{b.excerpt}</p>
                <Btn to="/blog" variant="ghost" size="sm">Read more &rarr;</Btn>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ RECRUITER / CONTACT CTA ============ */}
      <section className="ds-section" id="contact">
        <motion.div className="recruiter-cta" {...reveal}>
          <div className="recruiter-cta-card">
            <p className="recruiter-cta-label">For Recruiters</p>
            <h3>Looking for someone who can turn data into decisions?</h3>
            <p>
              I&rsquo;m interested in analytics, product, finance and problem-solving roles where I can
              contribute, learn quickly and create measurable impact.
            </p>
            <div className="recruiter-cta-actions">
              <a href="/Resume.pdf" download className="cta-btn cta-btn-primary">Download Resume</a>
              <Link to="/resume" className="cta-btn cta-btn-secondary">View Resume</Link>
              <Link to="/contact" className="cta-btn cta-btn-secondary">Contact Me</Link>
              <a
                href="https://www.linkedin.com/in/karunyagupta/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
