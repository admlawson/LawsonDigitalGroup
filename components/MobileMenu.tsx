"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLeadForm } from "@/contexts/LeadFormContext"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { openLeadForm } = useLeadForm()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setIsServicesOpen(false) // Close services submenu when main menu toggles
  }

  const closeMenu = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  return (
    <div className="md:hidden">
      {/* Menu Toggle Button */}
      <Button 
        variant="ghost" 
        size="icon"
        onClick={toggleMenu}
        className="relative z-50 text-neutral-700 hover:text-primary hover:bg-primary/10 p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`
        fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <div className="font-heading font-bold text-xl">
              <span className="text-neutral-900">Lawson</span>
              <span className="text-primary">Digital</span>
              <span className="text-neutral-900">Group</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={closeMenu}
              className="text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="space-y-2 px-6">
              <Link 
                href="/" 
                className="block py-3 text-lg font-medium text-neutral-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full py-3 text-lg font-medium text-neutral-700 hover:text-primary transition-colors"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 border-l-2 border-primary/20 ml-2">
                    <Link
                      href="/services/ai-powered-websites"
                      className="block py-2 text-neutral-600 hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      Smart Business Websites
                    </Link>
                    <Link
                      href="/services/ai-chatbots"
                      className="block py-2 text-neutral-600 hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      Automation & Lead Follow-Up
                    </Link>
                    <Link
                      href="/services/seo-marketing"
                      className="block py-2 text-neutral-600 hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      Get Found & Grow
                    </Link>
                    <Link
                      href="/services/custom-development"
                      className="block py-2 text-neutral-600 hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      Custom Apps & Tools
                    </Link>
                    <Link
                      href="/services/digital-setup-tech-support"
                      className="block py-2 text-neutral-600 hover:text-primary transition-colors"
                      onClick={closeMenu}
                    >
                      Digital Setup & Tech Support
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/pricing" 
                className="block py-3 text-lg font-medium text-neutral-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              
              <Link 
                href="/case-studies" 
                className="block py-3 text-lg font-medium text-neutral-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Case Studies
              </Link>
              
              <Link 
                href="/blog" 
                className="block py-3 text-lg font-medium text-neutral-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Resources
              </Link>
              
              <Link 
                href="/about" 
                className="block py-3 text-lg font-medium text-neutral-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
            </div>
          </nav>

          {/* CTA Section */}
          <div className="p-6 border-t border-neutral-200 bg-gradient-to-r from-primary/5 to-accent/5">
            <Button 
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-2xl font-semibold shadow-soft hover:shadow-medium transition-all duration-300"
              onClick={() => {
                closeMenu()
                openLeadForm()
              }}
            >
              Get Started
            </Button>
            
            <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 mt-4">
              <span>✓ Free consultation</span>
              <span>✓ No commitment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
</action>