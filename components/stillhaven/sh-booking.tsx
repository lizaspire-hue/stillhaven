import styles from "@/app/stillhaven/stillhaven.module.css"

export function ShBooking() {
  return (
    <section className={`${styles.section} ${styles.booking}`} id="booking">
      <div className={styles.wrap}>
        <div className={styles.bookingCard}>
          <span className={styles.eyebrow}>Booking</span>
          <h2>Ready to begin?</h2>
          <p>Choose your session and find a time that works for you. Booking takes less than a minute.</p>
          <a
            href="https://lmfit.as.me/?appointmentType=category:Stillhaven%20Services"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Book a session
          </a>
          <p className={styles.bookingNote}>
            Scheduling powered by Acuity · or <a href="#contact">send a message first</a>
          </p>
        </div>
      </div>
    </section>
  )
}
