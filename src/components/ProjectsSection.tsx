import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DeFi Protocol Launch",
    category: "Token Launch & Marketing",
    description: "Led the complete marketing strategy and launch for a DeFi lending protocol, achieving $5M TVL in the first month.",
    metrics: ["$5M TVL", "15K Users", "50+ Partners"],
    gradient: "from-primary to-accent",
  },
  {
    title: "NFT Marketplace Growth",
    category: "Community & Growth",
    description: "Built and scaled the community from 0 to 50K members, driving organic growth through strategic partnerships.",
    metrics: ["50K Members", "100K NFTs", "Top 10 Marketplace"],
    gradient: "from-accent to-primary",
  },
  {
    title: "DAO Governance Setup",
    category: "DAO Operations",
    description: "Designed and implemented governance framework for a major DAO, including tokenomics and proposal systems.",
    metrics: ["$20M Treasury", "10K Voters", "200+ Proposals"],
    gradient: "from-primary via-accent to-primary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A selection of successful Web3 projects I've helped bring to life and scale.
            </p>
          </div>
          <Button variant="glow" className="mt-6 md:mt-0">
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Gradient Header */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                <div className="absolute inset-0 bg-background/20" />
              </div>
              
              {/* Content */}
              <div className="p-6 -mt-8 relative">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground mb-4">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-secondary text-sm font-medium text-foreground">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
