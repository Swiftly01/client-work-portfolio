import { CheckCircle2 } from "lucide-react";

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
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border overflow-hidden">
              {/* Abstract Pattern */}
              <div className="absolute inset-0 grid-pattern opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-primary animate-pulse-glow" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-20 h-20 border-2 border-primary/30 rounded-xl rotate-12" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-accent/30 rounded-full" />
              <div className="absolute top-1/2 right-12 w-24 h-24 border-2 border-primary/20 rounded-2xl -rotate-6" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl bg-card border border-border shadow-lg">
              <div className="text-3xl font-display font-bold text-gradient">5+</div>
              <div className="text-sm text-muted-foreground">Years in Web3</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
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
                <div 
                  key={index}
                  className="flex items-center gap-2 text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
