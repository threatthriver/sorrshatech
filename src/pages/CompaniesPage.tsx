import { Briefcase, Users, Globe, BarChart2, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const CompaniesPage = () => {
  const companies = [
    {
      name: "Tech Innovators",
      description: "AI and machine learning solutions",
      category: "Technology",
      founded: 2015,
      location: "San Francisco, CA",
      icon: <Briefcase className="h-8 w-8 text-primary" />
    },
    {
      name: "Digital Solutions",
      description: "Business digital transformation",
      category: "Consulting",
      founded: 2018,
      location: "New York, NY",
      icon: <Globe className="h-8 w-8 text-primary" />
    },
    {
      name: "Data Analytics",
      description: "Business data insights",
      category: "Analytics",
      founded: 2016,
      location: "Boston, MA",
      icon: <BarChart2 className="h-8 w-8 text-primary" />
    },
    {
      name: "Team Builders",
      description: "High-performance team specialists",
      category: "HR Tech",
      founded: 2019,
      location: "Austin, TX",
      icon: <Users className="h-8 w-8 text-primary" />
    }
  ];

  const benefits = [
    "Access to cutting-edge technology",
    "Joint marketing opportunities",
    "Shared R&D resources",
    "Exclusive networking events"
  ];

  return (
    <div className="min-h-screen py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl mb-4">
            Our Strategic Partners
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional solutions and drive mutual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="bg-card border border-border/50 rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-start">
                <div className="mr-5 mt-1">
                  {company.icon}
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <h3 className="text-xl font-semibold text-foreground mr-3">{company.name}</h3>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {company.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">{company.description}</p>
                  <div className="text-sm text-muted-foreground/80">
                    <div>Founded: {company.founded} • {company.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border/50 rounded-xl p-10 mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-8">
            Partnership Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="ml-4 text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full">
            Become a Partner
          </Button>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Interested in partnering with us? Contact our team at <a href="mailto:partnerships@sorrshatech.com" className="text-primary hover:underline">partnerships@sorrshatech.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;
