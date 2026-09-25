import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

// Code-split every route except Home (the landing page). Each lazy import
// becomes its own chunk, so visitors only download a page's JS when they
// navigate to it — shrinking the initial bundle.
const Projects = lazy(() => import('./pages/Projects'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Certificates = lazy(() => import('./pages/Certificates'))
const Blog = lazy(() => import('./pages/Blog'))
const Resume = lazy(() => import('./pages/Resume'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const SkillNetwork = lazy(() => import('./pages/Skills'))
const Experience = lazy(() => import('./pages/Experience'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const location = useLocation();
  React.useLayoutEffect(() => {
    // Jump instantly to the top on every route change.
    // Use 'instant' so the global smooth-scroll behavior doesn't animate
    // (which could leave the new page scrolled partway down).
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);
  return null;
}

// Lightweight fallback shown while a lazy route chunk loads.
function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 38,
          height: 38,
          borderRadius: '50%',
          border: '3px solid rgba(255,255,255,0.15)',
          borderTopColor: 'var(--accent, #7c3aed)',
          animation: 'route-spin 0.7s linear infinite',
        }}
      />
      <span
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          clip: 'rect(0 0 0 0)',
        }}
      >
        Loading…
      </span>
      <style>{`@keyframes route-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/skills" element={<SkillNetwork />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
