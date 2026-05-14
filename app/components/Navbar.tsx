import Link from "next/link";
import Image from "next/image";
import jahzLogo from "../../public/JahzLOGO.png";
import empire from "../../public/empire.png";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-sm border-b shadow-lg p-6 mx-3 mt-3 rounded-3xl">
      <div className="max-w-4xl mx-auto px-2 h-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-6">
          <Image src={jahzLogo} alt="Jahz Empire Logo" width={60} height={60} />
          <Image src={empire} alt="Jahz Empire Text" width={100} height={20} className="hidden md:block" />
        </Link>
        <Link
          href="/menu"
          className="bg-[#455041] hover:bg-amber-600 transition-colors text-amber-400 text-sm font-semibold px-5 py-2 rounded-full"
        >
          View Menu
        </Link>
      </div>
    </nav>
  );
}