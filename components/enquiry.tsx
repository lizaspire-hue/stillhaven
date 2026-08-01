"use client"

import { useActionState } from "react"
import { sendEnquiry, type EnquiryState } from "@/app/actions"

const initialState: EnquiryState = { status: "idle", message: "" }

const services = [
  "Full Groom & Style",
  "Signature Spa Day",
  "Bath & Freshen-Up",
  "Mobile Grooming",
  "Equine Sound Bath",
  "Equine Reiki",
  "General enquiry",
]

export function Enquiry() {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState)

  return (
    <section className="section" id="enquire">
      <div className="wrap">
        <div className="enquiry-grid">
          <div className="enquiry-intro">
            <span className="eyebrow">Enquiries</span>
            <h2>Have a question first?</h2>
            <p>
              Tell us about your pet and the service you have in mind, and
              we&apos;ll get back to you personally — usually within a day.
            </p>
          </div>

          {state.status === "success" ? (
            <div className="enquiry-success" role="status">
              <div className="enquiry-success-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p>{state.message}</p>
            </div>
          ) : (
            <form className="enquiry-form" action={formAction} noValidate>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" placeholder="Jane Doe" required />
              </div>

              <div className="field">
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

              <div className="field-row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Contact number</label>
                  <input id="phone" name="phone" type="tel" placeholder="07…" required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your pet and what you're looking for…"
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
                className="honeypot"
              />

              {state.status === "error" && (
                <p className="form-error" role="alert">
                  {state.message}
                </p>
              )}

              <button type="submit" className="btn btn-primary" disabled={pending}>
                {pending ? "Sending…" : "Send enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
