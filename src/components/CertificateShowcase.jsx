import { useState, useRef, useEffect, lazy, Suspense } from 'react'

const CertificateDeviceModel = lazy(() => import('./CertificateDeviceModel'))

export default function CertificateShowcase({ certificates }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [transitionId, setTransitionId] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [shakeDir, setShakeDir] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const currentCert = certificates[activeIndex]

  const nextCert = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length)
    setShakeDir('next')
    setTransitionId((prev) => prev + 1)
  }

  const prevCert = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
    setShakeDir('prev')
    setTransitionId((prev) => prev + 1)
  }

  return (
    <div className="cert-showcase" ref={sectionRef}>
      <div className="cert-showcase-viewport">
        {isVisible && (
          <Suspense fallback={<div className="project-card-3d-loading"><div className="loading-spinner small"></div></div>}>
            <CertificateDeviceModel
              screenshotUrl={`/${currentCert.image}`}
              shakeDir={shakeDir}
              transitionId={transitionId}
            />
          </Suspense>
        )}
      </div>

      <div className="cert-showcase-info">
        <div className="project-showcase-nav">
          <button className="project-nav-btn" onClick={prevCert}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <span className="project-showcase-counter">
            {String(activeIndex + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
          </span>

          <button className="project-nav-btn" onClick={nextCert}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <h3 className="typography-h2 project-showcase-title">{currentCert.name}</h3>
        <p className="typography-body project-showcase-desc">{currentCert.date}</p>
      </div>
    </div>
  )
}
