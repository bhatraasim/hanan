import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="app">
      {/* Navigation */}
      <nav>
        <div className="container nav-container">
          <h1 className="nav-title">Hanan</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XMarkIcon className="icon" /> : <Bars3Icon className="icon" />}
          </button>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Hanan Bashir</h1>
            <p className="hero-subtitle">BTech Student | Cybersecurity Enthusiast | Python Developer</p>
            <p className="hero-description">
              Currently pursuing BTech at Central University of Kashmir, passionate about cybersecurity and Python development.
            </p>
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="about-content"
            >
              <div className="about-text">
                <p className="about-intro">
                  I am a BTech student at Central University of Kashmir with a strong passion for cybersecurity and Python development.
                  My journey in technology is driven by curiosity and a desire to make the digital world more secure.
                </p>
                <p className="about-description">
                  I believe in continuous learning and staying updated with the latest technologies and security practices.
                  My goal is to contribute to the field of cybersecurity while developing innovative solutions using Python.
                </p>
              </div>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">3+</span>
                  <span className="highlight-label">Years of Experience</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">10+</span>
                  <span className="highlight-label">Projects Completed</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">5+</span>
                  <span className="highlight-label">Certifications</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="about-image"
            >
              <div className="image-container">
                <div className="image-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {['Python', 'Cybersecurity', 'Network Security', 'Linux', 'Git', 'SQL', 'Web Security', 'Problem Solving'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-content"
          >
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a href="mailto:hananbashirnajar@gmail.com" className="btn btn-primary">
              Send Message
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2024 Hanan Bashir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
