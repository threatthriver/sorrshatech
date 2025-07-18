import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const AboutSection = () => {
  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6 font-light">
              Innovative Technology Solutions
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8 font-light">
                We deliver cutting-edge technology solutions that help businesses thrive in the digital age. Our team of experts specializes in creating scalable, efficient, and user-friendly software.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-slate-100 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/placeholder-about.jpg"
                alt="A diverse team collaborating in a modern office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
