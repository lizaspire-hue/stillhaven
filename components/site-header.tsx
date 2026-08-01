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
          <a href="#equine">Equine</a>
          <a href="#about">About</a>
          <a href="#how">How it works</a>
          <a href="#enquire">Enquire</a>
          <a href="#booking">Book</a>
        </nav>
        <a
          href="https://lmfit.as.me/?appointmentType=category:Paws%26Reigns"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Book a visit
        </a>
      </div>
    </header>
  )
}
