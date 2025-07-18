import React from 'react';

const projects = [
  {
    name: 'SorrshaBuy',
    description: 'Your premier e-commerce destination for quality products and seamless shopping experiences.',
    link: 'https://sorrshabuy.com',
    logo: <span className="text-white text-3xl font-medium tracking-wider">SorrshaBuy</span>,
    bgColor: 'bg-blue-600',
  },
  {
    name: 'New Venture',
    description: 'Exciting new projects are on the way.',
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    isPlaceholder: true,
  },
  {
    name: 'Coming Soon',
    description: 'Stay tuned for more innovative solutions.',
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    isPlaceholder: true,
  },
];

const ProjectCard = ({ project }) => (
  <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100/80 group ${project.isPlaceholder && 'bg-slate-50/80 border-slate-200/80'}`}>
    <div className={`h-56 flex items-center justify-center rounded-t-2xl ${project.bgColor || ''}`}>
      {project.logo}
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-medium text-slate-900 mb-3">{project.name}</h3>
      <p className="text-slate-600 mb-6 font-light leading-relaxed">
        {project.description}
      </p>
      {!project.isPlaceholder && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group-hover:underline underline-offset-4"
        >
          Visit {project.name}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      )}
    </div>
  </div>
);

export const ProjectsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl text-slate-900 mb-4"
            style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
          >
            Under Us
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
            Discover our portfolio of innovative ventures and solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
