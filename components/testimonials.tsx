const testimonials = [
  {
    quote:
      "Liz is wonderful with our nervous rescue collie. He usually hates being handled, but he was calm and happy the whole session. We've never seen him so relaxed afterwards.",
    name: "Sophie & Barley",
    detail: "Dog grooming & reiki",
  },
  {
    quote:
      "Our mare had been anxious since an injury last year. After a few equine reiki sessions with Liz she's noticeably softer and more settled in herself. Truly gentle, patient work.",
    name: "Hannah",
    detail: "Equine reiki",
  },
  {
    quote:
      "You can tell Liz genuinely loves animals. Her veterinary background really shows — she spotted a skin issue our vet later confirmed. Caring, professional and so kind.",
    name: "Mark & Luna",
    detail: "Cat grooming",
  },
]

export function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Kind words</span>
          <h2>Loved by pets &amp; their people.</h2>
          <p>
            A few words from the owners and animals who&apos;ve trusted Liz with
            their care.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <div className="stars" aria-hidden="true">
                {"\u2605\u2605\u2605\u2605\u2605"}
              </div>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
