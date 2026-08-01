import type { Metadata } from "next"
import styles from "./stillhaven.module.css"
import { ShHeader } from "@/components/stillhaven/sh-header"
import { ShHero } from "@/components/stillhaven/sh-hero"
import { ShServices } from "@/components/stillhaven/sh-services"
import { ShAbout } from "@/components/stillhaven/sh-about"
import { ShContact } from "@/components/stillhaven/sh-contact"
import { ShBooking } from "@/components/stillhaven/sh-booking"
import { ShLiz } from "@/components/stillhaven/sh-liz"
import { ShFooter } from "@/components/stillhaven/sh-footer"

export const metadata: Metadata = {
  title: "Stillhaven — Massage, Reiki, Sound Healing & Breathwork",
  description:
    "1:1 massage, reiki, sound healing and breathwork sessions. A quiet space to soften, reset and reconnect.",
}

export default function StillhavenPage() {
  return (
    <div className={styles.page}>
      <ShHeader />
      <main>
        <ShHero />
        <ShServices />
        <ShAbout />
        <ShContact />
        <ShBooking />
        <ShLiz />
      </main>
      <ShFooter />
    </div>
  )
}
