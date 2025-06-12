"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export default function CollinRockwallDigitalSolutions() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-center">
            AI-Powered Digital Solutions for Businesses in{" "}
            <span className="text-[#CBF36E]">Collin & Rockwall Counties, Texas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center">Transform Your Business with AI-Driven Growth</p>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Is Your Business Ready to Dominate the Digital Space?
            </h2>
            <ul className="space-y-2 max-w-xl mx-auto">
              <li className="flex items-center">
                <span className="text-red-500 mr-2">❌</span> Your website isn't bringing in leads?
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">❌</span> You're spending money on ads but not seeing ROI?
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">❌</span> You're still manually following up on leads while
                competitors automate?
              </li>
            </ul>
          </div>
          <p className="text-xl mb-8 text-center font-bold">💡 The future of business is AI—and it's happening NOW.</p>
          <div className="space-y-4 mb-8 max-w-xl mx-auto">
            <p className="text-lg">
              At Lawson Digital Group, we help businesses in Collin and Rockwall Counties get more leads, sales, and
              automation with AI-powered:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                <span>Website Development (Designed for conversions, not just looks)</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                <span>AI Chatbots & Automation (Engage customers 24/7)</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                <span>SEO & AI-Powered Marketing (Dominate search & ads with AI)</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-2">📈 Case Study:</h3>
            <p>
              One local business increased traffic by 465% and tripled its revenue using AI-driven SEO & automation.
            </p>
          </div>
          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              Get a Free AI Strategy Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Collin & Rockwall County Businesses Need AI Now */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why Collin & Rockwall County Businesses Need <span className="text-[#CBF36E]">AI Now</span>
          </h2>
          <p className="text-xl mb-8 text-center font-bold">
            💡 If you're not using AI in your business, you're already behind.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle2 className="text-[#CBF36E] h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Local competition is growing</h3>
              <p>AI gives you an edge by automating lead generation & sales.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle2 className="text-[#CBF36E] h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Google rankings are more competitive than ever</h3>
              <p>AI-driven SEO pushes you to the top.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle2 className="text-[#CBF36E] h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Customers expect instant responses</h3>
              <p>AI chatbots engage leads & close deals 24/7.</p>
            </div>
          </div>
          <p className="text-xl mb-8 text-center">
            🚀 Whether you run a law firm, real estate agency, e-commerce store, or local service business—AI can help
            you scale faster.
          </p>
          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              Book a Free Strategy Call & Future-Proof Your Business
            </Button>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Cities We Serve in <span className="text-[#CBF36E]">Collin & Rockwall Counties</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Collin County:</h3>
              <p className="mb-2">
                Allen, Anna, Blue Ridge, Carrollton, Celina, Fairview, Farmersville, Frisco, Garland, Josephine, Lavon,
                Lowry Crossing, Lucas, McKinney, Melissa, Murphy, Nevada, New Hope, Parker, Plano, Princeton, Prosper,
                Richardson, Royse City, Sachse, Saint Paul, Van Alstyne, Weston, Wylie
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Rockwall County:</h3>
              <p className="mb-2">Fate, Heath, McLendon-Chisholm, Mobile City, Rockwall, Rowlett, Royse City, Wylie</p>
            </div>
          </div>
          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              Need AI-powered solutions in your city? Let's talk.
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-[#CBF36E]">AI-Powered Services</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AI-Powered Website Development</h3>
              <p className="mb-4">
                Your website shouldn't just look nice—it should convert visitors into paying customers.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>AI-driven lead capture & conversion optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>SEO-optimized, high-speed performance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>Mobile-first & scalable design</span>
                </li>
              </ul>
              <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black">Get a High-Converting AI Website</Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AI Chatbots & Automation</h3>
              <p className="mb-4">Why wait for leads to convert when AI can engage them instantly?</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>Automated lead qualification & booking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>Instant customer responses (no more lost leads)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>AI chatbots trained on YOUR business</span>
                </li>
              </ul>
              <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black">Build a Custom AI Chatbot</Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">SEO & AI-Powered Digital Marketing</h3>
              <p className="mb-4">SEO is the highest ROI marketing strategy—but most businesses do it wrong.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>AI-driven SEO strategy to rank #1 on Google</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>AI-optimized PPC & retargeting campaigns</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>Automated content marketing for long-term growth</span>
                </li>
              </ul>
              <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black">
                Boost Your Rankings – Free SEO Audit
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Custom AI Web & App Development</h3>
              <p className="mb-4">Need a custom AI-powered solution? We build:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>CRM & Internal Automation Systems</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>AI-Integrated Web & SaaS Platforms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0" />
                  <span>E-Commerce & Membership Sites</span>
                </li>
              </ul>
              <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black">
                Let's Build Your AI-Powered Business Tool
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Businesses in Collin & Rockwall Counties Choose{" "}
            <span className="text-[#CBF36E]">Lawson Digital Group</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle2 className="text-[#CBF36E] h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">3X More Leads. 50% Lower Ad Spend.</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle2 className="text-[#CBF36E] h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI-Driven Strategy. No More Guesswork.</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle2 className="text-[#CBF36E] h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">100+ Successful Projects & Growing.</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle2 className="text-[#CBF36E] h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Results—Start Seeing Growth in Weeks.</h3>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              Join 100+ SMBs Scaling with AI – Book a Free Call
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works <span className="text-[#CBF36E]">(Frictionless 3-Step Process)</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 -left-4 bg-[#CBF36E] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Free AI Growth Strategy Call</h3>
              <p>We analyze your business & create a custom AI roadmap.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 -left-4 bg-[#CBF36E] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Implementation</h3>
              <p>Web development, SEO, chatbots, or automation—tailored for you.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute -top-4 -left-4 bg-[#CBF36E] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Scale & Automate</h3>
              <p>Watch your business generate more leads & revenue—without extra effort.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              Start Growing with AI – Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Ready to Scale Faster? <span className="text-[#CBF36E]">Let's Talk AI.</span>
          </h2>
          <p className="text-xl mb-8 text-center">🚀 Your competitors are already using AI—don't get left behind.</p>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Get a FREE AI-Powered Growth Strategy Call (Limited Spots)
            </h3>
            <form className="space-y-4">
              <Input placeholder="Full Name" />
              <Input type="email" placeholder="Email Address" />
              <Select>
                <SelectTrigger>
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
              <Textarea placeholder="What's Your Biggest Growth Challenge? Tell us what's holding your business back..." />
              <Button className="w-full bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg py-4">
                Submit & Schedule Call
              </Button>
            </form>
            <p className="text-center text-sm mt-4">🎯 100% Free Strategy Call. No Strings Attached.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}