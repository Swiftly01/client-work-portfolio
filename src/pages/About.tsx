import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const expertise = [
  "Token Launch Strategy",
  "Community Management",
  "Influencer Partnerships",
  "Content Marketing",
  "Growth Hacking",
  "Brand Development",
  "Social Media Strategy",
  "Event Marketing"
];

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <section className="py-24 pt-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl" />
                
                {/* Main visual container */}
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-card to-muted border border-border overflow-hidden">
                  {/* Grid pattern */}
                  <div className="absolute inset-0 grid-pattern opacity-20" />
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/20 rounded-2xl backdrop-blur-sm border border-primary/30"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-accent/20 rounded-full backdrop-blur-sm border border-accent/30"
                  />
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-1/2 right-1/3 w-12 h-12 bg-primary/30 rounded-xl backdrop-blur-sm border border-primary/40"
                  />

                  {/* Center badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-2xl border border-border">
                      <div className="text-4xl font-bold text-gradient">5+</div>
                      <div className="text-sm text-muted-foreground">Years in Web3</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h1>
              
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  I'm a passionate Web3 marketing strategist with over 5 years of experience 
                  helping blockchain projects achieve their growth objectives. From DeFi protocols 
                  to NFT collections, I've worked with diverse projects across the ecosystem.
                </p>
                <p>
                  My approach combines data-driven strategies with creative storytelling to 
                  build authentic connections between projects and their communities. I believe 
                  in transparency, innovation, and sustainable growth.
                </p>
                <p>
                  When I'm not crafting marketing strategies, you'll find me exploring new 
                  protocols, contributing to DAOs, and staying ahead of the latest trends 
                  in the rapidly evolving Web3 space.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
