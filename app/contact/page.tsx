"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, CheckCircle2, Mail, Phone, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Build Your <span className="text-[#CBF36E]">AI-Powered Growth System</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">More Leads. More Sales. Less Work.</p>
            <p className="font-bold text-xl mb-8">🔥 Only 5 New Client Spots Per Month – Let's See If We're a Fit.</p>
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              Apply for a Free Strategy Call <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Contact Us? */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why <span className="text-[#CBF36E]">Contact Us?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "We focus on measurable growth, not just digital presence.",
              "AI + automation = 3X more leads & lower costs.",
              "100+ SMBs already trust LDG—are you next?",
            ].map((item, i) => (
              <div key={i} className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Claim Your Free AI Growth Audit <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            We make digital growth easy. <span className="text-[#CBF36E]">Tell us what you need</span>, and we'll make
            it happen.
          </h2>

          <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Smith" className="bg-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@yourcompany.com" className="bg-white" />
                </div>
              </div>

              <div>
                <label htmlFor="business-type" className="block mb-2 font-medium">
                  Business Type
                </label>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select your business type" />
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

              <div>
                <label htmlFor="growth-goal" className="block mb-2 font-medium">
                  What's Your Growth Goal?
                </label>
                <Textarea
                  id="growth-goal"
                  placeholder="Tell us about your business growth objectives..."
                  className="bg-white"
                  rows={4}
                />
              </div>

              <Button className="w-full bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg py-6">
                Submit & Get a Custom AI Plan
              </Button>

              <p className="text-center text-sm">🎯 We respond within 24 hours. No spam. No fluff—just results.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Book a Strategy Call */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Skip the emails—<span className="text-[#CBF36E]">book a call now</span> & start scaling faster.
          </h2>
          <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
            Schedule a Free AI-Powered Strategy Call <ChevronRight className="ml-2" />
          </Button>
          <p className="mt-4 font-bold">🔥 Limited Spots Available – First Come, First Served.</p>
        </div>
      </section>

      {/* Other Contact Options */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Other Ways to <span className="text-[#CBF36E]">Reach Us</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 text-center">
              <Mail className="w-12 h-12 text-[#CBF36E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p>support@ldg.com</p>
            </div>
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 text-center">
              <Phone className="w-12 h-12 text-[#CBF36E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p>(XXX) XXX-XXXX</p>
            </div>
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 text-center">
              <MessageSquare className="w-12 h-12 text-[#CBF36E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">DM Us on Social</h3>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-[#CBF36E] hover:text-[#b9e050]">
                  LinkedIn
                </Link>
                <Link href="#" className="text-[#CBF36E] hover:text-[#b9e050]">
                  Twitter
                </Link>
                <Link href="#" className="text-[#CBF36E] hover:text-[#b9e050]">
                  Instagram
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Chat With Us Now <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final Trust Boosters & CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to <span className="text-[#CBF36E]">Scale Your Business</span> with AI?
          </h2>
          <p className="text-xl mb-8">
            ✅ 100+ SMBs trust LDG for AI-powered digital growth.
            <br />✅ 3X More Leads & 50% Lower Customer Acquisition Costs.
            <br />✅ Let's see if we're a fit—before we fill this month's last client spots.
          </p>
          <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
            Apply for a Free Consultation Before Spots Run Out <ChevronRight className="ml-2" />
          </Button>
          <p className="mt-4">🎯 No Pressure. Just Results.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}