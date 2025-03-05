"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useLeadForm } from "@/contexts/LeadFormContext"

const Footer = () => {
  const router = useRouter()
  const { openLeadForm } = useLeadForm()

  const handleClick = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-xl mb-4">
              <span className="text-white">Lawson</span>
              <span className="text-[#CBF36E]">Digital</span>
              <span className="text-white">Group</span>
            </div>
            <p className="text-gray-400">AI-Powered Web, Chatbots & Marketing to Scale Your Business.</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" onClick={() => handleClick("/services")}>
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => handleClick("/services")}>
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => handleClick("/services")}>
                  SEO & Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => handleClick("/services")}>
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" onClick={() => handleClick("/about")}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" onClick={() => handleClick("/case-studies")}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => handleClick("/blog")}>
                  Blog
                </Link>
              </li>
              <li>
                <button onClick={openLeadForm} className="text-gray-400 hover:text-white">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={openLeadForm} className="text-gray-400 hover:text-white">
                  Free AI Audit
                </button>
              </li>
              <li>
                <Link href="/pricing" onClick={() => handleClick("/pricing")}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => handleClick("/blog")}>
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" onClick={() => handleClick("/privacy-policy")}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/collin-rockwall-digital-solutions"
                  onClick={() => handleClick("/collin-rockwall-digital-solutions")}
                >
                  Collin & Rockwall Counties
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Lawson Digital Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

