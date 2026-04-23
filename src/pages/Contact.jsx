import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Contact() {

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const [step, setStep] = useState(0)
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const chatQuestions = [
    { id: 'name', text: 'Hai 👋 Siapa nama kamu?', placeholder: 'Ketik nama kamu disini...' },
    { id: 'email', text: 'Senang bertemu dengan kamu! Apa email kamu?', placeholder: 'email@example.com' },
    { id: 'message', text: 'Bagus, ada pesan apa yang mau kamu sampaikan?', placeholder: 'Tulis pesan kamu disini...' },
  ]

  useEffect(() => {
    addBotMessage(chatQuestions[0].text)
  }, [])

  const addBotMessage = (text) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'bot',
        text,
        time: 'Just now'
      }])
    }, 800)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const currentField = chatQuestions[step].id
    const value = formData[currentField]

    if (!value) return

    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      text: value,
      time: 'Delivered'
    }])

    // Auto scroll ke paling bawah
    setTimeout(() => {
      const chatContainer = document.querySelector('.chat-messages')
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight
      }
    }, 100)

    setFormData({ ...formData, [currentField]: '' })

    // ✅ EASTER EGG DETECT NAMA SENDIRI
    if (currentField === 'name') {
      const inputName = value.toLowerCase().trim()
      const detectNames = ['usahlan', 'umar fauzan', 'umar', 'ufauzan', 'ufauzan11', 'fauzan', 'umar fauzan irvan']

      if (detectNames.includes(inputName)) {
        setTimeout(() => {
          addBotMessage('🤯 WAIT! Kamu itu AKU sendiri ya? 😂')
          setTimeout(() => addBotMessage('Jadi ngapain kamu chat halaman contact sendiri? 🤔'), 1000)
          setTimeout(() => addBotMessage('Bentar lagi ketipu sendiri loh 🤣'), 2200)
          setTimeout(() => {
            addBotMessage(chatQuestions[step + 1].text)
            setStep(prev => prev + 1)
          }, 3500)
        }, 600)
        return
      }
    }

    if (step < chatQuestions.length - 1) {
      setTimeout(() => {
        setStep(prev => prev + 1)
        addBotMessage(chatQuestions[step + 1].text)
      }, 400)
    } else {
      // Finish
      setTimeout(() => {
        addBotMessage('Terima kasih! Pesan kamu sudah terkirim ✅ Saya akan segera menghubungi kamu kembali.')
      }, 400)
    }
  }

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
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Skills</Link></li>
            <li><Link to="/">Certificates</Link></li>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/">Experience</Link></li>
            <li><Link to="/">Kontak</Link></li>
          </ul>
        </nav>
      </header>

      <div className="contact-page">
        <div className="contact-container">
          <div className="chat-ui">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className={`chat-bubble ${msg.type}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <p>{msg.text}</p>
                  <span className="chat-time">{msg.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="chat-bubble bot typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>

            {step < chatQuestions.length && (
              <form onSubmit={handleSubmit} className="chat-form">
                <input
                  type={chatQuestions[step].id === 'email' ? 'email' : 'text'}
                  placeholder='type here...'
                  value={formData[chatQuestions[step].id]}
                  onChange={(e) => setFormData({ ...formData, [chatQuestions[step].id]: e.target.value })}
                  autoFocus
                  required
                />
                <button type="submit" className="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className='contact-page'>
        <div style={{ marginTop: '12px'}} className='contact-container'>
          <div className="social-links">
            <a href="https://github.com/umarfauzan11" target="_blank" rel="noopener noreferrer" className="social-card github">
              <div className="social-content">
                <div>
                  <h3>@umarfauzan11</h3>
                  <p>Contact me</p>
                </div>
                <i className="fab fa-github"></i>
              </div>
            </a>

            <a href="https://instagram.com/umarfauzan" target="_blank" rel="noopener noreferrer" className="social-card instagram">
              <div className="social-content">
                <div>
                  <h3>@umarfauzan</h3>
                  <p>Contact me</p>
                </div>
                <i className="fab fa-instagram"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact