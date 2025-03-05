import Link from "next/link"
import { Button } from "@/components/ui/button"

const posts = [
  {
    title: "AI Chatbots for Business: How to Automate Customer Engagement & Sales",
    excerpt: "The #1 reason SMBs lose sales? Slow response time. AI chatbots fix this instantly.",
    slug: "ai-chatbots-for-business",
  },
  {
    title: "SEO for Small Business: The 2025 Playbook for Ranking #1 on Google",
    excerpt: "If you're not on page 1 of Google, your business might as well not exist.",
    slug: "seo-for-small-business-2025",
  },
  {
    title: "Digital Marketing Costs in 2025: How Much Should SMBs Spend to See Real ROI?",
    excerpt: "If your marketing isn't profitable, you're doing it wrong—here's how to fix it.",
    slug: "digital-marketing-costs-2025",
  },
  {
    title: "The Future of AI in Business: How Small Companies Are Scaling Faster Than Ever",
    excerpt: "Small businesses that ignore AI today will get left behind tomorrow—here's why.",
    slug: "future-of-ai-in-business",
  },
]

export default function BlogPostList() {
  return (
    <div className="space-y-12">
      {posts.map((post) => (
        <div key={post.slug} className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
              <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black">Read More</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

