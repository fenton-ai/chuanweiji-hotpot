import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { shopConfig } from "../config/shop.config";

const navLinks = [
  { label: "首页", href: "#hero" },
  { label: "故事", href: "#story" },
  { label: "招牌", href: "#dishes" },
  { label: "环境", href: "#env" },
  { label: "评价", href: "#reviews" },
  { label: "到店", href: "#location" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass !bg-[#0a0a0a]/90 border-b border-white/[0.04] py-2.5" : "bg-transparent py-5"
    }`}>
      <div className="max-w-lg mx-auto px-5 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 no-underline">
          <span className="text-2xl">🍲</span>
          <span className="font-[family-name:var(--font-display)] font-bold text-base text-white tracking-wide">
            {shopConfig.brand.shortName}
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-0.5">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              className="px-3.5 py-2 text-xs text-white/40 hover:text-hotpot-400 transition-all duration-300 rounded-lg hover:bg-white/[0.03] tracking-wide"
            >{link.label}</a>
          ))}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden flex flex-col gap-1.5 p-2" aria-label="菜单">
          <span className={`block w-5 h-px bg-white/70 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-5 h-px bg-white/70 transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-px bg-white/70 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="sm:hidden glass !bg-[#0a0a0a]/98 border-t border-white/[0.04]">
            <div className="max-w-lg mx-auto px-5 py-3 flex flex-col gap-0.5">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className="py-3.5 px-4 text-sm text-white/50 hover:text-hotpot-400 hover:bg-white/[0.04] rounded-xl transition-all duration-200 tracking-wide">{link.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
