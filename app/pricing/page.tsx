"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Star, Zap, TrendingUp, Users, Shield, Globe, Bot, Search, Code, ArrowRight, Play, Clock, Plus, Smartphone, Monitor } from "lucide-react"
import Image from "next/image"

export default function Pricing() {
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
              Simple, Honest Pricing
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
              Built for Small Businesses
              <span className="text-gradient block mt-2">That Want to Grow</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg sm:text-xl text-neutral-600 mb-4 leading-relaxed">
                <strong>If your business runs on sticky notes, spreadsheets, or late-night texts—we can build you something better.</strong>
              </p>
              <p className="text-base sm:text-lg text-neutral-600">
                Need a tool that just works the way your business does? We'll build it, name it, and hand it over with zero fluff.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Get Your Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 text-primary hover:bg-primary/5 px-8 py-4 rounded-2xl text-lg font-semibold"
              >
                <Play className="mr-2 w-5 h-5" />
                See Examples
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-sm text-neutral-500 justify-center">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>100+ Small Businesses Served</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Fixed Pricing, No Surprises</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Monitor className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
                Web Development
              </h2>
            </div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Your website should work as hard as you do. Get online, get found, and get customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              {
                name: "Starter Site",
                price: "$995",
                description: "Look pro, get online fast.",
                icon: "🟢",
                features: [
                  "Professional 5-page website",
                  "Mobile-friendly design", 
                  "Contact forms that work",
                  "Basic SEO setup",
                  "Social media links",
                  "Google My Business integration"
                ],
                popular: false,
                perfect: "Perfect for: New businesses, sole proprietors, getting started online"
              },
              {
                name: "Growth Site",
                price: "$1,995",
                description: "Add Google, leads & trust.",
                icon: "🔵",
                features: [
                  "Everything in Starter +",
                  "Lead capture system",
                  "Google Analytics setup",
                  "Review management",
                  "Blog/news section",
                  "Advanced SEO optimization",
                  "Social proof sections"
                ],
                popular: true,
                perfect: "Perfect for: Growing businesses, service providers, local companies"
              },
              {
                name: "Authority Site",
                price: "$2,995",
                description: "Full digital presence & lead engine.",
                icon: "🟣",
                features: [
                  "Everything in Growth +",
                  "AI chatbot integration",
                  "Customer portal",
                  "Online booking system",
                  "E-commerce capability",
                  "Advanced analytics",
                  "Multi-location support"
                ],
                popular: false,
                perfect: "Perfect for: Established businesses, multiple locations, serious growth"
              },
            ].map((tier, i) => (
              <div key={i} className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1 border-2 ${tier.popular ? 'border-primary shadow-wave' : 'border-neutral-100'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-2xl mb-2">{tier.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">{tier.name}</h3>
                  <p className="text-3xl font-bold text-gradient mb-2">{tier.price}</p>
                  <p className="text-sm text-neutral-600 italic">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-neutral-50 rounded-xl p-3 mb-6">
                  <p className="text-xs text-neutral-600 font-medium">{tier.perfect}</p>
                </div>

                <Button 
                  className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-primary hover:bg-primary-dark text-white shadow-medium hover:shadow-strong' 
                      : 'bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary'
                  }`}
                  onClick={() => window.openLeadForm()}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Web Add-ons */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Partner Plan */}
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-xl">➕</div>
                <h3 className="text-xl font-bold text-neutral-900">Partner Plan</h3>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">$200/mo</span>
              </div>
              <p className="text-neutral-600 mb-4">Monthly updates, SEO, Google listing, blog management.</p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Monthly website updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>SEO monitoring & improvements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Google listing management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Monthly blog posts</span>
                </li>
              </ul>
            </div>

            {/* Custom Work */}
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-xl">⏱️</div>
                <h3 className="text-xl font-bold text-neutral-900">Custom Work</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">$95/hr</span>
              </div>
              <p className="text-neutral-600 mb-4">Anything outside scope or ongoing changes.</p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Additional pages or features</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Special integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Design changes & updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Training & support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Development Section */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Smartphone className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
                App Development
              </h2>
            </div>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Stop juggling spreadsheets and sticky notes. We'll build you a tool that actually works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              {
                name: "Mini App",
                price: "$1,995",
                description: "Simple tool that solves one problem.",
                icon: "🟢",
                examples: "Think: quote form, calculator, intake flow",
                features: [
                  "Single-purpose tool",
                  "Mobile-friendly design",
                  "Basic data collection",
                  "Email notifications",
                  "Simple reporting",
                  "30 days support"
                ],
                popular: false,
                perfect: "Perfect for: Quick wins, automating one annoying task"
              },
              {
                name: "Workflow App",
                price: "$4,995",
                description: "Internal tool to streamline a business process.",
                icon: "🔵",
                examples: "Think: CRM, job tracker, booking system",
                features: [
                  "Multi-user access",
                  "Data management",
                  "Custom workflows",
                  "Reporting dashboard",
                  "Mobile app version",
                  "6 months support"
                ],
                popular: true,
                perfect: "Perfect for: Teams, process optimization, reducing chaos"
              },
              {
                name: "Client Portal",
                price: "$9,995+",
                description: "Customer-facing app with login, dashboard, or mobile experience.",
                icon: "🟣",
                examples: "Think: account hub, project tracker, chat portal",
                features: [
                  "Customer login system",
                  "Interactive dashboard",
                  "Document sharing",
                  "Communication tools",
                  "Mobile app version",
                  "12 months support"
                ],
                popular: false,
                perfect: "Perfect for: Client-facing businesses, premium service delivery"
              },
            ].map((tier, i) => (
              <div key={i} className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1 border-2 ${tier.popular ? 'border-primary shadow-wave' : 'border-neutral-100'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-2xl mb-2">{tier.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">{tier.name}</h3>
                  <p className="text-3xl font-bold text-gradient mb-2">{tier.price}</p>
                  <p className="text-sm text-neutral-600 italic mb-2">{tier.description}</p>
                  <p className="text-xs text-neutral-500">{tier.examples}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-neutral-50 rounded-xl p-3 mb-6">
                  <p className="text-xs text-neutral-600 font-medium">{tier.perfect}</p>
                </div>

                <Button 
                  className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-primary hover:bg-primary-dark text-white shadow-medium hover:shadow-strong' 
                      : 'bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary'
                  }`}
                  onClick={() => window.openLeadForm()}
                >
                  Build This
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* App Add-ons */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* App Management Plan */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-xl">➕</div>
                <h3 className="text-xl font-bold text-neutral-900">App Management Plan</h3>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">$200/mo</span>
              </div>
              <p className="text-neutral-600 mb-4">Monthly updates, hosting support, bug fixes, and feature tuning.</p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Monthly updates & improvements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Hosting & security monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Bug fixes & maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Feature tuning & optimization</span>
                </li>
              </ul>
            </div>

            {/* Custom Work */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-xl">⏱️</div>
                <h3 className="text-xl font-bold text-neutral-900">Custom Work</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">$95/hr</span>
              </div>
              <p className="text-neutral-600 mb-4">Extra features, changes, or add-ons.</p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>New features & modules</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Third-party integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Design changes & updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Training & documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Prices Work */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Why Our <span className="text-gradient">Pricing Works</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              No surprises, no hidden fees, no long contracts. Just honest work at fair prices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Fixed Prices, No Surprises",
                description: "You know exactly what you'll pay before we start. No scope creep, no sudden extras, no 'additional fees' that magically appear."
              },
              {
                icon: <Clock className="w-8 h-8 text-accent" />,
                title: "Pay for Results, Not Hours",
                description: "We price based on what you get, not how long it takes us. Fast delivery is a feature, not a penalty."
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Built for Small Business",
                description: "We understand your budget matters. Every dollar spent should drive growth, not just look pretty."
              }
            ].map((benefit, i) => (
              <div key={i} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real businesses, real results, real ROI from our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "The Growth Site paid for itself in 6 weeks. We went from getting 2-3 calls a week to 2-3 calls a day.",
                author: "Mike Rodriguez",
                position: "Owner, Rodriguez Plumbing",
                solution: "Growth Site ($1,995)",
                result: "10X more calls",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
              },
              {
                quote: "Our Workflow App replaced 3 different spreadsheets. Now my team actually knows what's going on.",
                author: "Sarah Chen",
                position: "CEO, Chen Construction",
                solution: "Workflow App ($4,995)",
                result: "Eliminated chaos",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b7c4?w=80&h=80&fit=crop&crop=face"
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.solution}
                  </span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.result}
                  </span>
                </div>
                
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-neutral-900">{testimonial.author}</p>
                    <p className="text-sm text-neutral-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Common <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Everything you need to know about working with us.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to build?",
                answer: "Websites: 2-4 weeks. Mini Apps: 3-5 weeks. Workflow Apps: 6-8 weeks. Client Portals: 8-12 weeks. We'll give you an exact timeline before we start."
              },
              {
                question: "What if I need changes later?",
                answer: "That's what our $95/hr custom work rate is for. Small tweaks are usually quick and affordable. Big changes, we'll quote upfront."
              },
              {
                question: "Do I need to pay everything upfront?",
                answer: "Nope. 50% to start, 50% when you're happy with the final result. No payment until you approve everything."
              },
              {
                question: "What happens if I don't like it?",
                answer: "We work with you until you do. Unlimited revisions during the project. We want you to love what we build."
              },
              {
                question: "Do you handle hosting and maintenance?",
                answer: "Yes! Our Partner Plan ($200/mo) covers hosting, updates, security, and maintenance. Or handle it yourself—your choice."
              }
            ].map((faq, i) => (
              <div key={i} className="glass-effect rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{faq.question}</h3>
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-wave rounded-2xl sm:rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Build Something <span className="text-wave-300">That Actually Works?</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
              Tell us what's driving you crazy in your business, and we'll build you a solution that fixes it. 
              <strong> No fluff, no overselling, just tools that work.</strong>
            </p>

            <form className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/10 border-white/20 text-white placeholder-white/70 backdrop-blur-sm h-12" 
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-white/10 border-white/20 text-white placeholder-white/70 backdrop-blur-sm h-12" 
                  />
                </div>
              </div>

              <div>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-sm h-12">
                    <SelectValue placeholder="What do you need?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter-site">Starter Site ($995)</SelectItem>
                    <SelectItem value="growth-site">Growth Site ($1,995)</SelectItem>
                    <SelectItem value="authority-site">Authority Site ($2,995)</SelectItem>
                    <SelectItem value="mini-app">Mini App ($1,995)</SelectItem>
                    <SelectItem value="workflow-app">Workflow App ($4,995)</SelectItem>
                    <SelectItem value="client-portal">Client Portal ($9,995+)</SelectItem>
                    <SelectItem value="not-sure">Not sure - help me decide</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder="What's the most annoying thing about running your business right now? (The more specific, the better we can help)"
                  className="bg-white/10 border-white/20 text-white placeholder-white/70 backdrop-blur-sm h-24 resize-none"
                />
              </div>

              <Button 
                size="lg"
                className="w-full bg-white text-primary hover:bg-neutral-100 hover:text-primary-dark py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Get My Custom Quote (Free)
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-center text-sm opacity-75">
                ✅ Fixed prices ✅ No long contracts ✅ Built for small business ✅ Ready in weeks, not months
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}