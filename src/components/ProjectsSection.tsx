import { motion } from 'framer-motion';
import { Clock, ShoppingCart, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export const ProjectsSection = () => {
  const ventures = [
    {
      title: "SorrshaBuy",
      description: "Your premier e-commerce destination for quality products and seamless shopping experiences.",
      icon: <ShoppingCart className="h-12 w-12 text-indigo-50" />,
      gradient: 'from-indigo-400 to-purple-400',
      link: "/sorrshabuy",
      linkText: "Visit SorrshaBuy"
    },
    {
      title: "New Venture",
      description: "Exciting new projects are on the way.",
      icon: <Smartphone className="h-12 w-12 text-blue-50" />,
      gradient: 'from-blue-400 to-cyan-400',
      link: "/new-venture",
      linkText: ""
    },
    {
      title: "Coming Soon",
      description: "Stay tuned for more innovative solutions.",
      icon: <Clock className="h-12 w-12 text-purple-50" />,
      gradient: 'from-purple-400 to-pink-400',
      link: "",
      linkText: ""
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50/30 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">Our Ventures</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of innovative companies and solutions, pushing the boundaries of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={projectVariants}
              className={cn(
                'group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg',
                'bg-gradient-to-br',
                venture.gradient,
                'hover:scale-[1.02]'
              )}
            >
              <div className="relative p-8 flex flex-col items-center text-center bg-white/90 backdrop-blur-sm group-hover:bg-white/95 transition-colors duration-300 h-full">
                <div className="mb-6 p-4 rounded-full" style={{
                  background: `linear-gradient(135deg, ${getGradientColors(venture.gradient)})`
                }}>
                  {venture.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {venture.title}
                </h3>
                <p className="text-gray-600 mb-6">{venture.description}</p>
                {venture.linkText && (
                  <Link 
                    to={venture.link} 
                    className={cn(
                      'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all',
                      'bg-gradient-to-r text-white shadow-sm',
                      'hover:shadow-md hover:scale-105',
                      venture.gradient
                    )}
                  >
                    {venture.linkText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to get gradient colors for inline styles
function getGradientColors(gradientClass: string): string {
  const gradients: Record<string, string> = {
    'from-indigo-400 to-purple-400': '#818cf8, #a78bfa',
    'from-blue-400 to-cyan-400': '#60a5fa, #22d3ee',
    'from-purple-400 to-pink-400': '#a78bfa, #f472b6'
  };
  return gradients[gradientClass] || '#818cf8, #a78bfa';
}

export default ProjectsSection;
