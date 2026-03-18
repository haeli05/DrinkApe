"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-[rgb(12,34,26)] font-medium">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-[1rem] shadow-[10px_10px_0px_rgba(12,34,26,0.1)]">
              <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-6">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-[rgb(12,34,26)]/20 rounded-[1rem] focus:outline-none focus:border-[rgb(255,200,0)] transition-colors font-medium"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-[rgb(12,34,26)]/20 rounded-[1rem] focus:outline-none focus:border-[rgb(255,200,0)] transition-colors font-medium"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-[rgb(12,34,26)]/20 rounded-[1rem] focus:outline-none focus:border-[rgb(255,200,0)] transition-colors font-medium"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-[rgb(12,34,26)]/20 rounded-[1rem] focus:outline-none focus:border-[rgb(255,200,0)] transition-colors font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[rgb(255,200,0)] text-[rgb(12,34,26)] py-5 px-8 rounded-[9999px] font-bold text-lg uppercase hover:bg-[rgb(255,200,0)]/90 transition-all shadow-[5px_5px_0px_rgba(12,34,26,0.3)]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-[rgb(240,249,244)] p-8 rounded-[1rem]">
                <h3 className="text-xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                  Email Us
                </h3>
                <p className="text-[rgb(12,34,26)] font-medium">
                  <a href="mailto:info@drinkape.com" className="hover:underline">
                    info@drinkape.com
                  </a>
                </p>
              </div>

              <div className="bg-[rgb(240,249,244)] p-8 rounded-[1rem]">
                <h3 className="text-xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                  B2B & Wholesale
                </h3>
                <p className="text-[rgb(12,34,26)] font-medium mb-4">
                  Interested in partnering with Ape Water for your business, school, or event?
                </p>
                <a
                  href="/pages/b2b-wholesale"
                  className="inline-block text-[rgb(255,200,0)] font-bold hover:underline"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-[rgb(240,249,244)] p-8 rounded-[1rem]">
                <h3 className="text-xl font-bold uppercase text-[rgb(12,34,26)] mb-4">
                  Follow Us
                </h3>
                <p className="text-[rgb(12,34,26)] font-medium mb-4">
                  Join the Ape tribe on social media
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/drinkape"
                    className="text-[rgb(12,34,26)] hover:text-[rgb(255,200,0)] transition-colors font-bold"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/drinkape"
                    className="text-[rgb(12,34,26)] hover:text-[rgb(255,200,0)] transition-colors font-bold"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://twitter.com/drinkape"
                    className="text-[rgb(12,34,26)] hover:text-[rgb(255,200,0)] transition-colors font-bold"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
