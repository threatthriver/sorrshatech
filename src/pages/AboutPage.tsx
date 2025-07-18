import { motion, Variants } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - SorrshaTech</title>
        <meta
          name="description"
          content="SorrshaTech delivers innovative technology solutions to help businesses thrive in the digital age."
        />
      </Helmet>
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8">About SorrshaTech</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
              SorrshaTech is a dynamic technology company dedicated to delivering innovative solutions that drive business growth and digital transformation.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={sectionVariants}>
              <h3 className="text-2xl font-light text-slate-900 mb-6">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
                To empower businesses with cutting-edge technology solutions that drive efficiency, innovation, and growth in an ever-evolving digital landscape.
              </p>
            </motion.div>
            <motion.div variants={sectionVariants}>
              <h3 className="text-2xl font-light text-slate-900 mb-6">
                Our Expertise
              </h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Our team of skilled professionals brings together diverse expertise in software development, cloud solutions, and digital transformation to deliver exceptional results for our clients.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <div className="inline-flex items-start space-x-12 md:space-x-20 text-slate-500">
              <StatItem value="2018" label="Founded" />
              <StatItem value="50+" label="Projects" />
              <StatItem value="20+" label="Clients" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-light text-slate-900">{value}</div>
    <div className="text-sm uppercase tracking-wider mt-2">{label}</div>
  </div>
);

export default AboutPage;
