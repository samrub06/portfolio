/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
  image: string;
  mediumImage: any;
  name: string;
  description: string;
  url?:string;
  className?: string;
}) => {
  return (
    <Link href={props.url || ""} className={cn("w-full", props.className)}>
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
        <div className="relative w-10 h10">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h10 rounded-full object-contain"
          ></img>
          <img
            src={props.mediumImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          ></img>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transiton-transform"
          size={16}
        />
      </Card>
    </Link>
  );
};
