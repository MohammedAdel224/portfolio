import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  Database,
  Menu,
  Network,
  Sparkles,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './App.css'
import portrait from './assets/mohammed-adel.jpeg'

const projects = [
  {
    number: '01',
    type: 'Open source · TypeScript',
    title: 'Google Docs Batch Update',
    description:
      'An npm-published n8n community node for orchestrating batch updates across Google Docs.',
    tags: ['n8n', 'TypeScript', 'npm package'],
    href: 'https://github.com/MohammedAdel224/n8n-nodes-google-docs-batch-update',
    tone: 'indigo',
  },
  {
    number: '02',
    type: 'Automation · Python',
    title: 'Manga Favorite List',
    description:
      'A concurrent scraper that tracks 137 manga across 446 links and 12 websites, then syncs chapter data to Google Sheets.',
    tags: ['Python', 'Concurrency', 'Google API'],
    href: 'https://github.com/MohammedAdel224/Manga-Favorate-List',
    tone: 'orange',
  },
  {
    number: '03',
    type: 'Data analysis · R + Python',
    title: 'Cyclistic Bike Share',
    description:
      'A Google Data Analytics capstone exploring 2023 rider behavior from data collection through visualization.',
    tags: ['Data analysis', 'R', 'Python'],
    href: 'https://www.kaggle.com/code/mohammedadellma/cyclistic-bike-share-2023-python',
    tone: 'violet',
  },
  {
    number: '04',
    type: 'Web development · Angular',
    title: 'La Duchessa',
    description:
      'A responsive café and restaurant website designed to give a local business a warm, clear digital presence.',
    tags: ['Angular', 'HTML', 'CSS'],
    href: 'https://github.com/MohammedAdel224/La-Duchessa',
    tone: 'lime',
  },
]

const capabilities = [
  {
    icon: Bot,
    title: 'Intelligent automation',
    description: 'Power Automate, n8n, UiPath, and Automation Anywhere workflows built around real business needs.',
  },
  {
    icon: Network,
    title: 'Process thinking',
    description: 'I discover the friction, map the process, and turn messy steps into systems teams can trust.',
  },
  {
    icon: Database,
    title: 'Data to decisions',
    description: 'From cleaning and analysis to dashboards, I make information easier to understand and act on.',
  },
]

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: 'easeOut' },
}
const currentYear = new Date().getFullYear()

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <a className="brand-group" href="#top" aria-label="Mohammed Adel home">
          <span className="brand-emblem" aria-hidden="true">
            <span>MA</span>
          </span>
          <span className="brand-name">
            <span className="brand-first">Mohammed</span>
            <span className="brand-last">Adel</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav id="main-navigation" className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

      </header>

      <main id="top" className="page">
        <section className="hero">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
          }}>
            <div className="availability"><span /> Open to meaningful opportunities</div>
            <p className="eyebrow">RPA developer · intelligent automation</p>
            <h1>I build reliable automations for teams buried in <em>repetitive work.</em></h1>
            <p className="lede">
              I design Power Automate and n8n workflows, SharePoint systems, and AI-enabled tools that reduce manual effort and make business processes easier to operate.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href="#work">
                See selected work <ArrowUpRight size={18} />
              </a>
              <a className="button button-outline" href="https://drive.google.com/uc?export=download&id=1nKgrJgujYkIBCyRJ16xY6UQWJKQPWzsM">
                Download CV <ArrowUpRight size={16} />
              </a>
              <a className="text-link" href="https://www.linkedin.com/in/mohammed-adel-62432721b/" target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-proof">
              <div><strong>35th</strong><span>ECPC qualification rank</span></div>
              <div><strong>137</strong><span>manga tracked across 446 links</span></div>
              <div><strong>4+</strong><span>automation platforms</span></div>
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="system-card">
              <div className="system-topline"><span className="live-dot" /> Automation in motion <span className="system-menu">•••</span></div>
              <div className="workflow">
                <div className="workflow-node node-input"><Braces size={18} /><span>Trigger</span></div>
                <div className="workflow-line"><span /></div>
                <div className="workflow-node node-process"><Sparkles size={18} /><span>Transform</span></div>
                <div className="workflow-line"><span /></div>
                <div className="workflow-node node-output"><Check size={18} /><span>Outcome</span></div>
              </div>
              <div className="system-footer"><span>n8n / Power Automate / UiPath</span><strong>RUNNING</strong></div>
            </div>
            <div className="floating-label label-top"><span className="label-icon"><Bot size={15} /></span> AI agents</div>
            <div className="floating-label label-bottom"><span className="label-icon orange"><Database size={15} /></span> Clean data</div>
          </motion.div>
        </section>

        <motion.section id="capabilities" className="section-block capabilities-section" {...reveal}>
          <div className="section-heading">
            <p className="eyebrow">What I bring</p>
            <h2>Less busywork.<br /><span>More momentum.</span></h2>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, description }, index) => (
              <article className="capability-card" key={title}>
                <div className={`icon-badge badge-${index}`}><Icon size={21} /></div>
                <p className="card-index">0{index + 1}</p>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="work" className="section-block work-section" {...reveal}>
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Built to be useful.<br /><span>Made to last.</span></h2>
            </div>
            <p className="section-note">A few things I&apos;ve built across automation, data, and the web. More detailed case studies are coming soon.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a className={`project-card project-${project.tone}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <div className="project-topline"><span>{project.number} / {project.type}</span><ArrowUpRight size={19} /></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section id="about" className="about-section" {...reveal}>
          <div className="about-intro">
            <div className="portrait-frame">
              <img src={portrait} alt="Mohammed Adel smiling in a grayscale portrait" />
            </div>
            <div className="about-copy">
              <p className="eyebrow">A little context</p>
              <h2>Curious by nature.<br /><span>Precise by practice.</span></h2>
            </div>
          </div>
          <div className="about-details">
            <p>I&apos;m Mohammed, an RPA Developer based in Alexandria, Egypt. My background in Statistics and Computer Science helps me see both the numbers and the people behind a process.</p>
            <p>I combine process analysis, software development, and data thinking to build automations that are useful in the real world.</p>
            <p>At Blue Holding, I discover automation opportunities and build workflows with Power Automate, n8n, SharePoint, spreadsheets, and LiveKit AI agents.</p>
            <div className="timeline">
              <div><span>Jul 2025 — Present</span><strong>RPA Developer · Blue Holding</strong></div>
              <div><span>Apr — May 2024</span><strong>Data Analyst Intern · Mentorness</strong></div>
              <div><span>2024</span><strong>Business Analysis &amp; Intelligent Automation · ITI</strong></div>
              <div><span>2023</span><strong>B.Sc. Statistics, minor in Computer Science · Alexandria University</strong></div>
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" className="contact-panel" {...reveal}>
          <div className="contact-copy">
            <p className="eyebrow">Have a process in mind?</p>
            <h2>Let&apos;s make it <em>move.</em></h2>
            <p className="contact-note">Need to automate a repetitive process, connect business systems, or make operational data easier to use?</p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:mohammedadelxo224@gmail.com" aria-label="Email Mohammed Adel" title="mohammedadelxo224@gmail.com">
              <span className="contact-email-icon"><FaEnvelope size={16} /></span>
              <span className="contact-email-address">mohammedadelxo224@gmail.com</span>
              <ArrowUpRight size={16} />
            </a>
            <div className="social-row">
              <a href="https://github.com/MohammedAdel224" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><FaGithub size={18} /></a>
              <a href="https://www.linkedin.com/in/mohammed-adel-62432721b/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn size={18} /></a>
            </div>
          </div>
        </motion.section>
      </main>
      <footer><span>© {currentYear} Mohammed Adel</span><span>Built with curiosity + good systems.</span></footer>
    </div>
  )
}

export default App
