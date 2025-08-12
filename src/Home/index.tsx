import './styles.css'
import { Link } from 'react-router-dom'
import Particles from '../components/Particles'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        {/* Hero Section */}
        <section className="hero">
          <Particles className="hero__particles" quantity={80} />
          <div className="container">
            <h1 className="hero__title">
              Empowering Your Business
              <br />
              with Innovative IT Solutions
            </h1>
            <p className="hero__subtitle">
              We provide cutting-edge software services to help your
              business thrive in the digital era.
            </p>
            <div className="hero__cta">
              <Link to="/services" className="btn btn--primary">Our Services</Link>
              <Link to="/#contact" className="btn btn--ghost">Contact Us</Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <div className="container">
            <h2 className="section__title">Our Services</h2>
            <p className="section__subtitle">
              We are committed to delivering high-quality IT solutions
              tailored to meet your business needs.
            </p>

            <div className="services__grid">
              {/* Marketing */}
              <article className="card" id="marketing">
                <span className="card__chip">Popular</span>
                <div className="card__header">
                  <div className="card__icon" aria-hidden>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 11v2a1 1 0 0 0 1 1h2l4 3v-14l-4 3H4a1 1 0 0 0-1 1z"/>
                      <path d="M16 13a4 4 0 0 0 0-6"/>
                      <path d="M16 19a8 8 0 0 0 0-14"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="card__title">Marketing</h3>
                    <p className="card__desc">Performance marketing, content, and campaigns that convert.</p>
                  </div>
                </div>
                <ul className="card__list">
                  <li>SEO and content strategy</li>
                  <li>Paid media and analytics</li>
                  <li>Conversion rate optimization</li>
                </ul>
                <div className="card__footer">
                  <Link to="/services" className="link">Learn more →</Link>
                </div>
              </article>

              {/* Software Consulting */}
              <article className="card" id="consulting">
                <span className="card__chip card__chip--subtle">Pro</span>
                <div className="card__header">
                  <div className="card__icon" aria-hidden>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="12" rx="2"/>
                      <path d="M7 20h10"/>
                      <path d="M12 16v4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="card__title">Software Consulting</h3>
                    <p className="card__desc">Architecture, audits, and roadmaps to accelerate delivery.</p>
                  </div>
                </div>
                <ul className="card__list">
                  <li>Architecture and platform design</li>
                  <li>Code audits and modernization</li>
                  <li>Delivery coaching and governance</li>
                </ul>
                <div className="card__footer">
                  <Link to="/services" className="link">Learn more →</Link>
                </div>
              </article>

              {/* AI Services */}
              <article className="card" id="ai">
                <span className="card__chip">New</span>
                <div className="card__header">
                  <div className="card__icon" aria-hidden>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M5 19l2.5-2.5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="card__title">AI Services</h3>
                    <p className="card__desc">Custom models, copilots, and automation tailored to your data.</p>
                  </div>
                </div>
                <ul className="card__list">
                  <li>Chatbots and copilots</li>
                  <li>RAG and knowledge search</li>
                  <li>Workflow automation</li>
                </ul>
                <div className="card__footer">
                  <Link to="/services" className="link">Learn more →</Link>
                </div>
              </article>

              {/* Cloud Services */}
              <article className="card" id="cloud">
                <span className="card__chip card__chip--subtle">Cloud</span>
                <div className="card__header">
                  <div className="card__icon" aria-hidden>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19a4.5 4.5 0 0 0 0-9 5.5 5.5 0 0 0-10.8 1.6A3.5 3.5 0 0 0 7 19h10.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="card__title">Cloud Services</h3>
                    <p className="card__desc">Secure, scalable infrastructure and DevOps best practices.</p>
                  </div>
                </div>
                <ul className="card__list">
                  <li>Kubernetes and containers</li>
                  <li>Serverless and APIs</li>
                  <li>CI/CD, monitoring, and SRE</li>
                </ul>
                <div className="card__footer">
                  <Link to="/services" className="link">Learn more →</Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="container about__grid">
            <div className="about__illustration" aria-hidden>
              <svg viewBox="0 0 320 220" className="about__svg">
                <defs>
                  <linearGradient id="grad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#5b7cfa" />
                    <stop offset="100%" stopColor="#2a51e8" />
                  </linearGradient>
                </defs>
                <rect x="20" y="120" width="120" height="70" rx="10" fill="url(#grad)"/>
                <circle cx="120" cy="100" r="30" fill="#87a2ff"/>
                <circle cx="120" cy="100" r="16" fill="#fff"/>
                <rect x="170" y="70" width="120" height="90" rx="12" fill="#e9edff"/>
                <rect x="185" y="85" width="90" height="10" rx="5" fill="#b5c3ff"/>
                <rect x="185" y="105" width="70" height="10" rx="5" fill="#c5d0ff"/>
                <rect x="185" y="125" width="60" height="10" rx="5" fill="#d5ddff"/>
              </svg>
            </div>

            <div className="about__content">
              <h2 className="section__title">About Us</h2>
              <p className="section__subtitle">
                We are committed to delivering high‑quality IT solutions tailored to meet your business needs.
              </p>
              <p className="section__subtitle" style={{ marginTop: 8 }}>
                From discovery and strategy through design, engineering, and growth—we partner as an extension of your team to launch reliable products faster.
              </p>
              <p className="section__subtitle" style={{ marginTop: 8 }}>
                Our multi‑disciplinary group brings deep experience across cloud, data, AI, and modern application platforms.
              </p>

              <ul className="checklist">
                <li>
                  <span className="check" aria-hidden>✓</span>
                  <span>Expertise</span>
                </li>
                <li>
                  <span className="check" aria-hidden>✓</span>
                  <span>Innovation</span>
                </li>
                <li>
                  <span className="check" aria-hidden>✓</span>
                  <span>Reliability</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
