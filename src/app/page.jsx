import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import About from "@/components/About";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import LifeAt from "@/components/LifeAt";
import Contact from "@/components/Contact";
import FixedUI from "@/components/FixedUI";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <LifeAt />
      <About />
      <Works />
      <Experience />
      <Contact />
      <FixedUI />
    </div>
  );
}
