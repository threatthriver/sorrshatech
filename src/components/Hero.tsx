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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -left-64 -bottom-64 w-[800px] h-[800px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -right-64 -bottom-32 w-[600px] h-[600px] bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-block px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full mb-6"
            variants={itemVariants}
          >
            Innovation at its finest
          </motion.div>
          
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Engineering Tomorrow’s
            <span className="relative inline-block mx-2 align-middle">
              <span className="relative z-10 text-gradient-tech">Tech Solutions</span>
              <span className="absolute bottom-1 left-0 w-full h-3 sm:h-5 bg-blue-100/60 -z-0 rounded-full blur-[2px]"></span>
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            We design, build, and scale digital solutions that power the world’s leading businesses. From cloud platforms to enterprise apps, we help you engineer the future of technology.
          </motion.p>
          

        </motion.div>
      </div>
    </section>
  );
};
