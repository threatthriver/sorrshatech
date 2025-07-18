
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Code, Cloud } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const features = [
  {
    icon: <Zap className="h-8 w-8 text-indigo-500" />,
    title: 'Rapid Prototyping',
    description: 'From idea to interactive prototype in record time, validating concepts with speed and precision.',
  },
  {
    icon: <Code className="h-8 w-8 text-purple-500" />,
    title: 'Scalable Development',
    description: 'Building robust, production-ready applications that grow with your business needs.',
  },
  {
    icon: <Cloud className="h-8 w-8 text-sky-500" />,
    title: 'Cloud Integration',
    description: 'Seamlessly deploying and managing your applications on modern cloud infrastructure.',
  },
];

export const AboutSection = () => {
  return (
    <motion.section
      className="py-24 sm:py-32 bg-gradient-to-b from-indigo-50/50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-base font-semibold leading-7 text-indigo-600"
            variants={itemVariants}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
            variants={itemVariants}
          >
            Your Partner in Digital Innovation
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-slate-600"
            variants={itemVariants}
          >
            We are a team of passionate engineers, designers, and strategists dedicated to crafting exceptional digital experiences. Our mission is to transform complex challenges into elegant, scalable solutions.
          </motion.p>
        </div>

        <motion.div className="mt-20" variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-md mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold leading-7 text-slate-900">{feature.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <Button asChild size="lg">
            <Link to="/about">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
