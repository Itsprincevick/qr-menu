export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
};

export type Category = {
  id: string;
  label: string;
};

export const categories: Category[] = [
  { id: "all", label: "All" },
  { id: "rice", label: "Rice Dishes" },
  { id: "soups", label: "Soups & Stews" },
  { id: "protein", label: "Proteins" },
  { id: "drinks", label: "Drinks" },
];

export const menuItems: MenuItem[] = [
  // Rice Dishes
  { id: 1, name: "Jollof Rice", description: "Smoky party-style jollof cooked in rich tomato base", price: 2500, category: "rice", emoji: "🍚" },
  { id: 2, name: "Fried Rice", description: "Nigerian-style fried rice with mixed veggies and seasoning", price: 2500, category: "rice", emoji: "🍳" },
  { id: 3, name: "White Rice & Stew", description: "Steamed white rice served with our rich beef stew", price: 2000, category: "rice", emoji: "🍽️" },
  { id: 4, name: "Coconut Rice", description: "Fragrant rice cooked in coconut milk with spices", price: 2800, category: "rice", emoji: "🥥" },

  // Soups & Stews
  { id: 5, name: "Egusi Soup", description: "Ground melon seed soup with leafy vegetables and assorted meat", price: 3000, category: "soups", emoji: "🥣" },
  { id: 6, name: "Banga Soup", description: "Delta-style palm fruit soup with fresh fish and spices", price: 3500, category: "soups", emoji: "🫕" },
  { id: 7, name: "Ogbono Soup", description: "Draw soup made from wild mango seeds with assorted toppings", price: 3000, category: "soups", emoji: "🍲" },
  { id: 8, name: "Efo Riro", description: "Rich Yoruba vegetable stew with assorted meat", price: 3000, category: "soups", emoji: "🥬" },
  { id: 9, name: "Ofe Onugbu (Bitter Leaf)", description: "Traditional Igbo soup with cocoyam and palm oil", price: 3200, category: "soups", emoji: "🌿" },

  // Proteins
  { id: 10, name: "Suya (Stick)", description: "Spiced grilled beef skewer with onions and tomatoes", price: 1000, category: "protein", emoji: "🍢" },
  { id: 11, name: "Peppered Chicken", description: "Deep-fried chicken in spicy pepper sauce", price: 3500, category: "protein", emoji: "🍗" },
  { id: 12, name: "Grilled Catfish", description: "Whole catfish grilled over open fire with pepper mix", price: 4500, category: "protein", emoji: "🐟" },
  { id: 13, name: "Peppered Gizzard", description: "Tender gizzard fried and tossed in spicy pepper sauce", price: 2000, category: "protein", emoji: "🫀" },

  // Drinks
  { id: 14, name: "Zobo (Hibiscus)", description: "Chilled hibiscus drink with ginger and pineapple", price: 500, category: "drinks", emoji: "🌺" },
  { id: 15, name: "Kunu", description: "Creamy millet drink lightly spiced", price: 500, category: "drinks", emoji: "🥛" },
  { id: 16, name: "Chapman", description: "Classic Nigerian cocktail — Fanta, Sprite, Grenadine, cucumber", price: 1000, category: "drinks", emoji: "🍹" },
  { id: 17, name: "Cold Water / Bottled Water", description: "Chilled 75cl table water", price: 200, category: "drinks", emoji: "💧" },
];