"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[rgb(29,108,187)] text-white py-24">
          <div className="max-w-[1200px] mx-auto px-5 text-center">
            <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6">
              B2B Wholesale
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto">
              Partner with Ape Water and bring premium natural spring water to your customers
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-center text-[rgb(12,34,26)] mb-16">
              Why Partner With Us
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-xl font-bold uppercase text-[rgb(12,34,26)] mb-2">
                  Premium Quality
                </h3>
                <p className="text-[rgb(12,34,26)] font-medium">
                  100% natural spring water from pristine sources
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="text-xl font-bold uppercase text-[rgb(12,34,26)] mb-2">
                  Bulk Pricing
                </h3>
                <p className="text-[rgb(12,34,26)] font-medium">
                  Competitive wholesale rates for volume orders
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="text-xl font-bold uppercase text-[rgb(12,34,26)] mb-2">
                  Fast Delivery
                </h3>
                <p className="text-[rgb(12,34,26)] font-medium">
                  Reliable shipping and logistics support
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold uppercase text-[rgb(12,34,26)] mb-2">
                  Partnership
                </h3>
                <p className="text-[rgb(12,34,26)] font-medium">
                  Dedicated support and marketing materials
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-[rgb(240,249,244)]">
          <div className="max-w-[800px] mx-auto px-5">
            <h2 className="text-4xl md:text-5xl font-bold uppercase text-center text-[rgb(12,34,26)] mb-4">
              Get Started
            </h2>
            <p className="text-center text-lg text-[rgb(12,34,26)] font-medium mb-12">
              Fill out the form below and our wholesale team will reach out within 24 hours
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-[1rem] shadow-[10px_10px_0px_rgba(12,34,26,0.1)]"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                  >
                    Full Name *
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
                    Email *
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
                    htmlFor="company"
                    className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-[rgb(12,34,26)]/20 rounded-[1rem] focus:outline-none focus:border-[rgb(255,200,0)] transition-colors font-medium"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-[rgb(12,34,26)]/20 rounded-[1rem] focus:outline-none focus:border-[rgb(255,200,0)] transition-colors font-medium"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                  >
                    Message *
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
                    placeholder="Tell us about your business and your wholesale needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[rgb(255,200,0)] text-[rgb(12,34,26)] py-5 px-8 rounded-[9999px] font-bold text-lg uppercase hover:bg-[rgb(255,200,0)]/90 transition-all shadow-[5px_5px_0px_rgba(12,34,26,0.3)]"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
