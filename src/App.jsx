import { useState, useEffect } from 'react'
import { content } from './data/content'

function App() {
  const [currentLang, setCurrentLang] = useState('en')
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [devOverlayVisible, setDevOverlayVisible] = useState(false)
  const [logoText, setLogoText] = useState('Personal Web')
  const [isFlipped, setIsFlipped] = useState(false)

  const t = content[currentLang]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Logo text fade animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoText(prev => prev === 'Personal Web' ? 'Umar Fauzan' : 'Personal Web')
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang)
    setMobileMenuOpen(false)
  }


  const getProfileImage = () => {
    switch (currentLang) {
      case 'ar': return 'img_web/picturear.png'
      case 'jp': return 'img_web/picture.png'
      default: return 'img_web/picture_original.png'
    }
  }

  if (isLoading) {
    return (
      <div id="preloader">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <>
      {devOverlayVisible && (
        <div id="development-overlay">
          <div className="development-notice">
            <p>This website is under development!</p>
            <button id="close-notice" onClick={() => setDevOverlayVisible(false)}>
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={isScrolled ? 'header-scrolled' : ''}>
        <nav>
          <div className="nav-left">
            <span className={`logo-text ${logoText === 'Personal Web' ? 'fade-in' : 'fade-out'}`}>
              {logoText}
            </span>
          </div>

          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <ul className={`nav-right ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.skills}
              </a>
            </li>
            <li>
              <a href="#certificates" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.certificates}
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.contact}
              </a>
            </li>
            <li className="dropdown">
              <button className="language-btn">
                <i className="fas fa-globe"></i>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleLanguageChange('en') }}>🇬🇧 English</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleLanguageChange('jp') }}>🇯🇵 日本語</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleLanguageChange('ar') }}>🇸🇦 العربية</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleLanguageChange('id') }}>🇮🇩 Indonesia</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleLanguageChange('mg') }}>🇮🇩 Padang</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="section">
          <div className="about-wrapper">
            <div className="banner" onClick={() => setIsFlipped(!isFlipped)} style={{ cursor: 'pointer' }}>
              <p>Clik to Flip</p>
              <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={getProfileImage()} alt="Profile" className="profile-img" />
                  </div>
                  <div className="flip-card-back">
                    <div className="back-content">
                      <a href="https://uwebly.com" target="_blank" rel="noreferrer">Uwebly.com</a>                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-container">
              <h2>{t.about.title}</h2>
              {t.about.description.map((paragraph, index) => (
                <p key={index} className="about-text" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2>{t.skills.title}</h2>
          <div className="skills-grid">
            {t.skills.categories.map((category, catIndex) => (
              <div key={catIndex} className="skill-category">
                <h3 className="category-title">{category.name}</h3>
                <div className="skills-subgrid">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill">
                      <img src={skill.icon} alt={skill.name} />
                      <h3>{skill.name}</h3>
                      <p>{skill.description}</p>
                      <div className="skill-progress">
                        <div className="progress-bar">
                          <div style={{ width: `${skill.progress}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="section">
          <h2>{t.certificates.title}</h2>
          <div className="certificates-grid">
            {t.certificates.items.map((cert) => (
              <div key={cert.id} className="certificate">
                <img src={cert.image} alt={cert.name} />
                <h3>{cert.name}</h3>
                <p>{cert.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Game Project Section */}
        <section id="game-project" className="section">
          <h2>{t.gameProject.title}</h2>
          <p>{t.gameProject.description}</p>
          <p className="note">{t.gameProject.note}</p>
          <div className="percentage">{t.gameProject.percentage}%</div>
          <div className="progress-bar">
            <div style={{ width: `${t.gameProject.percentage}%` }}></div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>{t.projects.title}</h2>
          <div className="projects-grid">
            {t.projects.items.map((project) => (
              <div key={project.id} className="project">
                <img src={project.image} alt={project.name} />
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>{t.contact.title}</h2>
          <div className="contact-card">
            <div className="contact-icons">
              <a href={`mailto:${t.contact.email}`} title="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href={`tel:${t.contact.phone}`} title="Phone">
                <i className="fas fa-phone"></i>
              </a>
              <a href="https://linkedin.com/in/umarfauzan" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com/umarfauzan" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/umarfauzan11" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="contact-info">
            <p><strong>Email:</strong> {t.contact.email}</p>
            <p><strong>Phone:</strong> {t.contact.phone}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <img src="img_web/footerlogo.png" alt="Logo" className="footer-logo" />
          <p>{t.footer.text}</p>
        </div>
      </footer>
    </>
  )
}

export default App