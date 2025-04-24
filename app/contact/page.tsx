export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12 max-w-md">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
} 