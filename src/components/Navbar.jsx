import { useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function SvgIcon({ children }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

export default function Navbar({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (isHome) {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/', { state: { scrollTo: sectionId } })
    }
  }

  const navItems = useMemo(() => [
    { id: 'about', label: 'Tentang', icon: <SvgIcon><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/></SvgIcon> },
    { id: 'skills', label: 'Keahlian', icon: <SvgIcon><path d="M4 19.5V5.5"/><path d="M20 19.5V5.5"/><path d="M4 9h16"/><path d="M9 9v10.5"/><path d="M15 9v10.5"/></SvgIcon> },
    { id: 'certificates', label: 'Sertifikat', icon: <SvgIcon><path d="M7 3h10v4H7z"/><path d="M7 7v14h10V7"/><path d="M9 11h6"/><path d="M9 15h6"/></SvgIcon> },
    { id: 'projects', label: 'Proyek', icon: <SvgIcon><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 7h.01"/><path d="M7 11h10"/><path d="M7 15h7"/></SvgIcon> },
    { id: 'experience', label: 'Pengalaman', icon: <SvgIcon><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></SvgIcon> },
  ], [])

  return (
    <header className={isScrolled ? 'header-scrolled' : ''}>
      <nav>
        <button className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(v => !v)} aria-label="Toggle navigation">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-right nav-desktop ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)} aria-label={item.label}>
                <span className="nav-text">{item.label}</span>
              </a>
            </li>
          ))}
          <li>
            <Link to="/contact" aria-label="Kontak">Kontak</Link>
          </li>
        </ul>

        <ul className={`nav-right nav-mobile ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)} aria-label={item.label}>
                <span className="nav-icon">{item.icon}</span>
              </a>
            </li>
          ))}
          <li>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} aria-label="Kontak">
              <span className="nav-icon">
                <SvgIcon><path d="M22 12h-7"/><path d="M22 7h-4"/><path d="M22 17h-4"/><path d="M2 12h8"/><circle cx="4" cy="12" r="2"/><path d="M10 12l-2 10"/></SvgIcon>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
