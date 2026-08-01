import { PawLogo } from "./paw-logo"

export function SiteHeader() {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <PawLogo />
          Paws &amp; Reigns
        </div>
        <nav className="nav-links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#how">How it works</a>
          <a href="#booking">Book</a>
        </nav>
        <a href="#booking" className="btn btn-primary">
          Book a visit
        </a>
      </div>
    </header>
  )
}
