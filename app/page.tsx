import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { Services } from "@/components/services"
import { Equine } from "@/components/equine"
import { About } from "@/components/about"
import { AboutLiz } from "@/components/about-liz"
import { Steps } from "@/components/steps"
import { Testimonials } from "@/components/testimonials"
import { Enquiry } from "@/components/enquiry"
import { Booking } from "@/components/booking"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Equine />
        <About />
        <AboutLiz />
        <Steps />
        <Testimonials />
        <Enquiry />
        <Booking />
      </main>
      <SiteFooter />
    </>
  )
}
