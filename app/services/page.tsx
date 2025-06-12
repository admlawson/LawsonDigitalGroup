"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, CheckCircle2, ArrowRight, Zap, TrendingUp, Users, Shield, Globe, Bot, Search, Code, Play, Star, Clock } from "lucide-react"
import Image from "next/image"

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        
        {/* Background Elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 hidden xl:block">
          <Image
            src="https://images.unsplash.com/photo-1518085250887-2f903c200fee?w=800&h=600&fit=crop"
            alt="Technology Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary-dark mb-6 animate-fade-up">
              <Zap className="w-4 h-4" />
              Services Built for Small Business Growth
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
              More Leads. Less Busywork.
              <span className="text-gradient block mt-2">Tools That Actually Work.</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg sm:text-xl text-neutral-600 mb-4 leading-relaxed">
                Whether you need a professional website, better visibility, or a tool to stop the spreadsheet madness—we'll build it fast, and we'll build it right.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Get Your Free Strategy Call
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
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Trusted by 100+ small businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Fixed pricing, no surprises</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 sm:gap-12">
            
            {/* Smart Business Websites */}
            <div className="group">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1 border-2 border-neutral-100 hover:border-primary/20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <Globe className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Smart Business Websites</h2>
                        <p className="text-primary font-semibold">Packages start at $995</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                      Look professional, get found, and turn visitors into customers. We build websites that do more than look good—they drive results.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        "Professional design that converts",
                        "Mobile-first and lightning fast",
                        "SEO optimized from day one",
                        "Lead capture that actually works",
                        "Google Analytics & tracking setup"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/services/ai-powered-websites">
                      <Button className="bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary font-semibold transition-all duration-300 shadow-soft group">
                        View Website Packages
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                        alt="Professional Business Website"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-soft w-full h-auto"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-medium">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium">Converting Visitors</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Automation & Lead Follow-Up */}
            <div className="group">
              <div className="gradient-bg rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
                        alt="AI Chatbot Automation"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-soft w-full h-auto"
                      />
                      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-medium">
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">24/7 Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                        <Bot className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Automation & Lead Follow-Up</h2>
                        <p className="text-primary font-semibold">Packages start at $1,995</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                      Let smart tools handle your follow-ups, FAQs, and lead capture—24/7. Imagine a system that responds while you're working, sleeping, or actually taking a day off.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        "Instant customer responses",
                        "Automated lead qualification",
                        "Smart appointment booking",
                        "CRM integration & follow-ups",
                        "24/7 customer engagement"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/services/ai-chatbots">
                      <Button className="bg-white text-primary border-2 border-white/20 hover:bg-primary hover:text-white hover:border-primary font-semibold transition-all duration-300 shadow-soft group">
                        View Automation Options
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Found & Grow */}
            <div className="group">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1 border-2 border-neutral-100 hover:border-primary/20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <Search className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Get Found & Grow</h2>
                        <p className="text-primary font-semibold">Monthly plans starting at $495</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                      Show up on Google. Get more clicks. Turn visits into real business. From local SEO to simple content strategies, we help people find you—and trust you.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        "Google Business Profile optimization",
                        "Local SEO that actually works",
                        "Content that brings in leads",
                        "Review management & reputation",
                        "Monthly performance tracking"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/services/seo-marketing">
                      <Button className="bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary font-semibold transition-all duration-300 shadow-soft group">
                        Explore Growth Packages
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
                        alt="SEO Growth Analytics"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-soft w-full h-auto"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-medium">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="text-sm font-medium">Growing Fast</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Apps & Tools */}
            <div className="group">
              <div className="gradient-bg rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"
                        alt="Custom App Development"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-soft w-full h-auto"
                      />
                      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-medium">
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Custom Built</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                        <Code className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Custom Apps & Tools</h2>
                        <p className="text-primary font-semibold">Projects starting at $1,995</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                      Tired of sticky notes, spreadsheets, and disconnected tools? We build apps that match how your business actually runs—from job trackers to client portals.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        "Simple tools that solve real problems",
                        "Workflow apps for your team",
                        "Client portals & dashboards",
                        "Mobile-friendly by design",
                        "Integrates with your existing tools"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/services/custom-development">
                      <Button className="bg-white text-primary border-2 border-white/20 hover:bg-primary hover:text-white hover:border-primary font-semibold transition-all duration-300 shadow-soft group">
                        See App Development Options
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LDG */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Why Small Businesses <span className="text-gradient">Choose LDG</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We're not just another digital agency—we're your growth partners who actually understand small business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "100+ Businesses Served",
                description: "We've helped over 100 small businesses grow faster with smart technology."
              },
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "Fast Implementation",
                description: "Most projects launch in 2-8 weeks. No endless delays or scope creep."
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Fixed Pricing",
                description: "Know exactly what you'll pay upfront. No surprises, no hidden fees."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
                title: "Real Results",
                description: "3X more leads, 50% lower costs, and tools that actually work daily."
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

      {/* Success Stories */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Real Stories from <span className="text-gradient">Real Businesses</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              See how businesses like yours are growing faster with our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Our new website brought in 3X more leads in the first month. The chatbot handles inquiries even when we're closed!",
                author: "Sarah Johnson",
                position: "Owner, Johnson Home Services",
                solution: "Smart Website + Automation",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b7c4?w=80&h=80&fit=crop&crop=face"
              },
              {
                quote: "The custom app replaced our chaotic spreadsheet system. Now my team actually knows what's happening.",
                author: "Mike Rodriguez",
                position: "CEO, Rodriguez Construction",
                solution: "Custom Workflow App",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  {testimonial.solution}
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

      {/* Not Sure Where to Start */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-wave rounded-2xl sm:rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Not Sure <span className="text-wave-300">Where to Start?</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
              Get a free, no-pressure strategy call. We'll help you figure out what you need, what you don't, and what'll move the needle first.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-neutral-100 hover:text-primary-dark px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm opacity-75 items-center justify-center">
              <span>✅ Free consultation</span>
              <span>✅ No commitment required</span>
              <span>✅ Custom action plan included</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}