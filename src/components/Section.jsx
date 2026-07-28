import Container from "./Container";

export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`relative w-full py-24 sm:py-32 ${className}`}>
      <Container>
        <a href={`#${id}`} className="group flex items-center gap-6 mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-[32px] font-black text-neon uppercase tracking-tighter leading-none shrink-0">
            {id.toUpperCase()}
          </h2>
          <div className="flex-1 h-5 relative overflow-hidden">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-neon text-xs font-bold tracking-widest uppercase whitespace-nowrap">
              VIEW MORE
            </span>
            <div className="absolute inset-0 bg-background transition-all duration-300 right-0 group-hover:right-[90px]" />
            <div className="absolute left-0 h-[4px] top-1/2 -translate-y-1/2 bg-[#f0f0f01a] transition-all duration-300 right-0 group-hover:right-[90px]">
              <div className="absolute right-0 inset-y-0 w-10 bg-neon" />
            </div>
          </div>
        </a>
        <div className="text-gray-400 text-lg leading-relaxed space-y-6">
          {children}
        </div>
      </Container>
    </section>
  );
}
