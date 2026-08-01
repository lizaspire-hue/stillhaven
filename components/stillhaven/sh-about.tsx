import styles from "@/app/stillhaven/stillhaven.module.css"

export function ShAbout() {
  return (
    <section className={`${styles.section} ${styles.about}`} id="about">
      <div className={`${styles.wrap} ${styles.aboutInner}`}>
        <svg
          className={styles.wave}
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M40 150C40 90 100 90 100 150C100 210 160 210 160 150C160 90 220 90 220 150C220 210 280 210 280 150C280 90 340 90 340 150"
            stroke="#C99AA6"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M40 170C40 130 100 130 100 170C100 210 160 210 160 170C160 130 220 130 220 170C220 210 280 210 280 170C280 130 340 130 340 170"
            stroke="#8FB4C4"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <circle cx="70" cy="60" r="4" fill="#F5DEE3" />
          <circle cx="330" cy="230" r="5" fill="#DCE9EE" />
        </svg>
        <div>
          <span className={styles.eyebrow}>About</span>
          <h2>Slower, on purpose.</h2>
          <p>
            Every session is unhurried and one-to-one, so there&apos;s room to actually settle. Whether you&apos;re here
            for touch, energy work, sound or breath, the aim is the same: to leave a little lighter than you arrived.
          </p>
          <div className={styles.aboutStats}>
            <div>
              <strong>1:1</strong>
              <span>always private sessions</span>
            </div>
            <div>
              <strong>4</strong>
              <span>modalities offered</span>
            </div>
            <div>
              <strong>60&prime;</strong>
              <span>average session</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
