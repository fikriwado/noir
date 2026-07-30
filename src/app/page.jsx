import Hero from "@/components/Hero";
import Section from "@/components/Section";
import About from "@/components/About";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import LifeAt from "@/components/LifeAt";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FixedUI from "@/components/FixedUI";

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden">
      <Hero />
      <LifeAt />
      <About />
      <Works />
      <Experience />
      <Contact />
      <Footer />
      <FixedUI />
    </main>
  );
}
