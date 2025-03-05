"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "./MobileMenu"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLeadForm } from "@/contexts/LeadFormContext"

const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { openLeadForm } = useLeadForm()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          <span className="text-black">Lawson</span>
          <span className="text-[#CBF36E]">Digital</span>
          <span className="text-black">Group</span>
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <div className="relative group">
            <Link href="/services" className="flex items-center hover:text-[#CBF36E] transition-colors">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link
                  href="/services/ai-powered-websites"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  AI-Powered Websites
                </Link>
                <Link
                  href="/services/ai-chatbots"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  AI Chatbots & Automation
                </Link>
                <Link
                  href="/services/seo-marketing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  SEO & Marketing
                </Link>
                <Link
                  href="/services/custom-development"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Custom Development
                </Link>
              </div>
            </div>
          </div>
          <Link href="/pricing" className="hover:text-[#CBF36E] transition-colors">
            Pricing
          </Link>
          <Link href="/case-studies" className="hover:text-[#CBF36E] transition-colors">
            Case Studies
          </Link>
          <Link href="/blog" className="hover:text-[#CBF36E] transition-colors">
            Blog
          </Link>
          <div className="relative group">
            <span className="flex items-center hover:text-[#CBF36E] transition-colors cursor-pointer">
              Locations <ChevronDown className="ml-1 h-4 w-4" />
            </span>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link
                  href="/collin-rockwall-digital-solutions"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Collin & Rockwall Counties
                </Link>
                {/* Add more locations here as needed */}
              </div>
            </div>
          </div>
          <Link href="/about" className="hover:text-[#CBF36E] transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-[#CBF36E] transition-colors">
            Contact
          </Link>
        </div>
        <div className="hidden md:block">
          <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black" onClick={openLeadForm}>
            Book a Call
          </Button>
        </div>
        <MobileMenu />
      </div>
    </nav>
  )
}

export default Navigation

