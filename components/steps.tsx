const steps = [
  {
    num: "1",
    title: "Book online",
    desc: "Pick a service and a time that suits you. Tell us about your pet's coat, quirks and comfort needs.",
  },
  {
    num: "2",
    title: "The pampering",
    desc: "Your groomer works at your pet's pace, keeping things calm from first sniff to final fluff.",
  },
  {
    num: "3",
    title: "Home a happy royal",
    desc: "Collect a fresh, feel-good pet plus tips to keep that coat glossy between visits.",
  },
]

export function Steps() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Three easy steps to fresh</h2>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="step">
              <div className="num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
