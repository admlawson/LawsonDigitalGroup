import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X } from "lucide-react"

export default function AIPoweredWebsites() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI-Powered Websites That <span className="text-[#CBF36E]">Convert Visitors Into Customers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">More Leads. More Conversions. Less Work.</p>
            <p className="text-lg mb-8">
              Your website shouldn't just sit there—it should drive revenue. We build AI-enhanced, conversion-optimized
              websites designed to capture leads and generate sales 24/7.
            </p>
            <p className="font-bold text-xl mb-8">
              🔥 50% of SMBs see an instant increase in leads after optimizing their site.
            </p>
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              Get a High-Converting Website
            </Button>
          </div>
        </div>
      </section>

      {/* Why SMBs Need an AI-Powered Website */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why SMBs Need an <span className="text-[#CBF36E]">AI-Powered Website</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Your website isn't bringing in leads?</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> Old Way: Just an online brochure.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> New Way: AI-driven funnels that turn visitors into
                  customers.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Wasting ad spend without results?</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> Old Way: Paying for clicks but not converting visitors.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> New Way: AI analyzes traffic behavior and adapts your
                  site in real-time.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Manually following up on leads?</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> Old Way: Slow response times, lost opportunities.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> New Way: AI chatbots qualify & book meetings
                  instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Want an AI-powered website? Let's talk
            </Button>
          </div>
        </div>
      </section>

      {/* AI Website Features That Drive Results */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            AI Website Features That <span className="text-[#CBF36E]">Drive Results</span>
          </h2>

          <table className="w-full mb-8">
            <thead className="bg-[#CBF36E]">
              <tr>
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-left">How It Helps SMBs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border">AI Chatbots & Automation</td>
                <td className="p-3 border">Capture leads & qualify customers instantly</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">SEO-Optimized Design</td>
                <td className="p-3 border">Rank higher on Google & drive organic traffic</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border">Conversion-Optimized Pages</td>
                <td className="p-3 border">AI-driven layout changes for maximum conversions</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">Behavioral Personalization</td>
                <td className="p-3 border">Website adapts to each visitor's needs</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border">High-Speed, Mobile-First Design</td>
                <td className="p-3 border">Faster load times = higher rankings & lower bounce rates</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Build Your AI Website Today
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Case Study: Small Business <span className="text-[#CBF36E]">3X's Leads with AI Web Design</span>
          </h2>

          <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">📍 Industry: Local Home Services</h3>
            <div className="mb-6">
              <p className="mb-2">
                <strong>❌ Before AI:</strong> Basic website, low engagement, high bounce rate.
              </p>
              <p>
                <strong>✅ After AI:</strong> AI chatbot + lead capture forms increased conversions.
              </p>
            </div>
            <h4 className="text-xl font-bold mb-4">📈 Results:</h4>
            <ul className="list-none space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2" /> 3X more leads in 60 days
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2" /> Bounce rate reduced by 50%
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2" /> 200% more Google My Business interactions
              </li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Want the same results? Let's build your AI-powered site
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get an AI-Powered Website That <span className="text-[#CBF36E]">Grows Your Business</span>
          </h2>
          <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
            Claim Your Free Strategy Call
          </Button>
          <p className="mt-4 font-bold">🔥 Limited Spots Available – Start Today!</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

