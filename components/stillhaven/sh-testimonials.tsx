import styles from "@/app/stillhaven/stillhaven.module.css"

const testimonials = [
  {
    quote:
      "Liz has the most intuitive hands. I came in with months of built-up tension and left feeling like I could finally breathe again. Genuinely the most calming hour of my month.",
    name: "Sarah M.",
    role: "Massage client",
  },
  {
    quote:
      "We booked Liz for a team wellbeing day — posture workshop, on-site massage and a walk outdoors. The whole team came back lighter and more connected. We've already rebooked.",
    name: "James T.",
    role: "People & Culture Lead",
  },
  {
    quote:
      "The 1:1 sound healing was unlike anything I've tried. Liz held such a safe, gentle space. My nervous system properly switched off for the first time in years.",
    name: "Priya K.",
    role: "Sound healing client",
  },
]

export function ShTestimonials() {
  return (
    <section className={`${styles.section} ${styles.testimonials}`} id="testimonials">
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Kind words</span>
          <h2>What people say</h2>
          <p>A few words from clients and teams I&apos;ve had the privilege of working with.</p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t) => (
            <figure key={t.name} className={styles.testimonialCard}>
              <div className={styles.stars} aria-label="5 out of 5 stars">
                {"\u2605\u2605\u2605\u2605\u2605"}
              </div>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
