"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X, ArrowRight, TrendingUp, Clock, Users } from "lucide-react"
import Image from "next/image"

export default function AIPoweredWebsites() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary-dark mb-6 animate-fade-up">
              <Users className="w-4 h-4" />
              Most small businesses see more leads within 30 days
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
              Smart Business Websites That Actually
              <span className="text-gradient block mt-2">Bring You Customers</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg sm:text-xl text-neutral-600 mb-4 leading-relaxed">
                <strong>Look Legit. Get Found. Grow Faster.</strong>
              </p>
              <p className="text-base sm:text-lg text-neutral-600">
                Your website shouldn't just sit there. It should be your hardest-working employee—bringing in leads, answering questions, and converting visitors even while you sleep.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-neutral-600 self-center">💬 No tech talk. Just real advice.</p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-sm text-neutral-500 justify-center">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Launch in 3-5 days</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>Starter Package: $995</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No long contracts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Most Websites Fall Flat */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            Why Most Small Business Websites <span className="text-gradient">Fall Flat</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">
            <div>
              <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <X className="w-6 h-6 text-red-500" />
                  Old way: It's just an online brochure.
                </h3>
                <p className="text-neutral-600">Static pages that look nice but don't do anything to help your business grow.</p>
              </div>
              
              <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  New way: It works for you 24/7
                </h3>
                <p className="text-neutral-600">Capturing leads, answering questions, and getting you booked—even while you sleep.</p>
              </div>
            </div>
            
            <div>
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Professional Business Website"
                width={600}
                height={400}
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sound Familiar */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            <span className="text-gradient">Sound Familiar?</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                problem: "We have a website… but no one contacts us.",
                solution: "We fix that with smart lead forms and calls-to-action that work."
              },
              {
                problem: "I'm paying for ads but not getting results.",
                solution: "We make sure your site is designed to convert clicks into customers."
              },
              {
                problem: "I can't keep up with emails or form submissions.",
                solution: "We install a friendly chatbot that responds instantly and qualifies leads."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="flex items-start gap-3">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-neutral-800">"{item.problem}"</p>
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

      {/* What You Get */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            What You Get With Every <span className="text-gradient">Website Package</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left p-4 text-lg font-bold text-neutral-900">Feature</th>
                  <th className="text-left p-4 text-lg font-bold text-neutral-900">What It Does for You</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Lead Forms That Work",
                    benefit: "Sends customer info right to your inbox or phone"
                  },
                  {
                    feature: "Google Business Integration", 
                    benefit: "Helps you show up in local search results"
                  },
                  {
                    feature: "SEO-Ready Pages",
                    benefit: "Built to get you found on Google"
                  },
                  {
                    feature: "Mobile-Friendly Design",
                    benefit: "Looks great on every screen"
                  },
                  {
                    feature: "AI Chatbot (Optional)",
                    benefit: "Handles common questions & captures leads"
                  },
                  {
                    feature: "Easy-to-Edit Layout",
                    benefit: "We teach you how to update your site easily"
                  }
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-neutral-100 ${i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="font-medium text-neutral-900">{row.feature}</span>
                      </div>
                    </td>
                    <td className="p-4 text-neutral-700">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            💼 <span className="text-gradient">Real Results</span>
          </h2>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-bold text-neutral-900">📍 Local Service Business</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-red-600 mb-2">Before:</h4>
                <p className="text-neutral-700">A basic website with no real leads.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">After:</h4>
                <p className="text-neutral-700">A new design + smart forms + chatbot = <strong>3X more leads in 60 days</strong></p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                "Bounce rate cut in half",
                "200% more Google interactions", 
                "More bookings, fewer missed messages"
              ].map((result, i) => (
                <div key={i} className="flex items-center gap-2 bg-primary/10 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-800">{result}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                className="bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary font-semibold transition-all duration-300"
                onClick={() => window.location.href = '/case-studies'}
              >
                See More Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-wave rounded-2xl sm:rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Your Website Should Work as <span className="text-wave-300">Hard as You Do</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
              Let's build something that actually helps your business grow.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Launch in 3–5 days</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Starter Package: $995</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Free Strategy Call</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100 hover:text-primary-dark px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
              onClick={() => window.openLeadForm()}
            >
              Let's Build Your Website
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}