"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X, ArrowRight, TrendingUp, Clock, Users, Search, Target, BarChart3, Zap } from "lucide-react"
import Image from "next/image"

export default function SEOMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-bg"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary-dark mb-6 animate-fade-up">
              <Search className="w-4 h-4" />
              Only 25% of small businesses invest in SEO
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
              📍Get Found Online.
              <span className="text-gradient block mt-2">Grow Without Ads.</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg sm:text-xl text-neutral-600 mb-4 leading-relaxed">
                <strong>SEO & Marketing That Brings In Business—Without Paying for Every Click</strong>
              </p>
              <p className="text-base sm:text-lg text-neutral-600">
                We help small businesses show up on Google, attract the right visitors, and turn traffic into customers. No gimmicks. No guesswork.
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-2 bg-red-100 px-4 py-2 rounded-xl mb-8 max-w-md mx-auto">
              <span className="text-2xl">🔥</span>
              <span className="font-bold text-red-800">Only 25% of small businesses invest in SEO. The rest get outranked.</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => window.openLeadForm()}
              >
                Get a Free SEO Strategy Call
                <Target className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 text-sm text-neutral-500 justify-center">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No long contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>Plans start at $495/month</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>See results in 90 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO Beats Paid Ads */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
            Why SEO Still Beats <span className="text-gradient">Paid Ads</span>
          </h2>
          
          <p className="text-lg text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
            Most business owners burn money on ads because they don't realize there's a better option.
          </p>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Paid Ads - Problems */}
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-6">
                <X className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-neutral-900">Paid Ads:</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Stop the moment you stop spending</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Cost more every month</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Often attract the wrong audience</span>
                </li>
              </ul>
            </div>

            {/* SEO - Benefits */}
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-neutral-900">SEO:</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Brings in traffic for free—every day</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Builds trust and long-term visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Grows over time without growing your budget</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
            What You Get with Our <span className="text-gradient">Growth & Visibility Packages</span>
          </h2>
          
          <div className="text-center mb-16">
            <p className="text-lg text-neutral-600 italic">💬 "It's like turning your website into your best salesperson—without paying them by the hour."</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-soft overflow-hidden">
              <thead>
                <tr className="bg-primary/10 border-b-2 border-primary/20">
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">Feature</th>
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">What It Does for Your Business</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Google Business Optimization",
                    benefit: "Helps you show up locally when people search nearby",
                    icon: <Search className="w-5 h-5 text-primary" />
                  },
                  {
                    feature: "Smart Keyword Strategy", 
                    benefit: "Targets real search terms your ideal customers use",
                    icon: <Target className="w-5 h-5 text-primary" />
                  },
                  {
                    feature: "Blog Posts & Updates",
                    benefit: "Keeps your site active and ranked higher",
                    icon: <BarChart3 className="w-5 h-5 text-primary" />
                  },
                  {
                    feature: "On-Page SEO Fixes",
                    benefit: "We handle titles, tags, speed, mobile, and more",
                    icon: <Zap className="w-5 h-5 text-primary" />
                  },
                  {
                    feature: "Simple Reporting",
                    benefit: "We show you what's working—no agency fluff",
                    icon: <TrendingUp className="w-5 h-5 text-primary" />
                  },
                  {
                    feature: "Add-On: Smart Ad Support",
                    benefit: "Optional help running or fixing Google Ads (if needed)",
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
        </div>
      </section>

      {/* Real Results */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-16">
            Real Results from <span className="text-gradient">Real Small Businesses</span>
          </h2>

          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <h3 className="text-2xl font-bold text-neutral-900">🔹 Home Services Business</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <h4 className="font-bold text-red-600 mb-4 text-lg">Before:</h4>
                  <p className="text-neutral-700">Couldn't rank, relied on expensive PPC</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <h4 className="font-bold text-primary mb-4 text-lg">After:</h4>
                  <p className="text-neutral-700"><strong>3X more leads in 90 days</strong></p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-800">465% traffic growth</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-800">$5K/month saved in ad spend</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-soft">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <h3 className="text-2xl font-bold text-neutral-900">🔹 E-Commerce Brand</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <h4 className="font-bold text-red-600 mb-4 text-lg">Before:</h4>
                  <p className="text-neutral-700">$20K/mo in ads, poor rankings</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <h4 className="font-bold text-accent mb-4 text-lg">After:</h4>
                  <p className="text-neutral-700"><strong>Organic sales doubled</strong></p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-800">$200K added revenue</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-800">50% lower ad budget</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-16 sm:py-20 px-4 gradient-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
            SEO & Marketing <span className="text-gradient">Packages</span>
          </h2>
          
          <p className="text-lg text-neutral-600 text-center mb-16 max-w-2xl mx-auto">
            Choose what fits your goals. No contracts. Just results.
          </p>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-2xl shadow-soft overflow-hidden">
              <thead>
                <tr className="bg-primary/10 border-b-2 border-primary/20">
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">Plan Name</th>
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">Best For...</th>
                  <th className="text-left p-6 text-lg font-bold text-neutral-900">Monthly Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    plan: "Local Launch",
                    bestFor: "Getting found in your city",
                    cost: "$495–$995"
                  },
                  {
                    plan: "Growth Plan", 
                    bestFor: "SEO + content to drive more traffic",
                    cost: "$995–$1,995"
                  },
                  {
                    plan: "Visibility Engine",
                    bestFor: "Full SEO, blog, and ads support",
                    cost: "$1,995–$4,995+"
                  }
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-neutral-100 ${i % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}>
                    <td className="p-6 font-medium text-neutral-900">{row.plan}</td>
                    <td className="p-6 text-neutral-700">{row.bestFor}</td>
                    <td className="p-6 font-bold text-primary">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-soft border border-primary/10">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium text-neutral-800">All plans include strategy, tracking, and monthly reporting</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-soft border border-accent/10">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="font-medium text-neutral-800">Upgrade or downgrade anytime</span>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary font-semibold transition-all duration-300"
              onClick={() => window.openLeadForm()}
            >
              📞 Not sure where to start? Book a Free Call
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
                title: "Free Audit",
                description: "We analyze your site & rankings"
              },
              {
                step: "2️⃣",
                title: "Plan Together",
                description: "You pick what fits your goals"
              },
              {
                step: "3️⃣",
                title: "Watch Growth",
                description: "We handle everything. You get the results."
              }
            ].map((step, i) => (
              <div key={i} className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
                <div className="text-4xl mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
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
                See SEO Growth in Action
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                Here's what happens when you invest in smart SEO instead of just paying for ads.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <span>We optimize your Google Business Profile</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <span>Target keywords your customers actually search</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <span>Create content that ranks and converts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <span>Watch your organic traffic grow month over month</span>
                </div>
              </div>
            </div>
            
            <div>
              <Image
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
                alt="SEO Growth Analytics"
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
              Ready to Stop Paying for <span className="text-wave-300">Every Click?</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
              Let's get your business found the smart way—on your terms.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>No pressure</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>No jargon</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Clear plan included</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-neutral-100 hover:text-primary-dark px-8 py-4 rounded-2xl text-lg font-semibold shadow-medium hover:shadow-strong transition-all duration-300"
              onClick={() => window.openLeadForm()}
            >
              Book Your Free SEO Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}