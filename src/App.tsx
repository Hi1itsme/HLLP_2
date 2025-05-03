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
import SpaceBG from "./assets/Space_BG_2.jpeg"; // ✅ Import the background
import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${SpaceBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // ensures it covers the whole page
      }}
    >
      <Navbar />
      <WhatIsIt />
      <HowItWorks />
      <Stats />
      <Roadmap />
      <Tokenomics />
      <Socials />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
