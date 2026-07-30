import Works from "@/components/Works";
import Footer from "@/components/Footer";

export default function WorksPage() {
  return (
    <>
      <main className="flex-1 overflow-hidden">
        <Works isInnerPage />
      </main>
      <Footer />
    </>
  );
}
