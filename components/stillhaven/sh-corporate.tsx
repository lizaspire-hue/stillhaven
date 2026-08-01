import styles from "@/app/stillhaven/stillhaven.module.css"

const offerings = [
  {
    title: "Posture Workshops",
    copy: "Practical, hands-on sessions helping teams sit, stand and move well through the working day.",
    icon: (
      <>
        <path d="M12 4a2 2 0 100-.01" />
        <path d="M12 7v7" />
        <path d="M8 21l4-7 4 7" />
        <path d="M7 10h10" />
      </>
    ),
  },
  {
    title: "On-site Massage",
    copy: "Chair or table massage brought to your workplace to ease tension and reset busy minds.",
    icon: (
      <>
        <path d="M4 14c0-4 3-7 8-7s8 3 8 7" />
        <path d="M4 14a8 8 0 0016 0" />
      </>
    ),
  },
  {
    title: "Calming Nature Walks",
    copy: "Guided, gentle walks outdoors — a screen-free reset that steadies the nervous system.",
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M12 8c-3 0-5-2-5-2s0 4 5 4" />
        <path d="M12 12c3 0 5-2 5-2s0 4-5 4" />
      </>
    ),
  },
  {
    title: "Team Building",
    copy: "Shared breath, movement and sound experiences that leave teams calmer and more connected.",
    icon: (
      <>
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M4 19c0-2.5 2-4 4-4s4 1.5 4 4" />
        <path d="M12 19c0-2.5 2-4 4-4s4 1.5 4 4" />
      </>
    ),
  },
]

export function ShCorporate() {
  return (
    <section className={`${styles.section} ${styles.corporate}`} id="corporate">
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Corporate wellbeing</span>
          <h2>Calm that comes to your workplace</h2>
          <p>
            I work with teams and organisations to bring calm into the working day — from posture and movement to
            hands-on massage and time spent outdoors together.
          </p>
        </div>

        <div className={styles.corporateGrid}>
          {offerings.map((o) => (
            <div key={o.title} className={styles.corporateCard}>
              <div className={styles.serviceIcon}>
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {o.icon}
                </svg>
              </div>
              <h3>{o.title}</h3>
              <p>{o.copy}</p>
            </div>
          ))}
        </div>

        <div className={styles.corporateCta}>
          <p>Bringing wellbeing to your team? Let&apos;s design something together.</p>
          <a href="#contact" className={`${styles.btn} ${styles.btnGhost}`}>
            Enquire about corporate sessions
          </a>
        </div>
      </div>
    </section>
  )
}
