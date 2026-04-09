import { useState, useEffect, useRef } from 'react'
import { content } from './data/content'

function App() {
  const [currentLang, setCurrentLang] = useState('en')
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [devOverlayVisible, setDevOverlayVisible] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [displayCounts, setDisplayCounts] = useState({})
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const skillsSectionRef = useRef(null)
  const aboutSectionRef = useRef(null)
  const [aboutAnimated, setAboutAnimated] = useState(false)
  const [activeCertIndex, setActiveCertIndex] = useState(0)
  const certAutoSlideRef = useRef(null)

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

  // About Text Highlight Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting && !aboutAnimated) {
          setAboutAnimated(true)
          
          // Add highlight classes to strong tags
          setTimeout(() => {
            const strongTags = document.querySelectorAll('.about-text strong')
            strongTags.forEach((tag, index) => {
              tag.classList.add('highlight-animated')
              tag.classList.add(`highlight-delay-${index + 1}`)
              
              // RTL support for Arabic
              if (currentLang === 'ar') {
                tag.classList.add('highlight-rtl')
              }
            })
          }, 600)
        }
      },
      { threshold: 0.3 }
    )

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current)
    }

    return () => observer.disconnect()
  }, [aboutAnimated, currentLang])

  // Skills count animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting && !skillsAnimated) {
          setSkillsAnimated(true)
          const allSkills = t.skills.categories.flatMap((cat) => cat.skills)

          // Initialize all counts to 0
          const initialCounts = {}
          allSkills.forEach(skill => {
            initialCounts[skill.name] = 0
          })
          setDisplayCounts(initialCounts)

          // Animate each skill with delay
          allSkills.forEach((skill, index) => {
            const target = skill.progress
            const duration = 5000 // 5 seconds
            const delay = index * 200 // 200ms delay per skill
            const startTime = Date.now() + delay

            const animate = () => {
              const now = Date.now()
              const elapsed = now - startTime

              if (elapsed < 0) {
                requestAnimationFrame(animate)
                return
              }

              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              const currentVal = Math.round(eased * target)

              setDisplayCounts(prev => ({
                ...prev,
                [skill.name]: currentVal
              }))

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }

            requestAnimationFrame(animate)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current)
    }

    return () => observer.disconnect()
  }, [t.skills.categories, skillsAnimated])

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang)
    setMobileMenuOpen(false)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }


  // Certificate Slider Functions
  const nextCert = () => {
    setActiveCertIndex(prev => (prev + 1) % t.certificates.items.length)
  }

  const prevCert = () => {
    setActiveCertIndex(prev => prev === 0 ? t.certificates.items.length - 1 : prev - 1)
  }

  // Auto slide certificate every 5 seconds
  useEffect(() => {
    certAutoSlideRef.current = setInterval(nextCert, 5000)
    return () => clearInterval(certAutoSlideRef.current)
  }, [t.certificates.items.length])

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
            <span className="logo-text">
              Personal Web
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
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
                {t.nav.skills}
              </a>
            </li>
            <li>
              <a href="#certificates" onClick={(e) => scrollToSection(e, 'certificates')}>
                {t.nav.certificates}
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
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
        <section id="about" className="section" ref={aboutSectionRef}>
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
        <section id="skills" className="section" ref={skillsSectionRef}>
          <h2 style={{color: 'white'}}>{t.skills.title}</h2>
          <div className="skills-grid">
            {t.skills.categories.map((category, catIndex) => (
              <div key={catIndex} className="skill-category">
                <h3 className="category-title">{category.name}</h3>
                <div className="skills-subgrid">
                  {[...category.skills, ...category.skills].map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill">
                      <span className="skill-percentage">
                        {skillsAnimated && displayCounts[skill.name] !== undefined ? displayCounts[skill.name] : skill.progress}%
                      </span>
                      <div className="skill-description">
                        <p>{skill.description}</p>
                        <h3 className="skill-name">{skill.name}</h3>
                      </div>
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      <a href={skill.url || 'https://google.com'} target="_blank" rel="noopener noreferrer" className="skill-link" title={`Visit ${skill.name} website`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="section">
          <h2 className="certificates-title">{t.certificates.title}</h2>
          <div className="certificates-slider">
            <div className="certificates-carousel-3d">
              {/* Previous Certificate */}
              <div className="certificate-slide prev-slide">
                <img 
                  src={t.certificates.items[(activeCertIndex - 1 + t.certificates.items.length) % t.certificates.items.length].image} 
                  alt="Previous" 
                  className="certificate-image"
                />
              </div>
              
              {/* Active Certificate */}
              <div className="certificate-slide active-slide">
                <img 
                  src={t.certificates.items[activeCertIndex].image} 
                  alt={t.certificates.items[activeCertIndex].name} 
                  className="certificate-image"
                />
              </div>
              
              {/* Next Certificate */}
              <div className="certificate-slide next-slide">
                <img 
                  src={t.certificates.items[(activeCertIndex + 1) % t.certificates.items.length].image} 
                  alt="Next" 
                  className="certificate-image"
                />
              </div>
            </div>
            
            <div className="certificate-info">
              <h3>{t.certificates.items[activeCertIndex].name}</h3>
              <p>{t.certificates.items[activeCertIndex].date}</p>
            </div>

            <div className="slider-controls">
              <button className="slider-btn prev-btn" onClick={prevCert}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <div className="slider-dots">
                {t.certificates.items.map((_, index) => (
                  <span key={index} className={`dot ${index === activeCertIndex ? 'active' : ''}`} onClick={() => setActiveCertIndex(index)}></span>
                ))}
              </div>
              
              <button className="slider-btn next-btn" onClick={nextCert}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
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