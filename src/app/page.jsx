import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <Hero />

      <Section id="about" title="About Me" className="pt-40 sm:pt-52">
        <p>
          I&apos;m a developer and designer with a passion for building clean, functional digital experiences. I enjoy working across the full stack — from crafting pixel-perfect interfaces to architecting robust backend systems.
        </p>
        <p>
          My approach is simple: write maintainable code, solve real problems, and never stop learning. When I&apos;m not shipping features, you&apos;ll find me exploring new tools, reading about system design, or tinkering with side projects.
        </p>
      </Section>

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
    </div>
  );
}
