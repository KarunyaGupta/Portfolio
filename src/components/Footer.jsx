import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsLinkedin, BsEnvelopeFill, BsInstagram } from 'react-icons/bs'
import '../CSS/Footer.css'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Certificates', to: '/certificates' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

const SOCIALS = [
  { Icon: BsGithub, title: 'GitHub', link: 'https://github.com/karunyagupta' },
  { Icon: BsLinkedin, title: 'LinkedIn', link: 'https://www.linkedin.com/in/karunyagupta/' },
  { Icon: BsEnvelopeFill, title: 'Email', link: 'mailto:mails.karunyagupta@gmail.com' },
  { Icon: BsInstagram, title: 'Instagram', link: 'https://www.instagram.com/ig_karunya_/' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          {/* <span className="site-footer__logo">KG</span> */}
          <div>
            <p className="site-footer__name">Karunya Gupta</p>
            <p className="site-footer__role">Business &amp; Data Analyst · FinTech Enthusiast</p>
          </div>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {NAV.map((l) => (
            <Link key={l.to} to={l.to} className="site-footer__link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__socials">
          {SOCIALS.map((s) => (
            <a
              key={s.title}
              href={s.link}
              title={s.title}
              aria-label={s.title}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__social"
            >
              <s.Icon aria-hidden="true" />
            </a>
          ))}
        </div>
       </div>

      <div className="site-footer__bar">
        © {new Date().getFullYear()} Karunya Gupta · All Rights Reserved.
      </div>
    </footer>
  )
}
