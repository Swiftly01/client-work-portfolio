import { Megaphone, FolderKanban, Users, Zap, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Web3 Marketing",
    description: "Strategic go-to-market campaigns, influencer partnerships, and community-driven growth for blockchain projects.",
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description: "End-to-end project coordination, roadmap planning, and milestone tracking for crypto startups and DAOs.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Discord & Telegram management, engagement strategies, and ambassador programs that create loyal communities.",
  },
  {
    icon: Zap,
    title: "Token Launch Strategy",
    description: "Tokenomics consulting, launch planning, and post-launch marketing to maximize your project's impact.",
  },
  {
    icon: Globe,
    title: "Brand Development",
    description: "Compelling narratives, visual identity, and positioning that sets your project apart in the Web3 space.",
  },
  {
    icon: Shield,
    title: "DAO Operations",
    description: "Governance setup, proposal management, and operational frameworks for decentralized organizations.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What I <span className="text-gradient">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive Web3 services designed to accelerate your project's growth and success in the decentralized ecosystem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border card-glow transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
