import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Skills from "./_components/Skills";
import Spacing from "./_components/Spacing";
import Status from "./_components/Status";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size={"sm"} />
      <Hero />
      <Spacing size={"sm"} />
      <Status />
      <Spacing size={"sm"} />
      <Skills />
      <Spacing size={"sm"} />
      <Contact />
      <Spacing size={"sm"} />
      <Footer />
    </main>
  );
}
