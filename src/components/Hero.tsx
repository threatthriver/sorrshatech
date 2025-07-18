import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight"
          variants={itemVariants}
        >
          Building the Future of Technology
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-slate-600 font-light max-w-2xl mx-auto"
          variants={itemVariants}
        >
          We craft innovative and user-centric technology solutions that drive progress and empower businesses.
        </motion.p>
      </motion.div>
    </section>
  );
};
