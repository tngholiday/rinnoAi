'use client';
import { Briefcase, Lightbulb, Clock, Heart, Users, Rocket, Quote } from "lucide-react";
import { useState } from 'react';
import { X } from 'lucide-react';
export default function CareersPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
 <div className="dark:bg-zinc-900">
     <main className="min-h-screen pt-24 dark:bg-zinc-900 container mx-auto max-w-7xl">
      {/* Hero Section */}
     
    <>
      {/* Join Team Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6 dark:text-white">Join Our Team</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore open roles and build your career with us.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-md hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition"
        >
          View Open Positions
        </button>
      </section>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Modal Content */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 w-full max-w-lg mx-auto shadow-xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Tell Us About You</h2>
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Tell us what you're looking for..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white py-2 rounded-md hover:from-green-600 hover:via-blue-600 hover:to-purple-600 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  



             

{/* Why Join Us */}
<section className="bg-gray-50 dark:bg-zinc-900   py-20">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-4 dark:text-white ">Why Work With Us</h2>
    <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
      We're not just a workplace — we're a community where your growth, well-being, and creativity are supported every step of the way.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-md transition duration-300">
        <Briefcase className="mx-auto text-blue-600 mb-4" size={32} />
        <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
        <p className="text-muted-foreground">
          We offer clear career paths, mentorship programs, and continuous learning opportunities to help you thrive.
        </p>
      </div>
      <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-md transition duration-300">
        <Lightbulb className="mx-auto text-yellow-500 mb-4" size={32} />
        <h3 className="text-xl font-semibold mb-2">Innovative Culture</h3>
        <p className="text-muted-foreground">
          Work in an environment that values creativity, experimentation, and forward-thinking solutions.
        </p>
      </div>
      <div className="p-6 bg-white dark:bg-zinc-900   rounded-xl shadow hover:shadow-md transition duration-300">
        <Clock className="mx-auto text-purple-500 mb-4" size={32} />
        <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
        <p className="text-muted-foreground">
          Enjoy remote-friendly roles, flexible hours, and a culture that respects your time outside of work.
        </p>
      </div>
      <div className="p-6 bg-white dark:bg-zinc-900   rounded-xl shadow hover:shadow-md transition duration-300">
        <Heart className="mx-auto text-pink-500 mb-4" size={32} />
        <h3 className="text-xl font-semibold mb-2">Wellbeing Focused</h3>
        <p className="text-muted-foreground">
          From mental health resources to wellness initiatives, your well-being is a top priority.
        </p>
      </div>
      <div className="p-6 bg-white dark:bg-zinc-900   rounded-xl shadow hover:shadow-md transition duration-300">
        <Users className="mx-auto text-green-500 mb-4" size={32} />
        <h3 className="text-xl font-semibold mb-2">Inclusive Team</h3>
        <p className="text-muted-foreground">
          Join a diverse and inclusive team where every voice is heard and respected.
        </p>
      </div>
      <div className="p-6 bg-white dark:bg-zinc-900   rounded-xl shadow hover:shadow-md transition duration-300">
        <Rocket className="mx-auto text-red-500 mb-4" size={32} />
        <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
        <p className="text-muted-foreground">
          Your work matters. Contribute to meaningful projects that create real-world change.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="bg-white dark:bg-zinc-900 py-20">
  <div className="container mx-auto px-4 md:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Culture</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          At the heart of our company is a culture built on trust, collaboration, and creativity. We believe in empowering people to bring their best selves to work — every voice matters, and innovation thrives when everyone feels supported.
        </p>
        <ul className="space-y-4 text-left">
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold text-xl">✓</span>
            <span className="text-muted-foreground">Team-first mentality with open communication</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold text-xl">✓</span>
            <span className="text-muted-foreground">Celebration of diversity and individual growth</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold text-xl">✓</span>
            <span className="text-muted-foreground">Regular team events, hackathons, and retreats</span>
          </li>
        </ul>
      </div>

      {/* Image Content */}
      <div className="relative group">
        <img
          src="https://bstate.com/wp-content/uploads/2021/03/friendly-office-meeting-1024x576.jpg"
          alt="Our Team"
          className="rounded-2xl shadow-xl w-full transform group-hover:scale-105 transition duration-500"
        />
        <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-gray-700">
          A glimpse of our team in action
        </div>
      </div>
    </div>
  </div>
</section>



{/* Testimonials */}
<section className="bg- dark:bg-zinc-900 py-24">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 dark:text-white">What Our Team Says</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Hear from the people who make our culture what it is. We value every voice — here’s what our team has to say.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 dark:bg-zinc-900">
      {/* Testimonial Card */}
      {[
        {
          quote: "Working here has been a game-changer. I feel truly supported and challenged to grow every day.",
          name: "Alex",
          title: "Frontend Developer",
          image: "/images/team/alex.jpg",
        },
        {
          quote: "The flexibility and culture here are unmatched. I love being part of a team that cares.",
          name: "Sam",
          title: "Product Manager",
          image: "/images/team/sam.jpg",
        },
        {
          quote: "I've never felt more valued or inspired. The leadership team actually listens and empowers us.",
          name: "Jamie",
          title: "UX Designer",
          image: "/images/team/jamie.jpg",
        },
      ].map((testimonial, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
        >
          <Quote className="text-blue-500 mb-4" size={32} />
          <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full mb-2 object-cover shadow-md"
          />
          <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Final Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-muted-foreground mb-6">We're always looking for passionate, creative, and driven people to join us.</p>
          <button onClick={() => setIsOpen(true)} className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-md hover:from-green-600 hover:via-blue-600 hover:to-purple-600 transition">
            Browse Careers
          </button>
        </div>
      </section>
    </main>
 </div>
  );
}
