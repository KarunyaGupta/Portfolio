import React from 'react'
import { motion } from 'framer-motion'
import '../CSS/Home.css'

import photo from '../../public/photo.webp'
import githubLogo from '../../public/github.png'
import linkedinLogo from '../../public/linkedin.png'
import gmailLogo from '../../public/gmail.png'
import whatsappLogo from '../../public/whatsapp.png'
import instagramLogo from '../../public/insta.png'

export default function Home() {
  const professions = [
    'Product Analyst',
    'Data & Business Analytics',
    'FinTech Enthusiast',
    'Meta Certified Analyst'
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/karunyagupta' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/karunyagupta/' },
    { img: gmailLogo, title: 'Email', link: 'mailto:mails.karunyagupta@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+919805946982' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/ig_karunya_/' }
  ]

  const highlights = [
    { label: 'Location', value: 'Mandi, Himachal Pradesh' },
    { label: 'Expertise', value: 'Python · Power BI · Analytics' },
    // { label: 'Contact', value: 'mails.karunyagupta@gmail.com' }
  ]

  return (
    <section className="home-section">
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
            Hi, I’m{' '}
            <span className="home-name">Karunya Gupta</span>
          </h1>
          <p className="typing-effect">Business & Data Analyst · FinTech Enthusiast</p>
          <p className="home-summary">
            I turn data into practical insights, connect strategy with execution, and enjoy building
            solutions that create measurable impact.
          </p>

          <div className="profession-tags">
            {professions.map((role, i) => (
              <motion.span
                key={i}
                whileHover={{ y: -2 }}
                className="profession-tag"
              >
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
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="quick-link-item"
            >
              <img src={item.img} alt={item.title} className="quick-link-img" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.section
        className="recruiter-cta"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="recruiter-cta-card">
          <p className="recruiter-cta-label">For Recruiters</p>
          <h3>Looking for someone who can turn data into decisions?</h3>
          <p>
            I’m interested in analytics, product, finance, and problem-solving roles where I can
            contribute, learn quickly, and create measurable impact.
          </p>
          <div className="recruiter-cta-actions">
            <a href="/Resume.pdf" download className="cta-btn cta-btn-primary">
              Download Resume
            </a>
            <a href="/resume" className="cta-btn cta-btn-secondary">
              View Resume
            </a>
            <a href="/contact" className="cta-btn cta-btn-secondary">
              Contact Me
            </a>
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
      </motion.section>
    </section>
  )
}
