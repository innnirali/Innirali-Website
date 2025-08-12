import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

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
    setIsServicesOpen(false)
  }, [location.pathname])

  function closeMenus() {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__brand" onClick={closeMenus}>
          <span className="navbar__logo">Innirali</span>
          <span className="navbar__tagline">IT Solutions</span>
        </Link>

        <div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          <div
            className={`navbar__dropdown ${isServicesOpen ? 'is-open' : ''}`}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="navbar__link navbar__link--button"
              aria-haspopup="menu"
              aria-expanded={isServicesOpen}
              onClick={() => setIsServicesOpen((v) => !v)}
            >
              Services
              <span className="chevron" aria-hidden>▾</span>
            </button>
            <div className="navbar__dropdown-menu" role="menu">
              <Link to="/services#marketing" role="menuitem" onClick={closeMenus}>Marketing</Link>
              <Link to="/services#consulting" role="menuitem" onClick={closeMenus}>Software Consulting</Link>
              <Link to="/services#ai" role="menuitem" onClick={closeMenus}>AI Services</Link>
              <Link to="/services#cloud" role="menuitem" onClick={closeMenus}>Cloud Services</Link>
            </div>
          </div>
          <Link to="/#about" className="navbar__link" onClick={closeMenus}>About</Link>
          <Link to="/#contact" className="navbar__link" onClick={closeMenus}>Contact</Link>
          <Link to="/#blog" className="navbar__link" onClick={closeMenus}>Blog</Link>
        </div>

        <div className="navbar__actions">
          <Link to="/services" className="btn btn--ghost btn--small" onClick={closeMenus}>Get Started</Link>
          <button 
            className="navbar__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
