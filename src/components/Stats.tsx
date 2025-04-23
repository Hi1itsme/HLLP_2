import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface StatCardProps {
  stat: string;
  label: string;
  description: string;
  
}

const statCards: StatCardProps[] = [
  {
    stat: "10",
    label: "NFT Tiers",
    description: "Strategically choose from 10 permanent NFT tiers with varying odds and pricing.",
    
  },
  {
    stat: "2x+",
    label: "Weighted Entry Multipliers",
    description: "Each higher tier gives exponentially more chances to win through weighted entries.",
    
  },
  {
    stat: "100%",
    label: "On-Chain Transparency",
    description: "All draws, NFTs, and rewards are handled through immutable smart contracts.",
    
  },
];

export const Stats = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        HODLOTTO{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          By the Numbers
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {statCards.map(({ stat, label, description }: StatCardProps) => (
          <Card key={label} className="text-center bg-muted/50">
            <CardHeader>
              <CardTitle className="text-5xl font-extrabold">{stat}</CardTitle>
              <p className="text-lg font-semibold text-muted-foreground">{label}</p>
            </CardHeader>

            <CardContent className="text-muted-foreground text-sm">{description}</CardContent>

            <CardFooter>
              <img
                
                alt={label}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
