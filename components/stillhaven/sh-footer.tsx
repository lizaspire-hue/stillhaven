import styles from "@/app/stillhaven/stillhaven.module.css"

export function ShFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrap} ${styles.footerInner}`}>
        <div className={styles.logo}>Stillhaven</div>
        <div className={styles.footerLinks}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#booking">Book</a>
        </div>
        <div className={styles.footerCopy}>© {new Date().getFullYear()} Stillhaven</div>
      </div>
    </footer>
  )
}
