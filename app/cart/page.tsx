"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "Ape Big Package",
      price: 69.99,
      quantity: 1,
      image: "/images/Ape-Bundle-Image-Main_72ec0622-2ebf-4191-85e7-9d25ae4ea169.jpg",
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-[rgb(12,34,26)] mb-12">
            Your Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-[rgb(12,34,26)] font-medium mb-8">
                Your cart is empty
              </p>
              <a
                href="/collections/new-collection"
                className="inline-block bg-[rgb(255,200,0)] text-[rgb(12,34,26)] py-4 px-10 rounded-[9999px] font-bold text-base uppercase hover:bg-[rgb(255,200,0)]/90 transition-all shadow-[5px_5px_0px_rgba(12,34,26,0.3)]"
              >
                Continue Shopping
              </a>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[1rem] p-6 shadow-[10px_10px_0px_rgba(12,34,26,0.1)] flex gap-6"
                  >
                    {/* Product Image */}
                    <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold uppercase text-[rgb(12,34,26)]">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[rgb(12,34,26)] hover:text-red-600 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex justify-between items-end">
                        {/* Quantity */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-10 h-10 rounded-full border-2 border-[rgb(12,34,26)] flex items-center justify-center hover:bg-[rgb(12,34,26)] hover:text-white transition-all"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-lg font-bold text-[rgb(12,34,26)] min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-10 h-10 rounded-full border-2 border-[rgb(12,34,26)] flex items-center justify-center hover:bg-[rgb(12,34,26)] hover:text-white transition-all"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-2xl font-bold text-[rgb(12,34,26)]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-[rgb(240,249,244)] rounded-[1rem] p-8 sticky top-28">
                  <h2 className="text-2xl font-bold uppercase text-[rgb(12,34,26)] mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-[rgb(12,34,26)] font-medium">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[rgb(12,34,26)] font-medium">
                      <span>Shipping</span>
                      <span>{subtotal >= 50 ? "FREE" : "$5.99"}</span>
                    </div>
                    <div className="border-t-2 border-[rgb(12,34,26)]/20 pt-4">
                      <div className="flex justify-between text-xl font-bold text-[rgb(12,34,26)]">
                        <span>Total</span>
                        <span>
                          ${(subtotal >= 50 ? subtotal : subtotal + 5.99).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {subtotal < 50 && (
                    <p className="text-sm text-[rgb(12,34,26)] font-medium mb-6 text-center bg-white rounded-xl p-4">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}

                  <button className="w-full bg-[rgb(255,200,0)] text-[rgb(12,34,26)] py-5 px-8 rounded-[9999px] font-bold text-lg uppercase hover:bg-[rgb(255,200,0)]/90 transition-all shadow-[5px_5px_0px_rgba(12,34,26,0.3)] mb-4">
                    Checkout
                  </button>

                  <a
                    href="/collections/new-collection"
                    className="block text-center text-[rgb(12,34,26)] font-medium hover:underline"
                  >
                    Continue Shopping
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
