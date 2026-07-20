import { shopConfig } from "../config/shop.config";
import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const avatars = ["👩", "👧", "👨", "🧑"];

export default function Reviews() {
  const { reviews } = shopConfig;
  return (
    <section id="reviews" className="relative py-24 px-5 bg-[#0c0c0c]">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-lg mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-hotpot-400 text-xs font-medium tracking-[0.2em] uppercase mb-4 block">顾客评价</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">吃过的都说好</h2>
            <p className="text-white/35 text-sm max-w-xs mx-auto leading-relaxed">来自真实食客的认可，是我们坚持的动力</p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.id} delay={i * 60}>
              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-full img-placeholder flex items-center justify-center text-xl flex-shrink-0 ring-1 ring-white/[0.04]">{avatars[i]}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-white text-sm">{review.name}</h4>
                      <span className="text-white/25 text-xs">{review.date}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={12} fill={j < review.rating ? "#f59e0b" : "none"} color={j < review.rating ? "#f59e0b" : "#525252"} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-3.5">{review.text}</p>
                <div className="flex flex-wrap gap-1.5">
                  {review.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-white/[0.03] text-white/25 text-[10px] rounded-full tracking-wide">{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
