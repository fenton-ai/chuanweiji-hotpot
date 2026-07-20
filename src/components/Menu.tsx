import { shopConfig } from "../config/shop.config";
import ScrollReveal from "./ScrollReveal";

export default function Menu() {
  const { dishes } = shopConfig;
  return (
    <section id="dishes" className="relative py-24 px-5 bg-[#0c0c0c]">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-lg mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-hotpot-400 text-xs font-medium tracking-[0.2em] uppercase mb-4 block">招牌美味</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">传统手艺 · 秘制底料</h2>
            <p className="text-white/35 text-sm max-w-xs mx-auto leading-relaxed">每一道菜都经过二十年打磨，每一口都是重庆的记忆</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {dishes.map((dish, i) => (
            <ScrollReveal key={dish.id} delay={i * 60}>
              <div className="dish-card gradient-border group cursor-pointer">
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 img-placeholder-food flex items-center justify-center">
                    <span className="text-5xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
                      {dish.name.includes("锅") ? "🍲" : dish.name.includes("牛") ? "🥩" : dish.name.includes("虾") ? "🦐" : dish.name.includes("毛肚") ? "🥓" : dish.name.includes("酥肉") ? "🥓" : "🍡"}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full glass text-white text-xs font-bold tracking-wide">{dish.tag}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2.5">
                    <h3 className="font-bold text-white text-lg tracking-tight">{dish.name}</h3>
                    <span className="font-[family-name:var(--font-display)] font-bold text-hotpot-400 text-lg">{dish.price}</span>
                  </div>
                  <p className="text-white/35 text-xs leading-relaxed mb-3.5">{dish.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {dish.badges.map(b => (
                      <span key={b} className="px-2.5 py-1 bg-hotpot-500/8 text-hotpot-400 text-[10px] rounded-full border border-hotpot-500/15 tracking-wide">{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
