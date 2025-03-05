"use client"

import { useState } from 'react'
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X } from 'lucide-react'
import LeadCaptureForm from "@/components/LeadCaptureForm"

const highlightedText = "text-[#CBF36E] text-shadow-highlight"

export default function CustomDevelopment() {
  const [showLeadForm, setShowLeadForm] = useState(false)

  const openLeadForm = () => setShowLeadForm(true)
  const closeLeadForm = () => setShowLeadForm(false)

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI-Powered Custom Web & App Development for <span className={highlightedText}>SMBs</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">Streamline Your Business with AI-Powered Custom Software</p>
            <p className="text-lg mb-8">
              🔥 One company saved 20+ hours per week and increased revenue by 200% with an AI-powered custom CRM.
            </p>
            <Button 
              className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full"
              onClick={openLeadForm}
            >
              Book a Free AI App Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            The Future of Business is <span className={highlightedText}>Automated</span>—Are You Ready?
          </h2>
          <p className="text-lg mb-6">Every fast-growing business reaches a breaking point.</p>
          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center">
              <CheckCircle2 className={highlightedText} mr-2 /> Your operations become too complex.
            </li>
            <li className="flex items-center">
              <CheckCircle2 className={highlightedText} mr-2 /> Your team spends too much time on repetitive tasks.
            </li>
            <li className="flex items-center">
              <CheckCircle2 className={highlightedText} mr-2 /> Your competitors are scaling faster with automation.
            </li>
          </ul>
          <p className="text-lg mb-6">💡 The solution? AI-powered custom software built for YOUR business.</p>
          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg" onClick={openLeadForm}>
              Want to streamline your business with AI? Let's build your custom web app
            </Button>
          </div>
        </div>
      </section>

      {/* Why SMBs Need AI-Powered Custom Web & App Development */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why SMBs Need <span className={highlightedText}>AI-Powered Custom Web & App Development</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Your current software isn't built for your needs.</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> STOP: Using outdated, off-the-shelf software that slows you down.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> START: Using a custom-built AI-powered solution that
                  fits your business perfectly.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">You're wasting time on manual processes.</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> STOP: Doing repetitive tasks that AI can automate instantly.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> START: Using AI to optimize workflows, reduce errors,
                  and increase efficiency.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">You're scaling, but your systems aren't.</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> STOP: Struggling with tools that don't integrate or scale.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> START: Using a scalable, AI-powered app that grows
                  with your business.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg" onClick={openLeadForm}>
              Need a custom app? Let's talk AI automation
            </Button>
          </div>
        </div>
      </section>

      {/* AI-Powered Web & App Development Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            AI-Powered Web & App Development <span className={highlightedText}>Services</span>
          </h2>

          <p className="text-lg mb-8">💡 We don't just build software. We build AI-driven systems that scale.</p>

          <table className="w-full mb-8">
            <thead className="bg-[#CBF36E]">
              <tr>
                <th className="p-3 text-left">Service</th>
                <th className="p-3 text-left">How It Helps Your Business</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border">Custom AI-Powered Web Apps</td>
                <td className="p-3 border">Automate processes, manage data, and increase efficiency</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">AI Chatbot & Automation Platforms</td>
                <td className="p-3 border">Convert leads, engage customers, and streamline operations</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border">AI-Enhanced CRM & Sales Tools</td>
                <td className="p-3 border">Manage leads, sales pipelines, and customer relationships efficiently</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">Custom Business Dashboards</td>
                <td className="p-3 border">AI-powered analytics to help you make smarter decisions</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border">E-Commerce & Membership Platforms</td>
                <td className="p-3 border">AI-driven personalization for higher conversion rates</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg" onClick={openLeadForm}>
              Let's Build Your AI Business Tool
            </Button>
          </div>
        </div>
      </section>

      {/* How AI Is Changing Custom Software Development */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How AI Is Changing Custom Software Development{" "}
            <span className={highlightedText}>(And Why You Need It Now)</span>
          </h2>

          <p className="text-lg mb-8">🚀 Most business software is outdated the moment it launches. AI changes that.</p>

          <p className="text-lg mb-8">Here's how AI-powered apps outperform traditional software:</p>

          <div className="space-y-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">✅ AI Automates Repetitive Tasks</h3>
              <p>
                Instead of manually handling data entry, customer service, or reporting, AI automates it in real time.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">✅ AI Learns & Improves Over Time</h3>
              <p>Traditional software is static—AI-driven apps analyze data & optimize processes for better results.</p>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">✅ AI Enhances Customer Engagement</h3>
              <p>
                From personalized product recommendations to automated customer support, AI increases retention & sales.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-2xl font-bold mb-4">📈 Case Study:</h3>
            <p>
              A healthcare provider reduced customer response times by 80% and improved patient engagement using an
              AI-powered chatbot.
            </p>
          </div>

          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg" onClick={openLeadForm}>
              Want to future-proof your business? Get a free consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Case Studies: How SMBs Are Scaling with <span className={highlightedText}>AI-Powered Custom Apps</span>
          </h2>

          <div className="space-y-12">
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">🔹 Case Study #1: Custom AI CRM Saves 20+ Hours Per Week</h3>
              <p className="mb-2">
                <strong>📍 Industry:</strong> Real Estate
              </p>
              <p className="mb-2">
                <strong>❌ Before AI:</strong> Manually tracking leads, slow response times, lost deals.
              </p>
              <p className="mb-4">
                <strong>✅ After AI:</strong> Custom AI-powered CRM automates lead tracking & sends instant follow-ups.
              </p>
              <h4 className="text-xl font-bold mb-2">📈 Results:</h4>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> 20+ hours saved per week
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> 200% more leads converted
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> Higher engagement from automated responses
                </li>
              </ul>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">
                🔹 Case Study #2: E-Commerce Brand Boosts Conversions with AI-Powered Personalization
              </h3>
              <p className="mb-2">
                <strong>📍 Industry:</strong> Online Retail
              </p>
              <p className="mb-2">
                <strong>❌ Before AI:</strong> Generic product recommendations, high cart abandonment.
              </p>
              <p className="mb-4">
                <strong>✅ After AI:</strong> Custom AI-powered recommendation engine doubled conversion rates.
              </p>
              <h4 className="text-xl font-bold mb-2">📈 Results:</h4>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> 150% increase in revenue
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> 40% lower customer drop-off rate
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> 50% increase in returning customers
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg" onClick={openLeadForm}>
              Want these results? Let's build your AI-powered app
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How Much Does AI-Powered Custom Development <span className={highlightedText}>Cost?</span>
          </h2>

          <p className="text-lg mb-8">💡 AI-powered apps range from $10,000 to $100,000+ depending on features.</p>

          <table className="w-full mb-8">
            <thead className="bg-[#CBF36E]">
              <tr>
                <th className="p-3 text-left">AI-Powered Solution</th>
                <th className="p-3 text-left">What It Does</th>
                <th className="p-3 text-left">Cost Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border">Custom Web App</td>
                <td className="p-3 border">Automate processes & manage data</td>
                <td className="p-3 border">$10,000 – $50,000</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">AI Chatbot & Automation</td>
                <td className="p-3 border">Automate customer service & sales</td>
                <td className="p-3 border">$5,000 – $20,000</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border">AI-Driven CRM</td>
                <td className="p-3 border">Manage leads, sales, & engagement</td>
                <td className="p-3 border">$15,000 – $75,000</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">Business Dashboard</td>
                <td className="p-3 border">AI-powered analytics & reporting</td>
                <td className="p-3 border">$10,000 – $40,000</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border">E-Commerce AI Tools</td>
                <td className="p-3 border">Personalized shopping experiences</td>
                <td className="p-3 border">$15,000 – $50,000</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg" onClick={openLeadForm}>
              Need a pricing estimate? Get a free consultation
            </Button>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How to Get Started with <span className={highlightedText}>AI-Powered Software Development</span>
          </h2>

          <div className="space-y-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Step 1: Free AI-Powered Business Audit</h3>
              <p>🚀 We analyze your business & identify AI-powered opportunities.</p>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Step 2: Build a Custom AI Solution</h3>
              <p>✅ AI-powered automation, CRM, dashboards, chatbots, and more.</p>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Step 3: Scale Faster & Work Smarter</h3>
              <p>✅ More automation. ✅ Higher efficiency. ✅ Faster growth.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl mb-6">Want to automate your business with AI? Let's talk.</p>
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg" onClick={openLeadForm}>
              Book a Free AI App Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {showLeadForm && <LeadCaptureForm onClose={closeLeadForm} />}
    </div>
  )
}

