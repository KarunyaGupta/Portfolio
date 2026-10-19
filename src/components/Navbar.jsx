import React, { useState, useEffect, useRef } from "react";
import Snackbar from "./Snackbar";
import { NavLink } from "react-router-dom"; // add useLocation
import { motion, AnimatePresence } from "framer-motion";
import photo from '../../public/photo.webp'

const links = [
  { label: "Home", to: "/", snackbar: "Welcome Home!" },
  { label: "Projects", to: "/projects", snackbar: "Projects Section" },
  { label: "Gallery", to: "/gallery", snackbar: "Gallery Section" },
  { label: "Skills", to: "/skills", snackbar: "Skills Section" },
  { label: "Experience", to: "/experience", snackbar: "Experience Section" },
  { label: "Certificates", to: "/certificates", snackbar: "Certificates Section" },
  { label: "Blog", to: "/blog", snackbar: "Blog Section" },
  { label: "Resume", to: "/resume", snackbar: "Resume Section" },
  { label: "About Me", to: "/about", snackbar: "About Me Section" },
  // { label: "Why Me?", to: "/WhyMe", snackbar: "Why Me Section" },
  { label: "Contact", to: "/contact", snackbar: "Contact Section" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [logoImgOk, setLogoImgOk] = useState(true);
  const navRef = useRef(null);
  const linksRef = useRef(null);
  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const handleSectionClick = (msg) => {
    setSnackbarMsg(msg);
    setSnackbarOpen(true);
  };

  // breakpoint to force mobile layout on narrow screens
  const MOBILE_BREAKPOINT = 920;

  // Check if links overflow nav width (to show hamburger) OR small screen
  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    const navWidth = navRef.current.offsetWidth;
    const linksWidth = linksRef.current.scrollWidth;
    const shouldShow =
      window.innerWidth <= MOBILE_BREAKPOINT ||
      linksWidth > navWidth - 120;
    setShowButton(shouldShow);
    if (!shouldShow) setIsOpen(false); // close mobile menu when switching to desktop
  };

  useEffect(() => {
    checkOverflow();
    const onResize = () => checkOverflow();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // close mobile menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // simple click-outside close when mobile menu open
  useEffect(() => {
    const onClick = (e) => {
      if (!isOpen) return;
      if (navRef.current && !navRef.current.contains(e.target)) {
        // allow clicks inside mobile menu (it is fixed overlay), so also check
        const mobileMenu = document.getElementById("mobile-menu-overlay");
        if (mobileMenu && !mobileMenu.contains(e.target)) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  // Lock body scroll while the mobile menu overlay is open, and always
  // restore the previous value on close/unmount so we never leave the page
  // stuck in a non-scrollable state.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* --- Navbar --- */}
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "clamp(0.6rem, 1.8vw, 1rem) clamp(1rem, 3.5vw, 2rem)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          fontFamily: "inherit",
          gap: 12,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            minWidth: 0,
          }}
        >
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{ flexShrink: 0, lineHeight: 0 }}
          >
            {logoImgOk ? (
              <img
                src={photo}
                alt="Karunya Gupta"
                onError={() => setLogoImgOk(false)}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(124,58,237,0.6)",
                  boxShadow: "0 8px 20px rgba(124,58,237,0.3)",
                  display: "block",
                }}
              />
            ) : (
              <span
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "#fff",
                  background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                  boxShadow: "0 10px 26px rgba(124,58,237,0.3)",
                }}
              >
                KG
              </span>
            )}
          </motion.div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(12px, 1.6vw, 14px)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Karunya Gupta
            </h1>
            <div
              style={{
                fontSize: "clamp(10px,1.2vw,12px)",
                color: "var(--muted)",
                whiteSpace: "nowrap",
                opacity: 0.95,
              }}
            >
              Problem Solver
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <div
          ref={linksRef}
          style={{
            display: showButton ? "none" : "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
            flexGrow: 1,
            overflow: "hidden",
            paddingLeft: "1rem",
          }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              style={{
                position: "relative",
                fontSize: "0.95rem",
                textDecoration: "none",
                color: "white",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
              onClick={() => handleSectionClick(l.snackbar)}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent)",
                    textShadow: "0 0 8px var(--accent)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: 0,
                  }}
                >
                  <motion.span
                    animate={{ color: isActive ? "var(--accent)" : "white" }}
                    transition={{ duration: 0.3 }}
                    style={{ textOverflow: "ellipsis", overflow: "hidden" }}
                  >
                    {l.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "70%",
                        height: "2px",
                        marginTop: "4px",
                        borderRadius: "1px",
                        backgroundColor: "var(--accent)",
                        boxShadow: "0 0 6px var(--accent)",
                      }}
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        {showButton && (
          <div className="mobile-btn" style={{ marginLeft: "auto" }}>
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu-overlay"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff",
                fontSize: "1.15rem",
                fontWeight: 600,
                borderRadius: 999,
                cursor: "pointer",
                zIndex: 10000,
                padding: "10px 18px",
                minHeight: 44,
                fontFamily: "inherit",
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span style={{ fontSize: "1.3rem", lineHeight: 1 }}>{isOpen ? "✕" : "☰"}</span>
              <span style={{ fontSize: "0.85rem", letterSpacing: "0.04em" }}>
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        )}
      </nav>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            id="mobile-menu-overlay"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              paddingTop: "calc(env(safe-area-inset-top, 0px) + 1.6rem)",
              overflowY: "auto",
              zIndex: 9999,
            }}
          >
            <button
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                fontSize: "1.6rem",
                lineHeight: 1,
                color: "#fff",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 999,
                cursor: "pointer",
                width: 44,
                height: 44,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <p
              style={{
                margin: "0 0 0.4rem",
                textAlign: "center",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--text-muted, #9aa4c0)",
              }}
            >
              Navigate
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                marginTop: "0.4rem",
              }}
            >
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => {
                    setIsOpen(false);
                    handleSectionClick(l.snackbar);
                  }}
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
                    textDecoration: "none",
                    padding: "1.05rem 1rem",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "clamp(16px, 3.5vw, 18px)",
                    fontWeight: isActive ? 700 : 500,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    background: isActive
                      ? "linear-gradient(90deg, rgba(124,58,237,0.18), rgba(0,180,255,0.12))"
                      : "transparent",
                  })}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Snackbar */}
      <Snackbar open={snackbarOpen} message={snackbarMsg} onClose={() => setSnackbarOpen(false)} />
    </>
  );
}
