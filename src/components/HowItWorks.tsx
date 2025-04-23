import Background from "../assets/Spaceman_in_space.png";


interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: "Tiered NFT Minting",
    description:
      "Mint NFTs across 10 tiers with varying prices and lottery weights. Higher-tier NFTs offer better odds and strategic depth.",
  },
  {
    title: "Weighted Lottery System",
    description:
      "Each NFT mints entries into the lottery pool based on tier weight. Higher tiers = more entries = better chances to win.",
  },
  {
    title: "Smart Contract Architecture",
    description:
      "Two upgradeable contracts power the system: one for minting and entry tracking, and another for fair draw execution.",
  },
  {
    title: "Soulbound & Upgradeable",
    description:
      "NFTs are soulbound, meaning non-transferable. Contracts are upgradeable for future-proof features and improvements.",
  },
];

export const HowItWorks = () => {
  return (
    <section
  id="howItWorks"
  className="relative py-24 sm:py-32"
  style={{
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  backgroundSize: "70%", // ← this keeps it small
}}

>
  <div className="container text-center text-white backdrop-brightness-75 py-12 rounded-xl">
    <h2 className="text-3xl md:text-4xl font-bold">
      How It{" "}
      <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Works{" "}
      </span>
      Step-by-Step Guide
    </h2>
    <p className="md:w-3/4 mx-auto mt-4 mb-12 text-xl text-muted-foreground">
      The HodLotto ecosystem uses secure smart contracts and NFT technology to
      create a fair, permanent-entry lottery system based on weighted odds.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
      {features.map(({ title, description }) => (
        <div key={title} className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};
