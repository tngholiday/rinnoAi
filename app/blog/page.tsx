'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 ">
      {/* 📰 Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-100 dark:from-[#0b0f1a] dark:to-[#1e2230] py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Insights, News & Stories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with our latest thoughts on tech, innovation, and business strategy.
          </p>
        </div>
      </section>

     {/* 🌟 Featured Article */}
<section className="py-20 bg-white dark:bg-gray-900">
  <div className="container mx-auto max-w-7xl px-6">
    <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
      {/* Left: Text Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4">🚀 How AI is Transforming Modern Business</h2>
        <p className="text-muted-foreground mb-4">
          Artificial Intelligence (AI) is no longer a futuristic concept — it's here and it's revolutionizing the way businesses operate across every industry. From automating workflows to enhancing customer experiences, AI is reshaping the landscape.
        </p>
        <p className="text-muted-foreground mb-4">
          In this featured article, we dive deep into real-world applications of AI, challenges businesses face, and what the future holds for organizations ready to embrace intelligent automation.
        </p>
        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full" />
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-200">By Jane Doe</p>
            <p>April 20, 2025</p>
          </div>
        </div>
        <Link
          href="/blog/ai-transforming-business"
          className="inline-block mt-6 text-blue-600 hover:underline font-medium"
        >
          Read full article →
        </Link>
      </div>

      {/* Right: Image or Graphic */}
      <div className="w-full h-64 md:h-80 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 dark:from-indigo-700 dark:to-purple-800 flex items-center justify-center text-white text-2xl font-bold">
        <span className="opacity-80">[ AI Illustration / Image Here ]</span>
      </div>
    </div>
  </div>
</section>

      {/* 🧱 Latest Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 container mx-auto max-w-7xl">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Web Development",
                desc: "Explore the latest trends in frontend and backend technologies.",
                link: "/blogdetail/how-to-build-a-website"
              },
              {
                title: "Designing for Accessibility",
                desc: "How inclusive design improves UX and expands your reach.",
                link: "/blogdetail/seo-tips-for-beginners"
              },
              {
                title: "Why SEO Still Matters in 2025",
                desc: "Tips and strategies to stay ahead in search rankings.",
                link: "/blogdetail/seo-tips-for-beginners"
              },
            ].map((post, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.desc}</p>
                <Link href={post.link} className="text-blue-600 hover:underline font-medium">
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* 🧭 Categories */}
<section className="py-20 bg-white dark:bg-gray-900">
  <div className="container mx-auto max-w-7xl px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Explore by Topic</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Dive into the areas that interest you most. Whether you're into design, startups, or the latest in AI, we've got something insightful for you.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        { name: "Technology", desc: "Emerging tech, trends & insights", icon: "💻" },
        { name: "Design", desc: "UI/UX inspiration and best practices", icon: "🎨" },
        { name: "AI", desc: "Machine learning, LLMs, and beyond", icon: "🤖" },
        { name: "Startups", desc: "Founder stories & startup strategy", icon: "🚀" },
        { name: "Marketing", desc: "Growth tactics and brand building", icon: "📈" },
        { name: "Development", desc: "Tips, tutorials, and dev workflows", icon: "🛠️" },
      ].map(({ name, desc, icon }, i) => (
        <Link
          key={i}
          href={`/blog/category/${name.toLowerCase()}`}
          className="group bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 transition hover:shadow-xl hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="text-2xl">{icon}</div>
            <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">{name}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </Link>
      ))}
    </div>
  </div>
</section>


      {/* 📬 Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Want Fresh Content in Your Inbox?</h2>
          <p className="text-lg mb-6">Subscribe to our newsletter for weekly tech insights and resources.</p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full text-black w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
