import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Mail,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react'
import './App.css'

const stats = [
  { value: '7+', label: 'years building' },
  { value: '24', label: 'products shipped' },
  { value: '96%', label: 'client return rate' },
]

const capabilities = [
  {
    icon: Code2,
    title: 'Product engineering',
    description: 'End-to-end product work from strategy to polished frontend and scalable implementation.',
  },
  {
    icon: Sparkles,
    title: 'Design systems',
    description: 'Distinctive interfaces, visual systems, and reusable patterns that feel premium and consistent.',
  },
  {
    icon: Zap,
    title: 'Rapid iteration',
    description: 'Lean workflows that turn prototypes into launch-ready experiences with measurable impact.',
  },
]

const projects = [
  {
    title: 'Northstar CRM',
    type: 'B2B platform',
    summary: 'Modernized a sales workflow for an enterprise team, reducing onboarding friction and speeding up task execution.',
    tag: 'Product + UX',
  },
  {
    title: 'Luma Health',
    type: 'Wellness app',
    summary: 'Designed and launched a patient-first experience focused on clarity, trust, and actionable insights.',
    tag: 'Brand + UI',
  },
  {
    title: 'Signal Labs',
    type: 'Analytics dashboard',
    summary: 'Built a data-rich control center with a clearer narrative and more confident decision-making for operators.',
    tag: 'Frontend engineering',
  },
]

const process = [
  'Define the product story, audience, and decision points.',
  'Shape the interface with fast prototypes and real feedback loops.',
  'Build the system so it feels premium and stays easy to scale.',
]

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: 'easeOut' },
}

function App() {
  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <div className="brand-group">
          <span className="brand-mark">N</span>
          <span className="brand-name">Noah Reed</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button secondary" href="#contact">
          Book a call
        </a>
      </header>

      <main className="page">
        <motion.section className="hero" initial="hidden" animate="visible" variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
        }}>
          <motion.div className="hero-copy" {...reveal}>
            <p className="eyebrow">Product designer + full-stack builder</p>
            <h1>I turn bold ideas into digital experiences people remember.</h1>
            <p className="lede">
              I help teams shape clearer products, stronger brands, and more confident customer journeys.
            </p>

            <div className="cta-row">
              <a className="button primary" href="#work">
                View work <ArrowUpRight size={18} />
              </a>
              <a className="button subtle" href="#contact">
                Say hello
              </a>
            </div>

            <div className="stats-row" aria-label="Key stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="hero-visual" {...reveal}>
            <div className="glass-panel">
              <div className="panel-header">
                <span className="status-dot" />
                <span>Available for select projects</span>
              </div>

              <div className="feature-card large">
                <div className="feature-label">Featured focus</div>
                <h2>Designing products that feel premium, clear, and fast.</h2>
                <div className="rating-row">
                  <Star size={16} fill="currentColor" />
                  <span>Client satisfaction score: 4.9/5</span>
                </div>
              </div>

              <div className="mini-grid">
                <div className="mini-card">
                  <span className="mini-label">UX</span>
                  <strong>Strategy</strong>
                </div>
                <div className="mini-card">
                  <span className="mini-label">UI</span>
                  <strong>Systems</strong>
                </div>
                <div className="mini-card">
                  <span className="mini-label">Build</span>
                  <strong>Launch</strong>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section id="services" className="section-block" {...reveal}>
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Product thinking that matches business ambition.</h2>
          </div>

          <div className="card-grid">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article className="info-card" key={title}>
                <div className="icon-badge">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="work" className="section-block" {...reveal}>
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Recent projects built for momentum.</h2>
            </div>
            <a className="text-link" href="#contact">
              Let’s build something <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span className="project-tag">{project.tag}</span>
                  <Briefcase size={18} />
                </div>
                <h3>{project.title}</h3>
                <p className="project-meta">{project.type}</p>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="process" className="section-block" {...reveal}>
          <div className="section-heading">
            <p className="eyebrow">How I work</p>
            <h2>A simple process built around clarity and speed.</h2>
          </div>

          <div className="process-list">
            {process.map((step, index) => (
              <div className="process-item" key={step}>
                <span className="step-number">0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="contact-panel" {...reveal}>
          <div>
            <p className="eyebrow">Let’s talk</p>
            <h2>Need a sharper product story or a live prototype?</h2>
          </div>

          <a className="button primary" href="mailto:hello@noahreed.dev">
            <Mail size={18} />
            hello@noahreed.dev
          </a>
        </motion.section>
      </main>
    </div>
  )
}

export default App
