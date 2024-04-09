import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import Section from "./Section";

const Contact = () => {
  return (
    <Section classsName="flex flex-col items-start gap-4">
      <Badge className="ml-0" variant={"outline"}>
        Contact
      </Badge>
      <h2 className="scroll-m-20 border-b pb- flex-1 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
          name="@Samuel Charbit"
          image="https://avatars.githubusercontent.com/u/76777361?s=400&u=4906e9daf0f9bb6a22870a545de2ca8033754a91&v=4"
          mediumImage={
            "https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
          }
          description="16,000 followers"
          url="https://www.linkedin.com/in/samuelcharbit/"
          className="flex-1"
        />
        <ContactCard
          name="+975 8 40 46 422"
          image="https://avatars.githubusercontent.com/u/76777361?s=400&u=4906e9daf0f9bb6a22870a545de2ca8033754a91&v=4"
          mediumImage={
            "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          }
          description="Online"
          className="flex-1"
          url="https://wa.me/972584046422"
        />

        <ContactCard
          name="charbit.samuel@gmail.com"
          image="https://avatars.githubusercontent.com/u/76777361?s=400&u=4906e9daf0f9bb6a22870a545de2ca8033754a91&v=4"
          mediumImage={
            "https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI=w240-h480-rw"
          }
          description="Email for any inquiries"
          url="mailto:charbit.samuel@gmail.com"
          className="flex-1"
        />
      </div>
    </Section>
  );
};
export default Contact;
