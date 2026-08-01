export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Grooming · Spa · Luxury Care</span>
          <h1>
            Treat your pet like the <em>royalty</em> they already are.
          </h1>
          <p className="lead">
            Gentle, expert grooming and spa days for cats and dogs — because
            every good boy and every regal queen deserves the royal treatment.
          </p>
          <div className="hero-ctas">
            <a href="#booking" className="btn btn-primary">
              Book a visit
            </a>
            <a href="#services" className="btn btn-ghost">
              See services
            </a>
          </div>
          <p className="hero-note">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            In-salon &amp; mobile grooming available
          </p>
        </div>
        <div className="hero-media">
          <img
            src="/images/hero-dog.png"
            alt="A beautifully groomed golden retriever sitting proudly"
          />
          <div className="hero-badge">
            <div>
              <strong>4.9</strong>
              <span className="stars">★★★★★</span>
            </div>
            <div>
              <span>
                Loved by 2,000+
                <br />
                happy pets
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
