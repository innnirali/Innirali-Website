import type { ReactNode } from 'react'
import './ServiceCard.css'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    subtitle: string
    description: string
    icon: string
    features: string[]
    cta: string
    color: string
    popular?: boolean
    pro?: boolean
    new?: boolean
    cloud?: boolean
  }
}

// Icon mapping component
function ServiceIcon({ icon, color }: { icon: string; color: string }) {
  const iconMap: Record<string, ReactNode> = {
    megaphone: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 11v2a1 1 0 0 0 1 1h2l4 3v-14l-4 3H4a1 1 0 0 0-1 1z"/>
        <path d="M16 13a4 4 0 0 0 0-6"/>
        <path d="M16 19a8 8 0 0 0 0-14"/>
      </svg>
    ),
    code: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16,18 22,12 16,6"/>
        <polyline points="8,6 2,12 8,18"/>
      </svg>
    ),
    brain: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.12 3 3 0 0 1-.34-5.58l2.08-1.64A2.5 2.5 0 0 1 9.5 2Z"/>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.12 3 3 0 0 0 .34-5.58L17.42 2.5A2.5 2.5 0 0 0 14.5 2Z"/>
      </svg>
    ),
    cloud: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.5 19a4.5 4.5 0 0 0 0-9 5.5 5.5 0 0 0-10.8 1.6A3.5 3.5 0 0 0 7 19h10.5z"/>
      </svg>
    ),
    globe: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    smartphone: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="2" width="10" height="20" rx="2"/>
        <path d="M11 18h2"/>
      </svg>
    ),
    chart: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18"/>
        <path d="M18 17V9"/>
        <path d="M13 17V5"/>
        <path d="M8 17v-3"/>
      </svg>
    ),
    shield: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  }

  return (
    <div className="service-card__icon" style={{ backgroundColor: `${color}15`, color }}>
      {iconMap[icon] || iconMap.code}
    </div>
  )
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card" id={service.id}>
      {/* Header */}
      <div className="service-card__header">
        <ServiceIcon icon={service.icon} color={service.color} />
        <div>
          <h3 className="service-card__title">{service.title}</h3>
          <p className="service-card__subtitle">{service.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="service-card__description">{service.description}</p>

      {/* Features */}
      <ul className="service-card__features">
        {service.features.slice(0, 4).map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="service-card__footer">
        <button className="service-card__cta" style={{ backgroundColor: service.color }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
          {service.cta}
        </button>
      </div>
    </article>
  )
}
