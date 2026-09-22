import React from 'react'
import Btn from '../components/Btn'

export default function NotFound() {
  return (
    <div className="ds-page">
      <section className="ds-section" style={{ minHeight: '70vh', justifyContent: 'center' }}>
        <div className="ds-container ds-container--narrow" style={{ textAlign: 'center' }}>
          <div
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 6rem)',
              fontWeight: 800,
              lineHeight: 1,
              background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            404
          </div>
          <h2 style={{ color: '#f2f6ff', marginTop: '0.5rem' }}>Page not found</h2>
          <p className="ds-subheading" style={{ margin: '0.5rem auto 1.6rem' }}>
            The page you requested doesn&rsquo;t exist or may have moved.
          </p>
          <div className="section-cta" style={{ marginTop: 0 }}>
            <Btn to="/" variant="primary">Back to Home</Btn>
            <Btn to="/projects" variant="secondary">View Projects</Btn>
          </div>
        </div>
      </section>
    </div>
  )
}
