export function Booking() {
  return (
    <section className="section booking" id="booking">
      <div className="wrap">
        <div className="booking-card">
          <span className="eyebrow">Booking</span>
          <h2>
            Ready for the <em>royal</em> treatment?
          </h2>
          <p>
            Choose a service, pick your time, and we&apos;ll take care of the
            rest. Booking takes less than a minute.
          </p>
          <a
            href="https://lmfit.as.me/?appointmentType=category:Paws%26Reigns"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book a visit
          </a>
          <p className="booking-note">
            Online scheduling · or <a href="#enquire">send an enquiry first</a>
          </p>
        </div>
      </div>
    </section>
  )
}
