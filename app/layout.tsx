import type { Metadata, Viewport } from "next"
import { Fraunces, Work_Sans } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Paws & Reigns — Premium Grooming & Care Fit for Royalty",
  description:
    "Premium grooming, spa days and luxury care for the four-legged royalty in your life. Gentle, expert, and tail-waggingly good.",
}

export const viewport: Viewport = {
  themeColor: "#F7F2E9",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} bg-bg`}>
      <body>{children}</body>
    </html>
  )
}
