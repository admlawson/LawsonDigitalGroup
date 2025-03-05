import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, CheckCircle2 } from "lucide-react"

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              How AI-Powered Digital Solutions Are <span className="text-[#CBF36E]">Scaling SMBs Faster</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              See how real businesses are using AI, chatbots & data-driven marketing to 3X their leads & sales.
            </p>
            <p className="font-bold text-xl mb-8">🔥 100+ Businesses Trust LDG. Will You Be Next?</p>
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              See What's Possible for Your Business <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Businesses Trust LDG */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Businesses <span className="text-[#CBF36E]">Trust LDG</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "3X More Leads. 50% lower ad spend.",
              "AI-Driven Strategy. No more guessing—just data-backed decisions.",
              "100+ Successful Projects. We know what works for small businesses.",
              "Fast Results. Our websites & funnels start delivering in weeks, not months.",
            ].map((item, i) => (
              <div key={i} className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Start Your Growth Journey <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI-Powered Growth Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            AI-Powered <span className="text-[#CBF36E]">Growth Stories</span>
          </h2>

          {/* Case Study #1 */}
          <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 mb-12">
            <h3 className="text-2xl font-bold mb-4">Local Home Services Business (Lead Generation & SEO)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-2">Problem:</h4>
                <p>
                  This local home improvement company struggled with low-quality leads and a high cost per acquisition
                  ($120/lead).
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Solution:</h4>
                <ul className="list-disc list-inside">
                  <li>LDG built an AI-powered website with optimized landing pages.</li>
                  <li>Implemented an AI chatbot that automatically pre-qualified leads.</li>
                  <li>Deployed a local SEO campaign focused on high-intent searches.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Results (60 Days):</h4>
                <ul className="list-disc list-inside">
                  <li>3X More Leads (from 50/month → 150/month)</li>
                  <li>Cost Per Lead Decreased 65% ($120 → $42)</li>
                  <li>1st Page Google Ranking for 5 major service keywords</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Case Study #2 */}
          <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 mb-12">
            <h3 className="text-2xl font-bold mb-4">SaaS Company (AI Chatbot & Paid Ads)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-2">Problem:</h4>
                <p>
                  A B2B SaaS startup was struggling with high churn rates and weak lead conversion from their ad
                  campaigns.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Solution:</h4>
                <ul className="list-disc list-inside">
                  <li>LDG deployed an AI chatbot that automatically nurtured & re-engaged cold leads.</li>
                  <li>Optimized their Google Ads strategy to focus on high-converting landing pages.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Results (90 Days):</h4>
                <ul className="list-disc list-inside">
                  <li>40% Increase in Paid Ad Conversions</li>
                  <li>Chatbot Engagement Rate: 78% (vs. 12% email response rate)</li>
                  <li>3X More Demos Booked (from 20/month → 60/month)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Case Study #3 */}
          <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 mb-12">
            <h3 className="text-2xl font-bold mb-4">E-Commerce Store (AI Automation & Retargeting)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-2">Problem:</h4>
                <p>This e-commerce brand had high website traffic but low conversion rates (1.2%).</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Solution:</h4>
                <ul className="list-disc list-inside">
                  <li>Implemented an AI-powered chatbot for abandoned cart recovery.</li>
                  <li>Launched AI-driven retargeting ads to re-engage past visitors.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Results (30 Days):</h4>
                <ul className="list-disc list-inside">
                  <li>Conversion Rate Increased to 4.8%</li>
                  <li>$70K in Additional Revenue from chatbot-driven cart recoveries</li>
                  <li>Ad ROAS Improved by 220%</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Get a Custom AI-Powered Growth Plan <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Before & After Metrics */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Before & After <span className="text-[#CBF36E]">Metrics</span>
          </h2>

          <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Metric</th>
                    <th className="text-center p-2">Before LDG</th>
                    <th className="text-center p-2">After LDG</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Cost Per Lead", before: "$120", after: "$42 (-65%)" },
                    { metric: "Conversion Rate", before: "1.2%", after: "4.8% (+300%)" },
                    { metric: "Google Ad ROI", before: "1.5X", after: "3.5X ROAS (+220%)" },
                    { metric: "Chatbot Engagement", before: "12%", after: "78% (+650%)" },
                    { metric: "Website Traffic Growth", before: "500/month", after: "2,500/month (+400%)" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-2">{row.metric}</td>
                      <td className="text-center p-2">{row.before}</td>
                      <td className="text-center p-2 font-bold text-[#CBF36E]">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Get a Custom AI-Powered Growth Plan <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industry-Specific Outcomes */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Success Across <span className="text-[#CBF36E]">Industries</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: "E-Commerce",
                result: "We turned abandoned carts into +$70K revenue in 30 days.",
              },
              {
                industry: "B2B SaaS",
                result: "Our chatbot tripled demo bookings.",
              },
              {
                industry: "Local Businesses",
                result: "Our website upgrade 3X'd our leads in 60 days.",
              },
            ].map((item, i) => (
              <div key={i} className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">{item.industry}</h3>
                <p className="text-lg">{item.result}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              See Industry-Specific Growth Strategies <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Ready to <span className="text-[#CBF36E]">Scale Faster?</span> Let's Talk.
            </h2>
            <p className="text-center text-lg mb-8">Get a Custom AI-Powered Growth Strategy Call (Limited Spots)</p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Smith" className="bg-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@yourcompany.com" className="bg-white" />
                </div>
              </div>

              <div>
                <label htmlFor="business-type" className="block mb-2 font-medium">
                  Business Type
                </label>
                <Select>
                  <SelectTrigger className="bg-white">
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
                <label htmlFor="growth-goal" className="block mb-2 font-medium">
                  What's Your Growth Goal?
                </label>
                <Textarea
                  id="growth-goal"
                  placeholder="Tell us about your business growth objectives..."
                  className="bg-white"
                  rows={4}
                />
              </div>

              <Button className="w-full bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg py-6">
                Claim Your Free Strategy Call
              </Button>

              <p className="text-center text-sm">🎯 100% Free. No Pressure. Just Results.</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

