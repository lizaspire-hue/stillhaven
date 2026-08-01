type Service = {
  title: string
  desc: string
  price: string
  tint: "tint-sage" | "tint-gold"
  icon: React.ReactNode
}

const services: Service[] = [
  {
    title: "Full Groom & Style",
    desc: "Bath, blow-dry, breed-specific trim and a finishing style that keeps your pet looking (and feeling) their best.",
    price: "from £65",
    tint: "tint-sage",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 18c0-3 3.5-5 8-5s8 2 8 5" />
        <circle cx="8" cy="9" r="1.4" />
        <circle cx="12" cy="7" r="1.4" />
        <circle cx="16" cy="9" r="1.4" />
      </svg>
    ),
  },
  {
    title: "Signature Spa Day",
    desc: "The full pampering: soothing hydro-bath, coat mask, nail care, paw balm and a gentle de-shed treatment.",
    price: "from £95",
    tint: "tint-gold",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l2.5 5 5.5.5-4 3.8 1.2 5.5L12 20l-5.2 2.8L8 17.3 4 13.5l5.5-.5z" />
      </svg>
    ),
  },
  {
    title: "Bath & Freshen-Up",
    desc: "A quick, calming clean-up between full grooms — wash, dry, brush-out and a light tidy of face and paws.",
    price: "from £40",
    tint: "tint-gold",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12c3-6 15-6 18 0-3 6-15 6-18 0z" />
        <circle cx="12" cy="12" r="2.4" />
      </svg>
    ),
  },
  {
    title: "Mobile Grooming",
    desc: "We come to you. A fully equipped, low-stress grooming visit right outside your door for nervous or busy pets.",
    price: "from £110",
    tint: "tint-sage",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="7" width="16" height="12" rx="3" />
        <path d="M8 7V5a4 4 0 018 0v2" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Services</span>
          <h2>The royal treatment, tailored</h2>
          <p>
            Every appointment is one-to-one and shaped around your pet&apos;s
            coat, temperament and comfort — no rushed conveyor belts here.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className={`service-card ${s.tint}`}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="price">{s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
