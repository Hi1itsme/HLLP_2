import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface SocialProps {
  platform: string;
  handle: string;
  url: string;
  icon: string;
}

const socials: SocialProps[] = [
  {
    platform: "Twitter",
    handle: "@hodlotto",
    url: "https://twitter.com/hodlotto",
    icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png", // Twitter icon
  },
  {
    platform: "Discord",
    handle: "Join our server",
    url: "https://discord.gg/hodlotto",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
  },
  {
    platform: "GitHub",
    handle: "github.com/hodlotto",
    url: "https://github.com/hodlotto",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  {
    platform: "Telegram",
    handle: "@hodlotto_official",
    url: "https://t.me/hodlotto_official",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
  },
];

export const Socials = () => {
  return (
    <section id="socials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Connect With{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          HodLotto
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Stay up to date, join the community, and follow our journey across your favorite platforms.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {socials.map(({ platform, handle, url, icon }: SocialProps) => (
          <a key={platform} href={url} target="_blank" rel="noreferrer noopener">
            <Card className="hover:shadow-md transition duration-200">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage alt={platform} src={icon} />
                  <AvatarFallback>{platform.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{platform}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pl-[72px] text-muted-foreground">{handle}</CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};
