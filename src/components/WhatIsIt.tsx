import HodLottoBG from "../assets/HodLotto_BG.png";
import HodLottoBackground1 from "../assets/HodLotto_Background_1.jpeg";
import HodLottoBackground2 from "../assets/HL_BG_5.jpeg";
import HodLottoBackground3 from "../assets/HL_BG_1.jpeg";
import HodLottoBackground4 from "../assets/HL_BG_5.jpeg";

export const WhatIsIt = () => {
  const panels = [
    {
      title: "Overview",
      text: "HODLOTTO is the first NFT-powered lottery where your ticket lasts forever—and your odds grow the longer you hold.This isn’t just another game of chance. It’s a Web3-powered system that rewards the dedicated. Instead of buying throwaway tickets, you mint soulbound NFTs that lock you into every future draw. The more you HODL, the stronger your position becomes.",
      image: HodLottoBackground1, // Replace with image path later
    },
    {
      title: "Core Mechanics",
      list: [
        "10 NFT Tiers – Choose your entry level. Higher tiers = better odds.",
        "Permanent Draw Access – Each NFT gives you lifetime entry.",
        "Weighted Chances – Higher tier = more weight in every draw. = more weighted chances",
        "Soulbound Ownership – Your NFTs are non-transferable, locking your spot.",
        "Why it matters: You’re not just playing—you’re building a position in a fair, transparent system where your chances improve the longer you stay."
      ],
      image: HodLottoBackground2,
    },
    {
      title: "Long-Term Utility",
      list: [
        "Compounding Power – Odds stack and compound over time.",
        "Stack NFTs – Multiple NFTs = exponentially better chances.",
        "Loyalty Pays – Early adopters unlock future benefits and exclusive rewards.",
        "Bonus: Your strategy isn’t just about luck—it’s about positioning. Play it smart, and your compounding edge can pay off big."
      ],
      image: HodLottoBackground3,
    },
    {
      title: "Built on Blockchain",
      list: [
        "On-chain randoOn-Chain Randomness – Every draw is provably fair and tamper-proof.",
        "Upgradeable Smart Contracts – Built for the long game.",
        "Immutable History – Every entry, every win, forever on-chain.",
        " Web3 Confidence: Trustless, transparent, and impossible to rig. Everything is visible, and your participation is etched into the blockchain."
      ],
      image: HodLottoBackground4,
    },
  ];

  return (
    <section id="what" className="container py-24 sm:py-32 space-y-12">
      {/* Top Image */}
      <img
        src={HodLottoBG}
        alt="HodLotto Background"
        className="w-full max-h-[400px] object-cover object-[0%_30%] rounded-xl mb-12 shadow-md"
      />

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        What is{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          HODLOTTO?
        </span>
      </h2>

      {/* Horizontal Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {panels.map(({ title, text, list, image }, i) => (
          <div
            key={i}
            className="bg-muted/40 border rounded-xl p-6 space-y-4 shadow-md text-center"
          >
            {image && (
              <img
                src={image}
                alt={`${title} visual`}
                className="w-full h-32 object-contain mx-auto"
              />
            )}
            <h3 className="text-xl font-semibold">{title}</h3>
            {text && <p className="text-muted-foreground text-sm">{text}</p>}
            {list && (
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 text-left">
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
