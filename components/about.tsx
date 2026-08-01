export function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-inner">
        <div className="about-media">
          <img
            src="/images/about.png"
            alt="A small dog wearing a tiny golden crown on a velvet cushion"
          />
        </div>
        <div>
          <span className="eyebrow">About</span>
          <h2>Kind hands, calm hearts.</h2>
          <p>
            Paws &amp; Reigns started with a simple belief: grooming should
            never be scary. We keep sessions unhurried and one-to-one, use
            gentle cruelty-free products, and read every pet&apos;s cues so they
            leave relaxed, fresh and proud of their new &apos;do.
          </p>
          <div className="about-stats">
            <div>
              <strong>10+</strong>
              <span>years of grooming</span>
            </div>
            <div>
              <strong>2k+</strong>
              <span>happy pets styled</span>
            </div>
            <div>
              <strong>1:1</strong>
              <span>always calm sessions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
