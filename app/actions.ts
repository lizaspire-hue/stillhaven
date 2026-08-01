"use server"

import { Resend } from "resend"

const SERVICES = [
  "Full Groom & Style",
  "Signature Spa Day",
  "Bath & Freshen-Up",
  "Mobile Grooming",
  "Equine Sound Bath",
  "Equine Reiki",
  "General enquiry",
]

export type EnquiryState = {
  status: "idle" | "success" | "error"
  message: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function sendEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const name = String(formData.get("name") || "").trim()
  const service = String(formData.get("service") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const phone = String(formData.get("phone") || "").trim()
  const message = String(formData.get("message") || "").trim()
  // honeypot: bots fill hidden fields
  const honeypot = String(formData.get("company") || "").trim()

  if (honeypot) {
    return { status: "success", message: "Thanks — your enquiry has been sent." }
  }

  if (!name) {
    return { status: "error", message: "Please enter your name." }
  }
  if (!service || !SERVICES.includes(service)) {
    return { status: "error", message: "Please choose a service." }
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }
  if (!phone) {
    return { status: "error", message: "Please enter a contact number." }
  }
  if (!message) {
    return { status: "error", message: "Please add a short message." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log("[v0] RESEND_API_KEY is not set")
    return {
      status: "error",
      message: "Sorry, the enquiry could not be sent right now. Please try again later.",
    }
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      // Resend's shared onboarding sender works without domain verification
      from: "Paws & Reigns <onboarding@resend.dev>",
      to: ["lizaspire@gmail.com"],
      replyTo: email,
      subject: `New enquiry — ${service} (${name})`,
      html: `
        <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #2f3a33; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New Paws &amp; Reigns enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #eef2ec; padding: 16px; border-radius: 10px;">${escapeHtml(
            message,
          )}</p>
        </div>
      `,
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return {
        status: "error",
        message: "Sorry, the enquiry could not be sent right now. Please try again later.",
      }
    }

    return { status: "success", message: "Thank you — your enquiry has been sent. We'll be in touch soon." }
  } catch (err) {
    console.log("[v0] sendEnquiry exception:", err)
    return {
      status: "error",
      message: "Sorry, the enquiry could not be sent right now. Please try again later.",
    }
  }
}
