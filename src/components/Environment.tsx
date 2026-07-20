import { shopConfig } from "../config/shop.config";
import ScrollReveal from "./ScrollReveal";

const envIcons = ["🏮", "🍻", "🔪", "🌃"];

export default function Environment() {
  const { environment } = shopConfig;
  return (
    <section id="env" className="relative py-24 px-5 bg-[#0a0a0a]">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-lg mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-hotpot-400 text-xs font-medium tracking-[0.2em] uppercase mb-4 block">店内环境</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">烟火气里的深夜食堂</h2>
            <p className="text-white/35 text-sm max-w-xs mx-auto leading-relaxed">没有豪华装修，但有最真实的市井烟火和人情温度</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4">
          {environment.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 80}>
              <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden gradient-border">
                <div className="absolute inset-0 img-placeholder flex items-center justify-center">
                  <span className="text-4xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">{envIcons[i]}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <h4 className="text-white font-bold text-sm mb-1 tracking-tight">{item.title}</h4>
                  <p className="text-white/30 text-[11px] leading-snug">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
