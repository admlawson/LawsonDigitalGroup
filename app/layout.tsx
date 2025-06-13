import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { LeadFormProvider } from "@/contexts/LeadFormContext"
import Web3ContactForm from "@/components/Web3ContactForm"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lawson Digital Group | AI-Powered Web, Chatbots & Marketing",
  description:
    "LDG builds high-performance websites, AI-powered tools, and marketing systems that turn your visitors into customers—all optimized for maximum ROI.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LeadFormProvider>
          {children}
          <Web3ContactForm />
        </LeadFormProvider>
        <Script src="https://unpkg.com/@play-ai/agent-web-sdk" strategy="afterInteractive" />
        <Script id="setup-lead-form-and-agent" strategy="afterInteractive">
          {`
            window.openLeadForm = (type = 'strategy', title, subtitle) => {
              if (typeof type === 'object') {
                // Handle legacy calls where first param might be an event
                const event = new Event('openLeadForm');
                window.dispatchEvent(event);
              } else {
                const event = new CustomEvent('openLeadFormWithOptions', {
                  detail: { type, title, subtitle }
                });
                window.dispatchEvent(event);
              }
            };
            
            window.chatWithAgent = () => {
              const event = new Event('chatWithAgent');
              window.dispatchEvent(event);
            };
          `}
        </Script>
      </body>
    </html>
  )
}