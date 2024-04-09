import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import Section from "./Section";
import NodeJsIcon from "./icons/NodeJsIcon";
import PostgreSQLIcon from "./icons/PostgreSQL";
import ReactIcon from "./icons/ReactIcon";

const Skills = () => {
  return (
    <Section classsName="flex flex-col items-start gap-4">
      <Badge variant={"outline"} className="ml-0">
        Skills
      </Badge>
      <h2 className="scroll-m-20 border-b pb- flex-1 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on{" "}
      </h2>
      <div className="flex max-md:flex-col gap-4 mt-3">
        <div className="flex flex-col gap- flex-1">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also <Code>Next.js</Code> with <Code>Typescript</Code>
            as a backend and frontend framework.
          </p>
        </div>
        <div className="flex flex-col gap- flex-1">
          <NodeJsIcon size={42} style={{ animationDuration: "10s" }} />
          <h3 className="text-2xl font-semibold tracking-tight">NodeJS</h3>
          <p className="text-sm text-muted-foreground">
            My main language for the backend is <Code>NodeJS</Code>. I also use <Code>C#</Code>{" "}
            as a backend framework.
          </p>
        </div>
        <div className="flex flex-col gap- flex-1">
          <PostgreSQLIcon size={42} style={{ animationDuration: "10s" }} />
          <h3 className="text-2xl font-semibold tracking-tight">PostgreSQL</h3>
          <p className="text-sm text-muted-foreground">
            My main DB technology is <Code>PostgreSQL</Code>. I also use <Code>MangoDB</Code>{" "}
            and <Code>Amazon AWS</Code>.
          </p>
        </div>
      </div>
    </Section>
  );
};
export default Skills;
