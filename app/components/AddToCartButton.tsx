"use client";

import { useState } from "react";
import { MenuItem } from "../data/menu";

type CartItem = MenuItem & { quantity: number };

type Props = {
  item: MenuItem;
};

// Shared cart state via a simple module-level store
// (For a real app, use Zustand or Context)
let cartItems: CartItem[] = [];
let listeners: (() => void)[] = [];

function notifyListeners() {
  listeners.forEach((l) => l());
}

export function getCart() {
  return cartItems;
}

export function addToCart(item: MenuItem) {
  const existing = cartItems.find((c) => c.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems = [...cartItems, { ...item, quantity: 1 }];
  }
  notifyListeners();
}

export function removeFromCart(id: number) {
  cartItems = cartItems.filter((c) => c.id !== id);
  notifyListeners();
}

export function useCart() {
  const [, setTick] = useState(0);
  if (typeof window !== "undefined") {
    listeners = listeners.filter((l) => l !== setTick);
    listeners.push(() => setTick((t) => t + 1));
  }
  return cartItems;
}

// ─── Add to Cart Button ───────────────────────────────────────────
export default function AddToCartButton({ item }: Props) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={handleAdd}
      className={`w-full mt-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
        added
          ? "bg-green-500 text-white"
          : "bg-[#455041] hover:bg-amber-600 text-amber-400"
      }`}
    >
      {added ? "✓ Added!" : "Add to Order"}
    </button>
  );
}