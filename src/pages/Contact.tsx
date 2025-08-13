import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  return (
    <>
      <Navbar />
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <h1 className="contact-hero__title">Get In Touch</h1>
            <p className="contact-hero__subtitle">
              Ready to start your next project? Let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Form */}
              <div className="contact-form-section">
                <h2 className="section-title">Send us a message</h2>
                <p className="section-subtitle">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows={6}
                      required
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="success-message">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="contact-info-section">
                <h2 className="section-title">Contact Information</h2>
                <p className="section-subtitle">
                  Get in touch with us through any of these channels.
                </p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-method__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div className="contact-method__content">
                      <h3>Email</h3>
                      <a href="mailto:inniralitechnologies@gmail.com" className="contact-link">inniralitechnologies@gmail.com</a>
                      <p>We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-method__icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div className="contact-method__content">
                      <h3>Phone</h3>
                      <span className="contact-link">Coming Soon</span>
                      <p>Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>

                <div className="contact-cta">
                  <h3>Ready to get started?</h3>
                  <p>Schedule a free consultation call to discuss your project requirements.</p>
                  <button 
                    className="cta-btn"
                    onClick={() => window.location.href = 'mailto:inniralitechnologies@gmail.com?subject=Schedule Consultation Call&body=Hi, I would like to schedule a consultation call to discuss my project. Please let me know your available times.'}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
