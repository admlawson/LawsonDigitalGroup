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
        className="relative z-50 text-neutral-900 hover:text-primary hover:bg-primary/10 p-2 h-10 w-10"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm" 
          onClick={closeMenu} 
        />
      )}

      {/* Mobile Menu Panel - Now Much More Expansive */}
      <div className={`
        fixed top-0 right-0 h-full w-full sm:w-[90vw] lg:w-[60vw] bg-white shadow-2xl transform transition-all duration-500 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header - More Spacious */}
          <div className="flex items-center justify-between p-8 sm:p-10 border-b border-neutral-200 bg-gradient-to-r from-white to-neutral-50">
            <div className="font-heading font-bold text-2xl sm:text-3xl text-neutral-900">
              <span className="text-neutral-900">Lawson</span>
              <span className="text-primary">Digital</span>
              <span className="text-neutral-900">Group</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={closeMenu}
              className="text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-full h-10 w-10 sm:h-12 sm:w-12"
            >
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            </Button>
          </div>

          {/* Navigation Links - Much More Spacious */}
          <nav className="flex-1 overflow-y-auto py-8 sm:py-12 bg-white">
            <div className="space-y-2 px-8 sm:px-12">
              <Link 
                href="/" 
                className="block py-4 sm:py-6 text-xl sm:text-2xl font-medium text-neutral-900 hover:text-primary transition-all duration-300 border-b border-neutral-100 hover:border-primary/30 hover:bg-primary/5 rounded-lg px-4"
                onClick={closeMenu}
              >
                Home
              </Link>

              {/* Services Dropdown - More Expansive */}
              <div className="border-b border-neutral-100">
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full py-4 sm:py-6 text-xl sm:text-2xl font-medium text-neutral-900 hover:text-primary transition-all duration-300 hover:bg-primary/5 rounded-lg px-4"
                >
                  Services
                  <ChevronDown className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 sm:pl-8 space-y-3 mt-4 mb-6 border-l-4 border-primary/30 ml-4">
                    <Link
                      href="/services/ai-powered-websites"
                      className="block py-3 sm:py-4 text-lg sm:text-xl text-neutral-700 hover:text-primary transition-all duration-300 hover:bg-primary/5 rounded-lg px-4"
                      onClick={closeMenu}
                    >
                      Smart Business Websites
                    </Link>
                    <Link
                      href="/services/ai-chatbots"
                      className="block py-3 sm:py-4 text-lg sm:text-xl text-neutral-700 hover:text-primary transition-all duration-300 hover:bg-primary/5 rounded-lg px-4"
                      onClick={closeMenu}
                    >
                      Automation & Lead Follow-Up
                    </Link>
                    <Link
                      href="/services/seo-marketing"
                      className="block py-3 sm:py-4 text-lg sm:text-xl text-neutral-700 hover:text-primary transition-all duration-300 hover:bg-primary/5 rounded-lg px-4"
                      onClick={closeMenu}
                    >
                      Get Found & Grow
                    </Link>
                    <Link
                      href="/services/custom-development"
                      className="block py-3 sm:py-4 text-lg sm:text-xl text-neutral-700 hover:text-primary transition-all duration-300 hover:bg-primary/5 rounded-lg px-4"
                      onClick={closeMenu}
                    >
                      Custom Apps & Tools
                    </Link>
                    <Link
                      href="/services/digital-setup-tech-support"
                      className="block py-3 sm:py-4 text-lg sm:text-xl text-neutral-700 hover:text-primary transition-all duration-300 hover:bg-primary/5 rounded-lg px-4"
                      onClick={closeMenu}
                    >
                      Digital Setup & Tech Support
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/pricing" 
                className="block py-4 sm:py-6 text-xl sm:text-2xl font-medium text-neutral-900 hover:text-primary transition-all duration-300 border-b border-neutral-100 hover:border-primary/30 hover:bg-primary/5 rounded-lg px-4"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              
              <Link 
                href="/case-studies" 
                className="block py-4 sm:py-6 text-xl sm:text-2xl font-medium text-neutral-900 hover:text-primary transition-all duration-300 border-b border-neutral-100 hover:border-primary/30 hover:bg-primary/5 rounded-lg px-4"
                onClick={closeMenu}
              >
                Case Studies
              </Link>
              
              <Link 
                href="/blog" 
                className="block py-4 sm:py-6 text-xl sm:text-2xl font-medium text-neutral-900 hover:text-primary transition-all duration-300 border-b border-neutral-100 hover:border-primary/30 hover:bg-primary/5 rounded-lg px-4"
                onClick={closeMenu}
              >
                Resources
              </Link>
              
              <Link 
                href="/about" 
                className="block py-4 sm:py-6 text-xl sm:text-2xl font-medium text-neutral-900 hover:text-primary transition-all duration-300 border-b border-neutral-100 hover:border-primary/30 hover:bg-primary/5 rounded-lg px-4"
                onClick={closeMenu}
              >
                About
              </Link>
            </div>
          </nav>

          {/* CTA Section - More Expansive */}
          <div className="p-8 sm:p-12 border-t border-neutral-200 bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">Ready to Get Started?</h3>
              <p className="text-neutral-600 text-base sm:text-lg">Let's build something amazing together.</p>
            </div>
            
            <Button 
              className="w-full bg-primary hover:bg-primary-dark text-white py-4 sm:py-5 px-6 rounded-2xl font-semibold text-lg sm:text-xl shadow-soft hover:shadow-medium transition-all duration-300"
              onClick={() => {
                closeMenu()
                openLeadForm()
              }}
            >
              Get Started Today
            </Button>
            
            <div className="flex items-center justify-center gap-6 text-sm sm:text-base text-neutral-500 mt-6">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Free consultation
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                No commitment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu