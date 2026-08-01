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
            I&apos;ve been a <strong>massage therapist since 2010</strong> and a{" "}
            <strong>yoga teacher since 2019</strong>, having trained in Bali. Over the years I&apos;ve been lucky enough
            to work with elite athletes — including the <strong>All Blacks, Springboks, Leinster</strong> and{" "}
            <strong>Japanese national teams</strong> — when they were in Johannesburg or London for games.
          </p>
          <p>
            My work has taken me trackside at the races, into homes and clinics, and alongside pregnant clients. I&apos;ve
            always worked closely with <strong>physiotherapists</strong>, and in my movement therapy sessions I can guide
            you through <strong>rehab exercises</strong> to support your recovery between treatments.
          </p>
          <p>
            Whatever you&apos;re carrying — tension, stress, injury or simply the need to slow down — my aim is the same:
            to help you feel safe, supported and a little lighter when you leave.
          </p>
          <div className={styles.lizCreds}>
            <span>Massage Therapist · 2010</span>
            <span>Yoga Teacher · Bali, 2019</span>
            <span>Elite &amp; team sports</span>
            <span>Pre-natal &amp; movement therapy</span>
          </div>
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
