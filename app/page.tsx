import { HeroSection } from "@/components/HeroSection";

export default function Page() {
  return (
    <div className="relative page-gradient-bg min-h-screen">
      <main
        className="flex flex-col min-h-[100dvh] space-y-10
                      max-w-screen-md w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <section id="hero">
          <HeroSection />
        </section>
        <section
          id="about"
          className="min-h-screen flex items-center justify-center text-4xl"
        >
          About Section
        </section>
        <section
          id="education"
          className="min-h-screen flex items-center justify-center text-4xl"
        >
          Education Section
        </section>
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center text-4xl"
        >
          Projects Section
        </section>
      </main>
    </div>
  );
}
