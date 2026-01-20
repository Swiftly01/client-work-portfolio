import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const expertise = [
  "DeFi Protocol Marketing",
  "NFT & Gaming Projects",
  "DAO Governance",
  "Token Economics",
  "Community Management",
  "Influencer Relations",
  "Strategic Partnerships",
  "Launch Campaigns",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden border aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border-border">
              {/* Abstract Pattern */}
              <div className="absolute inset-0 opacity-50 grid-pattern" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/profile-picture.jpeg" alt="user" className="object-fit w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-primary animate-pulse-glow "   />
              </div>
              {/* Decorative Elements */}
              <div className="absolute w-20 h-20 border-2 top-8 left-8 border-primary/30 rounded-xl rotate-12" />
              <div className="absolute w-16 h-16 border-2 rounded-full bottom-8 right-8 border-accent/30" />
              <div className="absolute w-24 h-24 border-2 top-1/2 right-12 border-primary/20 rounded-2xl -rotate-6" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute px-6 py-4 border shadow-lg -bottom-6 -right-6 rounded-2xl bg-card border-border"
            >
              <div className="text-3xl font-bold font-display text-gradient">5+</div>
              <div className="text-sm text-muted-foreground">Years in Web3</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-6 text-4xl font-bold md:text-5xl font-display">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="mb-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a Web3-native marketer and project manager with a passion for 
                building the decentralized future. With over 5 years of experience 
                in the blockchain space, I've helped launch and scale dozens of 
                successful projects.
              </p>
              <p>
                From DeFi protocols to NFT collections, DAOs to Layer 2 solutions, 
                I bring strategic thinking and hands-on execution to every project 
                I work on. My approach combines deep crypto knowledge with proven 
                marketing frameworks.
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 gap-3">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-2 text-foreground"
                >
                  <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-primary" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
