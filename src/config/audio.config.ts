export const audioConfig = {
  bgm: { src: "/audio/bgm.mp3", volume: 0.2, label: "背景音乐" },
  voice: { src: "/audio/welcome.mp3", volume: 0.6, label: "老板欢迎语音" },
};
export type AudioConfig = typeof audioConfig;
