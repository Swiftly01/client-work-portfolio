import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Palette, Megaphone, Users, TrendingUp, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Strategy",
    description: "Crafting unique brand identities that resonate with the Web3 community and stand out in the decentralized landscape."
  },
  {
    icon: Megaphone,
    title: "Community Building",
    description: "Building and nurturing engaged communities across Discord, Twitter, and emerging Web3 social platforms."
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Connecting projects with key opinion leaders and crypto influencers for authentic reach and engagement."
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Data-driven strategies to accelerate user acquisition and retention in the competitive crypto space."
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description: "Localization and market entry strategies for Web3 projects targeting international audiences."
  },
  {
    icon: Zap,
    title: "Launch Campaigns",
    description: "End-to-end campaign management for token launches, NFT drops, and protocol releases."
  }
];

const Services = () => {
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
              What I <span className="text-gradient">Do</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive Web3 marketing solutions designed to elevate your project 
              and connect with your target audience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
