import { motion } from 'framer-motion';

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
  return (
    <section id="underus" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
            UnderUS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our innovative solutions that are transforming industries
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">SorrshaBUY</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Revolutionizing the way businesses handle purchases and inventory management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intuitive Dashboard",
                description: "Real-time insights and analytics for your business operations."
              },
              {
                title: "Inventory Management",
                description: "Efficiently track and manage your products with our advanced system."
              },
              {
                title: "Seamless Integration",
                description: "Connect with your existing tools and platforms effortlessly."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={projectVariants}
                className="bg-white/5 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore More Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
