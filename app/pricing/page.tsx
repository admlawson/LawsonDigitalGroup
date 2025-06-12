"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, CheckCircle2, X, Star, Zap, TrendingUp, Users, Shield, Globe, Bot, Search, Code, ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import PricingCalculator from "@/components/PricingCalculator"

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
              Transparent AI-Powered Pricing
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
              AI-Powered Growth Solutions
              <span className="text-gradient block mt-2">Built for Scale</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your business with intelligent automation, data-driven marketing, and conversion-optimized websites. 
              <strong className="text-primary"> No hidden fees, transparent pricing.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 text-primary hover:bg-primary/5 px-8 py-4 rounded-2xl text-lg font-semibold"
              >
                <Star className="mr-2 w-5 h-5" />
                View Case Studies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-sm text-neutral-500 justify-center">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>100+ SMBs Trust LDG</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>3X Average ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Why Invest in AI-Powered <span className="text-gradient">Digital Acceleration?</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our solutions pay for themselves through increased efficiency, higher conversion rates, and automated growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                concern: "$10K+ for a website? That's expensive.",
                reality: "LDG websites are high-performance lead generators that pay for themselves in months.",
                icon: <Globe className="w-6 h-6 text-primary" />
              },
              {
                concern: "Why not go with a cheap chatbot?",
                reality: "Cheap bots don't convert—LDG chatbots increase conversions by 3X.",
                icon: <Bot className="w-6 h-6 text-accent" />
              },
              {
                concern: "SEO is expensive—will it work?",
                reality: "Clients see 465% traffic growth & 200% better ad ROI with LDG.",
                icon: <Search className="w-6 h-6 text-primary" />
              },
            ].map((item, i) => (
              <div key={i} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-medium transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-xl">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="font-semibold text-red-700 text-sm">Concern</span>
                </div>
                <p className="font-medium text-neutral-800 mb-4">{item.concern}</p>
                
                <div className="h-px bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 my-6"></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-primary text-sm">Reality</span>
                </div>
                <p className="text-neutral-700 leading-relaxed">{item.reality}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
              onClick={() => window.openLeadForm()}
            >
              Let's Talk ROI – Free Consultation
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI-Powered Websites Pricing */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              🖥️ AI-Powered Website Solutions
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Custom-built websites that convert visitors into customers with intelligent design and automated engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Starter AI Website",
                price: "$3,500 – $10,000",
                description: "Perfect for small businesses ready to make their first digital impact.",
                features: [
                  "Custom responsive design",
                  "Mobile-optimized",
                  "SEO foundation",
                  "Lead capture forms",
                  "AI chat widget",
                  "Basic analytics"
                ],
                popular: false
              },
              {
                name: "Growth AI Website",
                price: "$10,000 – $20,000",
                description: "For businesses ready to scale with advanced AI automation.",
                features: [
                  "Everything in Starter +",
                  "Advanced AI chatbot",
                  "Multiple landing pages",
                  "Blog CMS system",
                  "Conversion optimization",
                  "A/B testing tools",
                  "CRM integration"
                ],
                popular: true
              },
              {
                name: "Enterprise AI Website",
                price: "$25,000+",
                description: "Complete digital transformation for ambitious growth.",
                features: [
                  "Advanced AI automations",
                  "Custom integrations",
                  "Membership systems",
                  "E-commerce platform",
                  "Multi-language support",
                  "Advanced analytics",
                  "Priority support"
                ],
                popular: false
              },
            ].map((tier, i) => (
              <div key={i} className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1 ${tier.popular ? 'ring-2 ring-primary shadow-wave' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold text-gradient mb-2">{tier.price}</p>
                  <p className="text-sm text-neutral-600">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

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
        </div>
      </section>

      {/* AI Chatbots & Automation Pricing */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              🤖 AI Chatbots & Automation
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              24/7 customer engagement and lead qualification that never sleeps, never misses a lead.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Basic AI Chatbot",
                price: "$5,000 – $10,000",
                features: ["Lead capture automation", "FAQ responses", "Email integration", "Basic analytics"],
                icon: <Bot className="w-6 h-6 text-primary" />
              },
              {
                name: "Advanced AI Chatbot",
                price: "$10,000 – $20,000",
                features: ["CRM + booking integrations", "Automated workflows", "Multi-channel support", "Advanced training"],
                icon: <Zap className="w-6 h-6 text-accent" />
              },
              {
                name: "Enterprise AI System",
                price: "$20,000+",
                features: ["AI-powered sales automation", "Voice AI capabilities", "Real-time data sync", "Custom integrations"],
                icon: <TrendingUp className="w-6 h-6 text-primary" />
              },
            ].map((tier, i) => (
              <div key={i} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">{tier.name}</h3>
                </div>
                
                <p className="text-2xl font-bold text-gradient mb-6">{tier.price}</p>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary py-3 rounded-2xl font-semibold transition-all duration-300"
                  onClick={() => window.openLeadForm()}
                >
                  Build Custom AI Chatbot
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & Marketing Pricing */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              📈 SEO & Marketing (Performance-Based)
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Data-driven marketing strategies that maximize ROI and dominate search results with measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "SEO Growth Plan",
                price: "$1,000 – $5,000",
                period: "/month",
                features: ["Local SEO optimization", "Content strategy", "Keyword rankings", "Monthly reporting"],
                results: "3X traffic increase"
              },
              {
                name: "Lead Generation System",
                price: "$5,000 – $10,000",
                period: "/month",
                features: ["Google Ads management", "AI-driven conversion funnel", "Landing page optimization", "CRM integration"],
                results: "5X more qualified leads"
              },
              {
                name: "Full-Scale Digital Marketing",
                price: "$10,000 – $25,000",
                period: "/month",
                features: ["Complete SEO strategy", "Multi-channel PPC", "Marketing automation", "Advanced analytics"],
                results: "465% growth average"
              },
            ].map((tier, i) => (
              <div key={i} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl font-bold text-gradient">{tier.price}</span>
                    <span className="text-neutral-600">{tier.period}</span>
                  </div>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {tier.results}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary py-3 rounded-2xl font-semibold transition-all duration-300"
                  onClick={() => window.openLeadForm()}
                >
                  Start Growing Today
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pricing Calculator */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Get an <span className="text-gradient">Instant Quote</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Customize your package and see real-time pricing estimates tailored to your business needs.
            </p>
          </div>
          <PricingCalculator />
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              LDG vs. <span className="text-gradient">Traditional Agencies</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              See why forward-thinking businesses choose AI-powered solutions over outdated approaches.
            </p>
          </div>

          <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left p-4 font-bold text-neutral-900">Feature</th>
                  <th className="text-center p-4 font-bold text-neutral-600">Traditional Agency</th>
                  <th className="text-center p-4 font-bold text-primary">LDG AI-Powered Solutions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { 
                    feature: "AI Optimization", 
                    traditional: "❌ Not Available", 
                    ldg: "✅ AI chatbots & automation included" 
                  },
                  { 
                    feature: "SEO Strategy", 
                    traditional: "Basic keyword stuffing", 
                    ldg: "Advanced AI-driven SEO & high-performance optimization" 
                  },
                  { 
                    feature: "Conversion Focus", 
                    traditional: "Generic templates", 
                    ldg: "Data-driven, conversion-optimized websites" 
                  },
                  { 
                    feature: "Lead Generation", 
                    traditional: "❌ Manual follow-ups", 
                    ldg: "✅ AI-powered lead capture & CRM integrations" 
                  },
                  { 
                    feature: "Performance Tracking", 
                    traditional: "Monthly reports", 
                    ldg: "Real-time analytics & optimization" 
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-neutral-100">
                    <td className="p-4 font-medium text-neutral-900">{row.feature}</td>
                    <td className="text-center p-4 text-neutral-600">{row.traditional}</td>
                    <td className="text-center p-4 text-primary font-medium">{row.ldg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
              onClick={() => window.openLeadForm()}
            >
              See What's Included in Our Solutions
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Real <span className="text-gradient">Results</span> for Real Businesses
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              See how our AI-powered solutions deliver measurable ROI and transform business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "LDG's AI-powered website & chatbot turned our traffic into 3X more leads. ROI was incredible.",
                author: "Sarah Johnson",
                position: "CEO, TechStart Solutions",
                result: "3X lead increase",
                investment: "Paid for itself in 2 months",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b7c4?w=80&h=80&fit=crop&crop=face"
              },
              {
                quote: "We ranked #1 on Google in 3 months & cut our ad costs by 50% with LDG's AI strategies!",
                author: "Michael Chen",
                position: "Founder, GrowthCorp",
                result: "#1 Google ranking",
                investment: "50% lower ad spend",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
              },
            ].map((testimonial, i) => (
              <div key={i} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.result}
                  </span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.investment}
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

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
              onClick={() => window.openLeadForm()}
            >
              See More Success Stories
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-wave rounded-2xl sm:rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready for an <span className="text-wave-300">AI-Powered Growth Strategy?</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
              Get a FREE custom quote and strategy session. No pressure, just results-driven solutions tailored to your business.
            </p>

            <form className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-white">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Smith" className="bg-white/10 border-white/20 text-white placeholder-white/70 backdrop-blur-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-white">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@yourcompany.com" className="bg-white/10 border-white/20 text-white placeholder-white/70 backdrop-blur-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="business-type" className="block mb-2 font-medium text-white">
                  Business Type
                </label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
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
                <label htmlFor="services" className="block mb-2 font-medium text-white">
                  What Services Interest You?
                </label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                    <SelectValue placeholder="Select services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">AI-Powered Website</SelectItem>
                    <SelectItem value="chatbot">AI Chatbot & Automation</SelectItem>
                    <SelectItem value="seo">SEO & Marketing</SelectItem>
                    <SelectItem value="custom">Custom Development</SelectItem>
                    <SelectItem value="all">Complete Growth Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                size="lg"
                className="w-full bg-white text-primary hover:bg-neutral-100 hover:text-primary-dark py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Get Instant Pricing & Book Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-center text-sm opacity-75">
                🎯 100% Free Strategy Call • No Pressure • Custom Solutions Only
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}