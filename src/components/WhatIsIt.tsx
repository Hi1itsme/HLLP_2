import HodLottoBG from "../assets/HodLotto_BG.png";

export const WhatIsIt = () => {
  const panels = [
    {
      title: "Overview",
      text: "HODLOTTO is the first-of-its-kind NFT-powered lottery system that rewards holders with ongoing lottery entries. Unlike traditional lotteries where tickets are single-use, HODLOTTO transforms your participation into lasting digital assets.",
    },
    {
      title: "Core Mechanics",
      list: [
        "10 NFT tiers with different prices and weights",
        "Permanent entry for every draw",
        "Higher tiers = more weighted chances",
        "Soulbound, non-transferable NFTs",
      ],
    },
    {
      title: "Long-Term Utility",
      list: [
        "Compounding odds over time",
        "Multiple NFTs stack your chances",
        "Future benefits for loyal holders",
      ],
    },
    {
      title: "Built on Blockchain",
      list: [
        "On-chain randomness & draw logic",
        "Upgradeable contracts (OpenZeppelin)",
        "Immutable history of all entries",
      ],
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
        {panels.map(({ title, text, list }, i) => (
          <div
            key={i}
            className="bg-muted/40 border rounded-xl p-6 space-y-4 shadow-md"
          >
            <h3 className="text-xl font-semibold">{title}</h3>
            {text && <p className="text-muted-foreground text-sm">{text}</p>}
            {list && (
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
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
