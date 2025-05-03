import { Button } from "./ui/button";

export const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            HODLOTTO{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Tokenomics
            </span>
          </h2>
          <p className="text-muted-foreground text-xl">
            The HODLOTTO token fuels the ecosystem—designed for long-term growth, fairness, and community-driven success.
          </p>
        </div>

        <div className="space-y-6 lg:col-start-2 w-full">
          <div className="bg-background p-6 rounded-md shadow-sm text-muted-foreground">
            <div className="flex justify-between items-center text-lg font-medium">
              <span>Lottery Rewards</span>
              <span className="text-primary font-bold">50%</span>
            </div>
            <p className="mt-2 text-sm">
              Directly powers ongoing draws and keeps users engaged.  
              <br />More demand = more rewards.
            </p>
          </div>

          <div className="bg-background p-6 rounded-md shadow-sm text-muted-foreground">
            <div className="flex justify-between items-center text-lg font-medium">
              <span>Treasury</span>
              <span className="text-primary font-bold">20%</span>
            </div>
            <p className="mt-2 text-sm">
              Used for protocol upgrades, reserves, and governance.  
              <br />Supports stability and long-term growth.
            </p>
          </div>

          <div className="bg-background p-6 rounded-md shadow-sm text-muted-foreground">
            <div className="flex justify-between items-center text-lg font-medium">
              <span>Development Fund</span>
              <span className="text-primary font-bold">15%</span>
            </div>
            <p className="mt-2 text-sm">
              Fuels innovation, pays the team, and ensures strong infrastructure.  
              <br />Keeps the engine running smoothly.
            </p>
          </div>

          <div className="bg-background p-6 rounded-md shadow-sm text-muted-foreground">
            <div className="flex justify-between items-center text-lg font-medium">
              <span>Marketing & Partnerships</span>
              <span className="text-primary font-bold">10%</span>
            </div>
            <p className="mt-2 text-sm">
              Builds global awareness and forms key strategic alliances.  
              <br />Drives user growth and adoption.
            </p>
          </div>

          <div className="bg-background p-6 rounded-md shadow-sm text-muted-foreground">
            <div className="flex justify-between items-center text-lg font-medium">
              <span>Community Airdrops</span>
              <span className="text-primary font-bold">5%</span>
            </div>
            <p className="mt-2 text-sm">
              Rewards early believers, boosts network effects.  
              <br />Grows loyalty and spreads the word.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
