import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X } from "lucide-react"

export default function SEOMarketing() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              SEO & High-Performance Marketing for <span className="text-[#CBF36E]">SMBs</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Rank higher, get more traffic, and increase sales—without paying for every click.
            </p>
            <p className="text-lg mb-8">
              🔥 75% of small businesses don't invest in SEO. Be part of the 25% that dominate search rankings.
            </p>
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-6 rounded-full">
              Get a Free SEO Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why SEO Is the <span className="text-[#CBF36E]">#1 Growth Strategy</span> for SMBs
          </h2>
          <p className="text-lg mb-6">Are you tired of relying on paid ads for traffic?</p>
          <p className="text-lg mb-6">
            The truth is, SEO is the highest ROI marketing strategy—and yet, 75% of small businesses still don't invest
            in it.
          </p>
          <p className="text-lg mb-6">
            If your website isn't ranking on page 1 of Google, you're losing leads to competitors who are.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">📈 Case Study:</h3>
            <p>
              A local service business increased their organic traffic by 465% in 6 months just by implementing
              AI-powered SEO strategies.
            </p>
          </div>
          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Get a Free SEO Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* Why SMBs Need AI-Powered SEO & Marketing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why SMBs Need <span className="text-[#CBF36E]">AI-Powered SEO & Marketing</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">SEO brings in leads for free—long-term growth.</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> STOP: Paying thousands in ads every month with no long-term
                  return.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> START: Ranking organically so you get traffic for
                  free—forever.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">AI optimizes ad spend—higher ROI, lower wasted budget.</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> STOP: Wasting money on low-quality PPC campaigns.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> START: Using AI-powered ad targeting to increase
                  conversion rates.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Automated lead nurturing increases conversion rates.</h3>
              <div className="mb-4">
                <p className="flex items-center">
                  <X className="text-red-500 mr-2" /> STOP: Letting website visitors leave without converting.
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> START: Using AI-driven retargeting & email automation
                  to bring lost leads back.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Want to rank #1 on Google? Get a free SEO audit
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What's Included in Our <span className="text-[#CBF36E]">AI-Powered SEO & Marketing Services?</span>
          </h2>

          <p className="text-lg mb-8">
            💡 Most agencies offer basic SEO. We take it to the next level with AI-powered strategies that optimize
            performance in real-time.
          </p>

          <table className="w-full mb-8">
            <thead className="bg-[#CBF36E]">
              <tr>
                <th className="p-3 text-left">Service</th>
                <th className="p-3 text-left">What It Does for Your Business</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border">AI-Powered Keyword Research</td>
                <td className="p-3 border">
                  Find high-converting, low-competition keywords to dominate search rankings
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">Technical SEO Optimization</td>
                <td className="p-3 border">
                  Improve site speed, mobile responsiveness, and indexing for better rankings
                </td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border">AI-Generated Content</td>
                <td className="p-3 border">Publish SEO-optimized blog posts that rank & convert</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">Link Building & Authority Growth</td>
                <td className="p-3 border">Earn high-quality backlinks to outrank competitors</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border">AI-Powered PPC Optimization</td>
                <td className="p-3 border">
                  Reduce wasted ad spend & increase conversions with AI-driven ad targeting
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">Automated Lead Retargeting</td>
                <td className="p-3 border">Re-engage lost visitors with AI-powered email & retargeting campaigns</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Boost Your Rankings – Free SEO Audit
            </Button>
          </div>
        </div>
      </section>

      {/* How AI Is Changing the SEO Game */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How AI Is Changing the SEO Game <span className="text-[#CBF36E]">(And Why You Need It Now)</span>
          </h2>

          <p className="text-lg mb-8">
            🚀 Google's algorithm has changed. If you're using outdated SEO strategies, you won't rank.
          </p>

          <p className="text-lg mb-8">Here's how AI-powered SEO is outperforming traditional methods:</p>

          <div className="space-y-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">✅ AI Predicts Search Trends</h3>
              <p>
                Instead of guessing which keywords will rank, AI analyzes search trends in real time and targets
                high-intent opportunities before competitors.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">✅ AI Optimizes Content for Conversions</h3>
              <p>
                Traditional SEO agencies write blog posts that rank but don't convert. AI ensures every piece of content
                is optimized for search AND designed to drive leads.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">✅ AI Eliminates Wasted Ad Spend</h3>
              <p>
                If you're spending thousands on Google Ads but seeing low ROI, AI can instantly identify which audiences
                convert and optimize ad spend for maximum profit.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h3 className="text-2xl font-bold mb-4">📈 Case Study:</h3>
            <p>
              A SaaS company reduced their ad spend by 50% and doubled conversion rates using AI-powered campaign
              optimization.
            </p>
          </div>

          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Let's use AI to grow your business. Get a free consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Case Studies: How SMBs Are Using <span className="text-[#CBF36E]">AI-Powered SEO & Marketing</span> to Scale
            Faster
          </h2>

          <div className="space-y-12">
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">
                🔹 Case Study #1: Local Business Ranks #1 & Increases Leads by 300%
              </h3>
              <p className="mb-2">
                <strong>📍 Industry:</strong> Home Services
              </p>
              <p className="mb-2">
                <strong>❌ Before SEO:</strong> Couldn't rank for any major keywords & relied on expensive PPC ads.
              </p>
              <p className="mb-4">
                <strong>✅ After SEO:</strong> AI-driven keyword strategy & local SEO pushed them to page 1 in 90 days.
              </p>
              <h4 className="text-xl font-bold mb-2">📈 Results:</h4>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> 300% increase in organic leads
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> 465% traffic growth in 6 months
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> Saved $5,000/month in ad spend
                </li>
              </ul>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">
                🔹 Case Study #2: E-Commerce Brand Grows Sales by 150% with AI SEO
              </h3>
              <p className="mb-2">
                <strong>📍 Industry:</strong> Online Retail
              </p>
              <p className="mb-2">
                <strong>❌ Before AI:</strong> Paid $20K/month in ads but struggled with organic traffic.
              </p>
              <p className="mb-4">
                <strong>✅ After AI:</strong> AI-powered content strategy & product page optimization doubled organic
                sales.
              </p>
              <h4 className="text-xl font-bold mb-2">📈 Results:</h4>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> 80% increase in organic traffic
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> $200K in additional revenue
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" /> 50% lower ad spend due to higher organic rankings
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Want these results? Let's build your AI SEO strategy
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            SEO & Marketing Pricing <span className="text-[#CBF36E]">(How Much Should You Invest?)</span>
          </h2>

          <p className="text-lg mb-8">
            💡 SEO & marketing costs depend on your competition, industry, and growth goals.
          </p>

          <table className="w-full mb-8">
            <thead className="bg-[#CBF36E]">
              <tr>
                <th className="p-3 text-left">SEO Plan</th>
                <th className="p-3 text-left">What's Included?</th>
                <th className="p-3 text-left">Cost Range (Monthly)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border">Local SEO Package</td>
                <td className="p-3 border">
                  Google My Business optimization, keyword research, local ranking strategy
                </td>
                <td className="p-3 border">$1,000 – $5,000</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-3 border">Growth SEO Plan</td>
                <td className="p-3 border">On-page & off-page SEO, AI-driven content strategy, link building</td>
                <td className="p-3 border">$5,000 – $10,000</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border">Full-Scale SEO & Ads</td>
                <td className="p-3 border">SEO + AI-powered PPC optimization, content marketing, lead retargeting</td>
                <td className="p-3 border">$10,000 – $25,000</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center">
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Not sure which package is right for you? Get a free SEO consultation
            </Button>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How to Start Dominating Search & <span className="text-[#CBF36E]">Scaling with AI SEO</span>
          </h2>

          <div className="space-y-8">
            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Step 1: Get a Free AI-Powered SEO Audit</h3>
              <p>🚀 We analyze your website, traffic, and rankings to identify growth opportunities.</p>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Step 2: Implement a Winning AI SEO Strategy</h3>
              <p>✅ AI-powered keyword strategy, content creation, and optimization.</p>
            </div>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Step 3: Watch Your Traffic & Sales Skyrocket</h3>
              <p>✅ More leads. ✅ Higher rankings. ✅ Lower ad spend.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl mb-6">Want to rank #1 on Google? Let's talk.</p>
            <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black px-8 py-6 rounded-full text-lg">
              Book a Free SEO Consultation Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

