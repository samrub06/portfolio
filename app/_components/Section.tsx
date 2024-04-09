import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

const Section = (props: PropsWithChildren<{classsName?:string}>) => {
  return <section className={cn("max-w-4xl px-4 m-auto", props.classsName)}>{props.children}</section>;
};
export default Section