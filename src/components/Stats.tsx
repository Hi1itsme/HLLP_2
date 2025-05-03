import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


interface StatCardProps {
  stat: string;
  label: string;
  description: string;
  
}

const statCards: StatCardProps[] = [
  {
    stat: "10",
    label: "NFT Tiers",
    description: "10 NFT Tiers – Scale your odds, choose your level.",
    
  },
  {
    stat: "2x+",
    label: "Weighted Entry Multipliers",
    description: "2x+ Multipliers – Higher tiers boost your chances exponentially.",
    
  },
  {
    stat: "100%",
    label: "On-Chain Transparency",
    description: "100% On-Chain Transparency – Every draw, forever verifiable.",
    
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
              
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
