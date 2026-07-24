import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import About from "@/components/About";
import LifeAt from "@/components/LifeAt";
import FixedUI from "@/components/FixedUI";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <LifeAt />
      <About />
      <Section id="works" title="Selected Works">
        <p>
          A curated collection of projects I&apos;ve built — from experimental prototypes to production applications. Each project represents a unique challenge and a chance to push my skills further.
        </p>
        <p>
          Details, case studies, and live demos coming soon. Stay tuned.
        </p>
      </Section>
      <Section id="contact" title="Get In Touch">
        <p>
          Have a project in mind, a collaboration idea, or just want to say hello? I&apos;m always open to new conversations and opportunities.
        </p>
      </Section>
      <FixedUI />
    </div>
  );
}
