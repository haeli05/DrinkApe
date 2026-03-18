"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="max-w-[500px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-center text-[rgb(12,34,26)] mb-4">
            Create Account
          </h1>
          <p className="text-center text-[rgb(12,34,26)] font-medium mb-12">
            Join the Ape Movement
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-10 rounded-[1rem] shadow-[10px_10px_0px_rgba(12,34,26,0.1)]"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-[rgb(12,34,26)]/20 rounded-[1rem] focus:outline-none focus:border-[rgb(255,200,0)] transition-colors font-medium"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-[rgb(12,34,26)]/20 rounded-[1rem] focus:outline-none focus:border-[rgb(255,200,0)] transition-colors font-medium"
                  />
                </div>
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
                  htmlFor="password"
                  className="block text-sm font-bold uppercase text-[rgb(12,34,26)] mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-[rgb(12,34,26)]/20 rounded-[1rem] focus:outline-none focus:border-[rgb(255,200,0)] transition-colors font-medium"
                />
              </div>

              <div className="text-sm text-center">
                <span className="text-[rgb(12,34,26)] font-medium">
                  Already have an account?{" "}
                </span>
                <Link
                  href="/account/login"
                  className="text-[rgb(12,34,26)] font-bold hover:underline"
                >
                  Log in
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[rgb(255,200,0)] text-[rgb(12,34,26)] py-5 px-8 rounded-[9999px] font-bold text-lg uppercase hover:bg-[rgb(255,200,0)]/90 transition-all shadow-[5px_5px_0px_rgba(12,34,26,0.3)]"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
