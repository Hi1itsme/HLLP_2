import { Button } from "./ui/button";

export const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold">
            HODLOTTO{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Tokenomics
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            The HODLOTTO token is designed to support long-term growth and fairness. 
            Lottery rewards drive engagement, while the treasury and dev fund ensure sustainable ecosystem development.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2 w-full">
          <div className="flex justify-between items-center text-lg font-medium text-muted-foreground bg-background p-4 rounded-md shadow-sm">
            <span>Lottery Rewards</span>
            <span className="text-primary font-bold">50%</span>
          </div>
          <div className="flex justify-between items-center text-lg font-medium text-muted-foreground bg-background p-4 rounded-md shadow-sm">
            <span>Treasury</span>
            <span className="text-primary font-bold">20%</span>
          </div>
          <div className="flex justify-between items-center text-lg font-medium text-muted-foreground bg-background p-4 rounded-md shadow-sm">
            <span>Development Fund</span>
            <span className="text-primary font-bold">15%</span>
          </div>
          <div className="flex justify-between items-center text-lg font-medium text-muted-foreground bg-background p-4 rounded-md shadow-sm">
            <span>Marketing & Partnerships</span>
            <span className="text-primary font-bold">10%</span>
          </div>
          <div className="flex justify-between items-center text-lg font-medium text-muted-foreground bg-background p-4 rounded-md shadow-sm">
            <span>Community Airdrops</span>
            <span className="text-primary font-bold">5%</span>
          </div>
        </div>
      </div>
    </section>
  );
};
