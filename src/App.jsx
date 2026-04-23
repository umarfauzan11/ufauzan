import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { content } from './data/content'
import Contact from './pages/Contact'
import StyleGuide from './pages/StyleGuide'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [displayCounts, setDisplayCounts] = useState({})
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const skillsSectionRef = useRef(null)
  const aboutSectionRef = useRef(null)
  const [aboutAnimated, setAboutAnimated] = useState(false)
  const [activeCertIndex, setActiveCertIndex] = useState(0)
  const certAutoSlideRef = useRef(null)

  const t = content.id

  // Tambahkan state dan ref baru
  const [certsAnimated, setCertsAnimated] = useState(false)
  const certsSectionRef = useRef(null)

  // Tambahkan useEffect baru untuk animate certificates
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting && !certsAnimated) {
          setCertsAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (certsSectionRef.current) {
      observer.observe(certsSectionRef.current)
    }

    return () => observer.disconnect()
  }, [certsAnimated])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Scroll Detection & Section Animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Animate sections when they enter viewport
      document.querySelectorAll('.typography-section').forEach(section => {
        const rect = section.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight * 0.75

        if (isInView) {
          section.classList.add('in-view')
        }
      })
    }

    // Initial check on load
    handleScroll()

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

          setTimeout(() => {
            const strongTags = document.querySelectorAll('.about-text strong')
            strongTags.forEach((tag, index) => {
              tag.classList.add('highlight-animated')
              tag.classList.add(`highlight-delay-${index + 1}`)

              
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
  }, [aboutAnimated])

  // Skills count animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting && !skillsAnimated) {
          setSkillsAnimated(true)
          const allSkills = t.skills.categories.flatMap((cat) => cat.skills)

          const initialCounts = {}
          allSkills.forEach(skill => {
            initialCounts[skill.name] = 0
          })
          setDisplayCounts(initialCounts)

          allSkills.forEach((skill, index) => {
            const target = skill.progress
            const duration = 5000
            const delay = index * 200
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

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  const nextCert = () => {
    setActiveCertIndex(prev => (prev + 1) % t.certificates.items.length)
  }

  const prevCert = () => {
    setActiveCertIndex(prev => prev === 0 ? t.certificates.items.length - 1 : prev - 1)
  }

  useEffect(() => {
    certAutoSlideRef.current = setInterval(nextCert, 5000)
    return () => clearInterval(certAutoSlideRef.current)
  }, [t.certificates.items.length])

  const getProfileImage = () => {
    return 'img_web/umar-stand.png'
  }

  if (isLoading) {
    return (
      <div id="preloader">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/styleguide" element={<StyleGuide />} />
        <Route path="/" element={
          <>
            <header className={isScrolled ? 'header-scrolled' : ''}>
              <nav>
                <button
                  className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </button>

                <ul className={`nav-right ${mobileMenuOpen ? 'active' : ''}`}>
                  <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                  <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>{t.nav.skills}</a></li>
                  <li><a href="#certificates" onClick={(e) => scrollToSection(e, 'certificates')}>{t.nav.certificates}</a></li>
                  <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>{t.nav.projects}</a></li>
                  <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
                  <li><Link to="/contact">{t.nav.contact}</Link></li>
                </ul>
              </nav>
            </header>

            <main>

              {/* 1. HERO SECTION - TYPOGRAPHY DISPLAY */}
              <section id="hero" className="typography-section hero-section">
                <div className="typography-container">
                  <p className="typography-caption animate-in delay-1">Hello, saya adalah</p>
                  <h1 className="typography-display animate-in delay-2">Umar Fauzan <span className="text-gradient">Irvan</span></h1>
                  <p className="typography-lead animate-in delay-3">Full Stack Developer & <strong>Game Developer</strong> yang senang membangun sesuatu yang berfungsi dengan baik dan terlihat cantik.</p>

                  <div style={{ gap: '5px' }} className="hero-buttons animate-in delay-4">
                    <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="btn btn-primary-first">
                      Lihat Projects
                    </a>
                    <Link to="/contact" className="btn btn-secondary-first">
                      Contact Me
                    </Link>
                  </div>
                </div>
              </section>

              {/* 2. ABOUT SECTION */}
              <section id="about" className="typography-section" ref={aboutSectionRef}>
                <div className="typography-container">
                  <div className="about-wrapper">
                      <img src={getProfileImage()} alt="Profile" className="profile-img" />
                    <div className="about-content">
                      <h2 className="typography-h1">Tentang Saya</h2>
                      {t.about.description.map((paragraph, index) => (
                        <p key={index} className="typography-body about-text" dangerouslySetInnerHTML={{ __html: paragraph }} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. SKILLS SECTION */}
              <section id="skills" className="typography-section dark-section" ref={skillsSectionRef}>
                <div className="typography-container">
                  <h2 className="typography-h1 light-text">Keahlian</h2>
                  <div className="typography-spacer-l"></div>

                  <div className="skills-layout">
                    <div className="skills-grid">
                      {t.skills.categories.map((category, catIndex) => (
                        <div key={catIndex} className="skill-category">
                          <h3 className="typography-h3 light-text">{category.name}</h3>
                          <div className="typography-spacer-s"></div>
                          <div className="skills-subgrid">
                            {[...category.skills].map((skill, skillIndex) => (
                              <div key={skillIndex} className="skill-card">
                                <span className="typography-display-small">
                                  {skillsAnimated && displayCounts[skill.name] !== undefined ? displayCounts[skill.name] : skill.progress}%
                                </span>
                                <p className="typography-small">{skill.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="skills-icons-bento">
                      <div className="skill-icon-card large"><i className="fab fa-react"></i></div>
                      <div className="skill-icon-card"><i className="fab fa-html5"></i></div>
                      <div className="skill-icon-card"><i className="fab fa-css3-alt"></i></div>
                      <div className="skill-icon-card"><i className="fab fa-node-js"></i></div>
                      <div className="skill-icon-card medium"><i className="fab fa-unity"></i></div>
                      <div className="skill-icon-card"><i className="fab fa-figma"></i></div>
                      <div className="skill-icon-card"><i className="fab fa-git-alt"></i></div>
                      <div className="skill-icon-card"><i className="fas fa-palette"></i></div>
                      <div className="skill-icon-card"><i className="fab fa-python"></i></div>
                      <div className="skill-icon-card"><i className="fab fa-js-square"></i></div>
                      <div className="skill-icon-card"><i className="fab fa-vuejs"></i></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. CERTIFICATES SECTION */}
              <section id="certificates" className="typography-section" ref={certsSectionRef}>          <div className="typography-container">
                <h2 className="typography-h1">Sertifikat</h2>
                <div className="typography-spacer-l"></div>

                <div className="certificates-slider">
                  <div className="certificates-carousel-3d">
                    <div className="certificate-slide prev-slide">
                      <img
                        src={t.certificates.items[(activeCertIndex - 1 + t.certificates.items.length) % t.certificates.items.length].image}
                        alt="Previous"
                        className="certificate-image"
                      />
                    </div>

                    <div className="certificate-slide active-slide">
                      <img
                        src={t.certificates.items[activeCertIndex].image}
                        alt={t.certificates.items[activeCertIndex].name}
                        className="certificate-image"
                      />
                    </div>

                    <div className="certificate-slide next-slide">
                      <img
                        src={t.certificates.items[(activeCertIndex + 1) % t.certificates.items.length].image}
                        alt="Next"
                        className="certificate-image"
                      />
                    </div>
                  </div>

                  <div className="typography-spacer-m"></div>
                  <h3 className="typography-h2">{t.certificates.items[activeCertIndex].name}</h3>
                  <p className="typography-small">{t.certificates.items[activeCertIndex].date}</p>

                  <div className="typography-spacer-m"></div>
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
              </div>
              </section>

              {/* 5. GAME PROJECT SECTION */}
              <section id="game-project" className="typography-section">
                <div className="typography-container">
                  <h2 className="typography-h1">Game Project</h2>
                  <div className="typography-spacer-m"></div>
                  <p className="typography-body">{t.gameProject.description}</p>
                  <div className="typography-spacer-xl"></div>
                  <div className="typography-display">{t.gameProject.percentage}%</div>
                  <div className="progress-bar">
                    <div style={{ width: `${t.gameProject.percentage}%` }}></div>
                  </div>
                </div>
              </section>

              {/* 6. PROJECTS SECTION */}
              <section id="projects" className="typography-section">
                <div className="typography-container">
                  <h2 className="typography-h1">Proyek</h2>
                  <div className="typography-spacer-l"></div>

            <div className="projects-grid">
              {t.projects.items.map((project, index) => (
                <div key={project.id} className="project-card">
                  <div className="project-info">
                    <div className="project-header">
                      <h2>{project.name} <span>for {project.client || 'Personal Project'}</span></h2>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    </div>
                    <p className="typography-lead" style={{ opacity: 0.5 }}>{project.description}</p>
                  </div>

                  <div className="project-mockup">
                    {index % 2 === 0 ? (
                      <>
                        <div className="project-bg-preview">
                          <img src={project.screenshot || project.image} alt={project.name} />
                        </div>
                        
                        <div className="project-phone">
                          <div className="phone-glass">
                            <div className="phone-screen">
                              <div className="phone-notch"></div>
                              <img src={project.screenshot || project.image} alt={project.name} className="phone-screenshot" />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '24px' }}>
                        
                        {/* Background Bento Cards */}
                        <div style={{ 
                          position: 'absolute', 
                          width: '100%', 
                          height: '100%',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(4, 1fr)',
                          gridTemplateRows: 'repeat(5, 1fr)',
                          gap: '8px',
                          padding: '20px',
                          opacity: 0.08
                        }}>
                          <div style={{ background: '#1a1a2e', borderRadius: '14px', gridColumn: 'span 2', gridRow: 'span 2', padding: '12px' }}>
                            <div style={{ width: '60%', height: '8px', background: 'white', borderRadius: '4px', marginBottom: '8px' }}></div>
                            <div style={{ width: '80%', height: '6px', background: 'white', borderRadius: '3px', opacity: 0.3 }}></div>
                          </div>
                          <div style={{ background: '#1a1a2e', borderRadius: '12px', gridColumn: 'span 2', padding: '8px' }}>
                            <div style={{ width: '70%', height: '6px', background: 'white', borderRadius: '3px' }}></div>
                          </div>
                          <div style={{ background: '#1a1a2e', borderRadius: '12px', gridRow: 'span 2', padding: '8px' }}>
                            <div style={{ width: '100%', height: '50%', background: 'white', borderRadius: '6px', opacity: 0.2 }}></div>
                          </div>
                          <div style={{ background: '#1a1a2e', borderRadius: '10px', padding: '6px' }}>
                            <div style={{ width: '100%', height: '100%', borderRadius: '4px', background: 'white', opacity: 0.15 }}></div>
                          </div>
                          <div style={{ background: '#1a1a2e', borderRadius: '14px', gridColumn: 'span 2', gridRow: 'span 2', padding: '12px' }}>
                            <div style={{ width: '40%', height: '12px', background: 'white', borderRadius: '6px', marginBottom: '8px' }}></div>
                            <div style={{ width: '90%', height: '5px', background: 'white', borderRadius: '2px', opacity: 0.25, marginBottom: '4px' }}></div>
                            <div style={{ width: '75%', height: '5px', background: 'white', borderRadius: '2px', opacity: 0.15 }}></div>
                          </div>
                          <div style={{ background: '#1a1a2e', borderRadius: '10px', padding: '6px' }}>
                            <div style={{ width: '100%', height: '100%', borderRadius: '4px', background: 'white', opacity: 0.1 }}></div>
                          </div>
                          <div style={{ background: '#1a1a2e', borderRadius: '12px', gridColumn: 'span 3', padding: '8px' }}>
                            <div style={{ width: '50%', height: '6px', background: 'white', borderRadius: '3px' }}></div>
                          </div>
                          <div style={{ background: '#1a1a2e', borderRadius: '10px', padding: '6px' }}>
                            <div style={{ width: '100%', height: '100%', borderRadius: '4px', background: 'white', opacity: 0.08 }}></div>
                          </div>
                        </div>

                        {/* Typography Stack */}
                        {[100, 200, 300, 400, 500, 600, 700].map((weight, i) => (
                          <h2 
                            key={weight} 
                            style={{ 
                              position: 'absolute',
                              fontWeight: weight,
                              opacity: 1 - (i * 0.12),
                              transform: `translateY(${i * 32}px)`,
                              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                              letterSpacing: '-0.03em',
                              margin: 0,
                              zIndex: 10 + i
                            }}
                          >
                            Annishofie
                          </h2>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
                </div>
              </section>

              {/* 7. EXPERIENCE SECTION - BENTO GRID */}
              <section id="experience" className="typography-section">
                <div className="typography-container">
                  <h2 className="typography-h1">Pengalaman</h2>
                  <div className="typography-spacer-l"></div>

                  <div className="bento-grid">
                    <div className="bento-card bento-card-large">
                      <p className="typography-caption">2024 - Sekarang</p>
                      <h3 className="typography-h2">Student Developer</h3>
                      <p className="typography-body">
                        Mengembangkan aplikasi web dan mobile secara mandiri serta mengerjakan beberapa proyek freelance.
                      </p>
                    </div>

                    <div className="bento-card">
                      <p className="typography-caption">2021 - 2023</p>
                      <h3 className="typography-h3">Learning Web Development</h3>
                      <p className="typography-small">
                        Mempelajari dasar hingga lanjutan pengembangan web dan membangun berbagai proyek latihan.
                      </p>
                    </div>

                    <div className="bento-card">
                      <h3 className="typography-h2">12+</h3>
                      <p className="typography-body">Proyek dibuat</p>
                    </div>

                    <div className="bento-card">
                      <h3 className="typography-h2">3+ Tahun</h3>
                      <p className="typography-body">Belajar coding</p>
                    </div>

                    <div className="bento-card">
                      <h3 className="typography-h2">12+</h3>
                      <p className="typography-body">Teknologi dipelajari</p>
                    </div>

                    <div className="bento-card">
                      <h3 className="typography-h2">100%</h3>
                      <p className="typography-body">Komitmen menyelesaikan proyek</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. CONTACT SECTION */}
              <section id="contact" className="typography-section dark-section">
                <div className="typography-container">
                  <h2 className="typography-h1 light-text">Hubungi Saya</h2>
                  <div className="typography-spacer-xl"></div>
                  <p className="typography-lead light-text">
                    Email: <strong>{t.contact.email}</strong>
                  </p>
                  <p className="typography-lead light-text">
                    Phone: <strong>{t.contact.phone}</strong>
                  </p>
                  <div className="typography-spacer-l"></div>
                  <div className="contact-icons">
                    <a href={`mailto:${t.contact.email}`}><i className="fas fa-envelope"></i></a>
                    <a href={`tel:${t.contact.phone}`}><i className="fas fa-phone"></i></a>
                    <a href="https://linkedin.com/in/umarfauzan" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://instagram.com/umarfauzan" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://github.com/umarfauzan11" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </section>

            </main>

            <footer>
              <div className="typography-container text-center">
                <a href="/StyleGuide" className="typography-small">© 2026 Umar Fauzan Irvan. All rights reserved.</a>
              </div>
            </footer>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App