"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Star, ArrowRight, BarChart, Bot, Globe, Search, Shield, Zap } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [isPlayAIReady, setIsPlayAIReady] = useState(false)

  useEffect(() => {
    const checkPlayAI = () => {
      if (typeof window !== "undefined" && window.PlayAI) {
        setIsPlayAIReady(true)
      }
    }

    // Check immediately
    checkPlayAI()

    // Set up an interval to check periodically
    const intervalId = setInterval(checkPlayAI, 1000)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const handleChatWithAgent = () => {
      if (isPlayAIReady) {
        window.PlayAI.open("D16Yljss4WqSMLo2vsYRK")
      } else {
        console.error("PlayAI is not ready yet")
      }
    }

    window.addEventListener("chatWithAgent", handleChatWithAgent)

    return () => {
      window.removeEventListener("chatWithAgent", handleChatWithAgent)
    }
  }, [isPlayAIReady])

  const chatWithAgent = () => {
    if (isPlayAIReady) {
      window.PlayAI.open("D16Yljss4WqSMLo2vsYRK")
    } else {
      console.error("PlayAI is not ready yet")
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI-Powered Websites & Digital Growth for <span className="text-[#CBF36E]">SMBs</span>
              </h1>
              <p className="text-xl mb-8">Get More Leads, Automate Engagement & Scale Faster.</p>
              <div className="space-y-4 mb-8">
                {[
                  "High-Converting Websites",
                  "AI Chatbots & Automation",
                  "SEO & Digital Marketing That Drives Sales",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-bold text-lg mb-6">🔥 Join 100+ SMBs Growing Faster with LDG.</p>
              <div className="space-x-4">
                <Button
                  className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full"
                  onClick={() => window.openLeadForm()}
                >
                  Book a Free AI Strategy Call
                </Button>
                <Button
                  className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-6 rounded-full border-2 border-[#CBF36E]"
                  onClick={chatWithAgent}
                >
                  Chat with an Agent
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#CBF36E]/20 rounded-2xl blur-xl"></div>
              <div className="backdrop-blur-md bg-white/30 border border-gray-200 rounded-2xl p-8 shadow-lg relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="AI-Powered Growth"
                  width={500}
                  height={500}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Common Challenges <span className="text-[#CBF36E]">We Solve</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: "Our website looks great but doesn't bring leads!",
                solution: "LDG builds websites designed for sales, not just aesthetics.",
              },
              {
                problem: "We waste money on ads but get no ROI.",
                solution: "AI-driven SEO & paid marketing that actually converts.",
              },
              {
                problem: "We spend hours responding to inquiries.",
                solution: "AI chatbots automate customer engagement 24/7.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="bg-red-100 text-red-800 rounded-full px-4 py-2 inline-block mb-4">🔴 Problem</div>
                <h3 className="text-xl font-bold mb-4">{item.problem}</h3>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="bg-green-100 text-green-800 rounded-full px-4 py-2 inline-block mb-4">✅ Solution</div>
                <p>{item.solution}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="space-x-4">
              <Button
                className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg"
                onClick={() => window.openLeadForm()}
              >
                Let's Fix This – Book a Free Strategy Call
              </Button>
              <Button
                className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-6 rounded-full border-2 border-[#CBF36E]"
                onClick={chatWithAgent}
              >
                Chat with an Agent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What <span className="text-[#CBF36E]">We Do</span>
          </h2>
          <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
            LDG helps SMBs grow faster using cutting-edge AI, automation, and web development.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Websites",
                description: "Turn visitors into customers with data-driven design",
                icon: <Globe className="w-10 h-10 text-[#CBF36E]" />,
              },
              {
                title: "AI Chatbots & Automations",
                description: "Capture leads & support customers 24/7",
                icon: <Bot className="w-10 h-10 text-[#CBF36E]" />,
              },
              {
                title: "SEO & PPC for SMBs",
                description: "Get higher rankings & maximize ad spend",
                icon: <Search className="w-10 h-10 text-[#CBF36E]" />,
              },
              {
                title: "Custom Web & App Development",
                description: "Scalable, secure, and built for growth",
                icon: <Zap className="w-10 h-10 text-[#CBF36E]" />,
              },
            ].map((service, i) => (
              <div
                key={i}
                className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 hover:border-[#CBF36E] hover:shadow-xl transition-all group"
              >
                <div className="flex items-start">
                  <div className="mr-6">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#CBF36E] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="space-x-4">
              <Button
                className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg"
                onClick={() => window.openLeadForm()}
              >
                Need a Custom Solution? Let's Talk
              </Button>
              <Button
                className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-6 rounded-full border-2 border-[#CBF36E]"
                onClick={chatWithAgent}
              >
                Chat with an Agent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why LDG? (Trust Builders) */}
      <section id="why-ldg" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Work With <span className="text-[#CBF36E]">LDG?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Proven Results",
                description: "3X more leads, 2X faster conversions, and 50% lower ad costs",
                icon: <BarChart className="w-12 h-12 text-[#CBF36E]" />,
              },
              {
                title: "AI & Data-Driven Strategy",
                description: "We don't guess. Every decision is backed by analytics.",
                icon: <Bot className="w-12 h-12 text-[#CBF36E]" />,
              },
              {
                title: "Custom-Tailored Solutions",
                description: "Your business isn't cookie-cutter. Neither are we.",
                icon: <Zap className="w-12 h-12 text-[#CBF36E]" />,
              },
              {
                title: "100+ Successful Projects Delivered",
                description: "Join the growing list of SMBs thriving with LDG.",
                icon: <Shield className="w-12 h-12 text-[#CBF36E]" />,
              },
            ].map((item, i) => (
              <div key={i} className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="mr-6">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="space-x-4">
              <Button
                className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg"
                onClick={() => window.openLeadForm()}
              >
                Let's Build Your Growth Plan – Book a Call
              </Button>
              <Button
                className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-6 rounded-full border-2 border-[#CBF36E]"
                onClick={chatWithAgent}
              >
                Chat with an Agent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work (3-Step Process) */}
      <section id="process" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How We <span className="text-[#CBF36E]">Work</span>
          </h2>
          <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
            Simple, frictionless 3-step process to get you results fast.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1",
                title: "Book a Free Strategy Call",
                description: "We analyze your needs and current digital presence.",
              },
              {
                step: "Step 2",
                title: "Get a Custom AI Strategy",
                description: "Tailored to your specific business goals and challenges.",
              },
              {
                step: "Step 3",
                title: "Launch & Scale",
                description: "AI-powered growth, higher conversions, better ROI.",
              },
            ].map((process, i) => (
              <div key={i} className="relative">
                <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 h-full">
                  <div className="absolute -top-5 left-8 bg-[#CBF36E] text-black font-bold px-4 py-2 rounded-full">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mt-6 mb-4">{process.title}</h3>
                  <p className="text-gray-700">{process.description}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-[#CBF36E] w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="space-x-4">
              <Button
                className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg"
                onClick={() => window.openLeadForm()}
              >
                Start Now – Free Consultation
              </Button>
              <Button
                className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-6 rounded-full border-2 border-[#CBF36E]"
                onClick={chatWithAgent}
              >
                Chat with an Agent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Results */}
      <section id="testimonials" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Real <span className="text-[#CBF36E]">Results</span> for Real Businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We tripled our lead flow in 60 days thanks to LDG's AI-powered funnel!",
                author: "John D.",
                position: "Small Business Owner",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote: "AI chatbots cut our response time by 80%, and sales jumped 3X!",
                author: "Sarah T.",
                position: "E-Commerce CEO",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote: "We ranked #1 on Google in just 3 months thanks to LDG's SEO strategy!",
                author: "Mike R.",
                position: "SaaS Founder",
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, i) => (
              <div key={i} className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-[#CBF36E] fill-[#CBF36E]" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="space-x-4">
              <Button
                className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg"
                onClick={() => window.openLeadForm()}
              >
                Get Similar Results – Book a Call
              </Button>
              <Button
                className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-6 rounded-full border-2 border-[#CBF36E]"
                onClick={chatWithAgent}
              >
                Chat with an Agent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Ready to <span className="text-[#CBF36E]">Scale Faster?</span> Let's Talk.
            </h2>
            <p className="text-center text-lg mb-8">Get a FREE AI-Powered Growth Strategy Call (Limited Spots)</p>

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
                <label htmlFor="challenge" className="block mb-2 font-medium">
                  What's Your Biggest Growth Challenge?
                </label>
                <Textarea
                  id="challenge"
                  placeholder="Tell us what's holding your business back..."
                  className="bg-white"
                  rows={4}
                />
              </div>

              <div className="space-x-4">
                <Button
                  className="w-full bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg py-6"
                  onClick={() => window.openLeadForm()}
                >
                  Submit & Schedule Call
                </Button>
                <Button
                  className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-6 rounded-full border-2 border-[#CBF36E]"
                  onClick={chatWithAgent}
                >
                  Chat with an Agent
                </Button>
              </div>

              <p className="text-center text-sm">🎯 100% Free Strategy Call. No Strings Attached.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-[#CBF36E]">Case Studies</span>
          </h2>
          <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Revenue Growth",
                description:
                  "How we helped an online store increase sales by 215% in 90 days with AI-powered recommendations.",
                image: "/placeholder.svg?height=300&width=400",
                result: "+215% Revenue",
              },
              {
                title: "Lead Generation Success",
                description:
                  "A service business that went from 10 to 50+ qualified leads per month with our conversion strategy.",
                image: "/placeholder.svg?height=300&width=400",
                result: "5X More Leads",
              },
              {
                title: "SEO Ranking Breakthrough",
                description:
                  "How we got a local business to rank #1 for their most valuable keywords in a competitive market.",
                image: "/placeholder.svg?height=300&width=400",
                result: "#1 Google Ranking",
              },
            ].map((study, i) => (
              <div
                key={i}
                className="backdrop-blur-md bg-white/70 rounded-xl overflow-hidden shadow-lg border border-gray-200 group hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#CBF36E] text-black font-bold px-4 py-2 rounded-full text-sm">
                    {study.result}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#CBF36E] transition-colors">{study.title}</h3>
                  <p className="text-gray-700 mb-4">{study.description}</p>
                  <Button variant="outline" className="border-[#CBF36E] text-black hover:bg-[#CBF36E] hover:text-black">
                    Read Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "SMBs Served" },
              { number: "3X", label: "Average Lead Increase" },
              { number: "50%", label: "Lower Ad Costs" },
              { number: "24/7", label: "AI Support" },
            ].map((stat, i) => (
              <div key={i} className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-gray-800">
                <div className="text-4xl md:text-5xl font-bold text-[#CBF36E] mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

