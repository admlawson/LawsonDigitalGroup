import { Button } from "@/components/ui/button"

export default function BlogHero() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          AI-Powered Business Growth: <span className="text-[#CBF36E]">Expert Insights & Strategies</span>
        </h1>
        <p className="text-xl mb-8">
          Discover how AI is revolutionizing small business growth. Get actionable strategies, expert insights, and
          real-world case studies.
        </p>
        <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black text-lg px-8 py-4">
          Get Your Free AI Growth Strategy
        </Button>
      </div>
    </section>
  )
}

