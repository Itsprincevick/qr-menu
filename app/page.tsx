"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import AddToCartButton from "./components/AddToCartButton";
import CartDrawer from "./components/CartDrawer";
import { menuItems, categories } from "./data/menu";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-stone-50 pt-24 pb-48 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-stone-900 tracking-tight mb-2">
              Our Menu
            </h1>
            <p className="text-stone-400 text-base">
              Add items to your order, then send via WhatsApp 🍽️
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                  activeCategory === cat.id
                    ? "bg-stone-900 text-white"
                    : "bg-white border border-stone-200 text-stone-600 hover:border-stone-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-stone-800 text-base mb-1">
                  {item.name}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-bold text-base">
                    ₦{item.price.toLocaleString()}
                  </span>
                </div>
                <AddToCartButton item={item} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Cart */}
      <CartDrawer />
    </>
  );
}