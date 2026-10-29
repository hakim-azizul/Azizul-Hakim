import AboutEducation from "@/components/page/AboutEducation";
import Contact from "@/components/page/Contact";
import Hero from "@/components/page/Hero";
import Projects from "@/components/page/Projects";
import Skills from "@/components/page/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <AboutEducation />
      <Contact />
    </main>
  );
}
