import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, Variants } from 'framer-motion';

const teamMembers = [
  {
    name: 'Sohan Sharma',
    role: 'Founder & CEO',
    bio: 'The visionary behind SorrshaTech, driving innovation and leading the team towards a future of technological excellence.',
    imageUrl: 'https://placehold.co/400x400/6366f1/white?text=SS',
  },
  {
    name: 'Jane Doe',
    role: 'Chief Operating Officer',
    bio: 'A strategic leader ensuring operational excellence and driving the company’s growth and success.',
    imageUrl: 'https://placehold.co/400x400/ec4899/white?text=JD',
  },
];

const emergingTalents = [
  {
    name: 'Parvesh Rawal',
    role: 'Lead Software Engineer',
    bio: 'A talented engineer with a passion for building scalable and robust software solutions.',
    imageUrl: 'https://placehold.co/400x400/22c55e/white?text=PR',
  },
  {
    name: 'Aniket Kumar',
    role: 'Product Designer',
    bio: 'Creative mind shaping user-centric products with an eye for detail and a passion for great design.',
    imageUrl: 'https://placehold.co/400x400/f97316/white?text=AK',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const TeamMemberCard = ({ member }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    variants={cardVariants}
  >
    <div className="relative">
      <img className="w-full h-80 object-cover" src={member.imageUrl} alt={member.name} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
        <p className="text-indigo-200 font-medium">{member.role}</p>
      </div>
    </div>
    <div className="p-6">
      <p className="text-slate-600 font-light leading-relaxed">{member.bio}</p>
    </div>
  </motion.div>
);

const CompaniesPage = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  return (
    <>
      <Helmet>
        <title>Our Team - SorrshaTech</title>
        <meta name="description" content="Meet the talented team behind SorrshaTech, driving innovation and excellence." />
      </Helmet>
      <div className="bg-slate-50 py-20 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <motion.h1
              className="text-5xl text-slate-900 mb-4"
              style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
              variants={cardVariants}
            >
              Our Team
            </motion.h1>
            <motion.p
              className="text-lg text-slate-500 max-w-2xl mx-auto font-light"
              variants={cardVariants}
            >
              The driving force behind our innovation and success.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </motion.div>

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <motion.h2
              className="text-4xl text-slate-900 mb-4"
              style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
              variants={cardVariants}
            >
              Emerging Talent
            </motion.h2>
            <motion.p
              className="text-lg text-slate-500 max-w-2xl mx-auto font-light"
              variants={cardVariants}
            >
              The next generation of innovators shaping our future.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {emergingTalents.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CompaniesPage;
