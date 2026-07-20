import { shopConfig } from "../config/shop.config";

export default function Footer() {
  return (
    <footer className="py-8 px-5 bg-[#080808] border-t border-white/[0.03]">
      <div className="max-w-lg mx-auto text-center">
        <p className="font-[family-name:var(--font-display)] text-white/20 text-sm mb-1">{shopConfig.brand.name}</p>
        <p className="text-white/10 text-xs">© {shopConfig.brand.since}—{new Date().getFullYear()} · 用传统手艺，煮一锅人间烟火</p>
      </div>
    </footer>
  );
}
