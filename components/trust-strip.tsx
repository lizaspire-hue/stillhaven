const items = [
  "Certified groomers",
  "Cruelty-free products",
  "Calm, low-stress handling",
  "Cats & dogs welcome",
]

export function TrustStrip() {
  return (
    <div className="strip">
      <div className="wrap strip-inner">
        {items.map((item) => (
          <span key={item}>
            <i className="dot" aria-hidden="true" /> {item}
          </span>
        ))}
      </div>
    </div>
  )
}
