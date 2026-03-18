"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
            <h1 className="text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)]">
              Contact
            </h1>
          </div>

          <div className="max-w-[600px] mx-auto">
            <div className="bg-white p-8 rounded-[1rem] shadow-[10px_10px_0px_rgba(12,34,26,0.1)]">
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
                    htmlFor="phone"
                    className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
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
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
