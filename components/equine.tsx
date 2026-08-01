const helps = [
  "Nervous system regulation",
  "Trauma & rescue recovery",
  "Anxiety & spookiness",
  "Post-injury healing",
  "Pre-competition calm",
  "Grief & herd changes",
]

export function Equine() {
  return (
    <section className="section equine" id="equine">
      <div className="wrap">
        <div className="equine-inner">
          <div className="equine-media">
            <img
              src="/images/equine.png"
              alt="A calm horse standing peacefully with eyes softly closed in golden light"
            />
          </div>

          <div className="equine-content">
            <span className="eyebrow">Equine Therapy</span>
            <h2>
              Deep calm for your <em>horse</em>
            </h2>
            <p className="lead">
              Gentle, non-invasive sound bath and reiki sessions designed to
              settle an overactive nervous system — helping horses release
              stored tension and heal from trauma, anxiety and other ailments.
            </p>

            <div className="equine-offerings">
              <div className="equine-card">
                <div className="equine-icon">
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3v18" />
                    <path d="M7 6v12" />
                    <path d="M17 6v12" />
                    <path d="M3 9v6" />
                    <path d="M21 9v6" />
                  </svg>
                </div>
                <h3>Equine Sound Bath</h3>
                <p>
                  Therapeutic tones and vibration wash over the body, guiding
                  the horse into a deep, restorative state of rest.
                </p>
                <span className="price">from £75</span>
              </div>

              <div className="equine-card">
                <div className="equine-icon">
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-4.5-7-9.5A3.5 3.5 0 0112 8a3.5 3.5 0 017 3.5c0 5-7 9.5-7 9.5z" />
                  </svg>
                </div>
                <h3>Equine Reiki</h3>
                <p>
                  Quiet, hands-on and hands-off energy work that eases fear
                  responses and supports healing from the inside out.
                </p>
                <span className="price">from £70</span>
              </div>
            </div>

            <div className="equine-helps">
              {helps.map((h) => (
                <span key={h}>{h}</span>
              ))}
            </div>

            <a href="#booking" className="btn btn-primary">
              Book an equine session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
