import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🍽️</span>
          <span className="font-bold text-stone-800 tracking-tight text-lg">
            Jahz Empire
          </span>
        </Link>
        <Link
          href="/menu"
          className="bg-amber-500 hover:bg-amber-600 transition-colors text-white text-sm font-semibold px-5 py-2 rounded-full"
        >
          View Menu
        </Link>
      </div>
    </nav>
  );
}