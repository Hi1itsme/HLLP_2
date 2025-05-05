import { WhatIsIt } from "./components/WhatIsIt";
import { Tokenomics } from "./components/Tokenomics";
import { FAQ } from "./components/FAQ";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Roadmap } from "./components/Road";
import { Socials } from "./components/Socials";
import { AnimatedTerminal } from "./components/AnimatedTerminal"; // ✅ NEW
import SpaceBG from "./assets/Space_BG_2.jpeg";
import "./App.css";

function App() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${SpaceBG})` }}
    >
      <Navbar />
      <main className="flex flex-col gap-10 px-4 sm:px-6 md:px-10 max-w-screen-xl mx-auto">
        <WhatIsIt />
        
        {/* ✅ New Terminal Section */}
        <section className="py-16 bg-black/80 rounded-xl shadow-lg px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
            Terminal Preview
          </h2>
          <AnimatedTerminal />
        </section>

        <HowItWorks />
        <Stats />
        <Roadmap />
        <Tokenomics />
        <Socials />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
