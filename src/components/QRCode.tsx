import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, Download, Printer, X } from "lucide-react";

interface Props {
  qrCodeUrl?: string;
  pageUrl?: string;
}

export default function QRCode({ qrCodeUrl = "/images/qrcode.png", pageUrl = "" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-4 z-40 w-12 h-12 rounded-full glass border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:border-white/[0.15] transition-all duration-300 shadow-lg"
        aria-label="二维码"
      >
        <QrCode size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-5"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#1a1a1a] rounded-3xl p-8 max-w-sm w-full text-center border border-white/[0.06] shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors">
                <X size={20} />
              </button>

              <h3 className="font-[family-name:var(--font-display)] font-bold text-white text-lg mb-2">扫码访问店铺</h3>
              <p className="text-white/30 text-xs mb-6">微信扫一扫，打开川味记数字名片</p>

              <div className="bg-white rounded-2xl p-3 mb-4 mx-auto w-48 h-48 flex items-center justify-center">
                <div className="w-full h-full bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                  <QrCode size={80} className="text-hotpot-400" />
                </div>
              </div>

              <p className="text-white/20 text-[10px] mb-6 break-all">{pageUrl}</p>

              <div className="flex gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 glass border-white/[0.06] text-white/60 text-xs rounded-xl hover:text-white transition-colors"
                >
                  <Download size={14} /> 保存图片
                </button>
                <button
                  onClick={() => {
                    if (qrCodeUrl) {
                      const w = window.open(qrCodeUrl, "_blank");
                      if (w) { w.onload = () => w.print(); }
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 glass border-white/[0.06] text-white/60 text-xs rounded-xl hover:text-white transition-colors"
                >
                  <Printer size={14} /> 打印
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
