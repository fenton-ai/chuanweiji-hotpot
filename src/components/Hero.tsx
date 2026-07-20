import { motion } from "framer-motion";
import { shopConfig } from "../config/shop.config";

export default function Hero() {
  const { brand, hero } = shopConfig;
  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-24 overflow-hidden">
      <div className="absolute inset-0 img-placeholder-food" />
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-transparent to-[#080808]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[70%]"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(239,68,68,0.15) 0%, rgba(239,68,68,0.04) 40%, transparent 70%)" }}
      />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(239,68,68,0.06) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 w-full max-w-lg mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border-white/[0.08] text-hotpot-400 text-xs font-medium tracking-widest uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hotpot-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-hotpot-400" />
            </span>
            {hero.badgeText}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl font-black text-white mb-5 leading-[1.1] tracking-tight"
        >
          {brand.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl font-[family-name:var(--font-display)] font-semibold text-hotpot-400 text-glow-fire mb-4"
        >
          {brand.slogan}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-sm text-white/40 tracking-wide mb-10"
        >
          {brand.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3.5 justify-center"
        >
          <a href="#dishes" className="btn-primary inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-hotpot-500 hover:bg-hotpot-600 text-white font-bold text-sm rounded-2xl shadow-lg shadow-hotpot-500/20 tracking-wide">
            {hero.cta1} 🍲
          </a>
          <a href="#location" className="inline-flex items-center justify-center gap-2.5 px-10 py-4 glass border-white/[0.08] hover:border-white/[0.15] text-white/80 hover:text-white font-medium text-sm rounded-2xl transition-all duration-300">
            {hero.cta2} 📍
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <p className="text-[10px] text-white/20 tracking-[0.2em] mb-3">向下探索</p>
          <div className="w-6 h-10 mx-auto rounded-full border border-white/[0.08] flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-hotpot-500/60 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Steam particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute bottom-20 opacity-0"
          style={{
            left: `${15 + i * 18}%`,
            animation: `steam 4s ease-out ${i * 0.8}s infinite`,
          }}
        >
          <div className="w-16 h-2 bg-white/5 rounded-full blur-sm" />
        </div>
      ))}
    </section>
  );
}
