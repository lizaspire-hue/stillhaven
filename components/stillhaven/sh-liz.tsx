import Image from "next/image"
import styles from "@/app/stillhaven/stillhaven.module.css"

export function ShLiz() {
  return (
    <section className={`${styles.section} ${styles.liz}`} id="about-liz">
      <div className={`${styles.wrap} ${styles.lizInner}`}>
        <div className={styles.lizMedia}>
          <Image
            src="/images/liz.jpg"
            alt="Liz, founder and practitioner at Stillhaven, smiling"
            width={840}
            height={960}
            className={styles.lizPhoto}
            priority={false}
          />
        </div>
        <div className={styles.lizBody}>
          <span className={styles.eyebrow}>Meet your practitioner</span>
          <h2>Hi, I&apos;m Liz.</h2>
          <p>
            I created Stillhaven as a quiet space to help people reconnect with their bodies and calm an overworked
            nervous system. My work blends hands-on massage, reiki, sound and breath — always one-to-one, always at your
            pace.
          </p>
          <p>
            Whether you&apos;re carrying tension, stress or simply need somewhere to slow down, my aim is the same: to
            help you feel safe, supported and a little lighter when you leave.
          </p>
          <a
            href="https://lmfit.as.me/?appointmentType=category:Stillhaven%20Services"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            Book a session with Liz
          </a>
        </div>
      </div>
    </section>
  )
}
