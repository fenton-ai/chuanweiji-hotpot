import { shopConfig } from "../config/shop.config";
import ScrollReveal from "./ScrollReveal";
import { Mic } from "lucide-react";

export default function Story() {
  const { story } = shopConfig;
  return (
    <section id="story" className="relative py-24 px-5 bg-[#0a0a0a]">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-lg mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-hotpot-400 text-xs font-medium tracking-[0.2em] uppercase mb-4 block">品牌故事</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">二十年只做一件事</h2>
            <p className="text-white/35 text-sm max-w-xs mx-auto leading-relaxed">从火锅学徒到社区老店，老陈用二十年时间证明：传统手艺，才是最好的味道</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="glass-card rounded-2xl p-6 mb-14 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-hotpot-500/10 to-transparent rounded-full blur-xl" />
            <div className="relative flex items-center gap-5">
              <div className="w-16 h-16 rounded-full img-placeholder flex items-center justify-center text-3xl flex-shrink-0 ring-2 ring-hotpot-500/20 ring-offset-2 ring-offset-[#0a0a0a]">👨‍🍳</div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-white mb-0.5">{story.bossName}</h3>
                <p className="text-sm text-white/40">{story.bossTitle}</p>
                <p className="text-xs text-white/30 mt-1">"{story.intro}"</p>
              </div>
            </div>
            <div className="relative mt-4 pt-4 border-t border-white/[0.04] flex items-center gap-2">
              <Mic size={14} className="text-hotpot-400" />
              <span className="text-xs text-white/30">点击播放老板语音介绍</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-hotpot-500/40 via-hotpot-500/20 to-transparent" />
          <div className="space-y-10">
            {story.timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 80}>
                <div className="relative pl-14">
                  <div className="absolute left-[11px] top-1.5 w-[18px] h-[18px] rounded-full border-2 border-hotpot-500 bg-[#0a0a0a] z-10 ring-4 ring-[#0a0a0a]">
                    <div className="absolute inset-[3px] rounded-full bg-hotpot-500" />
                  </div>
                  <div className="glass-card rounded-2xl p-5">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-[family-name:var(--font-display)] font-bold text-hotpot-400 text-lg">{item.year}</span>
                      <h3 className="font-bold text-white text-base">{item.title}</h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
