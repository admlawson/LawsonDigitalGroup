"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <Button variant="ghost" onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-50">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-[#CBF36E] transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/services" className="hover:text-[#CBF36E] transition-colors" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/pricing" className="hover:text-[#CBF36E] transition-colors" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link href="/case-studies" className="hover:text-[#CBF36E] transition-colors" onClick={toggleMenu}>
              Case Studies
            </Link>
            <Link href="/about" className="hover:text-[#CBF36E] transition-colors" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/contact" className="hover:text-[#CBF36E] transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black w-full">Book a Call</Button>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu

