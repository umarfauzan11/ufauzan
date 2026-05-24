import { useMemo } from 'react'
import { Link } from 'react-router-dom'

function Icon({ children }) {
  return <span className="nav-icon" aria-hidden="true">{children}</span>
}

function SvgIcon({ children }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

/**
 * Navbar single component yang punya 2 layout:
 * - Desktop: icon-only
 * - Mobile: icon-only + hamburger menu
 */
export default function Navbar({ isScrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) {
  const navItemsDesktop = useMemo(
    () =>
      [
        {
          id: 'about',
          href: '#about',
          onClick: (e) => scrollToSection(e, 'about'),
          icon: (
            <SvgIcon>
              <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
              <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
            </SvgIcon>
          ),
          label: 'Tentang',
        },
        {
          id: 'skills',
          href: '#skills',
          onClick: (e) => scrollToSection(e, 'skills'),
          icon: (
            <SvgIcon>
              <path d="M4 19.5V5.5" />
              <path d="M20 19.5V5.5" />
              <path d="M4 9h16" />
              <path d="M9 9v10.5" />
              <path d="M15 9v10.5" />
            </SvgIcon>
          ),
          label: 'Keahlian',
        },
        {
          id: 'certificates',
          href: '#certificates',
          onClick: (e) => scrollToSection(e, 'certificates'),
          icon: (
            <SvgIcon>
              <path d="M7 3h10v4H7z" />
              <path d="M7 7v14h10V7" />
              <path d="M9 11h6" />
              <path d="M9 15h6" />
            </SvgIcon>
          ),
          label: 'Sertifikat',
        },
        {
          id: 'projects',
          href: '#projects',
          onClick: (e) => scrollToSection(e, 'projects'),
          icon: (
            <SvgIcon>
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M7 7h.01" />
              <path d="M7 11h10" />
              <path d="M7 15h7" />
            </SvgIcon>
          ),
          label: 'Proyek',
        },
        {
          id: 'experience',
          href: '#experience',
          onClick: (e) => scrollToSection(e, 'experience'),
          icon: (
            <SvgIcon>
              <path d="M8 6h13" />
              <path d="M8 12h13" />
              <path d="M8 18h13" />
              <path d="M3 6h.01" />
              <path d="M3 12h.01" />
              <path d="M3 18h.01" />
            </SvgIcon>
          ),
          label: 'Pengalaman',
        },
      ],
    [scrollToSection]
  )

  const desktopContact = useMemo(
    () => ({
      id: 'contact',
      href: '/contact',
      icon: (
        <SvgIcon>
          <path d="M22 12h-7" />
          <path d="M22 7h-4" />
          <path d="M22 17h-4" />
          <path d="M2 12h8" />
          <circle cx="4" cy="12" r="2" />
          <path d="M10 12l-2 10" />
        </SvgIcon>
      ),
      label: 'Kontak',
    }),
    []
  )

  const mobileNavItems = useMemo(() => {
    // Mobile harus tetap bisa scroll (anchor) dan kontak via /contact.
    return [
      ...navItemsDesktop,
      {
        id: 'contact',
        type: 'route',
        to: '/contact',
        icon: desktopContact.icon,
        label: desktopContact.label,
      },
    ]
  }, [navItemsDesktop, desktopContact])

  return (
    <header className={isScrolled ? 'header-scrolled' : ''}>
      <nav>
        {/* Mobile */}
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-right nav-desktop ${mobileMenuOpen ? 'active' : ''}`}>
          {navItemsDesktop.map((item) => (
            <li key={item.id}>
              <a href={item.href} onClick={item.onClick} aria-label={item.label}>
                <span className="nav-text">{item.label}</span>
              </a>
            </li>
          ))}
          <li>
            <Link to={desktopContact.href} aria-label={desktopContact.label}>
              {desktopContact.label}
            </Link>
          </li>
        </ul>

        <ul className={`nav-right nav-mobile ${mobileMenuOpen ? 'active' : ''}`}>
          {mobileNavItems.map((item) => {
            if (item.type === 'route') {
              return (
                <li key={item.id}>
                  <Link to={item.to} aria-label={item.label} onClick={() => setMobileMenuOpen(false)}>
                    <Icon>{item.icon}</Icon>
                  </Link>
                </li>
              )
            }

            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    item.onClick(e)
                    setMobileMenuOpen(false)
                  }}
                  aria-label={item.label}
                >
                  <Icon>{item.icon}</Icon>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

