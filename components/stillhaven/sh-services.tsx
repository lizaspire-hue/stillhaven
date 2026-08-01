import styles from "@/app/stillhaven/stillhaven.module.css"

const services = [
  {
    tint: styles.tintPink,
    title: "Massage",
    copy: "Therapeutic, slow-paced bodywork to release tension, ease tight muscles and quiet an overactive mind.",
    duration: "60 / 90 min",
    icon: (
      <>
        <path d="M4 14c0-4 3-7 8-7s8 3 8 7" />
        <path d="M4 14a8 8 0 0016 0" />
        <path d="M9 7c0-2 1.5-3 3-3s3 1 3 3" />
      </>
    ),
  },
  {
    tint: styles.tintBlue,
    title: "Reiki",
    copy: "A gentle, hands-on energy healing session to help restore balance and support your body's own capacity to rest.",
    duration: "45 / 60 min",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="8" opacity="0.55" />
      </>
    ),
  },
  {
    tint: styles.tintBlue,
    title: "1:1 Sound Healing",
    copy: "A private sound bath using singing bowls and tuning forks, shaped around what you're carrying that week.",
    duration: "50 min",
    icon: <path d="M3 12h3l2-7 4 14 3-10 2 3h4" />,
  },
  {
    tint: styles.tintPink,
    title: "Breathwork",
    copy: "Guided breathing sessions to release stored stress, steady the nervous system and bring clarity.",
    duration: "45 min",
    icon: (
      <>
        <path d="M12 3v6" />
        <circle cx="12" cy="15" r="6" />
      </>
    ),
  },
]

export function ShServices() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Services</span>
          <h2>Four ways to unwind</h2>
          <p>Every session is one-to-one and tailored to what your body and mind need that day.</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((s) => (
            <div key={s.title} className={`${styles.serviceCard} ${s.tint}`}>
              <div className={styles.serviceIcon}>
                <svg
                  viewBox="0 0 24 24"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
              <span className={styles.duration}>{s.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
