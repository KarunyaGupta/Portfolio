import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
	{
		title: '🤖 Code Review AI - Intelligent Code Analysis Tool',
		desc: 'An AI-powered platform that reviews code in real-time and provides instant suggestions for improvement. It helps developers enhance performance, security, and code quality with smart, automated insights.',
		ss: '/codereview.png',
		tech: ['React', 'Vite', 'Express', 'Google Generative AI(Gemini)'],
		live: '#',
		code: 'https://github.com/KarunyaGupta/CodeReview.ai',
	},
	{
		title:'✈️ SkyMetrics: 360° Aviation Intelligence & Strategic Dashboard',
		desc:'"SkyMetrics" is a comprehensive data engineering and business intelligence solution designed to transform complex aviation datasets into actionable strategic insights.This project decodes the intricate relationship between flight logistics, airline business models, and market pricing behaviors.',
		// desc:'This project analyzes domestic flight fare trends in India to uncover insights related to airline pricing, routes, travel duration, and number of stops. An interactive dashboard was created to compare ticket prices across airlines, sources, and destinations.',
		ss:'/skymatrix.png',
		tech:['Pandas','Numpy','PowerBI','Advance DAX','ETL'],
		live:'https://app.powerbi.com/links/0rqcrSBW6x?ctid=7211e667-d09c-4d22-8038-4d51ebe960a8&pbi_source=linkShare',
		code:'https://drive.google.com/drive/folders/111KBXnTK5GZONYFYYao4tDjTej1qi6lI?usp=drive_link',
	},

	{
		title:'👥 Employee Attrition Analytics & Insights Dashboard',
		desc:'Developed an interactive HR Attrition Analysis Dashboard to identify key factors influencing employee turnover and workforce stability. The dashboard provides insights into attrition trends based on departments, job roles, age groups, gender, salary slabs, and years of experience.',
		// desc:'Analyzes employee attrition patterns to identify key factors influencing workforce turnover. An interactive dashboard was developed to explore attrition trends across departments, job roles, age groups, and work experience.'
		ss:'/hr.png',
		tech:['PowerBI','Excel','SQL','Python'],
		live:'https://app.powerbi.com/links/lOUQUNocKo?ctid=7211e667-d09c-4d22-8038-4d51ebe960a8&pbi_source=linkShare&bookmarkGuid=eaff1f69-8e2d-4893-ab13-8d31fffd15ca',
		code:'https://drive.google.com/drive/folders/1dGRGEU1IBvB9peVusqSLPnZJ-mYy5cxS?usp=drive_link'
	},
	   // ProfileX project removed as requested
	{
		title: '💰 Loan Status Prediction',
		desc: 'This is a Data Science and Machine Learning project aimed at building a classification model to predict whether a loan application will be approved or rejected based on applicant and loan attributes.',
		ss: '/Loan.png',
		tech: ['scikit-learn', 'Numpy', 'Pandas', 'Matplotlib'],
		live: '#',
		code: 'https://github.com/KarunyaGupta/Loan-Prediction-Py',
	},
	{
		title:'📈 Google Stock Price Analysis and Prediction',
		// desc:'Comming soon... working on it!',
		desc:'This project analyzes Google stock price trends and builds predictive models to forecast future prices. It explores historical data, technical indicators, and machine learning techniques for stock price prediction.',
		ss:'/googlestock.png',
		tech:['Data Cleaning','EDA','Time Series Forecasting','LSTM'],
		live:'#',
		code:''
	},
	{
		title: '💬 Social Media Analysis',
		desc: 'This SQL-driven project architects a comprehensive relational database to simulate a dynamic social media ecosystem, featuring interconnected schemas for Users, Posts, Messages, Followers, and Comments.',
		ss: '/socialMedia.png',
		tech: ['SQL','Relational Schema Design','Data Aggregation'],
		live: '#',
		code: 'https://github.com/KarunyaGupta/SocialMediaAnalysis-SQL-Project',
	},
	{
		title: '🚕 Uber Ride Analysis - End-to-End Business Intelligence Dashboard',
		desc: 'An interactive Power BI dashboard that analyzes Uber ride data to uncover booking trends, revenue patterns, rider behavior, and operational performance. The report supports data-driven decision-making through KPIs, drill-downs, vehicle insights, and location-based metrics.',
		ss: '/uber.png',
		tech: ['Pandas', 'DAX', 'PowerBI', 'KPIs'],
		live: 'https://app.powerbi.com/links/UgR2hEsl46?ctid=7211e667-d09c-4d22-8038-4d51ebe960a8&pbi_source=linkShare',
		code: 'https://drive.google.com/drive/folders/1T_n-1GsqTFy4hSpwvh56Ca4ufjxtppff?usp=drive_link',
	},
	{
		title: '🩺 Pharmaceutical Sales Analysis Dashboard',
		desc: "This project analyzes a global Pharmaceutical Manufacturing Company's raw sales data to derive meaningful insights. The analysis focuses on performance metrics across different regions, distributors, customers, and sales teams.",
		ss: '/pharma.png',
		tech: ['Pandas', 'EDA', 'Python', 'Data Visiualization'],
		live: 'https://app.powerbi.com/links/zOIZyJ4BT2?ctid=7211e667-d09c-4d22-8038-4d51ebe960a8&pbi_source=linkShare&bookmarkGuid=0e8f3acb-8169-4858-8601-b763e080b62f',
		code: 'https://drive.google.com/drive/folders/1YC0a5DuxxCfen5qzGFMGiGuu1trLyyX_?usp=drive_link',
	},
	{
		title: '🛒 E-Commerce Sales Performance & Profitability Analysis',
		desc: 'A data-driven Power BI dashboard that analyzes Amazon store sales to uncover trends, top-performing products, revenue patterns, and customer behavior. It helps in making informed business decisions through interactive visuals and KPIs.',
		ss: '/ecom.png',
		tech: ['PowerBI', 'Excel/CSV', 'DAX', 'Power Query'],
		live: '/e-commerce.png',
		code: 'https://drive.google.com/drive/folders/1vzF07kBsyB4jH2JHNkQQlG5VlMx5JfoO?usp=drive_link',
	},
	{
		title: '📽 Netflix Content Library',
		desc: 'This is a Data Analysis and Visualization project analyzing the Netflix content catalog (movies and TV shows). The goal is to draw insights and present findings using an interactive report created in Power BI.',
		ss: '/netflix.png',
		tech: ['PowerBI', 'Excel/CSV', 'DAX', 'Power Query'],
		live: 'https://app.powerbi.com/links/f2md6kaNCx?ctid=7211e667-d09c-4d22-8038-4d51ebe960a8&pbi_source=linkShare',
		code: 'https://drive.google.com/drive/folders/1eaPT0P8CwNnIxo4qdMnV3zZpKeXt1cOk?usp=sharing',
	},
	// {
	// 	title: '🚗 Bengaluru Rides Analysis (OLA)',
	// 	desc: 'This is a data analysis and exploration project focused on understanding patterns and insights from a dataset of 100,000 rides taken in the city of Bengaluru.',
	// 	ss: '/ola.jpg',
	// 	tech: ['CSV', 'Numpy', 'Pandas', 'Matplotlib'],
	// 	live: '#',
	// 	code: '#',
	// },
	{
		title: '🌐 Portfolio Website',
		desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
		ss: '/portfolio.jpg',
		tech: ['React', 'Framer Motion', 'Tailwind CSS'],
		live: 'https://karunyagupta.vercel.app',
		code: 'https://github.com/KarunyaGupta/Portfolio',
	},
]

export default function Projects() {
	const [showAll, setShowAll] = React.useState(false);

	const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);

	return (
		<motion.section
			className="container"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			id="projects"
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-start',
				width: '100%',
			}}
		>
			<div
				className="card"
				style={{
					background: '#1A1A1A',
					borderRadius: 16,
					padding: 24,
					boxShadow: '0 0 20px rgba(0,255,255,0.04)',
					width: '100%',
					maxWidth: 1100,
					margin: '0 auto',
				}}
			>
				<motion.h2
					className="projects-title"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.1 }}
					style={{
						fontSize: '1.5rem',
						fontWeight: 600,
						color: '#06b6d4',
						marginBottom: '0.3rem',
						textAlign: 'center',
					}}
				>
					🚀 Projects
				</motion.h2>
				<p
					className="projects-subtitle"
					style={{
						fontSize: '0.88rem',
						marginBottom: '1.5rem',
						color: '#9aa0a6',
						textAlign: 'center',
					}}
				>
					A collection of my major works-blending research, AI innovation, and real-world business impact.
				</p>

				<div className="projects-grid" style={{ justifyItems: 'center', alignItems: 'stretch' }}>
					{displayedProjects.map((p, idx) => (
						<motion.div
							key={idx}
							className="project-card"
							initial={{ opacity: 0, y: 20, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ duration: 0.4, delay: idx * 0.07 }}
							whileHover={{ scale: 1.03 }}
							viewport={{ once: true }}
							style={{
								background: '#181818',
								border: '1px solid rgba(6,182,212,0.18)',
								borderRadius: 16,
								padding: 14,
								fontSize: '0.88rem',
								boxShadow: '0 0 12px rgba(6,182,212,0.07)',
								width: '100%',
								maxWidth: 370,
								margin: '0 auto',
								alignSelf: 'stretch',
							}}
						>
							<motion.div
								className="project-ss"
								whileHover={{ scale: 1.05 }}
								style={{ borderRadius: 12, overflow: 'hidden' }}
							>
								<img
									src={p.ss}
									alt={p.title + " screenshot"}
									style={{
										width: '100%',
										height: '200px',
										objectFit: 'cover',
										borderRadius: 12,
									}}
								/>
							</motion.div>

							<div className="project-content" style={{ marginTop: 10 }}>
								<h3 className="project-title" style={{
									fontSize: '1rem',
									color: '#0ea5e9',
									marginBottom: 4,
									fontWeight: 500,
									textAlign: 'left'
								}}>
									{p.title}
								</h3>
								<p className="project-desc" style={{
									fontSize: '0.9rem',
									color: '#bbb',
									marginBottom: 7,
									lineHeight: 1.5,
									textAlign: 'justify'
								}}>
									{/* Proofread and clarify for impact/results */}
									{p.title.includes('Code Review AI') && (
										<>
											Developed an AI-powered platform that reviews code in real-time, providing actionable suggestions to improve performance, security, and code quality. Helped developers reduce review time and increase code reliability.
										</>
									)}
									{p.title.includes('E-Commerce Sales') && (
										<>
											Built a Power BI dashboard analyzing Amazon sales data to uncover trends, top products, and customer behavior. Enabled business users to make data-driven decisions, resulting in improved sales strategies.
										</>
									)}
									{p.title.includes('Uber Ride Analysis') && (
										<>
											Created an interactive dashboard for Uber ride data, revealing booking trends and operational performance. Supported management in optimizing routes and increasing revenue.
										</>
									)}
									{p.title.includes('Pharmaceutical Sales') && (
										<>
											Analyzed global pharma sales data to deliver insights on regional and team performance. Helped leadership identify growth opportunities and optimize distribution.
										</>
									)}
									{p.title.includes('ProfileX') && (
										<>
											Engineered a web app for smart data profiling and preprocessing of CSV datasets, streamlining feature analysis and visualization for data scientists.
										</>
									)}
									{p.title.includes('Loan Status Prediction') && (
										<>
											Developed a machine learning model to predict loan approvals, improving risk assessment and decision-making for financial institutions.
										</>
									)}
									{p.title.includes('Netflix Content Library') && (
										<>
											Analyzed Netflix's catalog to extract content trends and viewer preferences, presenting findings via interactive Power BI reports for business insights.
										</>
									)}
									{p.title.includes('Bengaluru Rides Analysis') && (
										<>
											Explored ride data from Bengaluru to identify urban mobility patterns, supporting data-driven improvements in city transportation.
										</>
									)}
									{p.title.includes('Portfolio Website') && (
										<>
											Designed and built a modern, responsive portfolio to showcase projects, skills, and achievements, enhancing personal branding and outreach.
										</>
									)}
									{/* fallback for any new projects */}
									{![
										'Code Review AI - Intelligent Code Analysis Tool',
										'E-Commerce Sales Performance & Profitability Analysis',
										'Uber Ride Analysis - End-to-End Business Intelligence Dashboard',
										'Pharmaceutical Sales Analysis Dashboard',
										'ProfileX – Data Profiler',
										'Loan Status Prediction',
										'Netflix Content Library',
										'Bengaluru Rides Analysis (OLA)',
										'Portfolio Website'
									].some(title => p.title.includes(title)) && p.desc}
								</p>
								<div className="project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
									{p.tech.map((t) => (
										<span
											key={t}
											className="tech-badge"
											style={{
												background: 'rgba(6,182,212,0.08)',
												border: '1px solid #06b6d4',
												padding: '2px 8px',
												borderRadius: 6,
												fontSize: '0.73rem',
												color: '#06b6d4',
												fontWeight: 500,
											}}
										>
											{t}
										</span>
									))}
								</div>
								   <div className="project-links" style={{
									   display: 'flex',
									   justifyContent: 'flex-end',
									   gap: 8,
									   marginTop: 18,
								   }}>
									   {/* Source button removed as requested */}
									   {/* Show Drive button if PowerBI is in tech stack and code is a drive link, or for SkyMetrics project */}
									   {(
										   (p.tech.includes('PowerBI') && p.code && p.code.includes('drive.google.com')) ||
										   p.title.includes('SkyMetrics')
									   ) && (
										   <motion.a
											   href={p.title.includes('SkyMetrics') ? 'https://drive.google.com/drive/folders/sky-metrics-drive-link' : p.code}
											   target="_blank"
											   rel="noreferrer"
											   className="btn drive-btn"
											   whileHover={{ scale: 1.08 }}
											   style={{
												   display: 'flex',
												   alignItems: 'center',
												   gap: 4,
												   padding: '4px 10px',
												   borderRadius: 6,
												   fontSize: '0.78rem',
												   textDecoration: 'none',
												   cursor: 'pointer',
												   background: '#181818',
												   color: '#22c55e',
												   border: '1px solid #22c55e',
												   fontWeight: 500,
												   transition: 'background 0.2s, color 0.2s',
											   }}
										   >
											   Drive Link
										   </motion.a>
									   )}
									   {/* For Code Review AI, Loan Status Prediction, and Social Media Analysis, show Source instead of Live */}
									   {['Code Review AI', 'Loan Status Prediction', 'Social Media Analysis'].some(title => p.title.includes(title)) ? (
										   p.code && p.code !== '#' && (
											   <motion.a
												   href={p.code}
												   target="_blank"
												   rel="noreferrer"
												   className="btn code-btn"
												   whileHover={{ scale: 1.08 }}
												   style={{
													   display: 'flex',
													   alignItems: 'center',
													   gap: 4,
													   padding: '4px 10px',
													   borderRadius: 6,
													   fontSize: '0.78rem',
													   textDecoration: 'none',
													   cursor: 'pointer',
													   background: '#181818',
													   color: '#06b6d4',
													   border: '1px solid #06b6d4',
													   fontWeight: 500,
													   transition: 'background 0.2s, color 0.2s',
												   }}
											   >
												   <Github size={14} /> Source Code
											   </motion.a>
										   )
									   ) : (
										   <motion.a
											   href={p.live}
											   target="_blank"
											   rel="noreferrer"
											   className="btn live-btn"
											   whileHover={{ scale: 1.08 }}
											   style={{
												   display: 'flex',
												   alignItems: 'center',
												   gap: 4,
												   padding: '4px 10px',
												   borderRadius: 6,
												   fontSize: '0.78rem',
												   textDecoration: 'none',
												   cursor: 'pointer',
												   background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
												   color: '#fff',
												   border: 'none',
												   fontWeight: 500,
												   transition: 'background 0.2s, color 0.2s',
											   }}
										   >
											   <ExternalLink size={14} /> Live
										   </motion.a>
									   )}
								   </div>
							</div>
						</motion.div>
					))}
				</div>

				   {/* See More button */}
				   {!showAll && PROJECTS.length > 6 && (
					   <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
						   <button
							   onClick={() => setShowAll(true)}
							   style={{
								   padding: '8px 24px',
								   borderRadius: 6,
								   background: '#181818',
								   color: '#06b6d4',
								   border: '1px solid #06b6d4',
								   fontWeight: 500,
								   fontSize: '1rem',
								   cursor: 'pointer',
								   boxShadow: '0 2px 8px rgba(6,182,212,0.12)',
								   transition: 'background 0.2s, color 0.2s',
							   }}
							   onMouseOver={e => {
								   e.currentTarget.style.background = '#222';
								   e.currentTarget.style.color = '#fff';
							   }}
							   onMouseOut={e => {
								   e.currentTarget.style.background = '#181818';
								   e.currentTarget.style.color = '#06b6d4';
							   }}
						   >
							   See More
						   </button>
					   </div>
				   )}
			</div>
		</motion.section>
	)
}
