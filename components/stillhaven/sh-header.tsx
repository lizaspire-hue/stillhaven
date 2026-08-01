import styles from "@/app/stillhaven/stillhaven.module.css"

export function ShHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.logo}>Stillhaven</div>
        <nav className={styles.navLinks} aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#booking">Book</a>
        </nav>
        <a href="#booking" className={`${styles.btn} ${styles.btnPrimary}`}>
          Book Now
        </a>
      </div>
    </header>
  )
}
