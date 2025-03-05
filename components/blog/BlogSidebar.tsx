import { Button } from "@/components/ui/button"

export default function BlogSidebar() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Get a Free AI Growth Strategy Call</h3>
      <p className="mb-6">
        Discover how AI can transform your business. Our experts will analyze your needs and create a custom growth
        plan.
      </p>
      <Button className="w-full bg-[#CBF36E] hover:bg-[#b9e050] text-black">Book Your Free Call Now</Button>
    </div>
  )
}

