import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-stone-50">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 text-center max-w-2xl mx-auto">
          <div className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Authentic Nigerian Kitchen
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-stone-900 leading-tight tracking-tight mb-6">
            Good Food,<br />
            <span className="text-amber-500">Made Fresh.</span>
          </h1>

          <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-md mx-auto">
            From smoky Jollof to rich Egusi soup — explore our menu and place
            your order directly on WhatsApp.
          </p>

          <Link
            href="/menu"
            className="inline-block bg-stone-900 hover:bg-stone-700 transition-colors text-white font-semibold text-base px-8 py-4 rounded-full"
          >
            Browse Menu →
          </Link>
        </section>

        {/* Feature cards */}
        <section className="max-w-3xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { emoji: "🍲", title: "Fresh Daily", desc: "Everything is cooked fresh every day — no shortcuts." },
            { emoji: "📱", title: "Order via WhatsApp", desc: "Pick your items and send your order in one tap." },
            { emoji: "⚡", title: "Fast Service", desc: "We prep quickly so your food arrives hot." },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-stone-100 rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="font-bold text-stone-800 mb-1">{card.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="border-t border-stone-100 py-6 text-center text-stone-400 text-sm">
          © {new Date().getFullYear()} Jahz Empire Kitchen. All rights reserved.
        </footer>
      </main>
    </>
  );
}