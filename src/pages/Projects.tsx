import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "DeFi Protocol Launch",
    category: "DeFi",
    description: "Led the complete marketing strategy for a major DeFi protocol, achieving 50K+ users in the first month.",
    metrics: ["50K+ Users", "$10M TVL", "200% Growth"],
    gradient: "from-primary/20 to-accent/20"
  },
  {
    title: "NFT Collection Drop",
    category: "NFT",
    description: "Orchestrated a sold-out NFT collection launch with strategic community building and influencer partnerships.",
    metrics: ["10K NFTs Sold", "5K ETH Volume", "Sold Out"],
    gradient: "from-accent/20 to-primary/20"
  },
  {
    title: "GameFi User Acquisition",
    category: "Gaming",
    description: "Developed and executed a comprehensive user acquisition strategy for a play-to-earn gaming platform.",
    metrics: ["100K+ Players", "1M+ Transactions", "Top 10 Game"],
    gradient: "from-primary/20 to-accent/20"
  },
  {
    title: "DAO Community Growth",
    category: "DAO",
    description: "Built and scaled a thriving DAO community from scratch, establishing governance frameworks and engagement strategies.",
    metrics: ["25K Members", "500+ Proposals", "Active Governance"],
    gradient: "from-accent/20 to-primary/20"
  },
  {
    title: "Layer 2 Ecosystem",
    category: "Infrastructure",
    description: "Managed ecosystem growth for a Layer 2 solution, onboarding developers and driving adoption.",
    metrics: ["100+ dApps", "1M+ TXs/Day", "Top 5 L2"],
    gradient: "from-primary/20 to-accent/20"
  },
  {
    title: "Token Launch Campaign",
    category: "Token",
    description: "Executed a successful token launch with comprehensive marketing across multiple channels.",
    metrics: ["$50M MCap", "100K Holders", "15 Exchanges"],
    gradient: "from-accent/20 to-primary/20"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <section className="py-24 pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of successful Web3 marketing campaigns and the measurable 
              results achieved for innovative blockchain projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />
                <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                        {metric}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
