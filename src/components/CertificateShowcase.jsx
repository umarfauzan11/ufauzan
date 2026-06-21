import { useState, useEffect, useRef } from 'react'
import CertificateModal from './CertificateModal'

export default function CertificateShowcase({ certificates }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const autoSlideRef = useRef(null)

  const nextCert = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length)
  }

  const prevCert = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleModalNext = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length)
  }

  const handleModalPrev = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  // Auto-slide
  useEffect(() => {
    if (!isPaused && !isModalOpen) {
      autoSlideRef.current = setInterval(nextCert, 5000)
    }
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current)
    }
  }, [isPaused, isModalOpen, certificates.length])

  const currentCert = certificates[activeIndex]
  const prevCertData = certificates[(activeIndex - 1 + certificates.length) % certificates.length]
  const nextCertData = certificates[(activeIndex + 1) % certificates.length]

  return (
    <div 
      className="cert-showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="cert-showcase-viewport">
        <div className="certificate-slide prev-slide" style={{ transform: 'translate(-50%, -50%) translateX(-65%) translateZ(-200px) rotateY(15deg) scale(0.75)' }} onClick={() => setActiveIndex((activeIndex - 1 + certificates.length) % certificates.length)}>
          <img
            src={`/${prevCertData.image}`}
            alt={prevCertData.name}
            className="certificate-image"
          />
        </div>

        <div className="certificate-slide active-slide" style={{ transform: 'translate(-50%, -50%) translateZ(0) rotateY(0deg) scale(1)' }} onClick={openModal}>
          <img
            src={`/${currentCert.image}`}
            alt={currentCert.name}
            className="certificate-image"
          />
        </div>

        <div className="certificate-slide next-slide" style={{ transform: 'translate(-50%, -50%) translateX(65%) translateZ(-200px) rotateY(-15deg) scale(0.75)' }} onClick={() => setActiveIndex((activeIndex + 1) % certificates.length)}>
          <img
            src={`/${nextCertData.image}`}
            alt={nextCertData.name}
            className="certificate-image"
          />
        </div>
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

      {isModalOpen && (
        <CertificateModal
          certificate={currentCert}
          onClose={closeModal}
          onNext={handleModalNext}
          onPrev={handleModalPrev}
          hasNext={certificates.length > 1}
          hasPrev={certificates.length > 1}
        />
      )}
    </div>
  )
}