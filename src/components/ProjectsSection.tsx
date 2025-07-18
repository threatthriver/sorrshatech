import { motion } from 'framer-motion';
import { Clock, ShoppingCart, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


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
  const ventures = [
    {
      title: "SorrshaBuy",
      description: "Your premier e-commerce destination for quality products and seamless shopping experiences.",
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      link: "/sorrshabuy",
      linkText: "Visit SorrshaBuy"
    },
    {
      title: "New Venture",
      description: "Exciting new projects are on the way.",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      link: "/new-venture",
      linkText: ""
    },
    {
      title: "Coming Soon",
      description: "Stay tuned for more innovative solutions.",
      icon: <Clock className="h-8 w-8 text-primary" />,
      link: "",
      linkText: ""
    }
  ];

  return (
    <section className="bg-background py-20 text-foreground sm:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Ventures</h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            Discover our portfolio of innovative companies and solutions, pushing the boundaries of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={projectVariants}
              className="group relative flex flex-col items-center rounded-2xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg sm:p-8"
            >
              <div className="mb-6 h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                {venture.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {venture.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow">{venture.description}</p>
              {venture.linkText && (
                <Link 
                  to={venture.link} 
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {venture.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default ProjectsSection;
