import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import servicesData from '../data/services.json'
import './Services.css'

export default function Services() {

  // Show all services
  const services = servicesData.services

  return (
    <>
      <Navbar />
      <main className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <h1 className="services-hero__title">Our Services</h1>
            <p className="services-hero__subtitle">
              Ready to try our comprehensive IT services for yourself? 
              Choose from our curated selection of professional solutions.
            </p>
            
            {/* Service Categories */}
            <div className="service-categories">
              <div className="category-card">
                <div className="category-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4"/>
                    <path d="M14 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                    <path d="M12 8v8"/>
                    <path d="M8 12h8"/>
                  </svg>
                </div>
                <h3>Marketing</h3>
                <p>Digital marketing & growth</p>
              </div>
              
              <div className="category-card">
                <div className="category-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3"/>
                    <path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
                    <path d="M3 16v3a2 2 0 0 0 2 2h3"/>
                    <path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
                  </svg>
                </div>
                <h3>Software Consulting</h3>
                <p>Architecture & development</p>
              </div>
              
              <div className="category-card">
                <div className="category-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"/>
                    <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"/>
                    <path d="M12 3c0 1-1 2-2 2s-2 1-2 2 1 2 2 2 2 1 2 2 1-2 2-2 2-1 2-2-1-2-2-2-2-1-2-2z"/>
                  </svg>
                </div>
                <h3>AI Services</h3>
                <p>Machine learning & automation</p>
              </div>
              
              <div className="category-card">
                <div className="category-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                  </svg>
                </div>
                <h3>Cloud Services</h3>
                <p>Infrastructure & deployment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section">
          <div className="container">
            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
