import { WhatIsIt } from "./components/WhatIsIt";
import { Tokenomics } from "./components/Tokenomics";
import { FAQ } from "./components/FAQ";
import { Stats} from "./components/Stats";
import { Footer } from "./components/Footer";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Roadmap } from "./components/Road";
import { Socials } from "./components/Socials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <WhatIsIt/>
      <HowItWorks />
      <Stats />
      <Roadmap />
      <Tokenomics />
      <Socials />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
