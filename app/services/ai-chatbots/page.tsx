import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X } from "lucide-react"

export default function AIChatbots() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Chatbots That <span className="text-[#CBF36E]">Engage Visitors & Close More Sales—24/7</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              💬 Capture leads, automate customer support, and book meetings while you sleep.
            </p>
            <p className="text-lg mb-8">🔥 80% reduction in response time & 3X higher conversion rates with AI.</p>
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              Build Your AI Chatbot Today
            </Button>
          </div>
        </div>
      </section>

      {/* Why SMBs Need an AI Chatbot */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why SMBs Need an <span className="text-[#CBF36E]">AI Chatbot</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Customers expect instant responses.</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> Old Way: Waiting hours or days to reply.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> New Way: AI answers instantly, qualifying &
                  converting leads.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Your team is wasting time on repetitive inquiries.</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> Old Way: Manually answering the same questions over & over.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> New Way: AI handles FAQs, appointment booking, and
                  lead qualification.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Missed leads = lost revenue.</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> Old Way: No one available to chat after business hours.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> New Way: AI chatbots engage visitors 24/7 so you
                  never lose a potential customer.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Want an AI chatbot that increases sales? Let's talk
            </Button>
          </div>
        </div>
      </section>

      {/* AI Chatbot Features That Drive Results */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            AI Chatbot Features That <span className="text-[#CBF36E]">Drive Results</span>
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
                <td className="p-3 border">24/7 Lead Capture</td>
                <td className="p-3 border">No more lost customers due to slow response times</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">Automated Sales Funnels</td>
                <td className="p-3 border">AI nurtures & converts leads automatically</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border">Instant Booking & Scheduling</td>
                <td className="p-3 border">AI syncs with your calendar to book meetings</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">Custom AI Responses</td>
                <td className="p-3 border">AI trained on your business FAQs & services</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border">CRM & Email Integrations</td>
                <td className="p-3 border">AI connects to your existing marketing tools</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Start Automating Customer Engagement
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Case Study: AI Chatbot <span className="text-[#CBF36E]">Increases Sales by 40%</span>
          </h2>

          <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">📍 Industry: E-Commerce</h3>
            <div className="mb-6">
              <p className="mb-2">
                <strong>❌ Before AI:</strong> High abandoned cart rates, low engagement.
              </p>
              <p>
                <strong>✅ After AI:</strong> AI chatbot engaged customers & recovered lost sales.
              </p>
            </div>
            <h4 className="text-xl font-bold mb-4">📈 Results:</h4>
            <ul className="list-none space-y-2">
              <li className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2" /> 40% more conversions in 30 days
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2" /> $75K in additional revenue from chatbot interactions
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2" /> Higher customer satisfaction & engagement
              </li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Want these results? Let's build your AI chatbot
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Start Using AI Chatbots to <span className="text-[#CBF36E]">Scale Your Business</span>
          </h2>
          <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
            Book a Free AI Chatbot Consultation
          </Button>
          <p className="mt-4 font-bold">🔥 Don't let leads slip away—automate engagement today!</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

