import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Globe, Bot, Search, Code } from "lucide-react"

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI-Powered Web, Chatbots & SEO – <span className="text-[#CBF36E]">Built for SMB Growth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">More Leads. More Conversions. Less Work.</p>
            <p className="text-lg mb-8">
              LDG builds websites, automation, and marketing strategies that work while you sleep.
            </p>
            <p className="font-bold text-xl mb-8">🔥 100+ Small Businesses Trust LDG to Grow Faster.</p>
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              Book a Free Strategy Call <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-[#CBF36E]">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/services/ai-powered-websites" className="block">
              <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 hover:border-[#CBF36E] hover:shadow-xl transition-all group">
                <div className="flex items-start">
                  <Globe className="text-[#CBF36E] w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#CBF36E] transition-colors">
                      AI-Powered Website Development
                    </h3>
                    <p className="text-gray-700">Turn your website into a 24/7 lead-generating machine.</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services/ai-chatbots" className="block">
              <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 hover:border-[#CBF36E] hover:shadow-xl transition-all group">
                <div className="flex items-start">
                  <Bot className="text-[#CBF36E] w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#CBF36E] transition-colors">
                      AI Chatbots & Automation
                    </h3>
                    <p className="text-gray-700">Automate customer engagement & boost sales 24/7.</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services/seo-marketing" className="block">
              <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 hover:border-[#CBF36E] hover:shadow-xl transition-all group">
                <div className="flex items-start">
                  <Search className="text-[#CBF36E] w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#CBF36E] transition-colors">
                      SEO & High-Performance Marketing
                    </h3>
                    <p className="text-gray-700">
                      Rank higher, get found, and increase sales with AI-powered strategies.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services/custom-development" className="block">
              <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200 hover:border-[#CBF36E] hover:shadow-xl transition-all group">
                <div className="flex items-start">
                  <Code className="text-[#CBF36E] w-10 h-10 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#CBF36E] transition-colors">
                      Custom Web & App Development
                    </h3>
                    <p className="text-gray-700">
                      Scalable, AI-powered solutions to automate & optimize your business.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Get a Custom AI Growth Strategy <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

