"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We Build AI-Powered Digital Systems That{" "}
              <span className="text-[#CBF36E]">Turn Visitors into Customers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Websites, AI Chatbots & Growth Strategies That Scale Your Business.
            </p>
            <p className="font-bold text-xl mb-8">🔹 100+ Businesses Trust LDG to Automate Growth.</p>
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              See How We Can Scale Your Business <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why LDG Exists */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why <span className="text-[#CBF36E]">LDG Exists</span>
          </h2>

          <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
            <p className="text-lg mb-6">We started LDG because we saw small businesses struggling.</p>
            <ul className="space-y-4 mb-6">
              {[
                "They had websites that didn't generate leads.",
                "They ran ads that burned money with no ROI.",
                "They spent hours answering customer inquiries manually.",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <ArrowRight className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg">
              We knew AI + automation could fix this, so we built LDG: A digital agency that actually drives growth.
            </p>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Let's Talk About Your Business <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Who We <span className="text-[#CBF36E]">Help</span>
          </h2>

          <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
            <p className="text-lg mb-6">If you run a small or mid-sized business and want:</p>
            <ul className="space-y-4 mb-6">
              {[
                "A website that brings in leads (not just looks pretty)",
                "AI-driven chatbots that automate customer interactions",
                "SEO & paid marketing that actually converts",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold">Then you're exactly who we help.</p>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              See How We Can Help Your Business <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* What Makes LDG Different */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Makes LDG <span className="text-[#CBF36E]">Different</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Most agencies build websites. We build lead machines.",
              "Most agencies run ads. We optimize ROI with AI-driven targeting.",
              "Most agencies sell templates. We create custom solutions built for conversion.",
            ].map((item, i) => (
              <div key={i} className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Get a Custom AI-Powered Strategy <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Meet the Experts */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Meet the <span className="text-[#CBF36E]">Experts</span>
          </h2>

          <p className="text-center text-xl mb-12">Led by Experts Who've Built Digital Growth for 100+ Businesses.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Your Name",
                role: "Founder & AI Strategist",
                description: "Passionate about helping businesses scale with AI & automation.",
              },
              {
                name: "Team Member",
                role: "Web & SEO Specialist",
                description: "Optimizing websites for high-intent conversions.",
              },
              {
                name: "Team Member",
                role: "AI Chatbot Developer",
                description: "Specializing in automated lead capture & customer service AI.",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 text-center"
              >
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#CBF36E] font-bold mb-4">{member.role}</p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Meet the Team & Start Your Growth Journey <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Real-World Impact */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Real-World <span className="text-[#CBF36E]">Impact</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "100+ SMBs Scaled with AI & Automation",
              "3X More Leads & 50% Lower Customer Acquisition Costs",
              "465% More Website Traffic from AI-Optimized SEO",
            ].map((stat, i) => (
              <div
                key={i}
                className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 text-center"
              >
                <p className="text-2xl font-bold">{stat}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Join Businesses Scaling with AI <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              We Don't Work with Everyone – Just Businesses <span className="text-[#CBF36E]">Serious About Growth</span>
            </h2>
            <p className="text-center text-lg mb-8">Get a Free AI-Powered Strategy Call & See If We're a Fit.</p>

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
                Apply for a Free Consultation
              </Button>

              <p className="text-center text-sm">🎯 Limited Spots Available – Only 5 New Clients Per Month.</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}