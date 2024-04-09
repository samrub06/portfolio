/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { MessageCircle, Rss, StickyNote, Store, Weight } from "lucide-react";
import { ContactCard } from "./ContactCard";
import Section from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps } from "./Work";

const Status = () => {
  return (
    <Section classsName="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun project </p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECT.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col gap-4 w-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex flex-col flex-1 gap-2	">
          <p className="text-lg text-muted-foreground ">Contact me</p>
          <ContactCard
            name="@Samuel Charbit"
            image="https://avatars.githubusercontent.com/u/76777361?s=400&u=4906e9daf0f9bb6a22870a545de2ca8033754a91&v=4"
            mediumImage={
              "https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
            }
            description="16,000 followers"
            url="https://www.linkedin.com/in/samuelcharbit/"
          />
          <ContactCard
            name="+975 8 40 46 422"
            image="https://avatars.githubusercontent.com/u/76777361?s=400&u=4906e9daf0f9bb6a22870a545de2ca8033754a91&v=4"
            mediumImage={
              "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            }
            description="Online"
            url="https://wa.me/972584046422"
          />
        </Card>
      </div>
    </Section>
  );
};
export default Status;

const SIDE_PROJECT: SideProjectProps[] = [
  {
    Logo: Store,
    title: "React Eshop MERN stack & Redux",
    description:
      "Eshop with full-featured shopping cart with PayPal & credit/debit payments.",
    url: "https://github.com/samrub06/eshop",
  },
  {
    Logo: StickyNote,
    title: "CodeEditor",
    description: "Build an interactive browser-based coding environment.",
    url: "https://github.com/samrub06/CodeEditor",
  },
  {
    Logo: Rss,
    title: "Crud Node",
    description: "A platform for API with SQL",
    url: "/",
  },
  {
    Logo: MessageCircle,
    title: "Amazon Service JS service",
    description: "Amazon Service JS service",
    url: "/",
  },
  {
    Logo: Weight,
    title: "Codeline",
    description: "A platform for developers to share their code",
    url: "/",
  },
];

const WORKS: WorkProps[] = [
  {
    image:
      "https://asset.brandfetch.io/id7irNeyvk/idMOx27gvs.png?updated=1709623408822",
    title: "Veepee",
    role: "FullStack Developer",
    date: "2021 - Present",
    url: "https://www.instagram.com/hedmayner/",
    current: false,
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4E0BAQEb4Bzy9Upkog/company-logo_100_100/0/1631332945767?e=1720656000&v=beta&t=yeifosZkGKObooZFcoGXPL3763bKtTvLZr0sonzfY4w",
    title: "ITC",
    role: "FullStack Course",
    date: "2021",
    url: "https://www.itc.tech/",
    current: false,
  },
];
