import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function StyleGuide() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const colors = [
    { name: 'Color 1', hex: '#727D73', desc: 'Primary Accent' },
    { name: 'Color 2', hex: '#AAB99A', desc: 'Secondary Accent' },
    { name: 'Color 3', hex: '#D0DDD0', desc: 'Background Light' },
    { name: 'Color 4', hex: '#F0F0D7', desc: 'Background Primary' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/styleguide">Style Guide</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="typography-section">
          <div className="typography-container">
            <h1 className="typography-display">🎨 Style Guide</h1>
            <p className="typography-lead">Desain Sistem untuk Website Personal Umar Fauzan Irvan</p>
            
            <div className="typography-spacer-xl"></div>

            {/* COLOR PALETTE */}
            <h2 className="typography-h1">Color Palette</h2>
            <div className="typography-spacer-l"></div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {colors.map((color, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    height: '120px', 
                    borderRadius: '16px', 
                    background: color.hex,
                    marginBottom: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}></div>
                  <h3 className="typography-h3">{color.name}</h3>
                  <p className="typography-small">{color.hex}</p>
                  <p className="typography-caption">{color.desc}</p>
                </div>
              ))}
            </div>

            <div className="typography-spacer-xl"></div>

            {/* TYPOGRAPHY */}
            <h2 className="typography-h1">Typography System</h2>
            <div className="typography-spacer-l"></div>

            <div style={{ display: 'grid', gap: '24px' }}>
              <div>
                <p className="typography-caption">Display</p>
                <h1 className="typography-display">The quick brown fox</h1>
              </div>
              <div>
                <p className="typography-caption">Heading 1</p>
                <h1 className="typography-h1">The quick brown fox jumps over the lazy dog</h1>
              </div>
              <div>
                <p className="typography-caption">Heading 2</p>
                <h2 className="typography-h2">The quick brown fox jumps over the lazy dog</h2>
              </div>
              <div>
                <p className="typography-caption">Heading 3</p>
                <h3 className="typography-h3">The quick brown fox jumps over the lazy dog</h3>
              </div>
              <div>
                <p className="typography-caption">Lead</p>
                <p className="typography-lead">The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div>
                <p className="typography-caption">Body</p>
                <p className="typography-body">The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatem!</p>
              </div>
              <div>
                <p className="typography-caption">Small</p>
                <p className="typography-small">The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet.</p>
              </div>
              <div>
                <p className="typography-caption">Caption</p>
                <p className="typography-caption">THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG</p>
              </div>
            </div>

            <div className="typography-spacer-xl"></div>

            {/* BUTTONS */}
            <h2 className="typography-h1">Buttons</h2>
            <div className="typography-spacer-l"></div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-primary">Primary Button</button>
              <button className="btn btn-secondary">Secondary Button</button>
              <button className="slider-btn prev-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
              <button className="slider-btn next-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
            </div>

            <div className="typography-spacer-xl"></div>

            {/* SPACING SYSTEM */}
            <h2 className="typography-h1">Spacing System</h2>
            <div className="typography-spacer-l"></div>

            <div style={{ display: 'flex', alignItems: 'end', gap: '16px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ height: '8px', width: '80px', background: '#727D73', borderRadius: '4px' }}></div>
                <p className="typography-small">XS = 8px</p>
              </div>
              <div>
                <div style={{ height: '16px', width: '80px', background: '#727D73', borderRadius: '4px' }}></div>
                <p className="typography-small">S = 16px</p>
              </div>
              <div>
                <div style={{ height: '32px', width: '80px', background: '#727D73', borderRadius: '4px' }}></div>
                <p className="typography-small">M = 32px</p>
              </div>
              <div>
                <div style={{ height: '48px', width: '80px', background: '#727D73', borderRadius: '4px' }}></div>
                <p className="typography-small">L = 48px</p>
              </div>
              <div>
                <div style={{ height: '64px', width: '80px', background: '#727D73', borderRadius: '4px' }}></div>
                <p className="typography-small">XL = 64px</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer>
        <div className="typography-container text-center">
          <p className="typography-small">© 2026 Umar Fauzan Irvan. Style Guide v1.0</p>
        </div>
      </footer>
    </>
  )
}

export default StyleGuide