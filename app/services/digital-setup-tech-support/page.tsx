"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Wrench, Settings, Users, Clock, Zap, Shield } from "lucide-react"
import Image from "next/image"

export default function DigitalSetupTechSupport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary-dark mb-6 animate-fade-up">
              <Wrench className="w-4 h-4" />
              No jargon • No ticketing system • Just real help
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
              🧰 Digital Setup &
              <span className="text-gradient block mt-2">Tech Support</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg sm:text-xl text-neutral-600 mb-4 leading-relaxed">
                <strong>Sometimes you just need a smart human to help set things up right.</strong>
              </p>
              <p className="text-base sm:text-lg text-neutral-600">
                We help small business owners clean up the tech mess, connect the right tools, and finally feel in control of their systems.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">No jargon</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">No ticketing system</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft border border-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-neutral-800">Just real help</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Book a Free Discovery Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-sm text-neutral-500 justify-center">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Fast, flat-rate pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>Setup packages start at $295</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>No surprises, no confusion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This is For */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            Who This is <span className="text-gradient">For</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                {[
                  "Just launched your business and don't know where to start",
                  "Have too many disconnected tools that don't talk to each other",
                  "Getting emails, DMs, forms, and bookings—but none of it is streamlined",
                  "Want to set up smart systems without becoming a tech expert"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Digital Setup and Tech Support"
                width={600}
                height={400}
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Setup Packages */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
            💡 Our <span className="text-gradient">Setup Packages</span>
          </h2>
          
          <p className="text-lg text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
            We'll get your digital life in order—fast, flat-rate, no surprises.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Tech Tune-Up */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1 border-2 border-primary/20">
              <div className="text-center mb-6">
                <div className="text-2xl mb-2">🟢</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1">Tech Tune-Up</h3>
                <p className="text-3xl font-bold text-primary mb-2">$295</p>
                <p className="text-sm text-neutral-600 italic">(flat)</p>
              </div>

              <div className="mb-6">
                <p className="text-lg font-medium text-neutral-800 mb-4">Get your digital ducks in a row.</p>
                <p className="text-sm text-neutral-600 mb-4">Perfect for new businesses or solo founders getting started.</p>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Domain + email setup (Google Workspace, Outlook, etc.)",
                  "Connect your website forms to your inbox",
                  "Social media profile cleanup",
                  "Recommendations for tools & systems that fit your needs"
                ].map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-neutral-50 rounded-xl p-3 mb-6">
                <p className="text-xs text-neutral-600 font-medium italic">"Set me up right from the start."</p>
              </div>

              <Button 
                className="w-full py-3 rounded-2xl font-semibold transition-all duration-300 bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary"
                onClick={() => window.openLeadForm()}
              >
                Get This Setup
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Smart Setup */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1 border-2 border-primary shadow-wave relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-medium">
                  Most Popular
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-2xl mb-2">🔵</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1">Smart Setup</h3>
                <p className="text-3xl font-bold text-primary mb-2">$495</p>
                <p className="text-sm text-neutral-600 italic">(flat)</p>
              </div>

              <div className="mb-6">
                <p className="text-lg font-medium text-neutral-800 mb-4">We'll connect your tools and make them talk.</p>
                <p className="text-sm text-neutral-600 mb-4">Perfect for growing businesses that need their systems to start working together.</p>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Everything in Tech Tune-Up",
                  "CRM or booking tool setup",
                  "Calendar integrations",
                  "Invoicing or payment systems",
                  "Basic AI assistant setup (like OpenAI or Tidio)"
                ].map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-neutral-50 rounded-xl p-3 mb-6">
                <p className="text-xs text-neutral-600 font-medium italic">"Help me stop copy-pasting between tools."</p>
              </div>

              <Button 
                className="w-full py-3 rounded-2xl font-semibold transition-all duration-300 bg-primary hover:bg-primary-dark text-white shadow-medium hover:shadow-strong"
                onClick={() => window.openLeadForm()}
              >
                Get This Setup
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Full Digital Overhaul */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1 border-2 border-accent/20">
              <div className="text-center mb-6">
                <div className="text-2xl mb-2">🟣</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1">Full Digital Overhaul</h3>
                <p className="text-3xl font-bold text-accent mb-2">$995</p>
                <p className="text-sm text-neutral-600 italic">(flat)</p>
              </div>

              <div className="mb-6">
                <p className="text-lg font-medium text-neutral-800 mb-4">Let's wipe the chaos and rebuild your digital foundation.</p>
                <p className="text-sm text-neutral-600 mb-4">Perfect for businesses that have outgrown duct tape solutions and need clarity.</p>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Everything in Smart Setup",
                  "System audit: what's working, what's not",
                  "Migration from old systems (like Mailchimp, Wix, etc.)",
                  "Custom dashboard for leads, traffic, or sales tracking",
                  "One-on-one training session to run your new setup"
                ].map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-neutral-50 rounded-xl p-3 mb-6">
                <p className="text-xs text-neutral-600 font-medium italic">"Let's clean house and start fresh."</p>
              </div>

              <Button 
                className="w-full py-3 rounded-2xl font-semibold transition-all duration-300 bg-accent/10 text-accent border-2 border-accent/20 hover:bg-accent hover:text-white hover:border-accent"
                onClick={() => window.openLeadForm()}
              >
                Get This Setup
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Help */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-xl">⏱️</div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">Ongoing Help</h3>
                  <p className="text-3xl font-bold text-primary">$95/hr</p>
                </div>
              </div>
              
              <p className="text-lg text-neutral-600 mb-6">
                For anything else—quick fixes, weird bugs, new features, or the thing your friend said "should be easy."
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Tech troubleshooting",
                  "AI and automation setup",
                  "System customization",
                  "Those weird requests you can't Google"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-4 mb-6">
                <p className="text-sm text-neutral-600 font-medium italic">"Can you just… help with this?"</p>
              </div>

              <div className="text-center">
                <Button 
                  className="bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary font-semibold transition-all duration-300"
                  onClick={() => window.openLeadForm()}
                >
                  Book a Session
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            ✨ Why <span className="text-gradient">Work With Us?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "No judgment, no confusion",
                description: "Just solutions that make sense"
              },
              {
                icon: <Shield className="w-8 h-8 text-accent" />,
                title: "Flat pricing you understand",
                description: "Know exactly what you'll pay upfront"
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "We're friendly, fast, and honest",
                description: "No corporate speak, just real help"
              },
              {
                icon: <Settings className="w-8 h-8 text-accent" />,
                title: "You'll actually enjoy this",
                description: "Getting tech off your plate feels amazing"
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                Before & After: Digital Cleanup
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                Here's what happens when you finally get your digital systems organized and working together.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">!</div>
                  <div>
                    <span className="font-medium text-red-600">Before:</span>
                    <span className="text-neutral-700 ml-2">Juggling 5 different tools, nothing talks to each other</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <div>
                    <span className="font-medium text-primary">After:</span>
                    <span className="text-neutral-700 ml-2">Everything flows seamlessly, automated where possible</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Image
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"
                alt="Digital Setup and Organization"
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
              Ready to Clean Up the <span className="text-wave-300">Digital Clutter?</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
              Let's make your tech life make sense again—without the stress.
            </p>
            
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100 hover:text-primary-dark px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
              onClick={() => window.openLeadForm()}
            >
              Book a Free Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}