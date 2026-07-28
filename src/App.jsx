import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { content } from './data/content'
import Contact from './pages/Contact'
import StyleGuide from './pages/StyleGuide'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import CertificateShowcase from './components/CertificateShowcase'
import ProjectCard3D from './components/ProjectCard3D'
import Lenis from 'lenis'

function ScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Bersihkan state supaya gak trigger ulang
        window.history.replaceState({}, '')
      }, 100)
    }
  }, [location])

  return null
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [displayCounts, setDisplayCounts] = useState({})
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const skillsSectionRef = useRef(null)
  const aboutSectionRef = useRef(null)
  const [aboutAnimated, setAboutAnimated] = useState(false)

  const t = content.id

  // Tambahkan state dan ref baru
  const [certsAnimated, setCertsAnimated] = useState(false)
  const certsSectionRef = useRef(null)

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

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
        const isInView = rect.top < window.innerHeight * 0.5

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
      <ScrollHandler />
      <CustomCursor />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/styleguide" element={<StyleGuide />} />
        <Route path="/" element={
          <>
            <Navbar
              isScrolled={isScrolled}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              scrollToSection={scrollToSection}
            />
            <main>
              {/* 1. HERO SECTION - TYPOGRAPHY DISPLAY */}
              <section id="hero" className="hero-section">
                <div className="typography-container">
                  <p className="typography-caption">Halo, saya adalah</p>
                  <h1 className="typography-displays">Umar Fauzan <span className="text-gradient">Irvan</span></h1>
                  <p className="typography-lead animate-in delay-3">Full Stack Developer & <strong>Game Developer</strong> yang senang membangun sesuatu yang berfungsi dengan baik dan terlihat cantik.</p>

                  <div style={{ gap: '5px' }} className="scrolls hero-buttons animate-in delay-4">
                    <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="btn btn-primary-first">
                      Lihat Projects
                    </a>
                    <a
                      href="https://www.linkedin.com/in/umar-fauzan-irvan-24139b363"
                      className="btn btn-primary-second"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ marginRight: "8px" }}
                      >
                        <path d="M4.98 3.5C4.98 4.60457 4.08457 5.5 2.98 5.5C1.87543 5.5.98 4.60457.98 3.5C.98 2.39543 1.87543 1.5 2.98 1.5C4.08457 1.5 4.98 2.39543 4.98 3.5ZM5 8H1V22H5V8ZM8 8H11.83V9.91H11.88C12.41 8.9 13.71 7.83 15.65 7.83C19.68 7.83 20.42 10.48 20.42 13.92V22H16.42V14.97C16.42 13.29 16.39 11.13 14.08 11.13C11.73 11.13 11.37 12.96 11.37 14.85V22H7.37V8H8Z" />
                      </svg>

                      See My LinkedIn
                    </a>
                    <Link to="/contact" className="btn-secondary-first">
                      Contact Me
                    </Link>
                  </div>
                </div>
              </section>

              {/* 2. ABOUT SECTION */}
              <section id="about" className="typography-section" ref={aboutSectionRef}>
                <div className="typography-container">
                  <div className="about-wrapper">
                    <div className="profile-wrapper">
                      <img src={getProfileImage()} alt="Profile" className="profile-img" />
                    </div>
                    <div className="about-content">
                      <h2 className="typography-h1">Tentang Saya</h2>
                      {t.about.description.map((paragraph, index) => (
                        <p key={index} className="typography-body about-text" dangerouslySetInnerHTML={{ __html: paragraph }} />
                      ))}
                    </div>
                  </div>
                  <a style={{textDecoration: 'none'}} href="/CV_UMAR_FAUZAN_IRVAN.pdf" download="CV_Umar_Fauzan_Irvan">
                    <button className='download-cv'>Download CV</button>
                  </a>
                </div>
              </section>


              {/* 3. SKILLS SECTION */}
              <section id="skills" className="typography-section dark-section" ref={skillsSectionRef}>
                <div className="typography-container">
                  <h2 className="typography-h1 light-text">Keahlian</h2>
                  {t.skills.description.map((item, index) => (
                    <p key={index} className="typography-body about-text">
                      {item}
                    </p>
                  ))}
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
                      <div className="skill-icon-card large">
                        <i className="fab fa-react"></i>
                        <span className="skill-name">React</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fab fa-html5"></i>
                        <span className="skill-name">HTML5</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fab fa-css3-alt"></i>
                        <span className="skill-name">CSS3</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fab fa-js-square"></i>
                        <span className="skill-name">JavaScript</span>
                      </div>

                      <div className="skill-icon-card medium">
                        <i className="fab fa-node-js"></i>
                        <span className="skill-name">Node.js</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fab fa-vuejs"></i>
                        <span className="skill-name">Vue.js</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fab fa-laravel"></i>
                        <span className="skill-name">Laravel</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fab fa-php"></i>
                        <span className="skill-name">PHP</span>
                      </div>

                      <div className="skill-icon-card large">
                        <i className="fab fa-python"></i>
                        <span className="skill-name">Python</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fab fa-git-alt"></i>
                        <span className="skill-name">Git</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fab fa-github"></i>
                        <span className="skill-name">GitHub</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fab fa-npm"></i>
                        <span className="skill-name">NPM</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fab fa-bootstrap"></i>
                        <span className="skill-name">Bootstrap</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fab fa-figma"></i>
                        <span className="skill-name">Figma</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fas fa-palette"></i>
                        <span className="skill-name">UI/UX</span>
                      </div>

                      <div className="skill-icon-card medium">
                        <i className="fas fa-database"></i>
                        <span className="skill-name">Database</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fas fa-server"></i>
                        <span className="skill-name">Backend</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fas fa-code"></i>
                        <span className="skill-name">Programming</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fas fa-terminal"></i>
                        <span className="skill-name">CLI</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fas fa-layer-group"></i>
                        <span className="skill-name">Architecture</span>
                      </div>

                      <div className="skill-icon-card">
                        <i className="fas fa-mobile-alt"></i>
                        <span className="skill-name">Responsive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. CERTIFICATES SECTION */}
              <section id="certificates" className="typography-section" ref={certsSectionRef}>
                <div className="typography-container">
                  <h2 className="typography-h1">Sertifikat</h2>
                  <div className="typography-spacer-l"></div>
                  <CertificateShowcase certificates={t.certificates.items} />
                </div>
              </section>

              {/* <section id="certificates" className="typography-section" ref={certsSectionRef}>
                <div className="typography-container">
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
              </section> */}


              {/* 6. PROJECTS SECTION */}
              <section id="projects" className="typography-section">
                <div className="typography-container effect">
                  <h2 className="typography-h1">Proyek</h2>
                  <div className="typography-spacer-l"></div>

                  <ProjectCard3D projects={t.projects.items} />
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
                        Mengembangkan aplikasi web dan mobile secara mandiri serta mengerjakan beberapa proyek UMKM.
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
                      <h3 className="typography-h2">23+</h3>
                      <p className="typography-body">Proyek dibuat</p>
                    </div>

                    <div className="bento-card">
                      <h3 className="typography-h2">2+ Tahun</h3>
                      <p className="typography-body">Belajar coding</p>
                    </div>

                    <div className="bento-card">
                      <h3 className="typography-h2">12+</h3>
                      <p className="typography-body">Teknologi dipelajari</p>
                    </div>

                    <div className="bento-card">
                      <h3 className="typography-h2">99%</h3>
                      <p className="typography-body">Komitmen menyelesaikan proyek</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. CONTACT SECTION */}
              <section id="contact" className="typography-section dark-section1">
                <div className="typography-container">
                  <div className="contact-layout">
                    <div className="contact-left">
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
                        <a href="https://www.linkedin.com/in/umar-fauzan-irvan-24139b363" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://instagram.com/umarfauzan" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://github.com/umarfauzan11" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                      </div>
                    </div>

                    <div className="contact-right">
                      <img src="/img_web/block.gif" alt="Mario" className="contact-mascot" />
                    </div>
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