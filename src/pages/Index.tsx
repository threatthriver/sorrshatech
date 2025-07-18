import { Hero } from "@/components/Hero";





import { useEffect } from 'react';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  useEffect(() => {
    // Add dynamic blob effect
    const handleMouseMove = (e: MouseEvent) => {
      const blob = document.getElementById('blob');
      if (blob) {
        blob.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          { duration: 3000, fill: 'forwards' }
        );
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Marble Texture Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        opacity: 0.3,
        zIndex: 0
      }} />
      
      {/* Animated Blob Background */}
      <div id="blob" className="absolute h-[34rem] w-[34rem] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-spin-slow -z-1"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
        
        {/* Marble Veins */}
        {[...Array(5)].map((_, i) => {
          const rotation = Math.random() * 360;
          const size = Math.random() * 400 + 100;
          const opacity = Math.random() * 0.03 + 0.01;
          
          return (
            <div 
              key={`vein-${i}`}
              className="absolute rounded-full border border-white/10"
              style={{
                width: `${size}px`,
                height: `${size / 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${rotation}deg)`,
                opacity,
                filter: 'blur(1px)'
              }}
            />
          );
        })}
      </div>

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
