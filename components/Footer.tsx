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
    <footer className="relative overflow-hidden">
      {/* Wave Blue Gradient Background */}
      <div className="absolute inset-0 wave-gradient-bg"></div>
      
      {/* Optional Wave Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="font-heading font-bold text-2xl mb-4">
                <span className="text-white">Lawson</span>
                <span className="text-wave-300">Digital</span>
                <span className="text-white">Group</span>
              </div>
              <p className="text-wave-100 leading-relaxed mb-6">
                AI-Powered Web, Chatbots & Marketing to Scale Your Business with Cutting-Edge Technology.
              </p>
              
              {/* Trust Indicators */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-wave-200">
                  <div className="w-2 h-2 bg-wave-300 rounded-full"></div>
                  <span className="text-sm">100+ Businesses Trust LDG</span>
                </div>
                <div className="flex items-center gap-2 text-wave-200">
                  <div className="w-2 h-2 bg-wave-300 rounded-full"></div>
                  <span className="text-sm">AI-Powered Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-wave-200">
                  <div className="w-2 h-2 bg-wave-300 rounded-full"></div>
                  <span className="text-sm">24/7 Expert Support</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-6">Services</h3>
              <ul className="space-y-3 text-wave-100">
                <li>
                  <Link 
                    href="/services/ai-powered-websites" 
                    onClick={() => handleClick("/services/ai-powered-websites")}
                    className="hover:text-wave-300 transition-colors duration-200"
                  >
                    AI-Powered Websites
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/ai-chatbots" 
                    onClick={() => handleClick("/services/ai-chatbots")}
                    className="hover:text-wave-300 transition-colors duration-200"
                  >
                    AI Chatbots & Automation
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/seo-marketing" 
                    onClick={() => handleClick("/services/seo-marketing")}
                    className="hover:text-wave-300 transition-colors duration-200"
                  >
                    SEO & Marketing
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/custom-development" 
                    onClick={() => handleClick("/services/custom-development")}
                    className="hover:text-wave-300 transition-colors duration-200"
                  >
                    Custom Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-6">Company</h3>
              <ul className="space-y-3 text-wave-100">
                <li>
                  <Link 
                    href="/about" 
                    onClick={() => handleClick("/about")}
                    className="hover:text-wave-300 transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/case-studies" 
                    onClick={() => handleClick("/case-studies")}
                    className="hover:text-wave-300 transition-colors duration-200"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    onClick={() => handleClick("/blog")}
                    className="hover:text-wave-300 transition-colors duration-200"
                  >
                    Blog & Resources
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={openLeadForm} 
                    className="text-wave-100 hover:text-wave-300 transition-colors duration-200 text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-6">Resources</h3>
              <ul className="space-y-3 text-wave-100">
                <li>
                  <button 
                    onClick={openLeadForm} 
                    className="text-wave-100 hover:text-wave-300 transition-colors duration-200 text-left"
                  >
                    Free AI Strategy Call
                  </button>
                </li>
                <li>
                  <Link 
                    href="/pricing" 
                    onClick={() => handleClick("/pricing")}
                    className="hover:text-wave-300 transition-colors duration-200"
                  >
                    Pricing & Packages
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    onClick={() => handleClick("/blog")}
                    className="hover:text-wave-300 transition-colors duration-200"
                  >
                    Growth Guides
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/collin-rockwall-digital-solutions" 
                    onClick={() => handleClick("/collin-rockwall-digital-solutions")}
                    className="hover:text-wave-300 transition-colors duration-200"
                  >
                    Collin & Rockwall Counties
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-wave-400/30 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-wave-200 text-sm">
                © {new Date().getFullYear()} Lawson Digital Group. All rights reserved.
              </div>
              
              {/* Social Links & Additional Links */}
              <div className="flex flex-wrap gap-6 text-sm text-wave-200">
                <Link 
                  href="/privacy-policy" 
                  onClick={() => handleClick("/privacy-policy")}
                  className="hover:text-wave-300 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms-of-service" 
                  onClick={() => handleClick("/terms-of-service")}
                  className="hover:text-wave-300 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <button 
                  onClick={openLeadForm} 
                  className="text-wave-200 hover:text-wave-300 transition-colors duration-200"
                >
                  Get Started
                </button>
              </div>
            </div>
            
            {/* Final CTA */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-wave-200 text-sm">
                <div className="w-2 h-2 bg-wave-300 rounded-full animate-pulse"></div>
                <span>Ready to transform your business with AI?</span>
                <button 
                  onClick={openLeadForm}
                  className="text-wave-300 hover:text-white font-semibold underline decoration-wave-300 underline-offset-4 transition-colors duration-200"
                >
                  Start Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer