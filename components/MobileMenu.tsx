"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ArrowRight, Home, Briefcase, DollarSign, FileText, Users, Info } from "lucide-react"
import { useLeadForm } from "@/contexts/LeadFormContext"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { openLeadForm } = useLeadForm()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setIsServicesOpen(false)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const mainNavItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/pricing", label: "Pricing", icon: DollarSign },
    { href: "/case-studies", label: "Case Studies", icon: FileText },
    { href: "/blog", label: "Resources", icon: Users },
    { href: "/about", label: "About", icon: Info },
  ]

  const serviceItems = [
    { href: "/services/ai-powered-websites", label: "Smart Websites" },
    { href: "/services/ai-chatbots", label: "AI Automation" },
    { href: "/services/seo-marketing", label: "SEO & Growth" },
    { href: "/services/custom-development", label: "Custom Apps" },
    { href: "/services/digital-setup-tech-support", label: "Tech Support" },
  ]

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <Button 
        variant="ghost" 
        size="icon"
        onClick={toggleMenu}
        className="relative z-50 text-neutral-700 hover:text-primary hover:bg-primary/10 transition-all duration-200"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="relative w-6 h-6">
          <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`} />
          <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`} />
        </div>
      </Button>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Slide-out Menu Panel */}
      <div className={`
        fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50
        transform transition-transform duration-500 ease-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Menu Header */}
        <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 p-6 border-b border-neutral-100">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-neutral-900">
              <span className="text-neutral-900">Lawson</span>
              <span className="text-primary">Digital</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={closeMenu}
              className="text-neutral-500 hover:text-neutral-700 hover:bg-white/50 rounded-full transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-neutral-600 mt-2">Smart solutions for growing businesses</p>
        </div>

        {/* Navigation Content */}
        <div className="flex flex-col h-[calc(100%-140px)] overflow-y-auto">
          <nav className="flex-1 py-6">
            
            {/* Main Navigation Items */}
            <div className="px-6 space-y-1">
              {mainNavItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors duration-200" />
                    <span className="font-medium">{item.label}</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                )
              })}
            </div>

            {/* Services Section */}
            <div className="px-6 mt-6">
              <div className="border-t border-neutral-100 pt-6">
                <button
                  onClick={toggleServices}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 group w-full"
                >
                  <Briefcase className="w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors duration-200" />
                  <span className="font-medium">Services</span>
                  <ChevronDown className={`w-4 h-4 ml-auto transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Services Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="mt-2 ml-8 space-y-1">
                    {serviceItems.map((service, index) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMenu}
                        className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                        style={{ animationDelay: `${(index + 1) * 30}ms` }}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Call to Action */}
          <div className="px-6 py-6 border-t border-neutral-100 bg-gradient-to-r from-neutral-50 to-primary/5">
            <div className="text-center mb-4">
              <h3 className="font-bold text-neutral-900 mb-1">Ready to grow?</h3>
              <p className="text-sm text-neutral-600">Get your free strategy call today</p>
            </div>
            
            <Button 
              onClick={() => {
                closeMenu()
                openLeadForm()
              }}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                No commitment
              </span>
              <span className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                Free consultation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu