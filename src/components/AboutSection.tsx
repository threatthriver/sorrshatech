import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Code, Cloud } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Rapid Prototyping',
    description: 'From idea to interactive prototype in record time, validating concepts with speed and precision.',
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Scalable Development',
    description: 'Building robust, production-ready applications that grow with your business needs.',
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: 'Cloud Integration',
    description: 'Seamlessly deploying and managing your applications on modern cloud infrastructure.',
  },
];

export const AboutSection = () => {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Who We Are
          </h2>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Your Partner in Digital Innovation
          </h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            We are a team of passionate engineers, designers, and strategists dedicated to crafting exceptional digital experiences. Our mission is to transform complex challenges into elegant, scalable solutions.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border/50 bg-background p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-8">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground text-center">{feature.title}</h3>
                <p className="mt-4 text-muted-foreground text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center sm:mt-20">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/about">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
