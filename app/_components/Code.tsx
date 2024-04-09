import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors text-primary rounded-sm border-accent px-1 py-0.5",
        className
      )}
      {...props}
    />
  );
};
