import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2, 
      delayChildren: 0.3,
      ease: [0.16, 1, 0.3, 1]
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(4px)"
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0)",
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1]
    } 
  },
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="relative z-10 w-full">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-block px-4 py-1.5 text-sm font-medium text-primary-foreground bg-primary rounded-full mb-8"
            variants={itemVariants}
          >
            Innovation at its finest
          </motion.div>
          
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-foreground mb-6 leading-tight tracking-tight"
            variants={itemVariants}
          >
            Engineering Tomorrow’s
            <span className="text-primary"> Tech Solutions</span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
            variants={itemVariants}
          >
            We design, build, and scale digital solutions that power the world’s leading businesses. From cloud platforms to enterprise apps, we help you engineer the future of technology.
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
};
