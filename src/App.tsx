import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Environment from "./components/Environment";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Footer from "./components/Footer";
import QRCode from "./components/QRCode";
import AudioPlayer from "./components/AudioPlayer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-[family-name:var(--font-body)]">
      <NavBar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Environment />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <QRCode />
      <AudioPlayer />
    </div>
  );
}
