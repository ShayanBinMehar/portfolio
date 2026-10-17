import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, Code2, BrainCircuit, Database, Terminal, Menu, X, Sparkles, GraduationCap, BriefcaseBusiness, Globe, Cpu, Search, Rocket } from 'lucide-react'
import './styles.css'

function Github({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function Linkedin({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function ExternalLink({ href, className, children, ...props }) {
  const isMail = href.startsWith('mailto:')
  return (
    <a
      href={href}
      className={className}
      {...(!isMail ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
}

const profile = {
  name: 'Shayan Bin Mehar',
  shortName: 'Shayan',
  role: 'Computer Science Student · Aspiring AI Engineer',
  headline: 'Building useful software,\nexploring intelligent systems.',
  intro: 'I am a Computer Science student at FAST-NUCES, building a future in Artificial Intelligence and Machine Learning.',
  about: [
    'I am developing skills in Python, machine learning, deep learning, and NLP, and I enjoy projects that turn theory into real problems. Early in my journey, I already work with AI tools and frameworks, and I am eager to contribute and collaborate.',
  ],
  exploring: [
    'Machine Learning & Deep Learning',
    'Natural Language Processing (NLP)',
    'Large Language Models (LLMs)',
    'Python',
    'TensorFlow',
    'Scikit-learn',
  ],
  goal: 'To become a skilled AI Engineer and contribute to cutting-edge AI research and development.',
  github: 'https://github.com/ShayanBinMehar',
  linkedin: 'https://www.linkedin.com/in/shayan-siddiqui-93084b2a8/',
  email: 'shayansiddiqui300@gmail.com',
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  location: 'Karachi, Pakistan',
}

const nav = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

const projects = [
  { number: '01', category: 'NETWORKING', title: 'IPv4 / IPv6 Address Planner', description: 'University Computer Networks project for VLSM allocation with a dual-stack routed Linux lab. It connects automatic address planning to generated router commands, Linux forwarding, and packet evidence. Core Python needs no third-party packages.', tags: ['Python', 'IPv4', 'IPv6', 'VLSM', 'Linux'], status: 'PYTHON', repo: 'https://github.com/ShayanBinMehar/IPv4_IPv6_Address_Planner', repoLabel: 'Repository', artLabel: 'NETWORK LAYER', Icon: Globe },
  { number: '02', category: 'AI · NLP', title: 'Resume Analyzer', description: 'AI-powered resume vs job description analyzer in the AI-Project repo. Upload a PDF resume, paste a job description, and get a match score, skill-gap analysis, and improvement suggestions using Google Gemini.', tags: ['Python', 'FastAPI', 'Streamlit', 'Gemini', 'PDF'], status: 'PYTHON', repo: 'https://github.com/ShayanBinMehar/AI-Project/tree/main/resume-analyzer', repoLabel: 'Repository', artLabel: 'NLP PIPELINE', Icon: BrainCircuit },
  { number: '03', category: 'ARTIFICIAL INTELLIGENCE', title: 'AI-Powered Chatbot Assistant', description: 'Modular AI course project in Python combining conversational AI, expert systems, search algorithms, heuristic decision-making, and explainable logic reasoning.', tags: ['Python', 'Expert Systems', 'Search', 'Heuristics'], status: 'PYTHON', repo: 'https://github.com/ShayanBinMehar/AI-Project/tree/main/AI-Powered-Chatbot-Assistant', repoLabel: 'Repository', artLabel: 'MODEL LAB', Icon: Cpu },
  { number: '04', category: 'AI INTERNSHIP', title: 'Sentiment Classifier', description: 'Python internship task from Hasnain Karimain (HK) Educational Academy: a sentiment classifier.', tags: ['Python', 'NLP', 'Internship'], status: 'PYTHON', repo: 'https://github.com/ShayanBinMehar/Hasnain-Karimain-Internship-Task-1', repoLabel: 'Repository', artLabel: 'NLP PIPELINE', Icon: BrainCircuit },
  { number: '05', category: 'AI INTERNSHIP', title: 'Text Preprocessing Pipeline', description: 'Python internship task from Hasnain Karimain (HK) Educational Academy: a text preprocessing pipeline.', tags: ['Python', 'NLP', 'Internship'], status: 'PYTHON', repo: 'https://github.com/ShayanBinMehar/Hasnain-Karimain-Internship-Task-2', repoLabel: 'Repository', artLabel: 'NLP PIPELINE', Icon: BrainCircuit },
  { number: '06', category: 'AI INTERNSHIP', title: 'Language Detection Model', description: 'Python internship task from Hasnain Karimain (HK) Educational Academy: a language detection model.', tags: ['Python', 'NLP', 'Internship'], status: 'PYTHON', repo: 'https://github.com/ShayanBinMehar/Hasnain-Karimain-Internship-Task-3', repoLabel: 'Repository', artLabel: 'MODEL LAB', Icon: Cpu },
  { number: '07', category: 'AI INTERNSHIP', title: 'Fake News Detector', description: 'Python internship task from Hasnain Karimain (HK) Educational Academy: a fake news detector.', tags: ['Python', 'NLP', 'Internship'], status: 'PYTHON', repo: 'https://github.com/ShayanBinMehar/Hasnain-Karimain-Internship-Task-4', repoLabel: 'Repository', artLabel: 'NLP PIPELINE', Icon: BrainCircuit },
  { number: '08', category: 'OOP', title: 'Student Record Management System', description: 'Object-oriented programming project: a student record management system built in C++.', tags: ['C++', 'OOP', 'CMake'], status: 'C++', repo: 'https://github.com/ShayanBinMehar/OOP-Project', repoLabel: 'Repository', artLabel: 'DATA STRUCTURE', Icon: Database },
  { number: '09', category: 'DATA STRUCTURES', title: 'Sorting Algorithm Visualizer', description: 'Data structures and algorithms project: a command-line sorting algorithm visualizer built in C++.', tags: ['C++', 'DSA', 'Algorithms'], status: 'C++', repo: 'https://github.com/ShayanBinMehar/DSA-Project', repoLabel: 'Repository', artLabel: 'MODEL LAB', Icon: Cpu },
]

const skillGroups = [
  { icon: Code2, title: 'Programming', items: ['C', 'C++', 'Python', 'SQL', 'x86 Assembly'] },
  { icon: BrainCircuit, title: 'AI & Machine Learning', items: ['Machine Learning fundamentals', 'Deep Learning', 'Natural Language Processing', 'Large Language Models', 'TensorFlow', 'Scikit-learn'] },
  { icon: Database, title: 'Data & Databases', items: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB'] },
  { icon: Terminal, title: 'Tools & Development', items: ['Git & GitHub', 'Linux / Ubuntu', 'GDB', 'HTML & CSS basics'] },
]

const experience = [
  {
    type: 'INTERNSHIP',
    role: 'Artificial Intelligence (AI) Intern',
    org: 'Hasnain Karimain (HK) Educational Academy',
    orgDetail: 'Software House & Training Center',
    dates: '2-Month Internship · 2026',
    description: 'Completed a two-month internship program in Artificial Intelligence, gaining practical exposure to AI-related tasks and projects. Demonstrated teamwork, professionalism, and a strong willingness to learn while completing assigned tasks and strengthening technical skills.',
    tags: ['Artificial Intelligence', 'Problem Solving', 'Teamwork', 'Technical Learning'],
  },
  {
    type: 'INTERNSHIP',
    role: 'Intern',
    org: 'CiTECH Global',
    orgDetail: '',
    dates: 'June 2023 – August 2023 · 2 months',
    description: 'Successfully completed an internship at CiTECH Global, demonstrating dedication, enthusiasm, and a professional attitude. Gained early professional experience, developed workplace discipline, and contributed positively to the team while building a foundation for future career growth.',
    tags: ['Professional Development', 'Teamwork', 'Communication', 'Adaptability'],
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activeHash, setActiveHash] = React.useState(window.location.hash || '#home')

  const scrollToHash = React.useCallback((hash, behavior) => {
    const id = (hash || '#home').replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: behavior || (reduceMotion ? 'auto' : 'smooth') })
  }, [])

  React.useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash || '#home')
    const onPop = () => {
      const hash = window.location.hash || '#home'
      syncHash()
      scrollToHash(hash, 'auto')
    }
    scrollToHash(window.location.hash, 'auto')
    window.addEventListener('hashchange', syncHash)
    window.addEventListener('popstate', onPop)
    return () => {
      window.removeEventListener('hashchange', syncHash)
      window.removeEventListener('popstate', onPop)
    }
  }, [scrollToHash])

  React.useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const href = link.getAttribute('href')
      const el = document.getElementById(href.slice(1))
      if (!el) return
      event.preventDefault()
      setMenuOpen(false)
      scrollToHash(href)
      if (href !== '#main' && window.location.hash !== href) history.pushState(null, '', href)
      if (href !== '#main') setActiveHash(href)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [scrollToHash])

  React.useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  React.useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" aria-label="Shayan home" onClick={closeMenu}>
            <span className="brand-mark">S<span>.</span></span>
            <span>SHAYAN <i>BIN MEHAR</i></span>
          </a>
          <nav id="site-nav" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary">
            {nav.map(([label, href]) => (
              <a key={href} href={href} aria-current={activeHash === href ? 'page' : undefined} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} aria-hidden="true" /></a>
          </nav>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse-dot" aria-hidden="true" /> OPEN TO INTERNSHIPS, COLLABORATION AND JOB OPPORTUNITIES</div>
            <p className="hero-kicker">HEY, I'M {profile.shortName.toUpperCase()} <span className="wave" aria-hidden="true">✳</span></p>
            <h1>Building useful software,<br /><span>exploring intelligent</span><br />systems<span className="accent">.</span></h1>
            <p className="hero-description">Computer Science student at FAST-NUCES, building a future in AI and Machine Learning.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} aria-hidden="true" /></a>
              <ExternalLink className="button button-ghost" href={profile.github}><Github size={17} /> GitHub <ArrowUpRight size={15} aria-hidden="true" /></ExternalLink>
            </div>
            <div className="hero-meta">
              <span><GraduationCap size={16} aria-hidden="true" /> FAST-NUCES Karachi</span>
              <span><Globe size={15} aria-hidden="true" /> {profile.location}</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid" aria-hidden="true" />
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="orbit orbit-three" aria-hidden="true" />
            <div className="portrait-wrap">
              <img
                className="hero-portrait"
                src={`${import.meta.env.BASE_URL}hero-ai.png`}
                alt="Abstract luminous AI figure representing machine intelligence"
                width="960"
                height="540"
              />
              <div className="portrait-fade" aria-hidden="true" />
            </div>
            <div className="float-chip chip-python" aria-hidden="true"><span className="chip-symbol">Py</span><span>Python</span></div>
            <div className="float-chip chip-data" aria-hidden="true"><Database size={16} /><span>Data</span></div>
            <div className="float-chip chip-code" aria-hidden="true"><Code2 size={16} /><span>Code</span></div>
            <div className="visual-caption" aria-hidden="true"><span className="caption-dot" /> ALWAYS LEARNING · ALWAYS BUILDING</div>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} aria-hidden="true" /></a>
        </section>

        <section className="about section" id="about">
          <div className="section-index">01 / ABOUT</div>
          <div className="about-layout">
            <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious mind.<br /><span className="muted-title">AI-driven future.</span></>} />
            <div className="about-copy">
              <p>{profile.intro}</p>
              {profile.about.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
              <div className="exploring">
                <p className="exploring-label"><Search size={14} aria-hidden="true" /> Currently exploring</p>
                <div className="exploring-tags">{profile.exploring.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <div className="goal-card">
                <span className="fact-icon"><Rocket size={18} aria-hidden="true" /></span>
                <div><b>Goal</b><small>{profile.goal}</small></div>
              </div>
              <div className="about-facts">
                <div><span className="fact-icon"><GraduationCap size={18} aria-hidden="true" /></span><div><b>Computer Science</b><small>FAST-NUCES · Karachi, Pakistan</small></div></div>
                <div><span className="fact-icon"><Sparkles size={18} aria-hidden="true" /></span><div><b>Current direction</b><small>AI / ML · Deep Learning · NLP</small></div></div>
                <div><span className="fact-icon"><BriefcaseBusiness size={18} aria-hidden="true" /></span><div><b>Looking for</b><small>Internships · Collaborations · Job opportunities</small></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-index">02 / TOOLKIT</div>
          <SectionHeading eyebrow="TECH I WORK WITH" title={<>Tools for <span className="muted-title">making things happen.</span></>} description="A snapshot of what I am currently developing — Python, ML fundamentals, and the frameworks I am growing with." />
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, items }, i) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={20} aria-hidden="true" /></span><span className="skill-number">0{i + 1}</span></div>
                <h3>{title}</h3>
                <div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-index">03 / SELECTED WORK</div>
          <div className="projects-heading">
            <SectionHeading eyebrow="PROJECTS & EXPERIMENTS" title={<>Learning by <span className="muted-title">building.</span></>} description="Public repositories from GitHub, including academic work and internship tasks." />
            <ExternalLink className="text-link" href={profile.github}>View GitHub <ArrowUpRight size={16} aria-hidden="true" /></ExternalLink>
          </div>
          <div className="project-grid">
            {projects.map((p) => {
              const Icon = p.Icon
              return (
                <article className="project-card" key={p.number}>
                  <div className="project-card-top">
                    <span className="project-number">/{p.number}</span>
                    <span className="project-category">{p.category}</span>
                  </div>
                  <div className={`project-art art-${p.number}`} aria-hidden="true">
                    <div className="art-grid" />
                    <div className="art-center"><Icon size={44} /></div>
                    <span className="art-label">{p.artLabel}</span>
                  </div>
                  <div className="project-body">
                    <div className="project-status"><span aria-hidden="true" /> {p.status}</div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="project-tags">{p.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <ExternalLink className="project-link" href={p.repo} aria-label={`${p.repoLabel} for ${p.title}`}>
                      {p.repoLabel} <ArrowUpRight size={15} aria-hidden="true" />
                    </ExternalLink>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="section-index">04 / EXPERIENCE</div>
          <div className="experience-layout">
            <SectionHeading eyebrow="EXPERIENCE & EDUCATION" title={<>Growing through <span className="muted-title">practice.</span></>} description="Internships and academic background that shaped how I work and learn." />
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.org}-${item.dates}`}>
                  <span className="timeline-marker"><BriefcaseBusiness size={17} aria-hidden="true" /></span>
                  <div className="timeline-content">
                    <div className="timeline-meta"><span>{item.type}</span><span>{item.dates}</span></div>
                    <h3>{item.role}</h3>
                    <p className="timeline-org">{item.org}{item.orgDetail ? ` · ${item.orgDetail}` : ''}</p>
                    <p>{item.description}</p>
                    <div className="skill-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
              <article className="timeline-item">
                <span className="timeline-marker"><GraduationCap size={17} aria-hidden="true" /></span>
                <div className="timeline-content">
                  <div className="timeline-meta"><span>EDUCATION</span><span>2024 — 2028</span></div>
                  <h3>Bachelor's in Computer Science</h3>
                  <p className="timeline-org">FAST-NUCES Karachi</p>
                  <p>Pursuing a Bachelor's degree in Computer Science. Started in 2024, with expected graduation in 2028.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <div className="section-index">05 / CONTACT</div>
          <div className="contact-inner">
            <span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span>
            <h2>Let's build something<br /><span className="muted-title">meaningful.</span></h2>
            <p>Open to internships, collaborations, and job opportunities in AI-driven work.</p>
            <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a>
            <div className="contact-links">
              <ExternalLink href={profile.github}><Github size={17} /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></ExternalLink>
              <ExternalLink href={profile.linkedin}><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></ExternalLink>
              <a href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" /> Email <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">S<span>.</span></span>
          <span>SHAYAN <i>BIN MEHAR</i></span>
        </a>
        <span>Designed to grow with the work.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
