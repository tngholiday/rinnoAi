import { blogPosts } from "@/lib/constants";
import { Calendar, Clock, MessageCircle, ThumbsUp, Bookmark, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
      slug: post.slug,
    }));
  }
  

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound(); // Next.js will show 404 page
  }


  return (
    <main className=" pb-20">
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="AI Technology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-white mb-4">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                24 comments
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white">
              <img
                src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Author"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>By Dr. Sarah Chen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Social Share Sidebar */}
          <div className="hidden lg:flex flex-col gap-4 sticky top-8 h-fit">
            <button className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <ThumbsUp className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Bookmark className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-600 shadow-sm flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-sky-500 shadow-sm flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-700 shadow-sm flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
              <Linkedin className="h-5 w-5" />
            </button>
          </div>

          {/* Main Content */}
          <article className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {post.content}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {post.content}
              </p>

              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI Evolution"
                className="w-full h-[400px] object-cover rounded-xl mb-6"
              />

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Impact Across Industries
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {post.content}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li className="mb-2">Healthcare: AI is improving diagnosis accuracy and treatment planning</li>
                <li className="mb-2">Finance: Automated trading systems and fraud detection</li>
                <li className="mb-2">Manufacturing: Predictive maintenance and quality control</li>
                <li>Retail: Personalized shopping experiences and inventory management</li>
              </ul>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300 my-8">
                {post.content}
              </blockquote>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Looking Ahead: The Future of AI
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {post.content}
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6">
                <li className="mb-2">Increased focus on ethical AI and responsible development</li>
                <li className="mb-2">Greater integration with IoT and edge computing</li>
                <li className="mb-2">Advanced natural language processing capabilities</li>
                <li>Enhanced human-AI collaboration frameworks</li>
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm">
                Artificial Intelligence
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm">
                Technology
              </span>
              <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm">
                Innovation
              </span>
            </div>

            {/* Author Bio */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Author"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dr. Sarah Chen</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    CEO at Rinno AI Software, with over 15 years of experience in artificial intelligence and machine learning.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    </main>
  );
}
