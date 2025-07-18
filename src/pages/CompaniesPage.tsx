import { Briefcase, Users, Globe, BarChart2, ArrowRight } from 'lucide-react';

export const CompaniesPage = () => {
  const companies = [
    {
      name: "Tech Innovators",
      description: "AI and machine learning solutions",
      category: "Technology",
      founded: 2015,
      location: "San Francisco, CA",
      icon: <Briefcase className="h-8 w-8 text-indigo-600" />
    },
    {
      name: "Digital Solutions",
      description: "Business digital transformation",
      category: "Consulting",
      founded: 2018,
      location: "New York, NY",
      icon: <Globe className="h-8 w-8 text-blue-600" />
    },
    {
      name: "Data Analytics",
      description: "Business data insights",
      category: "Analytics",
      founded: 2016,
      location: "Boston, MA",
      icon: <BarChart2 className="h-8 w-8 text-purple-600" />
    },
    {
      name: "Team Builders",
      description: "High-performance team specialists",
      category: "HR Tech",
      founded: 2019,
      location: "Austin, TX",
      icon: <Users className="h-8 w-8 text-cyan-600" />
    }
  ];

  const benefits = [
    "Access to cutting-edge technology",
    "Joint marketing opportunities",
    "Shared R&D resources",
    "Exclusive networking events"
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-medium text-gray-900 mb-3">
            Our Strategic Partners
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  {company.icon}
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-gray-900 mr-2">{company.name}</h3>
                    <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                      {company.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{company.description}</p>
                  <div className="text-sm text-gray-500">
                    <div>{company.founded} • {company.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 mb-12">
          <h2 className="text-xl font-medium text-gray-900 mb-6 text-center">
            Partnership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-indigo-600 mt-0.5">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <p className="ml-3 text-gray-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="border border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full transition-colors duration-300">
            Become a Partner
          </button>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Interested in partnering with us? Contact our partnership team at partnerships@sorrshatech.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;
