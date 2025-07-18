import { Hero } from "@/components/Hero";
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>
    </div>
  );
};

export default Index;
