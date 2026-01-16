import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Odin Telegram Bots Launch",
    src: "/odin.jpg",
    category: "Bot Launch & Marketing",
    description:
      "I began as the Raid Lead, then transitioned into Social Media Manager, where I helped drive and scale their growth",
    metrics: ["$5M TVL", "15K Active Users", "50+ Partnerships"],
    gradient: "from-primary to-accent",
    slug: "odin-telegram-bots-launch",
  },
  {
    title: "Powercouple memecoin($PCP)",
    src: "/power.jpg",
    category: "Community & Growth",
    description:
      "I served as Project Manager and Community Manager for PowerCouple, which launched in April 2024.",
    metrics: ["50K Community Members", "$696K ATH", "100K+ NFTs Traded"],
    gradient: "from-accent to-primary",
    slug: "powercouple-memecoin",
  },
  {
    title: "CRAZYLIVEDAO Project Manager",
    src: "crazylive.jpg",
    category: "DAO Operations",
    description:
      "CRAZYLIVEDAO is a Chinese-owned company based in the U.S. focused on cash-flow education for the Chinese community.",
    metrics: ["$20M Treasury", "10K+ Voters", "WEEX CEX Listing"],
    gradient: "from-primary via-accent to-primary",
    slug: "crazylivedao-project-manager",
  },
  {
    title: "Farcaster (Mini App)",
    src: "quorum.jpg",
    category: "Project manager",
    description:
      "Quorum is a Farcaster mini app that allows users to create simple polls, collect votes, and visualize community sentiment in real time.",
    metrics: ["5K+ Users", "25K+ Votes Cast", "Live on Farcaster"],
    gradient: "from-primary via-accent to-primary",
    slug: "quorum-project-manager",
  },
  {
    title: "Beast Raid lead",
    src: "beast-seller.jpg",
    category: "Marketing Strategies ",
    description:
      "I served as Bullposter, Raid Lead, and Community Manager for Project Beast, taking over operations after the project was CTO’d.",
    metrics: [
      "5K+ Community",
      "25K+ Raid Interactions",
      "Trending on Farcaster",
    ],
    gradient: "from-primary via-accent to-primary",
    slug: "beast-raid-lead",
  },
  {
    title: "Moaner Project Marketer ",
    src: "moaner.jpg",
    category: "Project Marketer",
    description:
      "Moaner is an Ethereum-based project inspired by a Matt Furie character. Similar to $BEAST, the project experienced strong market traction and reached an all-time high (ATH) market cap of $18.8M.",
    metrics: ["$18.8M ATH", "10K+ Holders", "Sustained X Visibility"],
    gradient: "from-primary via-accent to-primary",
    slug: "moaner-project-marketer",
  },
  {
    title: "ELECTROGLE Marketing",
    src: "electro.jpg",
    category: " Marketing strategist",
    description:
      "$ELECTROGLE is a meme token inspired by a character from a Matt Furie book. The project achieved an all-time high (ATH) market cap of over $535K.",
    metrics: ["$50K → $535K ATH", "3K+ Community", "Daily X & TG Activity"],
    gradient: "from-primary via-accent to-primary",
    slug: "electrogle-project-marketer",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10 px-6 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl font-display">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground">
              A selection of successful Web3 projects I've helped bring to life
              and scale.
            </p>
          </div>

          <Button asChild variant="glow" className="mt-6 md:mt-0">
            <Link to="/projects">
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative overflow-hidden transition-all duration-500 border group rounded-2xl bg-card border-border hover:border-primary/50"
            >
              {/* Gradient Header */}
              {/* <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                <div className="absolute inset-0 bg-background/20" />
              </div> */}
              <div>
                <img src={project.src} alt="test" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-8">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-secondary text-muted-foreground">
                  {project.category}
                </span>
                <h3 className="mb-3 text-2xl font-semibold transition-colors font-display group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium rounded-lg bg-secondary text-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to={`/case-study/${project.slug}`}
                  className="inline-flex items-center gap-2 font-medium transition-all text-primary hover:gap-3"
                >
                  View
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
