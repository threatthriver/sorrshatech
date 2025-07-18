import React from 'react';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 
              className="text-5xl text-slate-900 mb-6"
              style={{ fontFamily: '"Playfair Display", serif', fontWeight: 400 }}
            >
              Know about Sohan
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-6">
                Meet the team of innovators and problem-solvers dedicated to building the future of technology at SorrshaTech.
              </p>
              <a 
                href="/about" 
                className="text-slate-900 font-medium hover:text-slate-700 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-500 transition-all"
              >
                Learn more about our team
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-slate-100 aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src="/placeholder-about.jpg" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
