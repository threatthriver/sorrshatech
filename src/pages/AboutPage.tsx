const AboutPage = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-8">About Us</h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            SorrshaTech is a forward-thinking AI company. We combine cutting-edge research with practical applications to create AI solutions that make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-light text-slate-900 mb-6">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed font-light">
              To be at the forefront of AI innovation, developing solutions that
              transform industries and improve lives while maintaining the
              highest standards of ethics and responsibility.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-light text-slate-900 mb-6">
              Our Approach
            </h3>
            <p className="text-slate-600 leading-relaxed font-light">
              We believe in collaborative innovation, combining academic
              research with practical implementation. Our team works closely
              with partners to develop customized AI solutions that address
              real-world challenges.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-12 text-slate-500">
            <div className="text-center">
              <div className="text-3xl font-light text-slate-900">2025</div>
              <div className="text-sm uppercase tracking-wide">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-slate-900">1</div>
              <div className="text-sm uppercase tracking-wide">Publication</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-slate-900">2</div>
              <div className="text-sm uppercase tracking-wide">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
