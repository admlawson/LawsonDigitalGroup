import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturedPost() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
      <Image src="/placeholder.svg" alt="Featured post" width={800} height={400} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          AI-Powered Websites: How SMBs Are Turning Their Sites into Lead-Generating Machines
        </h2>
        <p className="text-gray-600 mb-4">
          Most small business websites fail to generate leads—here's how AI is changing that.
        </p>
        <Link href="/blog/ai-powered-websites">
          <Button className="bg-[#CBF36E] hover:bg-[#b9e050] text-black">Read More</Button>
        </Link>
      </div>
    </div>
  )
}

