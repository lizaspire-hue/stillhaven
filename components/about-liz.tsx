export function AboutLiz() {
  return (
    <section className="section liz" id="about-liz">
      <div className="wrap liz-inner">
        <div className="liz-media">
          <img
            src="/images/liz.jpg"
            alt="Liz, founder of Paws & Reigns, smiling"
            className="liz-photo"
          />
        </div>
        <div className="liz-body">
          <span className="eyebrow">Meet the founder</span>
          <h2>Hi, I&apos;m Liz.</h2>
          <p>
            I&apos;ve spent my whole life around animals &mdash; owning, loving
            and caring for my own pets, and looking after other people&apos;s
            for as long as I can remember. That lifelong bond is the heart of
            everything Paws &amp; Reigns does.
          </p>
          <p>
            I trained as a{" "}
            <strong>veterinary nursing assistant</strong>, so I understand
            animal health, handling and stress signals from the ground up. In
            2025 I qualified in both{" "}
            <strong>Animal Reiki</strong> and <strong>Equine Reiki</strong>,
            allowing me to bring gentle, energy-based calm to dogs, cats and
            horses alike &mdash; especially those healing from trauma, anxiety
            or injury.
          </p>
          <div className="liz-creds">
            <span>Lifelong pet owner &amp; carer</span>
            <span>Trained veterinary nursing assistant</span>
            <span>Animal Reiki (2025)</span>
            <span>Equine Reiki (2025)</span>
          </div>
          <a
            href="https://lmfit.as.me/?appointmentType=category:Paws%26Reigns"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book with Liz
          </a>
        </div>
      </div>
    </section>
  )
}
