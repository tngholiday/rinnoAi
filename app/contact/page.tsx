'use client';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Let us know how we can help..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 rounded-md hover:from-blue-700 hover:to-purple-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-1 dark:text-white">Email</h2>
              <p className="text-muted-foreground">support@yourcompany.com</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1 dark:text-white">Phone</h2>
              <p className="text-muted-foreground">+1 (123) 456-7890</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1 dark:text-white">Location</h2>
              <p className="text-muted-foreground">123 Startup Lane, Tech City, USA</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1 dark:text-white">Follow Us</h2>
              <div className="flex gap-4 mt-2 text-blue-600 dark:text-blue-400">
                <a href="#" className="hover:underline">Twitter</a>
                <a href="#" className="hover:underline">LinkedIn</a>
                <a href="#" className="hover:underline">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
