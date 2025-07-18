import {
  BookText,
  Eye,
  ShieldCheck,
  BrainCircuit,
  MessageSquare,
  Zap,
} from "lucide-react";

export const Research = () => {
  const researchAreas = [
    {
      title: "Large Language Models",
      description:
        "Developing next-generation language models with improved reasoning, factual accuracy, and alignment with human values.",
      icon: "text",
    },
    {
      title: "Computer Vision",
      description:
        "Advanced visual understanding systems for multimodal AI applications and real-world deployment scenarios.",
      icon: "eye",
    },
    {
      title: "AI Safety & Alignment",
      description:
        "Ensuring AI systems remain beneficial, controllable, and aligned with human values at scale through rigorous research.",
      icon: "shield",
    },
    {
      title: "Knowledge Systems",
      description:
        "Creating AI that can reason over complex knowledge graphs and structured information with high fidelity.",
      icon: "brain",
    },
    {
      title: "Conversational AI",
      description:
        "Building more natural, context-aware, and helpful AI assistants through advanced dialogue systems.",
      icon: "message",
    },
    {
      title: "Autonomous Agents",
      description:
        "Developing AI agents capable of planning, tool use, and complex task execution in dynamic environments.",
      icon: "zap",
    },
  ];

  const icons: { [key: string]: React.ElementType } = {
    text: BookText,
    eye: Eye,
    shield: ShieldCheck,
    brain: BrainCircuit,
    message: MessageSquare,
    zap: Zap,
  };

  return (
    <section id="research" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-20 px-4" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Research Areas
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-6">
            Our multidisciplinary research spans the full spectrum of AI, from
            foundational theory to practical applications that solve real-world
            problems.
          </p>
          <div className="flex justify-center gap-8 text-sm font-medium text-slate-500">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-slate-300 rounded-full mr-2"></span>
              Cutting-Edge Research
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-slate-300 rounded-full mr-2"></span>
              Real-World Applications
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {researchAreas.map((area, index) => {
            const IconComponent = icons[area.icon];
            return (
              <div
                key={index}
                className="group p-8 bg-slate-50/50 border border-slate-100 rounded-3xl transition-all duration-300 hover:shadow-lg hover:border-slate-200 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {IconComponent && (
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-slate-600" />
                  </div>
                )}

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
