import { useState, useEffect, useRef } from 'react'

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [trailPos, setTrailPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(true)
  
  const requestRef = useRef()
  const prevTime = useRef(0)

  // Smooth follow animation
  useEffect(() => {
    const animate = (time) => {
      if (prevTime.current !== undefined) {
        // Lerp for smooth following
        setCursorPos(prev => ({
          x: prev.x + (mousePos.x - prev.x) * 0.15,
          y: prev.y + (mousePos.y - prev.y) * 0.15
        }))
        
        setTrailPos(prev => ({
          x: prev.x + (mousePos.x - prev.x) * 0.08,
          y: prev.y + (mousePos.y - prev.y) * 0.08
        }))
      }
      
      prevTime.current = time
      requestRef.current = requestAnimationFrame(animate)
    }
    
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [mousePos])

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY })

    const handleOver = (e) => {
      const target = e.target
      
      // Check for different interactive elements
      if (target.closest('a, button, .project-card, .btn, input, textarea')) {
        setIsHovering(true)
        
        // Custom text for specific elements
        if (target.closest('a[href^="http"]')) {
          setCursorText('VISIT')
        } else if (target.closest('.project-card')) {
          setCursorText('VIEW')
        } else if (target.closest('button')) {
          setCursorText('CLICK')
        } else {
          setCursorText('')
        }
      }
    }

    const handleOut = (e) => {
      if (!e.target.closest('a, button, .project-card, .btn, input, textarea')) {
        setIsHovering(false)
        setCursorText('')
      }
    }

    const handleDown = () => setIsClicking(true)
    const handleUp = () => setIsClicking(false)
    
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    document.addEventListener('mousedown', handleDown)
    document.addEventListener('mouseup', handleUp)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      document.removeEventListener('mousedown', handleDown)
      document.removeEventListener('mouseup', handleUp)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''} ${!isVisible ? 'hidden' : ''}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>

      {/* Trailing circle */}
      <div
        className={`custom-cursor-trail ${isHovering ? 'hover' : ''} ${!isVisible ? 'hidden' : ''}`}
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`
        }}
      />

      {/* Particles on click */}
      <ClickParticles mousePos={mousePos} isClicking={isClicking} />
    </>
  )
}

// Click particles effect
function ClickParticles({ mousePos, isClicking }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (isClicking) {
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: mousePos.x,
        y: mousePos.y,
        angle: (Math.PI * 2 * i) / 8,
      }))
      
      setParticles(prev => [...prev, ...newParticles])
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.includes(p)))
      }, 800)
    }
  }, [isClicking])

  return (
    <>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            '--angle': `${particle.angle}rad`
          }}
        />
      ))}
    </>
  )
}