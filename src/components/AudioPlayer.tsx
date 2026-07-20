import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX, Play, Pause, X } from "lucide-react";
import { audioConfig } from "../config/audio.config";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [voicePlaying, setVoicePlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const voiceRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioConfig.bgm.src);
      audioRef.current.loop = true;
      audioRef.current.volume = audioConfig.bgm.volume;
    }
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  }, [isMuted]);

  const playVoice = useCallback(() => {
    if (!voiceRef.current) {
      voiceRef.current = new Audio(audioConfig.voice.src);
      voiceRef.current.volume = audioConfig.voice.volume;
    }
    if (voicePlaying) {
      voiceRef.current.pause();
      voiceRef.current.currentTime = 0;
      setVoicePlaying(false);
    } else {
      voiceRef.current.play().catch(() => {});
      setVoicePlaying(true);
      voiceRef.current.onended = () => setVoicePlaying(false);
    }
  }, [voicePlaying]);

  return (
    <>
      {/* Floating music button */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className={`fixed bottom-4 right-4 z-40 w-12 h-12 rounded-full glass border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:border-white/[0.15] transition-all duration-300 shadow-lg ${
          isPlaying ? "border-hotpot-500/30 text-hotpot-400" : ""
        }`}
        aria-label="音乐控制"
      >
        {isPlaying ? <Music size={20} className="animate-pulse" /> : <Music size={20} />}
      </button>

      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed bottom-20 right-4 z-40 glass rounded-2xl p-4 w-56"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-white text-xs font-medium">声音控制</span>
              <button onClick={() => setShowPanel(false)} className="text-white/30 hover:text-white">
                <X size={14} />
              </button>
            </div>

            <div className="space-y-3">
              {/* BGM */}
              <div className="flex items-center gap-2">
                <button onClick={togglePlay}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isPlaying ? "bg-hotpot-500/20 text-hotpot-400" : "bg-white/[0.04] text-white/50"
                  }`}>
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <span className="text-white/50 text-xs flex-1">背景音乐</span>
                <button onClick={toggleMute} className="text-white/40 hover:text-white">
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>

              {/* Voice */}
              <div className="flex items-center gap-2">
                <button onClick={playVoice}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    voicePlaying ? "bg-hotpot-500/20 text-hotpot-400" : "bg-white/[0.04] text-white/50"
                  }`}>
                  {voicePlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <span className="text-white/50 text-xs">老板欢迎语音</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
