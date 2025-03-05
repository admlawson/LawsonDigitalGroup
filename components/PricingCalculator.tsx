"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

const PricingCalculator = () => {
  const [service, setService] = useState("website")
  const [tier, setTier] = useState("starter")
  const [customFeatures, setCustomFeatures] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const basePrice = {
    website: { starter: 3500, growth: 10000, enterprise: 25000 },
    chatbot: { basic: 5000, advanced: 10000, enterprise: 20000 },
    seo: { growth: 1000, leadgen: 5000, fullscale: 10000 },
  }

  useEffect(() => {
    let price = basePrice[service][tier]
    price += customFeatures * 1000 // Assume each custom feature costs $1000
    setTotalPrice(price)
  }, [service, tier, customFeatures])

  return (
    <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold mb-6">Custom Quote Calculator</h3>

      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Select Service</label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="website">AI-Powered Website</SelectItem>
              <SelectItem value="chatbot">AI Chatbot</SelectItem>
              <SelectItem value="seo">SEO & Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Select Tier</label>
          <Select value={tier} onValueChange={setTier}>
            <SelectTrigger>
              <SelectValue placeholder="Select a tier" />
            </SelectTrigger>
            <SelectContent>
              {service === "website" && (
                <>
                  <SelectItem value="starter">Starter</SelectItem>
                  <SelectItem value="growth">Growth</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </>
              )}
              {service === "chatbot" && (
                <>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </>
              )}
              {service === "seo" && (
                <>
                  <SelectItem value="growth">SEO Growth Plan</SelectItem>
                  <SelectItem value="leadgen">Lead Generation System</SelectItem>
                  <SelectItem value="fullscale">Full-Scale Digital Marketing</SelectItem>
                </>
              )}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Custom Features (Each $1000)</label>
          <Slider value={[customFeatures]} onValueChange={(value) => setCustomFeatures(value[0])} max={10} step={1} />
          <p className="mt-2">Number of custom features: {customFeatures}</p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Estimated Price: ${totalPrice.toLocaleString()}</p>
          <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-4 rounded-full text-lg">
            Get Detailed Quote
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator

