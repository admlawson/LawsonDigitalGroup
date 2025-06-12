"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AIPoweredWebsites() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Websites: How SMBs Are Turning Their Sites into Lead-Generating Machines
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Most small business websites fail to generate leads;here's how AI is changing that.
          </p>

          <Image
            src="/placeholder.svg"
            alt="AI-Powered Websites"
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Introduction: Most Business Websites Are Failing</h2>
            <p className="mb-4">
              Does your website actually bring in leads and sales—or is it just sitting there collecting digital dust?
            </p>
            <p className="mb-4">
              The truth is, 90% of small business websites don't convert visitors into paying customers. Why? Because
              they're built to look nice, not to function as a lead-generation machine.
            </p>
            <p className="mb-4">
              <strong>An AI-powered website changes that.</strong>
            </p>
            <p className="mb-4">
              With AI-driven design, automated engagement tools, and real-time data optimization, businesses are turning
              their websites into 24/7 sales engines—without lifting a finger.
            </p>
            <p className="mb-4">
              <strong>
                Case Study: One business owner tripled their lead flow in 60 days just by upgrading to an AI-enhanced
                website.
              </strong>
            </p>
            <p className="mb-4">Want to do the same? Read on.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Traditional Websites Don't Work Anymore</h2>
            <p className="mb-4">
              Most small business websites fail to convert because they're missing three crucial elements:
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">1. They Don't Capture Leads Effectively</h3>
                <p className="mb-2">
                  <strong>Problem:</strong> A visitor lands on your website, browses for a few seconds, and leaves. No
                  lead captured. No sale.
                </p>
                <p className="mb-2">
                  <strong>AI Solution:</strong> AI-powered websites use chatbots, exit-intent popups, and behavioral
                  tracking to engage visitors before they leave.
                </p>
                <p>Example:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>An AI chatbot asks visitors the right questions and books meetings in real-time.</li>
                  <li>A smart popup offers a free consultation when a user shows exit intent.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">2. They Lack Personalization</h3>
                <p className="mb-2">
                  <strong>Problem:</strong> Most websites treat every visitor the same way, even though people have
                  different needs.
                </p>
                <p className="mb-2">
                  <strong>AI Solution:</strong> AI dynamically adjusts the content based on who's visiting.
                </p>
                <p>Example:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    If a visitor arrives from a Google ad for "SEO services," the homepage instantly adapts to highlight
                    SEO case studies & pricing.
                  </li>
                  <li>
                    If a returning visitor lands on the site, they see tailored recommendations based on their previous
                    interactions.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">3. They Don't Optimize for Conversion in Real-Time</h3>
                <p className="mb-2">
                  <strong>Problem:</strong> Traditional websites are static—they don't improve themselves based on
                  visitor behavior.
                </p>
                <p className="mb-2">
                  <strong>AI Solution:</strong> AI-powered sites analyze user interactions and optimize conversion
                  elements in real-time.
                </p>
                <p>Example:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    If users aren't clicking on a CTA button, AI can change the button's placement, color, or text on
                    the fly.
                  </li>
                  <li>
                    AI-driven A/B testing automatically replaces underperforming content with higher-converting
                    versions.
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4 font-bold">
              BOTTOM LINE: If your website isn't designed for AI-driven engagement, you're leaving money on the table.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">What Is an AI-Powered Website? (And How Does It Work?)</h2>
            <p className="mb-4">An AI-powered website is a smart, data-driven business tool that:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Adapts in real-time based on visitor behavior</li>
              <li>Engages users automatically through AI chatbots & automation</li>
              <li>Personalizes content to increase conversions</li>
              <li>Continuously optimizes itself to drive more leads & sales</li>
            </ul>
            <p className="mb-4">
              Think of it like hiring a 24/7 sales assistant that greets visitors, qualifies leads, and pushes them
              toward a sale—without human effort.
            </p>
            <h3 className="text-2xl font-bold mb-4">Key Features of AI-Powered Websites:</h3>
            <table className="w-full mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Feature</th>
                  <th className="p-2 text-left">How It Helps SMBs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">AI Chatbots</td>
                  <td className="p-2 border">Engage visitors, answer questions, & capture leads in real-time</td>
                </tr>
                <tr>
                  <td className="p-2 border">Dynamic Personalization</td>
                  <td className="p-2 border">Website adapts to each visitor's needs for higher conversions</td>
                </tr>
                <tr>
                  <td className="p-2 border">Automated Lead Nurturing</td>
                  <td className="p-2 border">AI follows up with potential customers via email or SMS</td>
                </tr>
                <tr>
                  <td className="p-2 border">AI-Powered A/B Testing</td>
                  <td className="p-2 border">Optimizes pages based on real-time user behavior</td>
                </tr>
                <tr>
                  <td className="p-2 border">Voice Search & AI Assistants</td>
                  <td className="p-2 border">Allows users to interact via voice search & smart AI responses</td>
                </tr>
              </tbody>
            </table>
            <p className="font-bold">
              AI Websites aren't the future—they're the present. And businesses that adopt AI are seeing explosive
              growth.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How AI Websites Are Helping Small Businesses Grow Faster</h2>
            <p className="mb-4">
              Real businesses are already seeing game-changing results from AI-powered websites. Here's how:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold mb-2">Case Study #1: Local Service Business 3X's Leads in 60 Days</h3>
              <p className="mb-2">
                <strong>Industry:</strong> Home Services (Plumbing & HVAC)
              </p>
              <p className="mb-2">
                <strong>Before AI:</strong> They had a static website that got traffic but barely converted visitors.
              </p>
              <p className="mb-2">
                <strong>After AI:</strong> LDG built an AI-enhanced site that:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Used AI chatbots to pre-qualify leads & book appointments automatically.</li>
                <li>Integrated behavioral tracking to offer discounts to hesitant users.</li>
              </ul>
              <p className="font-bold">Results:</p>
              <ul className="list-disc list-inside">
                <li>3X More Leads (from 50/month → 150/month)</li>
                <li>Cost Per Lead Decreased by 65%</li>
                <li>Booking rate doubled in 2 months</li>
              </ul>
            </div>
            <div className="text-center">
              <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-4">
                Want the same results? Let's build your AI-powered site
              </Button>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Tell If Your Website Needs AI Optimization</h2>
            <p className="mb-4">If you answer "YES" to any of these, your website is leaking money:</p>
            <ul className="list-none space-y-2 mb-6">
              <li>
                <input type="checkbox" className="mr-2" /> Are visitors leaving your website without contacting you?
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Do you struggle to book meetings or close leads online?
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Is your website the same for every visitor (no
                personalization)?
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Do you have to manually follow up with leads instead of
                automating it?
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Are you running paid ads, but your site isn't converting
                traffic?
              </li>
            </ul>
            <p className="font-bold mb-4">If you checked even one of these, your website is costing you customers.</p>
            <p className="text-xl mb-6">An AI-powered site will fix this.</p>
            <div className="text-center">
              <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-4">
                Claim a Free Website Growth Strategy Call
              </Button>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Get an AI-Powered Website for Your Business</h2>
            <ol className="list-decimal list-inside space-y-4 mb-6">
              <li>
                <strong>Free AI Growth Strategy Call</strong>
                <p>We analyze your website's strengths & weaknesses to see where AI can help.</p>
              </li>
              <li>
                <strong>AI-Powered Website Design & Development</strong>
                <p>Custom-built AI website optimized for SEO, automation, and lead conversion.</p>
              </li>
              <li>
                <strong>24/7 Lead Generation & Optimization</strong>
                <p>AI continuously improves your site's performance—even while you sleep.</p>
              </li>
            </ol>
            <p className="text-xl mb-6">Want an AI-powered site that actually works?</p>
            <div className="text-center">
              <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-4">
                Book a Free Strategy Call Today
              </Button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
