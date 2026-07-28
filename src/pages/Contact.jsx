import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'

function Contact() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [chatDone, setChatDone] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const chatEndRef = useRef(null)
  const hasInitialized = useRef(false)

  const chatQuestions = [
    { id: 'name', text: 'Hai Siapa nama kamu?', placeholder: 'Ketik nama kamu disini...' },
    { id: 'email', text: 'Senang bertemu dengan kamu! Apa email kamu?', placeholder: 'email@example.com' },
    { id: 'message', text: 'Bagus, ada pesan apa yang mau kamu sampaikan?', placeholder: 'Tulis pesan kamu disini...' },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Kirim pesan bot
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

  const openGmail = (name, email, message) => {
    const to = 'usahlanbuiness@gmail.com'
    const subject = encodeURIComponent(`Pesan dari ${name} (${email})`)
    const body = encodeURIComponent(`${message}\n\n---\nDikirim dari portfolio website`)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  // Mulai chat
  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true
      addBotMessage(chatQuestions[0].text)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const currentField = chatQuestions[step].id
    const value = formData[currentField]
    if (!value) return

    // Tambah pesan user
    setMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      text: value,
      time: 'Delivered'
    }])

    setFormData({ ...formData, [currentField]: '' })

    if (currentField === 'name') {
      const inputName = value.toLowerCase().trim()
      const detectNames = ['usahlan', 'umar fauzan', 'umar', 'ufauzan', 'ufauzan11', 'fauzan', 'umar fauzan irvan']

      if (detectNames.includes(inputName)) {
        setTimeout(() => {
          addBotMessage('Wait.. Kamu itu AKU sendiri ya? 😂')
          setTimeout(() => addBotMessage('Jadi ngapain kamu chat halaman contact sendiri?'), 1000)
          setTimeout(() => addBotMessage('Bentar lagi ketipu sendiri loh ya 🤣'), 2200)
          setTimeout(() => {
            setStep(1)
            addBotMessage(chatQuestions[1].text)
          }, 3500)
        }, 600)
        return
      }
    }

    // Lanjut ke pertanyaan berikutnya
    if (step < chatQuestions.length - 1) {
      const nextStep = step + 1
      setTimeout(() => {
        setStep(nextStep)
        addBotMessage(chatQuestions[nextStep].text)
      }, 400)
    } else {
      const allData = { ...formData, [currentField]: value }
      setTimeout(() => {
        addBotMessage('Terima kasih! Pesan kamu sudah terkirim ✅')
        setTimeout(() => {
          addBotMessage('Saya akan buka Gmail kamu sekarang 📧')
          setTimeout(() => {
            openGmail(allData.name, allData.email, allData.message)
            setChatDone(true)
          }, 1500)
        }, 1000)
      }, 400)
    }
  }

  return (
    <>
      <Navbar
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="contact-page">
        <div className="contact-container">
          <div className="chat-ui">
            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-bubble ${msg.type}`}>
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
              <div ref={chatEndRef} />
            </div>

            {step < chatQuestions.length && !chatDone && (
              <form onSubmit={handleSubmit} className="chat-form">
                <input
                  type={chatQuestions[step].id === 'email' ? 'email' : 'text'}
                  placeholder={chatQuestions[step].placeholder}
                  value={formData[chatQuestions[step].id]}
                  onChange={(e) => setFormData({ ...formData, [chatQuestions[step].id]: e.target.value })}
                  autoFocus
                  required
                />
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </a>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className='contact-page'>
        <div style={{ marginTop: '12px' }} className='contact-container'>
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
            <a href="https://www.instagram.com/umar_fauzan_irvan/" target="_blank" rel="noopener noreferrer" className="social-card instagram">
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
      <div className='contact-page'>
        <div style={{ marginTop: '12px' }} className='contact-container'>
          <div className="social-links1">
            <a href="https://youtube.com/@UFauzan" target="_blank" rel="noopener noreferrer" className="social-cards youtube">
              <div className="social-content">
                <div>
                  <h3>UFauzan</h3>
                  <p>Contact me</p>
                </div>
                <i className="fab fa-youtube"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
