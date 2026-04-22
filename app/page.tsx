import About from "./components/about";
import ContactSection from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/project";
import SkillsSection from "./components/skills";

export default function Main() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <SkillsSection />
      <ContactSection />
    </main>
    </div>
  );
}