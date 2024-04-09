/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Code } from "./Code";
import Section from "./Section";
import NodeJsIcon from "./icons/NodeJsIcon";
import PostgreSQLIcon from "./icons/PostgreSQL";
import ReactIcon from "./icons/ReactIcon";
import TypescriptIcon from "./icons/TypeScriptIcon";


const Hero = () => {
	return (
    <Section classsName="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          {" "}
          Samuel Charbit
        </h2>
        <h3 className="text-3xl font-caption">Fullstack Developer</h3>
        <p className="text-base">
          Working as a Full-Stack Developer since June 2021 in
          <Link href={"https://www.veepee.fr/gr/home/default"}>
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://asset.brandfetch.io/id7irNeyvk/idMOx27gvs.png?updated=1709623408822"
                style={{ width: 16, height: "auto" }}
                className="rounded-sm"
              />
              Veepee
            </Code>
          </Link>{" "}
          <br />
          Mainly worked with
          <Code className="inline-flex items-center gap-1">
            <ReactIcon size={16} className={"inline"} />
            React
          </Code>
          ,{" "}
          <Code className="inline-flex items-center gap-1">
            <TypescriptIcon size={16} className={"inline"} />
            Typescript
          </Code>
          ,{" "}
          <Code className="inline-flex items-center gap-1">
            <NodeJsIcon size={16} className={"inline"} />
            Node.js
          </Code>{" "}
          ,
          <Code className="inline-flex items-center gap-1">
            <PostgreSQLIcon size={16} className={"inline"} />
            Postgresql
          </Code>
          , Amazon AWS, MongoDB, and Redis. Living in
          <Code className="inline-flex items-center gap-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/234px-Flag_of_Israel.svg.png"
              style={{ width: 16, height: "auto" }}
              alt="israel"
            />
            Tel Aviv
          </Code>{" "}
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/76777361?s=400&u=4906e9daf0f9bb6a22870a545de2ca8033754a91&v=4"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
          alt="Samuel Charbit"
        />
      </div>
    </Section>
  );
}
export default Hero