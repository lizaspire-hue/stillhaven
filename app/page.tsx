import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { Services } from "@/components/services"
import { Equine } from "@/components/equine"
import { About } from "@/components/about"
import { Steps } from "@/components/steps"
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
        <Steps />
        <Booking />
      </main>
      <SiteFooter />
    </>
  )
}
