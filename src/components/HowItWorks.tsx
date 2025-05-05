import Background from "../assets/Spaceman_in_space.png";

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden bg-black"
    >
      {/* Background Image - full brightness */}
      <div className="absolute inset-0 z-0">
        <img
          src={Background}
          alt="Spaceman floating"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Main content with semi-blurred background */}
      <div className="relative z-10 max-w-6xl mx-auto backdrop-blur-md bg-black/30 rounded-2xl px-4 sm:px-8 py-10 space-y-16 text-white shadow-xl">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center leading-tight">
          How It{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Works
          </span>
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
          <strong>HODLOTTO is a game of chance—where time is your ally.</strong><br />
          Traditional lotteries are one-shot deals. HODLOTTO lets you mint once and enter forever.
          The longer you HODL, the more stacked your odds become.
        </p>

        {/* Section 1 */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">🚀 Revolutionizing Lotteries with NFT Technology</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
            <li>Mint from 10 NFT Tiers—each with different price points and weighted odds.</li>
            <li>NFTs are soulbound—they can’t be sold or transferred, locking your spot permanently.</li>
            <li>Each ticket gives you automatic entry into every future draw.</li>
            <li><strong>Web3 Advantage:</strong> You're securing your place in a continuous system of rewards.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">🎯 Built-In Rewards for Holders</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
            <li><strong>Early = Stronger Position</strong> – The sooner you join, the better your long-term odds.</li>
            <li><strong>Stack for Power</strong> – Hold multiple NFTs and multiply your advantage.</li>
            <li><strong>Future Drops & Perks</strong> – More utility coming for those who stay loyal.</li>
            <li><strong>Strategic Alpha:</strong> Early movers compound their edge for exclusive rewards.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">🔐 Transparent and Fair Process</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
            <li>Smart contracts handle everything—no middlemen.</li>
            <li>On-chain randomness guarantees fairness.</li>
            <li>All entries and results are publicly verifiable.</li>
            <li><strong>Full Trust:</strong> Everything is on-chain. Nothing hidden.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
