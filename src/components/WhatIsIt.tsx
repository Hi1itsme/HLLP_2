import HodLottoBG from "../assets/HodLotto_BG.png";
import HodLottoBackground1 from "../assets/HodLotto_Background_1.jpeg";
import HodLottoBackground2 from "../assets/HL_BG_5.jpeg";
import HodLottoBackground3 from "../assets/HL_BG_1.jpeg";
import HodLottoBackground4 from "../assets/HL_BG_5.jpeg";



export const WhatIsIt = () => {
  const panels = [
    {
      title: "Overview",
      text: "HODLOTTO is the first NFT-powered lottery where your ticket lasts forever—and your odds grow the longer you hold. This isn’t just another game of chance. It’s a Web3-powered system that rewards the dedicated...",
      image: HodLottoBackground1,
    },
    {
      title: "Core Mechanics",
      list: [
        "10 NFT Tiers – Choose your entry level.",
        "Permanent Draw Access – Lifetime entry.",
        "Weighted Chances – Higher tier = better odds.",
        "Soulbound Ownership – Non-transferable NFTs.",
        "Why it matters: You’re building a long-term position.",
      ],
      image: HodLottoBackground2,
    },
    {
      title: "Long-Term Utility",
      list: [
        "Compounding Power – Odds grow over time.",
        "Stack NFTs – Multiple NFTs = exponential edge.",
        "Loyalty Pays – Rewards for long-term holders.",
        "Bonus: Strategic players get the biggest edge.",
      ],
      image: HodLottoBackground3,
    },
    {
      title: "Built on Blockchain",
      list: [
        "On-Chain Randomness – Tamper-proof fairness.",
        "Upgradeable Contracts – Evolving tech.",
        "Immutable History – Fully auditable.",
        "Web3 Confidence – Trustless and transparent.",
      ],
      image: HodLottoBackground4,
    },
  ];

  return (
    <section id="what" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-10 bg-black text-white">
      {/* Banner */}
      <img
        src={HodLottoBG}
        alt="HodLotto Header"
        className="w-full max-h-[300px] object-cover object-center rounded-2xl mb-12 shadow-md"
      />

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        What is{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          HODLOTTO?
        </span>
      </h2>

      {/* Grid of Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        {panels.map(({ title, text, list, image }, i) => (
          <div
            key={i}
            className="bg-muted/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 text-center shadow-md text-white text-sm sm:text-base"
          >
            {image && (
              <img
                src={image}
                alt={`${title} visual`}
                className="w-full h-24 sm:h-28 object-cover rounded-md mb-3"
              />
            )}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>

            {text && (
              <p className="text-muted-foreground text-xs sm:text-sm mb-2">{text}</p>
            )}

            {list && (
              <ul className="list-disc list-inside text-left text-muted-foreground space-y-1 text-xs sm:text-sm">
                {list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
