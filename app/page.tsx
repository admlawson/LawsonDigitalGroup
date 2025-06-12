"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Zap, TrendingUp, Users, Shield, Star, Play } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [isPlayAIReady, setIsPlayAIReady] = useState(false)

  useEffect(() => {
    const checkPlayAI = () => {
      if (typeof window !== "undefined" && window.PlayAI) {
        setIsPlayAIReady(true)
      }
    }

    checkPlayAI()
    const intervalId = setInterval(checkPlayAI, 1000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const handleChatWithAgent = () => {
      if (isPlayAIReady) {
        window.PlayAI.open("D16Yljss4WqSMLo2vsYRK")
      } else {
        console.error("PlayAI is not ready yet")
      }
    }

    window.addEventListener("chatWithAgent", handleChatWithAgent)
    return () => window.removeEventListener("chatWithAgent", handleChatWithAgent)
  }, [isPlayAIReady])

  const chatWithAgent = () => {
    if (isPlayAIReady) {
      window.PlayAI.open("D16Yljss4WqSMLo2vsYRK")
    } else {
      console.error("PlayAI is not ready yet")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary-dark mb-8 animate-fade-up">
              <Zap className="w-4 h-4" />
              Trusted by 100+ Growing Businesses
            </div>
            
            <h1 className="text-hero font-bold text-neutral-900 mb-6 animate-fade-up">
              AI-Powered Growth for
              <span className="text-gradient block mt-2">Small Businesses</span>
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up">
              Transform your business with intelligent websites, automated customer engagement, and data-driven marketing that actually converts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Get Your Free AI Strategy
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-4 rounded-2xl text-lg font-semibold"
                onClick={chatWithAgent}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-500 animate-fade-up">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>3X Average Lead Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>Enterprise-Grade Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-neutral-900 mb-4">
              Why Growing Businesses Choose LDG
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with proven growth strategies to deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "AI-Powered Automation",
                description: "Automate customer interactions, lead qualification, and follow-ups while you focus on growing your business.",
                metric: "80% time saved"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-accent" />,
                title: "Data-Driven Results",
                description: "Every strategy is backed by analytics and optimized for maximum ROI and conversion rates.",
                metric: "3X lead increase"
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "24/7 Customer Engagement",
                description: "Never miss a potential customer with AI chatbots that work around the clock.",
                metric: "50% faster response"
              }
            ].map((benefit, i) => (
              <div key={i} className="group">
                <div className="glass-effect rounded-3xl p-8 h-full hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      {benefit.icon}
                    </div>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {benefit.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-neutral-900 mb-4">
              Complete AI Growth Solutions
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From intelligent websites to automated marketing, we have everything you need to scale your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Websites",
                description: "Websites that convert visitors into customers with intelligent design and automated engagement.",
                features: ["Smart Lead Capture", "A/B Testing", "Performance Analytics"],
                image: "/placeholder.svg?height=300&width=400"
              },
              {
                title: "AI Chatbots & Automation",
                description: "24/7 customer support and lead qualification that never sleeps, never misses a lead.",
                features: ["Instant Responses", "Lead Qualification", "CRM Integration"],
                image: "/placeholder.svg?height=300&width=400"
              },
              {
                title: "SEO & Digital Marketing",
                description: "Data-driven marketing strategies that maximize your ROI and dominate search results.",
                features: ["Keyword Optimization", "Content Strategy", "Analytics Dashboard"],
                image: "/placeholder.svg?height=300&width=400"
              },
              {
                title: "Custom Development",
                description: "Tailored solutions that integrate seamlessly with your business processes and goals.",
                features: ["Custom Integrations", "Scalable Architecture", "Ongoing Support"],
                image: "/placeholder.svg?height=300&width=400"
              }
            ].map((service, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                      <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="text-neutral-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                    <div className="lg:w-64">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={300}
                        height={200}
                        className="rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-neutral-900 mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              See how businesses like yours are achieving remarkable growth with our AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "LDG transformed our lead generation. We went from 10 to 150+ qualified leads per month.",
                author: "Sarah Johnson",
                position: "CEO, TechStart Solutions",
                metric: "15X lead increase",
                image: "/placeholder.svg?height=80&width=80"
              },
              {
                quote: "The AI chatbot handles 80% of our customer inquiries, freeing our team for strategic work.",
                author: "Michael Chen",
                position: "Founder, GrowthCorp",
                metric: "80% automation",
                image: "/placeholder.svg?height=80&width=80"
              },
              {
                quote: "Our website conversion rate doubled in just 60 days with LDG's optimization strategies.",
                author: "Lisa Rodriguez",
                position: "Marketing Director, ScaleUp Inc",
                metric: "2X conversion rate",
                image: "/placeholder.svg?height=80&width=80"
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass-effect rounded-3xl p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">
                  {testimonial.metric}
                </div>
                <p className="text-neutral-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                    <p className="text-sm text-neutral-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join 100+ businesses already scaling faster with our AI-powered growth solutions. 
              Get your free strategy session today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-neutral-100 px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium"
                onClick={() => window.openLeadForm()}
              >
                Get Your Free Strategy Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-semibold"
                onClick={chatWithAgent}
              >
                <Play className="mr-2 w-5 h-5" />
                Chat with an Expert
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              ✓ Free consultation ✓ No commitment ✓ Custom strategy included
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}