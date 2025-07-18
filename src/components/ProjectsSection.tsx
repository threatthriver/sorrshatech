import { motion } from 'framer-motion';
import { Box, Code, Cpu, Database, GitBranch, Server, Settings } from 'lucide-react';

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
  const features = [
    {
      title: "Intuitive Dashboard",
      description: "Real-time insights and analytics for your business operations.",
      icon: <Settings className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Inventory Management",
      description: "Efficiently track and manage your products with our advanced system.",
      icon: <Database className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing tools and platforms effortlessly.",
      icon: <GitBranch className="h-8 w-8 text-violet-600" />
    },
    {
      title: "AI-Powered Analytics",
      description: "Get predictive insights and recommendations for your business.",
      icon: <Cpu className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for any business size.",
      icon: <Server className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Custom Solutions",
      description: "Tailored software development for your unique business needs.",
      icon: <Code className="h-8 w-8 text-violet-600" />
    }
  ];

  return (
    <section id="underus" className="py-20 bg-gradient-to-b from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -left-64 -bottom-64 w-[800px] h-[800px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            UnderUS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions transforming business operations
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">SorrshaBUY</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Revolutionizing business purchases and inventory management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={projectVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            Explore More Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
