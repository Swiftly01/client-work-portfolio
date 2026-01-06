import { Megaphone, FolderKanban, Users, Zap, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Megaphone,
    title: "Web3 Marketing",
    description: "I design and execute marketing strategies that help Web3 products gain traction, grow communities, and communicate value clearly in a noisy market",
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
    <section id="services" className="relative py-24">
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl font-display">
            What I <span className="text-gradient">Do</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Comprehensive Web3 services designed to accelerate your project's growth and success in the decentralized ecosystem.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 transition-all duration-500 border group rounded-2xl bg-card border-border card-glow hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center justify-center mb-6 transition-transform duration-300 w-14 h-14 rounded-xl bg-gradient-primary group-hover:scale-110">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-xl font-semibold transition-colors font-display group-hover:text-primary">
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
