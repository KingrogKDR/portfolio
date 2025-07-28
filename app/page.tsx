"use client";

import ExperienceSection from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import { useEffect, useRef, useState } from "react";

const LazySection = ({
  children,
  id,
  minHeight = "100dvh",
}: {
  children: React.ReactNode;
  id: string;
  minHeight?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once visible
          }
        });
      },
      {
        root: null, // viewport as root
        rootMargin: "0px", // no margin
        threshold: 0.1, // trigger when 10% of the item is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      style={{ minHeight: !isVisible ? minHeight : "auto" }}
    >
      {isVisible ? (
        children
      ) : (
        <div
          style={{ minHeight: minHeight }}
          className="flex items-center justify-center text-gray-500"
        >
          Loading {id}...
        </div>
      )}
    </section>
  );
};

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

        <LazySection id="experience">
          <div className="mt-20 flex items-center justify-center text-4xl">
            <ExperienceSection />
          </div>
        </LazySection>

        <LazySection id="skills">
          <div className="mt-20 flex items-center justify-center text-4xl">
            <SkillsSection />
          </div>
        </LazySection>

        <LazySection id="projects">
          <div className="min-h-screen flex items-center justify-center text-4xl">
            Projects Section Content
          </div>
        </LazySection>
      </main>
    </div>
  );
}
