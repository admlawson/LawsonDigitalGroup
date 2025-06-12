"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, CheckCircle2, ArrowRight, Clock, Users, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary-dark mb-6 animate-fade-up">
              <Zap className="w-4 h-4" />
              100+ projects delivered
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
              🛠️ Our Work
              <span className="text-gradient block mt-2">Real Projects. Real Results. Built Fast, Built Right.</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg sm:text-xl text-neutral-600 mb-4 leading-relaxed">
                We don't just build websites and automations. We build systems that actually help small businesses move faster, look better, and grow without chaos.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">100+ projects delivered</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">Built by humans who get it</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">Designed to help you scale</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="space-y-12">
            {/* HomeGrade.ai */}
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">🏡</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">HomeGrade.ai</h3>
                  </div>
                  
                  <p className="text-lg font-semibold text-primary mb-2">AI-Powered Inspection Summary Tool for Homebuyers</p>
                  <div className="flex gap-4 text-sm text-neutral-600 mb-6">
                    <span><strong>Built in:</strong> 2 weeks</span>
                    <span><strong>Tech:</strong> OpenAI, PDF extraction, custom summary engine</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-neutral-900 mb-3">What We Did:</h4>
                    <ul className="space-y-2">
                      {[
                        "Built a tool that turns home inspection reports into plain-English summaries",
                        "Added visual grading, negotiation tips, and AI-powered FAQs",
                        "Integrated with Stripe, PDF export, and file upload"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-neutral-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {[
                        "80% faster decision time for buyers",
                        "Saved agents and clients hours per report",
                        "Opened new revenue channel for inspection companies"
                      ].map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-primary/10 rounded-xl p-4">
                    <p className="text-sm font-medium text-primary">🛠️ Custom app built from scratch—no code bloat, just clean execution</p>
                  </div>
                </div>
                
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                    alt="HomeGrade.ai Project"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-soft w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* MLSMagic */}
            <div className="gradient-bg rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                    alt="MLSMagic Project"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-soft w-full h-auto"
                  />
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">🧙</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">MLSMagic</h3>
                  </div>
                  
                  <p className="text-lg font-semibold text-primary mb-2">Lead Capture + Automation for Real Estate Professionals</p>
                  <div className="flex gap-4 text-sm text-neutral-600 mb-6">
                    <span><strong>Built in:</strong> 1 week</span>
                    <span><strong>Tech:</strong> Typedream, Zapier, Airtable</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-neutral-900 mb-3">What We Did:</h4>
                    <ul className="space-y-2">
                      {[
                        "Created a simple lead capture site that looks clean and converts",
                        "Hooked up lead routing, auto-replies, and Google Sheet tracking",
                        "Added integrations for calendar booking + local SEO"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-neutral-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {[
                        "From idea to live in under 7 days",
                        "3X more leads with zero ad spend",
                        "Realtors now automate follow-up instead of chasing emails"
                      ].map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white/80 rounded-xl p-4">
                    <p className="text-sm font-medium text-primary">📈 Perfect example of high-velocity execution with low-code tools</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Field /0 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft hover:shadow-medium transition-all duration-300 border-2 border-neutral-100">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">⚡</div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">Field /0</h3>
                  </div>
                  
                  <p className="text-lg font-semibold text-primary mb-2">A Digital Strategy System for Founders in Transition</p>
                  <div className="flex gap-4 text-sm text-neutral-600 mb-6">
                    <span><strong>Built:</strong> Over time as a living platform</span>
                    <span><strong>Tech:</strong> Ghost(Pro), OpenAI, brand system + artifacts</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-neutral-900 mb-3">What We Did:</h4>
                    <ul className="space-y-2">
                      {[
                        "Developed a full founder-facing thought leadership platform",
                        "Created branded rituals, lead magnets, and digital clarity tools",
                        "Integrated AI-generated content, email nurturing, and symbolic UX"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-neutral-900 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {[
                        "Clearer founder positioning",
                        "Turned into a full consulting pipeline",
                        "Launchpad for future SaaS spinoffs"
                      ].map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-accent/10 rounded-xl p-4">
                    <p className="text-sm font-medium text-accent">🌱 A strategy-first system disguised as a blog—but built to scale</p>
                  </div>
                </div>
                
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                    alt="Field /0 Project"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-soft w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It's Like to Work With Us */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            What It's Like to <span className="text-gradient">Work With Us</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛠️",
                title: "We build fast",
                description: "Most projects launch in 7–14 days—not 3-month timelines."
              },
              {
                icon: "💬",
                title: "We speak human",
                description: "You'll never hear us say \"We'll circle back with stakeholder alignment.\""
              },
              {
                icon: "📦",
                title: "We build what matters",
                description: "If it doesn't grow your business, we won't sell it to you."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Wins - Before & After */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            Recent Wins <span className="text-gradient">(Before & After)</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-soft overflow-hidden border-2 border-neutral-100">
              <thead>
                <tr className="bg-primary/10 border-b-2 border-primary/20">
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">Metric</th>
                  <th className="text-center p-6 text-lg font-bold text-neutral-900">Before Working with LDG</th>
                  <th className="text-center p-6 text-lg font-bold text-neutral-900">After Our Build</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Conversion Rate", before: "1.2%", after: "4.8%", improvement: "+300%" },
                  { metric: "Cost Per Lead", before: "$120", after: "$42", improvement: "-65%" },
                  { metric: "Lead Response Time", before: "24–48 hours", after: "Instant via bot", improvement: "Real-time" },
                  { metric: "Site Launch Time", before: "4–6 weeks", after: "3–7 days", improvement: "85% faster" },
                  { metric: "Missed Leads", before: "Dozens/month", after: "Near zero", improvement: "~100% reduction" }
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-neutral-100 ${i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}>
                    <td className="p-6 font-medium text-neutral-900">{row.metric}</td>
                    <td className="text-center p-6 text-neutral-600">{row.before}</td>
                    <td className="text-center p-6">
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-neutral-900">{row.after}</span>
                        <span className="text-xs text-primary font-semibold mt-1">{row.improvement}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-wave rounded-2xl sm:rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Want to Be Our <span className="text-wave-300">Next Success Story?</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
              Let's figure out what's broken—and fix it together.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>No pressure</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>No contracts</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Just real progress</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100 hover:text-primary-dark px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
              onClick={() => window.openLeadForm()}
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}