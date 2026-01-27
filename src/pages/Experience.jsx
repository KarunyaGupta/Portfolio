

import React, { useState } from 'react';
import '../CSS/Resume.css';
import { motion, AnimatePresence } from 'framer-motion';
import '../CSS/ExperienceTimeline.css';
import { CgEnter } from 'react-icons/cg';




// Utility to calculate duration between two dates (returns string like '1 yr 2 mos')
function getDuration(start, end) {
  if (!start || !end) return '';
  const startDate = new Date(start);
  const endDate = end === 'Present' ? new Date() : new Date(end);
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  let str = '';
  if (years > 0) str += years + (years === 1 ? ' yr' : ' yrs');
  if (months > 0) str += (str ? ' ' : '') + months + (months === 1 ? ' mo' : ' mos');
  return str || '0 mo';
}

// Timeline data for demo (replace with your real data and images)
const TIMELINE = [
  {
    org: 'IEEE-CIET Student Branch',
    orgLogo: 'logos/ieeeLogo.webp',
    orgMeta: { type: 'Full-time', start: '2023-09-01', end: 'Present' },
    orgLoc: 'On-site',
    roles: [
      {
        title: 'WIE Chairperson',
        start: '2025-07-01',
        end: 'Present',
        loc: 'Chitkara University',
        skills: ['Team Management', 'Leadership Development', 'Event Planning', 'Event Management'],
        img: 'certs/LOA_Chair.jpg',
        imgCaption: 'Letter of Appointment',
        desc: '',
      },
      {
        title: 'Promotions Coordinator',
        start: '2024-09-01',
        end: '2025-06-30',
        desc: 'Developing and implemented comprehensive marketing strategies to promote IEEE-CIET events, resulting in 70% increase in student participation over the previous year. Successfully promoted over 15+ events, including webinars, workshops and Hackathons.',
        skills: ['Team Leadership', 'Promotional Marketing'],
        img: 'certs/Tenure2024.jpg',
        imgCaption: 'Tenure 2024-2025',
      },
      {
        title: 'Promotions Executive',
        start: '2023-09-01',
        end: '2024-08-31',
        loc: 'Chitkara University',
        skills: ['Advertising', 'Social Promotion', 'Team Leadership'],
        img: 'certs/Tenure2023.jpg',
        imgCaption: 'IEEE-Tenure 2023-2024.png',
        desc: '',
      },
    ],
  },
  {
    org: 'IEEEXtreme',
    orgLogo: 'logos/xtreme.webp',
    orgMeta: { type: 'Full-time', start: '2024-08-01', end: '2025-10-31' },
    orgLoc: 'Hybrid',
    roles: [
      {
        title: 'Ambassador',
        start: '2025-03-01',
        end: '2025-10-31',
        desc: 'Coordinated project tasks, ensuring adherence to engineering standards and regulations. Represent the organization, fostering engagement and participation in global coding competitions.',
        skills: ["Project Coordination", "Standards Compliance", "Community Engagement", "Representation"],
      },
      {
        title: 'Coordinator',
        start: '2024-08-01',
        end: '2024-10-31',
        desc: '',
        skills: ["Event Coordination", "Team Collaboration","Promotional Activities"],
      },
    ],
  },
  {
    org: 'Hack With Her',
    orgLogo: 'logos/hwh.webp',
    orgMeta: { type: 'Full-time', start: '2025-01-01', end: '2025-03-31' },
    orgLoc: 'On-site',
    roles: [
      {
        title: 'Marketing Lead',
        start: '2025-01-01',
        end: '2025-03-31',
        desc: 'Overseeing the registration of over 750+ team members. Skilled in strategic planning, team leadership. Receiving outstanding feedback from participants.',
        skills: ['Advertising'],
        img: 'gallery/reg.jpg',
        imgCaption: 'Registrations',
      },
    ],
  },
  {
    org: 'Chitkara University',
    orgLogo: 'logos/chitkara.webp',
    orgMeta: { type: '', start: '2023-08-01', end: 'Present' },
    orgLoc: 'Rajpura, Punjab, India',
    roles: [
        {
        title: 'Undergraduate Student',
        start: '2023-08-01',
        end: 'Present',
        desc: 'Pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering with a specialization in FinTech. Engaged in coursework and projects related to business analytics, data analysis, and emerging technologies such as AI and DataBricks.',
        skills: ['Computer Science', 'FinTech', 'Business Analytics', 'Data Analysis'],
      },
    ],
  },
  {
    org: 'GirlScript Summer of Code',
    orgLogo: 'logos/gssc.webp',
    orgMeta: { type: '', start: '2024-05-01', end: '2024-07-31' },
    orgLoc: '',
    roles: [
      {
        title: 'Contributor',
        start: '2024-05-01',
        end: '2024-07-31',
        desc: 'Contribute to various open source project available under the program',
        skills: ["Open Source Contribution"],
      },
    ],
  },
];


export default function Experience() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="resume-container" style={{ minHeight: '100vh', width: '100%', background: '#0b0b0b', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 0 32px 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="resume-card"
        style={{
          width: '100%',
          maxWidth: '900px',
          margin: '5px auto 10px auto',
          textAlign: 'left',
          lineHeight: 1.7,
          background: '#0b0b0b',
          borderRadius: '16px',
          color: '#e5e5e5',
          boxShadow: '0 0 25px rgba(0, 153, 255, 0.1)',
          boxSizing: 'border-box',
          padding: '28px 48px',
        }}
      >
        <style>{`
          @media (max-width: 900px) {
            .resume-card {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
            .experience-mobile-org-block {
              padding-left: 12px !important;
              padding-right: 12px !important;
            }
          }
          @media (max-width: 600px) {
            .resume-card {
              padding-left: 15px !important;
              padding-right: 15px !important;
            }
            .experience-mobile-org-block {
              padding-left: 6px !important;
              padding-right: 6px !important;
            }
          }
        `}</style>
        <motion.h2
          className="resume-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{textAlign:'center'}}
        >
          Experience
        </motion.h2>
        <motion.p
          className="resume-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{textAlign:'center'}}
        >
          My journey across organizations and roles.
        </motion.p>
        {/* Responsive style for mobile (copied from Certificates) */}
        <style>
          {`
            @media (max-width: 600px) {
              .lead { font-size: 0.98rem !important; }
              h2 { font-size: 1.2rem !important; }
            }
            @media (max-width: 400px) {
              .lead { font-size: 0.93rem !important; }
              h2 { font-size: 1.05rem !important; }
            }
          `}
        </style>
        {TIMELINE.map((org, i) => (
          <React.Fragment key={org.org}>
            <div
              className="experience-mobile-org-block"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '2.5rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                boxShadow: '0 0 25px rgba(0, 153, 255, 0.1)',
                marginBottom: '1.5rem',
                padding: '20px 24px',
                transition: 'box-shadow 0.2s',
                width: '100%',
                maxWidth: '880px',
                margin: '5px auto',
              }}
            >
              <div className="timeline-org" style={{ minWidth: 170, textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                <img src={org.orgLogo} alt={org.org} className="timeline-org-logo" style={{ marginBottom: 0, alignSelf: 'center', display: 'block' }} />
                <div className="timeline-org-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="timeline-org-title" style={{ marginBottom: 2 }}>{org.org}</div>
                  {org.orgMeta.type && (
                    <div className="timeline-org-meta">{org.orgMeta.type}</div>
                  )}
                  {org.orgMeta.start && org.orgMeta.end && (
                    <div className="timeline-org-meta">
                      {new Date(org.orgMeta.start).toLocaleString('default', { month: 'short', year: 'numeric' })}
                      {' – '}
                      {org.orgMeta.end === 'Present'
                        ? 'Present'
                        : new Date(org.orgMeta.end).toLocaleString('default', { month: 'short', year: 'numeric' })}
                      {' · '}
                      {getDuration(org.orgMeta.start, org.orgMeta.end)}
                    </div>
                  )}
                  {org.orgLoc && (
                    <div className="timeline-org-meta">{org.orgLoc}</div>
                  )}
                </div>
              </div>
              <div className="timeline" style={{ marginLeft: 0, paddingLeft: 24, flex: 1 }}>
                        {/* Enhanced mobile-specific style for org/timeline block and text */}
                        <style>
                          {`
                            @media (max-width: 700px) {
                              .experience-mobile-org-block {
                                flex-direction: column !important;
                                gap: 0.5rem !important;
                                padding: 0.7rem 0.3rem !important;
                                background: #181818 !important;
                                border: 1px solid #222 !important;
                                border-radius: 7px !important;
                                margin-bottom: 1rem !important;
                              }
                              .timeline-org {
                                flex-direction: row !important;
                                align-items: center !important;
                                gap: 0.5rem !important;
                                min-width: 0 !important;
                              }
                              .timeline-org-logo {
                                width: 36px !important;
                                height: 36px !important;
                                margin-bottom: 0 !important;
                              }
                              .timeline-org-title {
                                font-size: 0.98rem !important;
                                line-height: 1.1 !important;
                              }
                              .timeline-org-meta {
                                font-size: 0.85rem !important;
                              }
                              .timeline-role-img {
                                width: 90px !important;
                                height: 50px !important;
                              }
                              .timeline-role-title {
                                font-size: 0.93rem !important;
                              }
                              .timeline-role-meta, .timeline-role-desc, .timeline-role-skills, .timeline-role-img-caption {
                                font-size: 0.85rem !important;
                              }
                            }
                            @media (max-width: 400px) {
                              .experience-mobile-org-block {
                                border-radius: 5px !important;
                                padding: 0.4rem 0.1rem !important;
                              }
                              .timeline-org-title {
                                font-size: 0.91rem !important;
                              }
                              .timeline-org-meta {
                                font-size: 0.78rem !important;
                              }
                              .timeline-role-title {
                                font-size: 0.85rem !important;
                              }
                            }
                          `}
                        </style>
                {org.roles.map((role, j) => (
                  <div className="timeline-role" key={role.title + j}>
                    <span className="timeline-dot" />
                    <div>
                      <div className="timeline-role-title">{role.title}</div>
                      <div className="timeline-role-meta">
                        {role.start && role.end ? (
                          <>
                            {new Date(role.start).toLocaleString('default', { month: 'short', year: 'numeric' })}
                            {' – '}
                            {role.end === 'Present'
                              ? 'Present'
                              : new Date(role.end).toLocaleString('default', { month: 'short', year: 'numeric' })}
                            {' · '}
                            {getDuration(role.start, role.end)}
                          </>
                        ) : null}
                        {role.loc && <> | {role.loc}</>}
                      </div>
                      {role.desc && (
                        <div className="timeline-role-desc" style={{ textAlign: 'justify' }}>{role.desc}</div>
                      )}
                      {role.skills && (
                        <div className="timeline-role-skills">
                          <b>Skills:</b> {role.skills.join(' · ')}
                        </div>
                      )}
                      {role.img && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0' }}>
                          <img
                            src={role.img}
                            alt={role.imgCaption}
                            className="timeline-role-img"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setSelectedImg(role.img)}
                          />
                          <div className="timeline-role-img-caption">{role.imgCaption}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {i !== TIMELINE.length - 1 && (
              <hr style={{ border: 'none', borderTop: '2px solid #222', margin: '2.2rem 0 2.2rem 0', opacity: 0.7 }} />
            )}
          </React.Fragment>
        ))}
      </motion.div>
      {/* Modal Preview for Experience Images */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="Preview"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: '90%',
                maxHeight: '85%',
                borderRadius: 10,
                boxShadow: '0 0 25px rgba(255,255,255,0.2)',
              }}
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
