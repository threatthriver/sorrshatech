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
          className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight"
          variants={itemVariants}
        >
          SorrshaTech
        </motion.h1>
        <motion.p
          className="text-slate-600 text-xl font-light max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Pioneering the future of artificial intelligence with innovative and ethical solutions.
        </motion.p>
      </motion.div>
    </section>
  );
};
