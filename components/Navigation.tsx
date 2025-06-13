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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-soft">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-heading font-bold text-2xl">
          <span className="text-neutral-900">Lawson</span>
          <span className="text-primary">Digital</span>
          <span className="text-neutral-900">Group</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          <div className="relative group">
            <Link href="/services" className="flex items-center text-neutral-700 hover:text-primary transition-colors font-medium">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            <div className="absolute left-0 mt-2 w-72 rounded-2xl shadow-strong bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-2" role="menu">
                <Link
                  href="/services/ai-powered-websites"
                  className="block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary rounded-xl transition-colors"
                >
                  Smart Business Websites
                </Link>
                <Link
                  href="/services/ai-chatbots"
                  className="block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary rounded-xl transition-colors"
                >
                  Automation & Lead Follow-Up
                </Link>
                <Link
                  href="/services/seo-marketing"
                  className="block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary rounded-xl transition-colors"
                >
                  Get Found & Grow
                </Link>
                <Link
                  href="/services/custom-development"
                  className="block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary rounded-xl transition-colors"
                >
                  Custom Apps & Tools
                </Link>
                <Link
                  href="/services/digital-setup-tech-support"
                  className="block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary rounded-xl transition-colors"
                >
                  Digital Setup & Tech Support
                </Link>
              </div>
            </div>
          </div>
          
          <Link href="/pricing" className="text-neutral-700 hover:text-primary transition-colors font-medium">
            Pricing
          </Link>
          <Link href="/case-studies" className="text-neutral-700 hover:text-primary transition-colors font-medium">
            Case Studies
          </Link>
          <Link href="/blog" className="text-neutral-700 hover:text-primary transition-colors font-medium">
            Resources
          </Link>
          <Link href="/about" className="text-neutral-700 hover:text-primary transition-colors font-medium">
            About
          </Link>
        </div>
        
        <div className="hidden md:block">
          <Button 
            className="bg-primary hover:bg-primary-dark text-white rounded-2xl px-6 py-2 font-semibold shadow-soft hover:shadow-medium transition-all duration-300" 
            onClick={openLeadForm}
          >
            Get Started
          </Button>
        </div>
        <MobileMenu />
      </div>
    </nav>
  )
}

export default Navigation
</action>