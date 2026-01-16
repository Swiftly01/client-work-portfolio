import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating Orbs */}
      <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 md:w-96 md:h-96 bg-primary/20 blur-3xl animate-float" />
      <div
        className="absolute rounded-full bottom-1/4 right-1/4 w-52 md:w-80 h-52 md:h-80 bg-accent/20 blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full border-border bg-secondary/50 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Web3 Marketing & Project Management
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl font-display"
          >
            Building the <span className="text-gradient">Future</span>
            <br />
            of Web3 Projects
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-muted-foreground"
          >
            I help Web3 founders, DAOs, and startups turn complex blockchain
            ideas into well-executed products through strategic project
            management, technical coordination, and growth-focused marketing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild variant="hero" size="xl" className="group">
              <a href="#contact">
                Start a Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="glow" size="xl">
              <Link to="/projects">View Portfolio</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-10 mt-20 border-t border-border"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "$10M+", label: "TVL Managed" },
              { value: "100K+", label: "Community Grown" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold md:text-4xl font-display text-gradient">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
