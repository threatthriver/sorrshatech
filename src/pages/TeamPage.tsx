import { User, Award, Sparkles } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  category: 'leadership' | 'emerging';
  avatar?: string;
}

export const TeamPage = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Sohan Sharma',
      role: 'Founder & CEO',
      bio: 'Sohan Sharma is the visionary founder and CEO of SorrshaTech. With a profound passion for leveraging technology to solve real-world problems, he leads the company\'s strategic direction and fosters a culture of innovation. His leadership is instrumental in driving the team towards a future of technological excellence and groundbreaking solutions.',
      category: 'leadership',
    },
    {
      name: 'Jane Doe',
      role: 'Chief Operating Officer',
      bio: 'A strategic leader ensuring operational excellence and driving the company\'s growth and success.',
      category: 'leadership',
    },
    {
      name: 'Parvesh Rawal',
      role: 'Lead Software Engineer',
      bio: 'A talented engineer with a passion for building scalable and robust software solutions.',
      category: 'emerging',
    },
    {
      name: 'Aniket Kumar',
      role: 'Product Designer',
      bio: 'Creative mind shaping user-centric products with an eye for detail and a passion for great design.',
      category: 'emerging',
    },
  ];

  const leadershipTeam = teamMembers.filter((member) => member.category === 'leadership');
  const emergingTalent = teamMembers.filter((member) => member.category === 'emerging');

  return (
    <div className="min-h-screen bg-background py-20 text-foreground sm:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-16 text-center sm:mb-20">
          <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl mb-4">Our Team</h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            The driving force behind our innovation and success.
          </p>
        </div>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="mb-8 flex items-center sm:mb-10">
            <Award className="h-8 w-8 text-primary mr-4" />
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Leadership</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start">
                  <div className="mr-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-muted/50 sm:h-16 sm:w-16 sm:mr-6">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emerging Talent */}
        <section>
          <div className="mb-8 flex items-center sm:mb-10">
            <Sparkles className="h-8 w-8 text-primary mr-4" />
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Emerging Talent</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {emergingTalent.map((member, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start">
                  <div className="mr-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-muted/50 sm:h-16 sm:w-16 sm:mr-6">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;
