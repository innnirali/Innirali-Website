import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import servicesData from '../data/services.json'
import './Services.css'

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter services based on search and category
  const filteredServices = servicesData.services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           (selectedCategory === 'popular' && service.popular) ||
                           (selectedCategory === 'pro' && service.pro) ||
                           (selectedCategory === 'new' && service.new) ||
                           (selectedCategory === 'cloud' && service.cloud)
    
    return matchesSearch && matchesCategory
  })

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
            
            {/* Search and Filter */}
            <div className="services-controls">
              <div className="search-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              
              <div className="category-filters">
                <button
                  className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All Services
                </button>
                <button
                  className={`filter-btn ${selectedCategory === 'popular' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('popular')}
                >
                  Popular
                </button>
                <button
                  className={`filter-btn ${selectedCategory === 'pro' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('pro')}
                >
                  Pro
                </button>
                <button
                  className={`filter-btn ${selectedCategory === 'new' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('new')}
                >
                  New
                </button>
                <button
                  className={`filter-btn ${selectedCategory === 'cloud' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('cloud')}
                >
                  Cloud
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section">
          <div className="container">
            <div className="services-grid">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="no-results">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <h3>No services found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
