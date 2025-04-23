import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ChartIcon, WalletIcon, MagnifierIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png"; // Replace later with your roadmap visual
import spaceman from "../assets/Spaceman_Solo.png";

interface RoadmapStep {
  title: string;
  description: string;
  icon: JSX.Element;
}

const roadmap: RoadmapStep[] = [
  {
    title: "Phase 1: NFT Launch",
    description:
      "Deploy smart contracts and launch the tiered NFT minting system with soulbound tokens.",
    icon: <ChartIcon />,
  },
  {
    title: "Phase 2: First Lottery Draw",
    description:
      "Initiate the first weighted lottery draw using verifiable on-chain randomness.",
    icon: <WalletIcon />,
  },
  {
    title: "Phase 3: Ecosystem Expansion",
    description:
      "Add utility, integrate governance features, and expand reward mechanics for long-term holders.",
    icon: <MagnifierIcon />,
  },
];

export const Roadmap = () => {
  return (
    <section id="roadmap" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              HodLotto{" "}
            </span>
            Roadmap
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Here's what's coming next as we evolve HodLotto into the leading decentralized lottery system.
          </p>

          <div className="flex flex-col gap-8">
            {roadmap.map(({ icon, title, description }: RoadmapStep) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

<img
  src={spaceman}
  className="w-[300px] md:w-[500px] lg:w-[600px] object-contain -scale-x-100"
  alt="Roadmap Visual"
/>


      </div>
    </section>
  );
};
