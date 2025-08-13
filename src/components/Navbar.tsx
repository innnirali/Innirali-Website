import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleAboutClick = () => {
    closeMenus()
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll to about
      navigate('/')
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const aboutSection = document.getElementById('about')
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // If on home page, just scroll to about
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleContactClick = () => {
    closeMenus()
    navigate('/contact')
  }

  const handleMenuToggle = () => {
    console.log('Menu toggle clicked, current state:', isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  function closeMenus() {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__brand" onClick={closeMenus}>
          <span className="navbar__logo">Innirali</span>
          <span className="navbar__tagline">IT Solutions</span>
        </Link>

        <div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          <Link to="/services" className="navbar__link" onClick={closeMenus}>Services</Link>
          <button className="navbar__link" onClick={handleAboutClick}>About</button>
          <button className="navbar__link" onClick={handleContactClick}>Contact</button>
        </div>

        <div className="navbar__actions">
          <Link to="/services" className="btn btn--ghost btn--small" onClick={closeMenus}>Get Started</Link>
          <button 
            className="navbar__toggle"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="primary-menu"
          >
            <span className="navbar__toggle-line"></span>
            <span className="navbar__toggle-line"></span>
            <span className="navbar__toggle-line"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
