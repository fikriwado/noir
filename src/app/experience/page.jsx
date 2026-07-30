import Experience from "@/components/Experience";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
  return (
    <>
      <main className="flex-1 overflow-hidden">
        <Experience isInnerPage />
        <Container>
          <section className="w-full py-24 md:py-32 lg:py-40">
            <div className="border-t border-zinc-800 pt-16">
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
                Full Résumé
              </span>
              <div className="mt-8 text-zinc-400 leading-relaxed space-y-6">
                <p>
                  Detailed work history, certifications, and case studies will be
                  listed here.
                </p>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
