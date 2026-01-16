import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Odin Telegram Bots Launch",
    category: "Bots",
    description:
      "I began as the Raid Lead, then transitioned into Social Media Manager, where I helped drive and scale their growth.",
    metrics: ["$5M TVL", "15K Active Users", "50+ Partnerships"],
    links: [
      {
        label: "Odin Telegram Bots",
        value: "https://X.com/odincoinsol",
      },
    ],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Powercouple memecoin($PCP)",
    category: "PCP",
    description:
      "I served as Project Manager and Community Manager for PowerCouple, which launched in April 2024",
    metrics: ["50K Community Members", "$696K ATH", "100K+ NFTs Traded"],
    links: [
      {
        label: "Twitter",
        value: " https://x.com/RicvinnyNetwork/status/2008448400497266854?s=20",
      },
    ],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "CRAZYLIVEDAO Project Manager",
    category: "Operations",
    description:
      "CRAZYLIVEDAO is a Chinese-owned company based in the U.S. focused on cash-flow education for the Chinese community.",
    metrics: ["$20M Treasury", "10K+ Voters", "WEEX CEX Listing"],
    links: [
      {
        label: "Crazylive.ai",
        value: "Crazylive.ai",
      },
      {
        label: "Crazylivedao",
        value: "X.com/crazylivedao",
      },
      {
        label: "Crazylivetoken",
        value: "https://t.me/crazylivetoken",
      },
    ],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Quorum  Project Manager",
    category: "Project Manager",
    description:
      "Quorum is a Farcaster mini app that allows users to create simple polls, collect votes, and visualize community sentiment in real time.",
    metrics: ["5K+ Users", "25K+ Votes Cast", "Live on Farcaster"],
    links: [
      {
        label: "Beastsellermeme",
        value: "https://t.me/beastsellermeme",
      },
    ],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Beast Raid lead",
    category: "Marketing Strategies",
    description:
      "Through strategic community coordination and narrative-driven marketing, the project reached an all-time high (ATH) of $7.2M market cap.",
    metrics: [
      "5K+ Community Members",
      "25K+ Organic Raid Interactions",
      "Daily Trending Presence on Farcaster",
    ],
    links: [
      {
        label: "Beastraidlead",
        value: "https://x.com/RicvinnyNetwork/status/1932410280069218379?s=20",
      },
    ],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Moaner Project Marketer",
    category: "Full-Stack Project Marketing",
    description:
      "Moaner is an Ethereum-based project inspired by a Matt Furie character. Led coordinated marketing efforts across raids, narrative positioning, and community growth, contributing to strong market momentum.",
    metrics: [
      "$18.8M ATH Market Cap",
      "10K+ Holder Wallets at Peak",
      "Sustained Trending on Crypto Twitter",
    ],
    links: [
      {
        label: "moaner",
        value: "https://x.com/RicvinnyNetwork/status/1974922569179422850?s=20",
      },
    ],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "ELECTROGLE Marketing",
    category: "Core Idea & Strategy",
    description:
      "The strategy focused on early-stage marketing execution, rapid narrative building, and coordinated exposure to drive momentum from a low market cap.",
    metrics: ["$50K → $535K ATH", "3K+ Community", "Daily X & TG Activity"],
    links: [
      {
        label: "moaner",
        value: "https://x.com/RicvinnyNetwork/status/1974922569179422850?s=20",
      },
    ],
    gradient: "from-primary/20 to-accent/20",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <section className="py-24 pt-32">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              A showcase of successful Web3 marketing campaigns and the
              measurable results achieved for innovative blockchain projects.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}
                />
                <div className="relative h-full p-8 transition-all duration-300 border rounded-2xl bg-card border-border hover:border-primary/50">
                  <span className="text-xs font-medium tracking-wider uppercase text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-2 mb-3 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h2 className="mb-4 font-semibold text-1xl font-display">
                      Project links
                    </h2>
                    <ul className="space-y-3">
                      {project.links.map((link, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <a
                            className="text-muted-foreground"
                            href={link.value}
                          >
                            {link.label}
                          </a>
                          <a
                            href={link.value}
                            className="inline-flex items-center gap-1 text-sm font-medium transition-all text-primary hover:gap-2"
                          >
                            View project info{" "}
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
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
