"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X, ArrowRight, Clock, Users, MessageSquare, Calendar, Zap } from "lucide-react"
import Image from "next/image"

export default function AIChatbots() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary-dark mb-6 animate-fade-up">
              <MessageSquare className="w-4 h-4" />
              3X more leads • 80% faster response time
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
              Smart Chatbots That Capture Leads
              <span className="text-gradient block mt-2">While You Sleep</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg sm:text-xl text-neutral-600 mb-4 leading-relaxed">
                <strong>Turn visitors into customers—even when you're off the clock.</strong>
              </p>
              <p className="text-base sm:text-lg text-neutral-600">
                We build chatbots that answer common questions, collect customer info, and book appointments—automatically.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">3X more leads</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">80% faster response</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">No missed messages</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Book a Free Chatbot Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-sm text-neutral-500 justify-center">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Fast turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>Chatbot setups start at $1,995</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Fixed pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Small Businesses Need a Smart Chatbot */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            Why Small Businesses Need a <span className="text-gradient">Smart Chatbot</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                problem: "You're too busy to reply fast enough.",
                solution: "Your chatbot responds instantly, every time."
              },
              {
                problem: "Your team is stuck repeating the same answers.",
                solution: "Your chatbot handles FAQs, bookings, and lead capture."
              },
              {
                problem: "You're losing leads after-hours.",
                solution: "Your chatbot is always available—nights, weekends, holidays."
              }
            ].map((item, i) => (
              <div key={i} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-neutral-800">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-neutral-700">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Chatbots Can Do */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
            What Our <span className="text-gradient">Chatbots Can Do</span>
          </h2>
          
          <div className="text-center mb-16">
            <p className="text-lg text-neutral-600 italic">💬 "Think of it as a front desk that never clocks out."</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-soft overflow-hidden">
              <thead>
                <tr className="bg-primary/10 border-b-2 border-primary/20">
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">Feature</th>
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">What It Means for You</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "24/7 Lead Capture",
                    benefit: "No more lost leads after-hours",
                    icon: <Clock className="w-5 h-5 text-primary" />
                  },
                  {
                    feature: "FAQ Automation", 
                    benefit: "Answers common questions so your team doesn't have to",
                    icon: <MessageSquare className="w-5 h-5 text-primary" />
                  },
                  {
                    feature: "Instant Booking",
                    benefit: "Customers book straight into your calendar",
                    icon: <Calendar className="w-5 h-5 text-primary" />
                  },
                  {
                    feature: "Custom Responses",
                    benefit: "Tailored to your services, tone, and process",
                    icon: <Zap className="w-5 h-5 text-primary" />
                  },
                  {
                    feature: "CRM & Email Integration",
                    benefit: "Automatically syncs with your marketing tools",
                    icon: <ArrowRight className="w-5 h-5 text-primary" />
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
                            <span className="font-medium text-neutral-900">{row.feature}</span>
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

          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-soft border border-primary/10">
                <span className="text-primary font-bold">📦 Chatbot setups start at $1,995</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-soft border border-accent/10">
                <span className="text-accent font-bold">🛠️ Custom options available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            💼 Real Results: <span className="text-gradient">Chatbot Increases Sales by 40%</span>
          </h2>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-bold text-neutral-900">📍 Industry: E-Commerce Retailer</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <h4 className="font-bold text-red-600 mb-4 text-lg">Before:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Lots of website traffic, but low engagement</li>
                  <li>• No one to answer questions after hours</li>
                  <li>• Missed opportunities every day</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <h4 className="font-bold text-primary mb-4 text-lg">After:</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Chatbot captured interest, answered product questions</li>
                  <li>• Visitors booked consults and completed purchases</li>
                  <li>• <strong>40% more sales in 30 days</strong></li>
                  <li>• <strong>$75K in recovered revenue</strong></li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button 
                className="bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary font-semibold transition-all duration-300"
                onClick={() => window.location.href = '/case-studies'}
              >
                See More Success Stories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                See a Chatbot in Action
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                Here's what your customers experience when they visit your website with a smart chatbot installed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <span>Visitor lands on your website</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <span>Chatbot greets them and asks how it can help</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <span>Answers questions and captures contact info</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <span>Books appointment or sends lead to your team</span>
                </div>
              </div>
            </div>
            
            <div>
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
                alt="AI Chatbot in Action"
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
              Ready to Stop Losing Leads <span className="text-wave-300">While You Sleep?</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
              We'll build you a chatbot that works harder (and cheaper) than a full-time employee.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Fast turnaround</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Fixed pricing</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Works with your current tools</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100 hover:text-primary-dark px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
              onClick={() => window.openLeadForm()}
            >
              Book Your Free Chatbot Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}