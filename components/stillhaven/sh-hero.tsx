import styles from "@/app/stillhaven/stillhaven.module.css"

export function ShHero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.wrap} ${styles.heroGrid}`}>
        <div>
          <span className={styles.eyebrow}>Massage · Reiki · Sound · Breath</span>
          <h1>
            Space to <em>soften,</em>
            <br />
            and come back to yourself.
          </h1>
          <p className={styles.lead}>
            One-to-one massage, reiki, sound healing and breathwork sessions, held gently and at your pace.
          </p>
          <div className={styles.heroCtas}>
            <a
              href="https://lmfit.as.me/?appointmentType=category:Stillhaven%20Services"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Book a session
            </a>
            <a href="#contact" className={`${styles.btn} ${styles.btnGhost}`}>
              Get in touch
            </a>
          </div>
          <p className={styles.heroNote}>In-studio &amp; mobile sessions available</p>
        </div>
        <div className={styles.breathStage} aria-hidden="true">
          <div className={`${styles.breathRing} ${styles.r1}`} />
          <div className={`${styles.breathRing} ${styles.r2}`} />
          <div className={`${styles.breathRing} ${styles.r3}`} />
          <div className={styles.breathOrb} />
          <span className={styles.breathLabel}>breathe in · breathe out</span>
        </div>
      </div>
    </section>
  )
}
