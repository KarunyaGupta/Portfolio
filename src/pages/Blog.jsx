import React, { useState } from "react";
import { motion } from "framer-motion";
import "../CSS/blog1.css";

export default function Blog() {
  const defaultPosts = [
    {
      id: "campus-placement",
      title: "Campus Placement: From Rejection to Selection",
      date: "June 2026",
      category: "Career Journey",
      text: `Campus placements were one of the most challenging and rewarding phases of my college life. Looking back, the journey was not just about securing a job offer- it was about discovering my interests, overcoming failures, and staying committed to my goals.

## Finding My Career Path
During my college years, I spent a lot of time exploring different domains to understand what suited me best. Through various projects, case studies, and learning experiences, I developed a strong interest in analytics-related roles. I enjoyed working with data, identifying patterns, solving business problems, and making decisions based on insights.

Because of this, I decided to build my career in analytics-focused roles such as Business Analytics, Product Analytics, Data Analytics, and Financial Analytics.

Once I made this decision, I stopped applying to unrelated job roles and focused entirely on analytics opportunities. There were several technical roles offering attractive salary packages, but I chose not to apply because I wanted to stay aligned with my long-term career vision.

## The First Opportunity and First Rejection
The first company I applied to was a gaming company based in Bangalore for the role of Business Analyst. I was highly motivated and convinced that this was the company I wanted to join.

I dedicated an entire week to preparing for the recruitment process. The first stage was an online assessment, and I managed to clear it. Out of approximately 2,400 applicants, only 20 students advanced to the next stage. Reaching that level felt like a major achievement.

The next step was the interview.

Unfortunately, it was the first interview of my life, and I was extremely nervous. I didn't know what to expect, and despite knowing many of the answers, I struggled to communicate my thoughts effectively. I wasn't able to present myself the way I had hoped.

As a result, I was not selected for the next round.

That rejection hit me hard. I felt as though all my preparation and effort had gone to waste. For a moment, I questioned myself and my abilities. Sitting alone after receiving the result, I couldn't hold back my emotions.

## Turning Failure into Motivation
After a few difficult days, I decided that this rejection would not define my future.

Instead of giving up, I used it as motivation to improve.

For nearly a month, I continued applying to companies but did not receive many shortlists. Rather than becoming discouraged, I kept reminding myself that something bigger was waiting ahead.

I made a promise to myself: I would focus completely on improving my skills.

I even told my friends that I would meet them properly only after getting placed. From morning until evening, I immersed myself in learning. I strengthened my understanding of analytics concepts, explored various analytical tools, practiced problem-solving, improved my communication skills, and spent hours brainstorming business cases.

Every rejection became a lesson.

Every day became an opportunity to improve.

## The Breakthrough
Eventually, I received an opportunity from an e-commerce company for an analytics-focused role.

The competition was intense. Nearly 900 students applied, and only 11 were shortlisted for the selection process. Being among those 11 students felt like a significant achievement and validated the hard work I had put in over the previous months.

This time, I approached the process differently.

I was more confident, more prepared, and more experienced. I had learned from my previous mistakes and knew how to present my skills effectively.

And this time, I succeeded.

I received the offer and secured a package that was even better than the one offered by the gaming company I had initially dreamed of joining.

## Lessons Learned
This journey taught me some valuable lessons:

- Rejection is not the end; it is often the beginning of growth.
- Having clarity about your career goals helps you make better decisions.
- Consistency and focused effort eventually produce results.
- Every interview, whether successful or not, teaches something valuable.
- The right opportunity often arrives after multiple setbacks.

Today, I see my first rejection as one of the most important moments in my placement journey. If I had not experienced that failure, I might not have worked as hard as I did afterward.

My placement journey was not a straight path to success. It was a journey filled with uncertainty, learning, self-improvement, and persistence.

From rejection to selection, the experience shaped me into a stronger and more confident professional- and it remains one of the most memorable chapters of my college life.
`,
    },
    {
      id: 0,
      title: "Four Years of Engineering: A Journey Beyond Books",
      date: "May 2026",
      category: "Student Life",
      text: `The first day of engineering didn’t feel special. New faces, heavy bags, awkward smiles, and a silent question in everyone’s mind - *What have I signed up for?* We came with dreams, confusion, and a lot of expectations. Little did we know, these four years were going to shape us in ways no syllabus ever could.

    **First Year: Lost but Hopeful**
    First year was all about survival. New subjects, new environment, and the sudden realization that school life was officially over. We pretended to understand lectures, copied assignments, and discovered that *attendance actually mattered*. Friendships began over shared notes, canteen chai, and late-night hostel talks. Everything felt uncertain, yet exciting.

    **Second Year: Reality Check**
    By second year, the excitement faded and reality hit hard. Subjects became tougher, pressure increased, and comparisons started. Some found their passion, others doubted their choices. We learned the art of managing deadlines, internal exams, and expectations - from teachers, parents, and ourselves. It was the year we realized engineering wasn’t just about marks, but about patience.

    **Third Year: Hustle Mode On**
    Third year was chaos. Projects, internships, coding, placements preparation, and constant stress. Sleep became a luxury. Everyone was busy building something - skills, resumes, confidence. Failures hurt more now, but they also taught us resilience. This was the year we truly started growing, even when we didn’t realize it.

    **Final Year: Holding On and Letting Go**
    Final year came with mixed emotions. On one side, the pressure of placements and future plans; on the other, the fear of endings. Every last lecture, every group photo, every farewell felt heavier. We weren’t just graduating with a degree - we were carrying memories, friendships, and lessons for life.

    **What Engineering Really Taught Us**
    Engineering didn’t just teach us coding or equations. It taught us how to fail, how to adapt, how to stay strong when things didn’t go as planned. It taught us teamwork, discipline, and self-belief. Most importantly, it taught us that growth happens quietly, day by day.

    **A Chapter That Stays Forever**
    Four years passed in deadlines and dreams, in laughter and late nights. Engineering life wasn’t perfect - but it was real. And someday, when life gets busy, we’ll look back and smile, realizing that these were the years that made us who we are.

    Not just engineers - but survivors, learners, and dreamers.`
    },
    {
      id: 1,
      title: "Behind the Scenes: My Life as a WIE Chairperson at IEEE-CIET SB",
      date: "April 2026",
      category: "Leadership",
      text: `Being a WIE Chairperson is more than a role - it’s a responsibility driven by purpose. At IEEE-CIET Student Branch, my journey as WIE Chairperson has been about creating opportunities, encouraging participation, and building a supportive environment for growth.

Behind every event and initiative lies teamwork, coordination, and thoughtful execution. Acting as a bridge between ideas and implementation, juniors and opportunities, I learned that leadership is rooted in listening, collaboration, and consistency.

Balancing academics with responsibilities taught me time management, adaptability, and resilience. Most importantly, seeing members gain confidence and take initiative made every effort worthwhile.

Leading WIE reshaped my perspective on leadership - it’s not about authority, but impact. I’m grateful for this experience that strengthened my skills and gave me a deeper sense of purpose.
`,
    },
    {
      id: 2,
      title: "Why I Chose Analyst as My Career Path",
      date: "March 2026",
      category: "Career Insights",
      text: `Choosing the analyst path was not a sudden decision - it was a realization shaped by my curiosity and interest in understanding how things work. I’ve always enjoyed analyzing patterns, asking the right questions, and turning information into meaningful insights. The analyst role allows me to combine logic, data, and communication to support informed decision-making.

What attracts me most is the impact an analyst creates - transforming raw data into clarity and direction. This role also offers continuous learning, adaptability across industries, and long-term growth opportunities.

For me, being an analyst means more than working with data; it means creating value through insight. It aligns with my strengths, mindset, and long-term goals, making it a career path I’m genuinely excited to pursue.
`,
    },
    {
      id: 3,
      title: "Things I Wish I Knew Before Starting Engineering",
      date: "February 2026",
      category: "Growth",
      text: `Starting engineering, I believed success was only about grades and coding. Over time, I realized it’s much more than that. Engineering is about problem-solving, consistency, and learning how to adapt. Feeling confused in the beginning is normal, and not knowing everything doesn’t mean you’re behind.

I learned that skills and projects often matter more than perfect grades, and comparison only slows personal growth. Self-learning is essential, and real progress comes from building, failing, and improving. Most importantly, engineering is a long journey, not a race.

If I had known one thing earlier, it would be this: growth takes time. Stay curious, stay patient, and trust the process - you’re learning more than you realize.
`
    },
    
    {
      id: 4,
      title: "Understanding XIRR, Mutual Funds & Investments (Student View)",
      date: "January 2026",
      category: "Finance",
      text: `As a student, investing can feel complex and intimidating, especially with terms like XIRR and mutual funds. XIRR (Extended Internal Rate of Return) simply measures the actual annual return on your investments, considering multiple investments made at different times. It gives a clearer picture than simple returns.

Mutual funds make investing accessible by allowing you to invest small amounts while professionals manage diversification across assets and sectors. For students, they offer a practical way to start early, learn market behavior, and build financial discipline.

Understanding these basics helped me see investing not as gambling, but as long-term planning. Even small, consistent investments can create meaningful impact over time. Learning finance early isn’t about money alone - it’s about making informed decisions for the future.
`
    },
  ];

  const [posts] = useState(defaultPosts);

  // Track which posts are expanded
  const [expanded, setExpanded] = useState({});

  function toggleExpand(id) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="blog-title"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12, textAlign: "center" }}
      >
        📝 My Blog
      </motion.h2>
      <p className="blog-sub">
        Personal thoughts, experiences, and reflections - feel free to react!
      </p>

      <div className="blog-grid">
        {posts.map((p, idx) => {
          const isLong = p.text.length > 220;
          const isExpanded = expanded[p.id];
          const displayText = isLong && !isExpanded ? p.text.slice(0, 400) + "..." : p.text;

          // Enhanced formatting for blog text
          // Markdown-like rendering for bold (**text**) and italic (*text*)
          function renderMarkdown(line) {
            // Replace **bold** and *italic* with <strong> and <em>
            let elements = [];
            let text = line;
            let idx = 0;
            const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
            let lastIndex = 0;
            let match;
            while ((match = regex.exec(text)) !== null) {
              if (match.index > lastIndex) {
                elements.push(text.slice(lastIndex, match.index));
              }
              if (match[1]) {
                elements.push(<strong key={idx++}>{match[1]}</strong>);
              } else if (match[2]) {
                elements.push(<em key={idx++}>{match[2]}</em>);
              }
              lastIndex = regex.lastIndex;
            }
            if (lastIndex < text.length) {
              elements.push(text.slice(lastIndex));
            }
            return elements;
          }

          function renderBlogText(text) {
            const lines = text.split("\n");
            return lines.map((line, i) => {
              const trimmed = line.trim();
              if (trimmed === "") {
                return null;
              }

              if (/^#{1,3}\s+/.test(trimmed)) {
                const level = trimmed.match(/^#+/)[0].length;
                const content = trimmed.replace(/^#{1,3}\s+/, "");
                const className =
                  level === 1
                    ? "blog-heading-1"
                    : level === 2
                    ? "blog-heading-2"
                    : "blog-heading-3";
                return (
                  <div key={i} className={className}>
                    {renderMarkdown(content)}
                  </div>
                );
              }

              if (/^[-*]\s+/.test(trimmed)) {
                return (
                  <div key={i} className="blog-bullet">
                    <span className="blog-bullet-dot">•</span>
                    <span>{renderMarkdown(trimmed.replace(/^[-*]\s+/, ""))}</span>
                  </div>
                );
              }

              // Numbered title or section (e.g., "1. Title" or "Conclusion:")
              if (/^\d+\.\s/.test(trimmed) || trimmed.endsWith(":")) {
                return (
                  <div key={i} className="blog-section-title blog-white">
                    {renderMarkdown(trimmed)}
                  </div>
                );
              }
              // Subtitle: line starts with uppercase and is short (heuristic)
              if (/^[A-Z][^:]+$/.test(trimmed) && trimmed.length < 60) {
                return (
                  <div key={i} className="blog-section-subtitle blog-white">
                    {renderMarkdown(trimmed)}
                  </div>
                );
              }
              // Normal text
              return (
                <div key={i} className="blog-white blog-paragraph">
                  {renderMarkdown(trimmed)}
                </div>
              );
            });
          }

          return (
            <motion.div
              key={p.id}
              className="blog-post"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              }}
            >
              <div className="post-meta">
                <span>{p.date}</span>
                <span className="post-category">{p.category}</span>
              </div>
              <h3 className="post-title">{p.title}</h3>
              <div className="post-text" style={{}}>
                {renderBlogText(displayText)}
                {isLong && (
                  <button
                    className="read-more-btn"
                    style={{
                      background: "none",
                      border: "none",
                      color: "#00b4ff",
                      cursor: "pointer",
                      marginLeft: 6,
                      fontWeight: 500,
                      fontSize: 14,
                      padding: 0,
                    }}
                    onClick={() => toggleExpand(p.id)}
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
