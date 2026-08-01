import { PawLogo } from "./paw-logo"

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="logo">
          <PawLogo style={{ width: 20, height: 20, stroke: "var(--color-gold)" }} />
          Paws &amp; Reigns
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#how">How it works</a>
          <a href="#booking">Book</a>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} Paws &amp; Reigns</div>
      </div>
    </footer>
  )
}
