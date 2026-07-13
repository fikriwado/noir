import Container from "./Container";

export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`relative w-full py-24 sm:py-32 ${className}`}>
      <Container>
        <p className="text-[12px] uppercase tracking-[0.3em] text-gray-500 mb-4">
          {id}
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-black text-neon mb-10">
          {title}
        </h2>
        <div className="text-gray-400 text-lg leading-relaxed space-y-6">
          {children}
        </div>
      </Container>
    </section>
  );
}
