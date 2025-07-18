import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Clock } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const projects = [
  {
    name: 'SorrshaBuy',
    description: 'Your premier e-commerce destination for quality products and seamless shopping experiences.',
    link: 'https://sorrshabuy.com',
    logo: <img src="/BCO-removebg-preview.png" alt="SorrshaBuy Logo" className="h-32 w-auto object-contain" />,
    bgColor: 'bg-white',
  },
  {
    name: 'New Venture',
    description: 'Exciting new projects are on the way.',
    logo: <Building className="h-12 w-12 text-slate-400" strokeWidth={1} />,
    isPlaceholder: true,
  },
  {
    name: 'Coming Soon',
    description: 'Stay tuned for more innovative solutions.',
    logo: <Clock className="h-12 w-12 text-slate-400" strokeWidth={1} />,
    isPlaceholder: true,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ProjectCard = ({ project }) => (
  <motion.div
    className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100/80 group ${
      project.isPlaceholder ? 'bg-slate-50/80 border-slate-200/80' : ''
    }`}
    variants={cardVariants}
  >
    <div className={`h-56 flex items-center justify-center rounded-t-2xl ${project.bgColor || 'bg-slate-100'}`}>
      {project.logo}
    </div>
    <div className="p-8 flex flex-col">
      <h3 className="text-2xl font-medium text-slate-900 mb-3">{project.name}</h3>
      <p className="text-slate-600 mb-6 font-light leading-relaxed flex-grow">
        {project.description}
      </p>
      {!project.isPlaceholder && (
        <Button asChild variant="outline" className="mt-auto">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Visit {project.name}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      )}
    </div>
  </motion.div>
);

export const ProjectsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <motion.section
      className="py-16 sm:py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div className="text-center mb-12 sm:mb-16" variants={cardVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 font-light">
            Our Ventures
          </h2>
          <p className="text-md sm:text-lg text-slate-500 max-w-2xl mx-auto font-light">
            Discover our portfolio of innovative companies and solutions, pushing the boundaries of technology.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
