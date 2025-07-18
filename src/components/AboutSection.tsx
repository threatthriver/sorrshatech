import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Code, Cloud } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-gray-700" />,
    title: 'Rapid Prototyping',
    description: 'From idea to interactive prototype in record time, validating concepts with speed and precision.',
  },
  {
    icon: <Code className="h-6 w-6 text-gray-700" />,
    title: 'Scalable Development',
    description: 'Building robust, production-ready applications that grow with your business needs.',
  },
  {
    icon: <Cloud className="h-6 w-6 text-gray-700" />,
    title: 'Cloud Integration',
    description: 'Seamlessly deploying and managing your applications on modern cloud infrastructure.',
  },
];

export const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-medium text-gray-600">
            Who We Are
          </h2>
          <h1 className="mt-2 text-3xl font-medium text-gray-900">
            Your Partner in Digital Innovation
          </h1>
          <p className="mt-4 text-gray-600">
            We are a team of passionate engineers, designers, and strategists dedicated to crafting exceptional digital experiences. Our mission is to transform complex challenges into elegant, scalable solutions.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">{feature.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/about" className="rounded-full">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
