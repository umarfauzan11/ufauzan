import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import CertificateModal from './CertificateModal'

export default function CertificateShowcase({ certificates = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const currentCert = certificates[selectedIndex] || certificates[0]

  const openModal = (index) => {
    if (index !== undefined && emblaApi) {
      emblaApi.scrollTo(index)
    }
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="embla-cert-showcase">
      {/* Embla Carousel Viewport */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {certificates.map((cert, index) => {
            const isActive = index === selectedIndex
            return (
              <div
                key={cert.id ? `${cert.id}-${index}` : index}
                className={`embla__slide ${isActive ? 'is-active' : ''}`}
                onClick={() => {
                  if (isActive) {
                    openModal(index)
                  } else {
                    scrollTo(index)
                  }
                }}
              >
                <div className="embla__slide__inner">
                  <img
                    src={`/${cert.image}`}
                    alt={`Sertifikat ${cert.name} - Umar Fauzan Irvan`}
                    className="embla__slide__img"
                    loading="lazy"
                  />
                  <div className="embla__slide__overlay">
                    <span className="embla__slide__zoom">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      Lihat Sertifikat
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Info, Navigation Controls & Counter */}
      <div className="embla-cert-info">
        <div className="project-showcase-nav">
          <button className="project-nav-btn" onClick={scrollPrev} aria-label="Previous certificate">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <span className="project-showcase-counter">
            {String(selectedIndex + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
          </span>

          <button className="project-nav-btn" onClick={scrollNext} aria-label="Next certificate">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {currentCert && (
          <>
            <h3 className="typography-h2 project-showcase-title">{currentCert.name}</h3>
            <p className="typography-body project-showcase-desc">{currentCert.date}</p>
          </>
        )}

        {/* Dots Indicator */}
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${index === selectedIndex ? 'is-selected' : ''}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {isModalOpen && currentCert && (
        <CertificateModal
          certificate={currentCert}
          onClose={closeModal}
          onNext={scrollNext}
          onPrev={scrollPrev}
          hasNext={certificates.length > 1}
          hasPrev={certificates.length > 1}
        />
      )}
    </div>
  )
}