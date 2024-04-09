import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";
import Section from "./Section";
import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section classsName="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">webifyagency.fr</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href={
              "https://drive.google.com/file/d/1CLmG4scq7ao_6Zh-CnKd8OpECSa0z3Ce/view?usp=sharing"
            }
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            CV&nbsp;&nbsp;
            <Download size={12} className="text-foreground" />
          </Link>
          <Link
            href={"https://github.com/samrub06"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/samuelcharbit/"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <LinkedInIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
export default Header;
