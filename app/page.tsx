import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/project";

export default function Main() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
    </div>
  );
}