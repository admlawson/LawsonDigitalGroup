import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import BlogHero from "@/components/blog/BlogHero"
import FeaturedPost from "@/components/blog/FeaturedPost"
import BlogPostList from "@/components/blog/BlogPostList"
import BlogSidebar from "@/components/blog/BlogSidebar"
import ExitIntentOffer from "@/components/blog/ExitIntentOffer"

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <main className="pt-24 pb-16">
        <BlogHero />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <FeaturedPost />
              <BlogPostList />
            </div>
            <div className="lg:w-1/3">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <ExitIntentOffer />
      <Footer />
    </div>
  )
}

