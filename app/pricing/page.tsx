import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, CheckCircle2, X } from "lucide-react"
import Image from "next/image"
import PricingCalculator from "@/components/PricingCalculator"

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI-Powered Websites, Chatbots & Marketing – <span className="text-[#CBF36E]">Built for Growth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">More Leads. More Sales. Less Work.</p>
            <p className="text-lg mb-8">💰 Transparent Pricing. No Hidden Fees.</p>
            <p className="font-bold text-xl mb-8">🔥 See why 100+ SMBs trust LDG to grow faster.</p>
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              See Pricing & Get a Custom Quote <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Invest in Digital Acceleration? */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Invest in <span className="text-[#CBF36E]">Digital Acceleration?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                concern: "$10K+ for a website? That's expensive.",
                reality: "LDG websites are high-performance lead generators that pay for themselves in months.",
              },
              {
                concern: "Why not go with a cheap chatbot?",
                reality: "Cheap bots don't convert—LDG chatbots increase conversions by 3X.",
              },
              {
                concern: "SEO is expensive—will it work?",
                reality: "Clients see 465% traffic growth & 200% better ad ROI with LDG.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <X className="text-red-500 mr-2" />
                  <p className="font-bold">Concern: {item.concern}</p>
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <p>Reality: {item.reality}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Let's Talk ROI – Free Consultation <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Updated Pricing Tiers */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-[#CBF36E]">Pricing Tiers</span>
          </h2>

          {/* AI-Powered Websites */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">🖥️ AI-Powered Websites (Custom-Built)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter AI Website",
                  price: "$3,500 – $10,000",
                  features: ["Custom-built site", "Mobile-friendly", "SEO-ready", "Lead capture", "AI chat widget"],
                },
                {
                  name: "Growth AI Website",
                  price: "$10,000 – $20,000",
                  features: [
                    "Everything in Starter +",
                    "AI chatbot",
                    "Landing pages",
                    "Blog CMS",
                    "Conversion optimization",
                  ],
                },
                {
                  name: "Enterprise AI Website",
                  price: "$25,000+",
                  features: ["Advanced AI automations", "Custom integrations", "Membership systems", "eCommerce"],
                },
              ].map((tier, i) => (
                <div key={i} className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold mb-4">{tier.name}</h4>
                  <p className="text-3xl font-bold mb-6 text-[#CBF36E]">{tier.price}</p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#CBF36E] hover:bg-[#b9e050] text-black">
                    Get a Custom AI Website Quote
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* AI Chatbots & Automation */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">🤖 AI Chatbots & Automation</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basic AI Chatbot",
                  price: "$5,000 – $10,000",
                  features: ["Lead capture", "FAQs", "Email integration"],
                },
                {
                  name: "Advanced AI Chatbot",
                  price: "$10,000 – $20,000",
                  features: ["CRM + booking integrations", "Automated workflows"],
                },
                {
                  name: "Enterprise AI Chatbot",
                  price: "$20,000+",
                  features: ["AI-powered sales automation", "Voice AI", "Real-time data"],
                },
              ].map((tier, i) => (
                <div key={i} className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold mb-4">{tier.name}</h4>
                  <p className="text-3xl font-bold mb-6 text-[#CBF36E]">{tier.price}</p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#CBF36E] hover:bg-[#b9e050] text-black">
                    Build a Custom AI Chatbot
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* SEO & Marketing */}
          <div>
            <h3 className="text-2xl font-bold mb-8">📈 SEO & Marketing (Performance-Based)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "SEO Growth Plan",
                  price: "$1,000 – $5,000/month",
                  features: ["Local SEO", "Content strategy", "Keyword rankings"],
                },
                {
                  name: "Lead Generation System",
                  price: "$5,000 – $10,000/month",
                  features: ["Google Ads", "AI-driven conversion funnel"],
                },
                {
                  name: "Full-Scale Digital Marketing",
                  price: "$10,000 – $25,000/month",
                  features: ["SEO", "PPC", "Automation", "Full-scale strategy"],
                },
              ].map((tier, i) => (
                <div key={i} className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
                  <h4 className="text-xl font-bold mb-4">{tier.name}</h4>
                  <p className="text-3xl font-bold mb-6 text-[#CBF36E]">{tier.price}</p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="text-[#CBF36E] mr-2 h-6 w-6 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#CBF36E] hover:bg-[#b9e050] text-black">
                    See SEO & Marketing Plans
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quoting Tool */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Get an <span className="text-[#CBF36E]">Instant Quote</span>
          </h2>
          <p className="text-center text-lg mb-12">Customize your package and see real-time pricing estimates.</p>
          <PricingCalculator />
        </div>
      </section>

      {/* What's Included? (Value Breakdown) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What's <span className="text-[#CBF36E]">Included?</span>
          </h2>

          <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6">🔥 LDG vs. Cheap Web Agencies</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Feature</th>
                    <th className="text-center p-2">Cheap Agency ($5K)</th>
                    <th className="text-center p-2">LDG AI-Powered Websites ($10K+)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "AI Optimization", cheap: false, ldg: "Yes – AI chatbots & automation" },
                    { feature: "SEO Strategy", cheap: "Basic", ldg: "Advanced SEO & high-performance pages" },
                    { feature: "Conversion Focus", cheap: "Generic", ldg: "Data-driven, high-ROI websites" },
                    { feature: "Lead Generation", cheap: false, ldg: "AI-powered lead capture & CRM integrations" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-2">{row.feature}</td>
                      <td className="text-center p-2">
                        {typeof row.cheap === "boolean" ? (
                          row.cheap ? (
                            <CheckCircle2 className="text-green-500 inline" />
                          ) : (
                            <X className="text-red-500 inline" />
                          )
                        ) : (
                          row.cheap
                        )}
                      </td>
                      <td className="text-center p-2">
                        {typeof row.ldg === "boolean" ? (
                          row.ldg ? (
                            <CheckCircle2 className="text-[#CBF36E] inline" />
                          ) : (
                            <X className="text-red-500 inline" />
                          )
                        ) : (
                          row.ldg
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              See What's Included <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies & ROI Proof */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Real <span className="text-[#CBF36E]">Results</span> for Real Businesses
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "LDG's AI-powered website & chatbot turned our traffic into 3X more leads.",
                author: "John D.",
                position: "Small Business Owner",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                quote: "We ranked #1 on Google in 3 months & cut our ad costs by 50%!",
                author: "Mike R.",
                position: "SaaS Founder",
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, i) => (
              <div key={i} className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#CBF36E] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              See More Success Stories <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Want an <span className="text-[#CBF36E]">AI-Powered Growth Strategy</span> for Your Business?
            </h2>
            <p className="text-center text-lg mb-8">Get a FREE Custom Quote in Minutes.</p>

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
                <label htmlFor="services" className="block mb-2 font-medium">
                  What Services Are You Interested In?
                </label>
                <Select>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">AI-Powered Website</SelectItem>
                    <SelectItem value="chatbot">AI Chatbot</SelectItem>
                    <SelectItem value="seo">SEO & Marketing</SelectItem>
                    <SelectItem value="custom">Custom Web App</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg py-6">
                Get Instant Pricing & Book a Strategy Call
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

