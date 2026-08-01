"use client"

import { useActionState } from "react"
import styles from "@/app/stillhaven/stillhaven.module.css"
import { sendContact, type ContactState } from "@/app/stillhaven/actions"

const initialState: ContactState = { status: "idle", message: "" }

const services = ["Massage", "Reiki", "1:1 Sound Healing", "Breathwork", "Not sure yet"]

export function ShContact() {
  const [state, formAction, pending] = useActionState(sendContact, initialState)

  return (
    <section className={styles.section} id="contact">
      <div className={styles.wrap}>
        <div className={styles.contactGrid}>
          <div className={styles.contactIntro}>
            <span className={styles.eyebrow}>Get in touch</span>
            <h2>Have a question first?</h2>
            <p>
              Tell me which session you&apos;re drawn to and a little about what you&apos;re looking for. I&apos;ll get
              back to you personally, usually within a day.
            </p>
          </div>

          {state.status === "success" ? (
            <div className={styles.contactSuccess} role="status">
              <div className={styles.contactSuccessIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p>{state.message}</p>
            </div>
          ) : (
            <form className={styles.contactForm} action={formAction} noValidate>
              <div className={styles.field}>
                <label htmlFor="service">Which service are you interested in?</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>
                    Choose a service…
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">Contact number</label>
                  <input id="phone" name="phone" type="tel" placeholder="07…" required />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="A little about what you're looking for…"
                  required
                />
              </div>

              {/* honeypot field, hidden from users */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className={styles.honeypot}
              />

              {state.status === "error" && (
                <p className={styles.formError} role="alert">
                  {state.message}
                </p>
              )}

              <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={pending}>
                {pending ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
