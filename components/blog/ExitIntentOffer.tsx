"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ExitIntentOffer() {
  const [showOffer, setShowOffer] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowOffer(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!showOffer) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md">
        <h3 className="text-2xl font-bold mb-4">Wait! Don't miss out on AI-powered growth</h3>
        <p className="mb-6">
          Download our free guide: "5 AI Strategies to Skyrocket Your Business Growth" and start scaling today.
        </p>
        <Button className="w-full bg-[#CBF36E] hover:bg-[#b9e050] text-black mb-4">Get Your Free Guide</Button>
        <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowOffer(false)}>
          No thanks, I don't want to grow my business
        </button>
      </div>
    </div>
  )
}

