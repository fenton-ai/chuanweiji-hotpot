import { shopConfig } from "../config/shop.config";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function Location() {
  const { location, brand } = shopConfig;
  return (
    <section id="location" className="relative py-24 px-5 bg-[#0a0a0a]">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-lg mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-hotpot-400 text-xs font-medium tracking-[0.2em] uppercase mb-4 block">到店指引</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">来找我们</h2>
            <p className="text-white/35 text-sm max-w-xs mx-auto leading-relaxed">深夜的红锅为你而煮，随时欢迎光临</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="relative h-48 rounded-2xl img-placeholder border border-white/[0.04] mb-8 overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <MapPin size={32} className="text-white/15 mb-2" />
              <p className="text-white/15 text-xs tracking-wide">点击导航到店</p>
            </div>
            <a href={`https://uri.amap.com/marker?position=${location.lng},${location.lat}&name=${encodeURIComponent(location.navigationTitle)}`}
              target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label="打开导航" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="glass-card rounded-2xl p-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-hotpot-500/8 flex items-center justify-center flex-shrink-0 ring-1 ring-hotpot-500/10"><MapPin size={16} className="text-hotpot-400" /></div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 tracking-tight">门店地址</h4>
                <p className="text-white/40 text-sm leading-relaxed">{location.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-hotpot-500/8 flex items-center justify-center flex-shrink-0 ring-1 ring-hotpot-500/10"><Clock size={16} className="text-hotpot-400" /></div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 tracking-tight">营业时间</h4>
                <p className="text-white/40 text-sm">{location.businessHours}</p>
                <p className="text-white/20 text-xs mt-1">最近地铁：{location.nearestStation}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-hotpot-500/8 flex items-center justify-center flex-shrink-0 ring-1 ring-hotpot-500/10"><Phone size={16} className="text-hotpot-400" /></div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1 tracking-tight">联系电话</h4>
                <a href={`tel:${brand.phone}`} className="text-hotpot-400 text-sm hover:text-hotpot-300 transition-colors font-medium">{brand.phone}</a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="mt-6 flex gap-3">
            <a href={`https://uri.amap.com/marker?position=${location.lng},${location.lat}&name=${encodeURIComponent(location.navigationTitle)}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-primary flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-hotpot-500 hover:bg-hotpot-600 text-white font-bold text-sm rounded-2xl shadow-lg shadow-hotpot-500/20 tracking-wide">
              <Navigation size={16} />一键导航
            </a>
            <a href={`tel:${brand.phone}`}
              className="flex items-center justify-center gap-2 px-6 py-4 glass border-white/[0.06] hover:border-white/[0.12] text-white/70 hover:text-white font-medium text-sm rounded-2xl transition-all duration-300">
              <Phone size={16} />打电话
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
