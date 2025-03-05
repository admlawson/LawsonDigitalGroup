"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import { useLeadForm } from "@/contexts/LeadFormContext"

const LeadCaptureForm = () => {
  const { showLeadForm, closeLeadForm } = useLeadForm()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [growthGoal, setGrowthGoal] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (e.g., send data to an API)
    console.log({ name, email, businessType, growthGoal })
    closeLeadForm()
    // Redirect to calendar
    window.location.href = "https://cal.com/adamlawson/15min"
  }

  if (!showLeadForm) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-2xl border-2 border-[#CBF36E] text-black">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1"
          onClick={closeLeadForm}
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-2xl font-bold mb-6 text-black text-center">
          Let's Discuss Your <span className="text-[#CBF36E]">AI-Powered</span> Growth Strategy
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[#CBF36E] focus:ring-[#CBF36E] text-black"
          />
          <Input
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[#CBF36E] focus:ring-[#CBF36E] text-black"
          />
          <div className="space-y-2">
            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
              Select Your Business Type
            </label>
            <Select value={businessType} onValueChange={setBusinessType}>
              <SelectTrigger
                id="businessType"
                className="w-full border-[#CBF36E] focus:ring-[#CBF36E] bg-white text-black"
              >
                <SelectValue placeholder="Choose your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ecommerce">E-Commerce</SelectItem>
                <SelectItem value="service">Service Business</SelectItem>
                <SelectItem value="saas">SaaS / Software</SelectItem>
                <SelectItem value="local">Local Business</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Textarea
            id="growthGoal"
            placeholder="Tell us about your growth goals..."
            rows={4}
            value={growthGoal}
            onChange={(e) => setGrowthGoal(e.target.value)}
            className="border-[#CBF36E] focus:ring-[#CBF36E] text-black"
          />
          <Button
            type="submit"
            className="w-full bg-[#CBF36E] hover:bg-[#b9e050] text-black font-bold py-3 text-lg transition-colors duration-200"
          >
            Get Your Free Strategy Call
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LeadCaptureForm

