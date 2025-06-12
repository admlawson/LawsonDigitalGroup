"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X, ArrowRight, TrendingUp, Clock, Users, Code, Zap, Settings, Smartphone, Monitor, Bot } from "lucide-react"
import Image from "next/image"

export default function CustomDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary-dark mb-6 animate-fade-up">
              <Code className="w-4 h-4" />
              Save 20+ hours a week with custom automation
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
              🧰 Custom Apps & Tools
              <span className="text-gradient block mt-2">for Small Business</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg sm:text-xl text-neutral-600 mb-4 leading-relaxed">
                <strong>Ditch the spreadsheets. Replace the guesswork.</strong>
              </p>
              <p className="text-base sm:text-lg text-neutral-600">
                We build simple, powerful tools that match the way your business runs—not the other way around.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">Save 20+ hours a week</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">Automate repetitive work</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">Stop paying for unused tools</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                📞 Book a Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-sm text-neutral-500 justify-center">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Projects start at $1,995</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>Built for growing businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Call Us */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            Why Businesses Call Us When They're <span className="text-gradient">Growing Fast</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                problem: "You're doing too much manually",
                solution: "We build apps that handle it for you",
                description: "From customer intake to follow-ups and reporting—we automate what's slowing you down."
              },
              {
                problem: "You're using tools that don't fit",
                solution: "We build what you actually need",
                description: "No more hacking together forms, CRMs, or 10 different tools that don't talk to each other."
              },
              {
                problem: "You're scaling but your systems aren't",
                solution: "We build tools that grow with you",
                description: "Whether it's a client portal, a sales tracker, or something no one's built yet—we've got you."
              }
            ].map((item, i) => (
              <div key={i} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium text-neutral-800 mb-2">❌ {item.problem}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg font-medium text-primary mb-2">✅ {item.solution}</p>
                      <p className="text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Can Build */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
            What We Can <span className="text-gradient">Build For You</span>
          </h2>
          
          <div className="text-center mb-16">
            <p className="text-lg text-neutral-600 italic">💬 "If your business runs on sticky notes or spreadsheets—we can build you something better."</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-soft overflow-hidden">
              <thead>
                <tr className="bg-primary/10 border-b-2 border-primary/20">
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">Solution</th>
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">What It Solves</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    solution: "Quote or Booking Tools",
                    benefit: "Let customers submit jobs or book online",
                    icon: <Calendar className="w-5 h-5 text-primary" />
                  },
                  {
                    solution: "Custom CRM & Dashboards", 
                    benefit: "Track leads, projects, or orders—your way",
                    icon: <Monitor className="w-5 h-5 text-primary" />
                  },
                  {
                    solution: "Team Workflow Tools",
                    benefit: "Assign jobs, follow status, reduce back-and-forth",
                    icon: <Users className="w-5 h-5 text-primary" />
                  },
                  {
                    solution: "Client Portals",
                    benefit: "Let customers log in, view updates, message you",
                    icon: <Smartphone className="w-5 h-5 text-primary" />
                  },
                  {
                    solution: "AI Assistants",
                    benefit: "Automate follow-ups, FAQs, and data entry",
                    icon: <Bot className="w-5 h-5 text-primary" />
                  }
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-neutral-100 ${i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}>
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {row.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="font-medium text-neutral-900">{row.solution}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-neutral-700">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real-World Results */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            Real-World <span className="text-gradient">Results</span>
          </h2>

          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-bold text-neutral-900">🔹 Real Estate CRM That Converts</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <h4 className="font-bold text-red-600 mb-4 text-lg">Before:</h4>
                  <p className="text-neutral-700">Lost leads, no follow-up, time wasted tracking</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <h4 className="font-bold text-primary mb-4 text-lg">After:</h4>
                  <p className="text-neutral-700">Custom CRM with instant response workflows</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-800">20+ hours saved weekly</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-800">200% more lead conversions</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <h3 className="text-2xl font-bold text-neutral-900">🔹 E-Commerce Personalization</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <h4 className="font-bold text-red-600 mb-4 text-lg">Before:</h4>
                  <p className="text-neutral-700">Generic recommendations, low repeat customers</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <h4 className="font-bold text-accent mb-4 text-lg">After:</h4>
                  <p className="text-neutral-700">AI-driven product suggestions + email automation</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-800">150% revenue increase</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-800">50% more returning customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            Packages & <span className="text-gradient">Pricing</span>
          </h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-2xl shadow-soft overflow-hidden">
              <thead>
                <tr className="bg-primary/10 border-b-2 border-primary/20">
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">Project Type</th>
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">Best For...</th>
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">Starting At</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: "Mini App",
                    bestFor: "One problem, one tool (e.g. calculator, intake form)",
                    price: "$1,995"
                  },
                  {
                    type: "Workflow App", 
                    bestFor: "Internal team tools, CRMs, job trackers",
                    price: "$4,995"
                  },
                  {
                    type: "Client Portal",
                    bestFor: "Customer-facing login, dashboard, messaging",
                    price: "$9,995+"
                  },
                  {
                    type: "Add-On Support Plan",
                    bestFor: "Hosting, maintenance, feature updates",
                    price: "$200/month"
                  },
                  {
                    type: "Custom Work",
                    bestFor: "New features, integrations, help",
                    price: "$95/hour"
                  }
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-neutral-100 ${i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}>
                    <td className="p-6 font-medium text-neutral-900">{row.type}</td>
                    <td className="p-6 text-neutral-700">{row.bestFor}</td>
                    <td className="p-6 font-bold text-primary">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Button 
              className="bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary font-semibold transition-all duration-300"
              onClick={() => window.openLeadForm()}
            >
              📞 Not sure what you need? Let's talk.
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            How It <span className="text-gradient">Works</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1️⃣",
                title: "Free Discovery Call",
                description: "We talk about what's slowing you down and what you wish your tools could do."
              },
              {
                step: "2️⃣",
                title: "Custom Build Plan",
                description: "We design & build a tool around how your team works—not the other way around."
              },
              {
                step: "3️⃣",
                title: "Launch, Train, Grow",
                description: "You get full support, documentation, and tools that evolve as you grow."
              }
            ].map((step, i) => (
              <div key={i} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
                <div className="text-4xl mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                From Spreadsheet Chaos to Streamlined Success
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                Here's what happens when you replace manual processes with custom-built automation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">!</div>
                  <div>
                    <span className="font-medium text-red-600">Before:</span>
                    <span className="text-neutral-700 ml-2">Sticky notes, spreadsheets, and constant confusion</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <div>
                    <span className="font-medium text-primary">After:</span>
                    <span className="text-neutral-700 ml-2">Custom tools that work exactly how your business does</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Image
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"
                alt="Custom App Development"
                width={600}
                height={400}
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-wave rounded-2xl sm:rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Replace Spreadsheets with <span className="text-wave-300">Something Smarter?</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
              We'll build you the tool your business actually needs—fast.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Straight answers</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Clear pricing</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100 hover:text-primary-dark px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
              onClick={() => window.openLeadForm()}
            >
              📞 Book Your Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}