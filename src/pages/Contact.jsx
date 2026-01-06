import React, { useState } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";
import whatsappLogo from "../../public/whatsapp.png";
import instagramLogo from "../../public/insta.png";
import facebookLogo from "../../public/facebook.png";

import "../CSS/Contact.css"
import '../index.css' 

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Helper to capture a screenshot of a selector and return a data URL
  const captureScreenshot = async (selector) => {
    const el = document.querySelector(selector);
    if (!el) return null;
    const canvas = await html2canvas(el, { backgroundColor: null, useCORS: true });
    return canvas.toDataURL("image/png");
  };

  // Main handler to generate PDF with screenshots of main pages
  const handleDownloadPortfolioPDF = async () => {
    setStatus("Generating portfolio PDF...");
    // List of routes and selectors to capture
    const pages = [
      { path: "/", selector: "body", label: "Home" },
      { path: "/about", selector: "body", label: "About" },
      { path: "/projects", selector: "body", label: "Projects" },
      { path: "/resume", selector: "body", label: "Resume" },
      { path: "/contact", selector: "body", label: "Contact" },
    ];
    const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: "a4" });
    let first = true;
    for (const page of pages) {
      // Navigate to the page
      window.history.pushState({}, "", page.path);
      // Wait for the page to render (may need adjustment for SPA)
      await new Promise((res) => setTimeout(res, 800));
      const imgData = await captureScreenshot(page.selector);
      if (imgData) {
        if (!first) pdf.addPage();
        pdf.text(page.label, 20, 30);
        pdf.addImage(imgData, "PNG", 20, 40, 400, 500, undefined, "FAST");
        first = false;
      }
    }
    pdf.save("Portfolio_Screenshots.pdf");
    setStatus("Portfolio PDF downloaded!");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);
    if (!isEmail && isNaN(form.contact)) {
      setStatus("⚠️ Please enter a valid email or phone number.");
      return;
    }

    setStatus("Sending...");

    // EmailJS usage: serviceId, templateId, templateParams, publicKey
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          contact_info: form.contact,
          subject: form.subject,
          message: form.message,
          to_email: "mails.karunyagupta@gmail.com", // this must match your EmailJS template variable
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Sent! Karunya Gupta will get back to you.");
          setForm({ name: "", contact: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send. Try again later.");
        }
      );
  };

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/karunyagupta" },
    { img: linkedinLogo, title: "LinkedIn", link: "https://www.linkedin.com/in/karunygupta/" },
    { img: gmailLogo, title: "Email", link: "mailto:mails.karunyagupta@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/+919805946982" },
    { img: instagramLogo, title: "Instagram", link: "https://www.instagram.com/ig_karunya_/" },
    
  ];

  // Responsive inline styles (lightweight, complements your existing CSS)
  const resp = {
    container: {
      padding: "2rem 1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      boxSizing: "border-box",
    },
    linksWrap: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: "1rem 0",
    },
    form: {
      width: "100%",
      maxWidth: "720px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      boxSizing: "border-box",
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      fontSize: "1rem",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.08)",
      background: "transparent",
      color: "inherit",
      boxSizing: "border-box",
    },
    textarea: {
      minHeight: "120px",
      resize: "vertical",
      padding: "12px 14px",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.08)",
      background: "transparent",
      color: "inherit",
      fontSize: "1rem",
    },
    btn: {
      padding: "12px 16px",
      borderRadius: "10px",
      fontSize: "1rem",
      cursor: "pointer",
      alignSelf: "flex-start",
    },
    socialIcon: {
      width: "40px",
      height: "40px",
      objectFit: "contain",
    },
  };

  return (
    // apply container inline style to ensure spacing is responsive
    <section style={resp.container} className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi - I’d love to hear from you!
      </motion.p>

      {/* Quick Links */}
      <motion.div className="contact-links" style={resp.linksWrap}>
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="social-icon"
              style={resp.socialIcon}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Download Portfolio Screenshots Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{ display: 'flex', justifyContent: 'center', margin: '18px 0' }}
      >
        <motion.button
          onClick={handleDownloadPortfolioPDF}
          className="btn code-btn"
          whileHover={{ scale: 1.08 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 28px',
            borderRadius: 12,
            fontSize: '1.08rem',
            textDecoration: 'none',
            cursor: 'pointer',
            background: '#181818',
            color: '#06b6d4',
            border: '2px solid #06b6d4',
            fontWeight: 700,
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          <span style={{ fontSize: "1.2em", textAlign: "center" }}>📸</span> Download Portfolio (Screenshots PDF)
        </motion.button>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="contact-form"
        style={resp.form}
      >
        <input style={resp.input} type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input style={resp.input} type="text" name="contact" placeholder="Your Email or Phone" value={form.contact} onChange={handleChange} required />
        <input style={resp.input} type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
        <textarea style={resp.textarea} name="message" placeholder="Your Message..." value={form.message} onChange={handleChange} rows="5" required />
        <motion.button
          type="submit"
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={resp.btn}
        >
          🚀 Send Message
        </motion.button>

        {status && <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="contact-status">{status}</motion.p>}
      </motion.form>
    </section>
  );
}
