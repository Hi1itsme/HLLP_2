import Background from "../assets/Spaceman_in_space.png";

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="relative py-24 sm:py-32"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "70%",
      }}
    >
      <div className="container text-white backdrop-brightness-75 py-12 rounded-xl space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          How It{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Works
          </span>
        </h2>

        {/* Intro */}
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
          <strong>HODLOTTO is a game of chance—where time is your ally.</strong><br />
          Traditional lotteries are one-shot deals. HODLOTTO lets you mint once and enter forever.
          The longer you HODL, the more stacked your odds become.
        </p>

        {/* Section 1 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">🚀 Revolutionizing Lotteries with NFT Technology</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
            <li>Mint from 10 NFT Tiers—each with different price points and weighted odds.</li>
            <li>NFTs are soulbound—they can’t be sold or transferred, locking your spot permanently.</li>
            <li>Each ticket gives you automatic entry into every future draw.</li>
            <li><strong>Web3 Advantage:</strong> You’re not buying into a single moment—you’re securing your place in a continuous system of rewards.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">🎯 Built-In Rewards for Holders</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
            <li><strong>Early = Stronger Position</strong> – The sooner you join, the better your long-term odds.</li>
            <li><strong>Stack for Power</strong> – Hold multiple NFTs and multiply your advantage.</li>
            <li><strong>Future Drops & Perks</strong> – More utility coming for those who stay loyal.</li>
            <li><strong>Strategic Alpha:</strong> Early movers gain more than just wins—they compound their edge and unlock access to exclusive rewards down the line.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">🔐 Transparent and Fair Process</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
            <li>Smart contracts handle everything—no middlemen.</li>
            <li>On-chain randomness guarantees fairness.</li>
            <li>All entries and results are publicly verifiable.</li>
            <li><strong>Full Trust:</strong> Nothing hidden, nothing off-chain. Every win and every draw is for the world to see—and you’re always in.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
