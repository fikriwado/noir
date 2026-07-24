import Section from "./Section";

const experienceData = [
  {
    id: 1,
    year: "2024 — PRESENT",
    role: "Lead Web Developer",
    company: "Soara Dev",
    description:
      "Leading a specialized team in delivering high-performance web applications and POS systems utilizing Laravel, React, and modern deployment pipelines.",
  },
  {
    id: 2,
    year: "2023 — 2024",
    role: "Full-Stack Developer",
    company: "Soara Dev",
    description:
      "Built custom web applications and digital tools for local businesses, handling everything from frontend interfaces to server-side logic and deployment.",
  },
  {
    id: 3,
    year: "2022 — 2023",
    role: "Freelance Developer",
    company: "Independent",
    description:
      "Collaborated with small businesses and agencies to build responsive websites, e-commerce platforms, and internal management dashboards.",
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col">
        {experienceData.map((item) => (
          <div
            key={item.id}
            className="group relative w-full flex flex-col md:flex-row md:items-start border-b border-zinc-800 py-8 px-4 md:px-8 hover:bg-zinc-900/50 transition-colors duration-300 border-l-4 border-transparent hover:border-[#DFFF00]"
          >
            <div className="w-full md:w-1/5 mb-2 md:mb-0">
              <span className="text-zinc-500 text-sm font-mono tracking-widest">
                {item.year}
              </span>
            </div>
            <div className="w-full md:w-2/5 mb-4 md:mb-0 pr-4">
              <h3 className="text-xl font-bold text-white">{item.role}</h3>
              <p className="text-[#DFFF00] mt-1 font-medium">{item.company}</p>
            </div>
            <div className="w-full md:w-2/5">
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
