"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Zap, TrendingUp, Users, Shield, Star, Play, Monitor, MessageSquare, Search, Code } from "lucide-react"
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
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        
        {/* Hero Background Image - Desktop Only */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 hidden xl:block">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=top"
            alt="AI Technology Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-primary-dark mb-6 sm:mb-8 animate-fade-up">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  Trusted by 100+ Growing Businesses
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 animate-fade-up leading-tight">
                  AI-Powered Growth for
                  <span className="text-gradient block mt-1 sm:mt-2">Small Businesses</span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-neutral-600 mb-6 sm:mb-8 leading-relaxed animate-fade-up max-w-xl mx-auto lg:mx-0">
                  Transform your business with intelligent websites, automated customer engagement, and data-driven marketing that actually converts.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-up justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300 w-full sm:w-auto"
                    onClick={() => window.openLeadForm()}
                  >
                    Get Your Free AI Strategy
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold w-full sm:w-auto"
                    onClick={chatWithAgent}
                  >
                    <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Watch Demo
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm text-neutral-500 animate-fade-up justify-center lg:justify-start">
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <div className="flex -space-x-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span>3X Average Lead Increase</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                    <span>Enterprise-Grade Security</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="relative order-first lg:order-last">
                <div className="relative max-w-md mx-auto lg:max-w-none">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="AI Dashboard Analytics"
                    width={600}
                    height={400}
                    className="rounded-2xl sm:rounded-3xl shadow-strong w-full h-auto"
                  />
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-medium">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm font-medium">AI Agent Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
              Why Growing Businesses Choose LDG
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with proven growth strategies to deliver measurable results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
                title: "AI-Powered Automation",
                description: "Automate customer interactions, lead qualification, and follow-ups while you focus on growing your business.",
                metric: "80% time saved"
              },
              {
                icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />,
                title: "Data-Driven Results",
                description: "Every strategy is backed by analytics and optimized for maximum ROI and conversion rates.",
                metric: "3X lead increase"
              },
              {
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />,
                title: "24/7 Customer Engagement",
                description: "Never miss a potential customer with AI chatbots that work around the clock.",
                metric: "50% faster response"
              }
            ].map((benefit, i) => (
              <div key={i} className="group">
                <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-xl sm:rounded-2xl w-fit">
                      {benefit.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full w-fit">
                      {benefit.metric}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2 sm:mb-3">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 gradient-bg">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
              Complete AI Growth Solutions
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              From intelligent websites to automated marketing, we have everything you need to scale your business.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8">
            {[
              {
                title: "AI-Powered Websites",
                description: "Websites that convert visitors into customers with intelligent design and automated engagement.",
                features: ["Smart Lead Capture", "A/B Testing", "Performance Analytics"],
                image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
                icon: <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              },
              {
                title: "AI Chatbots & Automation",
                description: "24/7 customer support and lead qualification that never sleeps, never misses a lead.",
                features: ["Instant Responses", "Lead Qualification", "CRM Integration"],
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
                icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              },
              {
                title: "SEO & Digital Marketing",
                description: "Data-driven marketing strategies that maximize your ROI and dominate search results.",
                features: ["Keyword Optimization", "Content Strategy", "Analytics Dashboard"],
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
                icon: <Search className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              },
              {
                title: "Custom Development",
                description: "Tailored solutions that integrate seamlessly with your business processes and goals.",
                features: ["Custom Integrations", "Scalable Architecture", "Ongoing Support"],
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
                icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              }
            ].map((service, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex flex-col gap-6">
                    {/* Mobile Image First */}
                    <div className="sm:hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={250}
                        className="rounded-2xl shadow-soft w-full h-auto"
                      />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-xl">
                            {service.icon}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">{service.title}</h3>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-3">
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                              <span className="text-sm sm:text-base text-neutral-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className="bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary font-semibold transition-all duration-300 w-full sm:w-auto shadow-soft"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                      
                      {/* Desktop Image */}
                      <div className="hidden sm:block sm:w-64 lg:w-80">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={320}
                          height={240}
                          className="rounded-2xl shadow-soft w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 sm:mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              See how businesses like yours are achieving remarkable growth with our AI solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "LDG transformed our lead generation. We went from 10 to 150+ qualified leads per month.",
                author: "Sarah Johnson",
                position: "CEO, TechStart Solutions",
                metric: "15X lead increase",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b7c4?w=80&h=80&fit=crop&crop=face"
              },
              {
                quote: "The AI chatbot handles 80% of our customer inquiries, freeing our team for strategic work.",
                author: "Michael Chen",
                position: "Founder, GrowthCorp",
                metric: "80% automation",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
              },
              {
                quote: "Our website conversion rate doubled in just 60 days with LDG's optimization strategies.",
                author: "Lisa Rodriguez",
                position: "Marketing Director, ScaleUp Inc",
                metric: "2X conversion rate",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full inline-block mb-4">
                  {testimonial.metric}
                </div>
                <p className="text-sm sm:text-base text-neutral-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-neutral-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              Join 100+ businesses already scaling faster with our AI-powered growth solutions. 
              Get your free strategy session today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-neutral-100 hover:text-primary-dark px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300 w-full sm:w-auto"
                onClick={() => window.openLeadForm()}
              >
                Get Your Free Strategy Session
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button 
                size="lg" 
                className="bg-white/10 text-white border-2 border-white/20 hover:bg-white hover:text-primary hover:border-white backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300 w-full sm:w-auto"
                onClick={chatWithAgent}
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Chat with an Expert
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm opacity-75 items-center justify-center">
              <span>✓ Free consultation</span>
              <span>✓ No commitment</span>
              <span>✓ Custom strategy included</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}