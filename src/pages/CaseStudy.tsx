import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const projects = {
  "defi-protocol-launch": {
    title: "DeFi Protocol Launch",
    category: "Token Launch & Marketing",
    description:
      "Led the complete marketing strategy and launch for a DeFi lending protocol, achieving $5M TVL in the first month.",
    metrics: ["$5M TVL", "15K Users", "50+ Partners"],
    backgroundSlides: ["/odin.jpg", "/odin-chat.jpg", "/asgard.jpg"],
    challenge:
      "The client needed to launch a new DeFi lending protocol in a highly competitive market with limited brand recognition and a tight timeline of just 6 weeks.",
    solution:
      "We developed a comprehensive go-to-market strategy that included influencer partnerships, community building on Discord and Twitter, strategic airdrops, and a phased launch approach to build momentum.",
    results: [
      "Achieved $5M Total Value Locked within 30 days of launch",
      "Grew community to 15,000 active members",
      "Secured 50+ strategic partnerships with other DeFi protocols",
      "Generated 2M+ social media impressions during launch week",
    ],
    timeline: "6 weeks",
    services: [
      "Token Launch Strategy",
      "Community Building",
      "Influencer Marketing",
      "Partnership Development",
    ],
  },
  "nft-marketplace-growth": {
    title: "NFT Marketplace Growth",
    category: "Community & Growth",
    description:
      "Built and scaled the community from 0 to 50K members, driving organic growth through strategic partnerships.",
    metrics: ["50K Members", "100K NFTs", "Top 10 Marketplace"],
    backgroundSlides: [
      "from-accent via-accent/80 to-primary",
      "from-primary via-accent/60 to-accent",
      "from-accent/80 via-primary to-accent",
    ],
    challenge:
      "An emerging NFT marketplace needed to establish itself in a crowded market dominated by established players like OpenSea and Blur.",
    solution:
      "Focused on building a strong creator community first, offering exclusive features for artists, implementing a referral program, and creating viral marketing campaigns around featured collections.",
    results: [
      "Grew Discord community from 0 to 50,000 verified members",
      "Facilitated trading of over 100,000 NFTs",
      "Reached Top 10 marketplace ranking by volume",
      "Onboarded 500+ verified artists and creators",
    ],
    timeline: "4 months",
    services: [
      "Community Management",
      "Growth Marketing",
      "Creator Relations",
      "Brand Strategy",
    ],
  },
  "dao-governance-setup": {
    title: "DAO Governance Setup",
    category: "DAO Operations",
    description:
      "Designed and implemented governance framework for a major DAO, including tokenomics and proposal systems.",
    metrics: ["$20M Treasury", "10K Voters", "200+ Proposals"],
    backgroundSlides: [
      "from-primary via-accent to-primary",
      "from-accent via-primary to-accent",
      "from-primary/80 via-accent/80 to-primary/80",
    ],
    challenge:
      "A decentralized organization with a $20M treasury needed a robust governance framework that would ensure fair representation while maintaining operational efficiency.",
    solution:
      "Designed a tiered governance system with different voting thresholds for various decision types, implemented snapshot voting, created clear proposal templates, and established working groups for specialized functions.",
    results: [
      "Successfully managed $20M treasury with community oversight",
      "Engaged 10,000+ token holders in governance",
      "Processed over 200 community proposals",
      "Achieved 85% proposal completion rate",
    ],
    timeline: "3 months",
    services: [
      "Governance Design",
      "Tokenomics",
      "DAO Operations",
      "Community Coordination",
    ],
  },
};

type ProjectKey = keyof typeof projects;

const BackgroundCarousel = ({ slides }: { slides: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full embla" ref={emblaRef}>
        <div className="flex h-full embla__container">
          {slides.map((gradient, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_100%] min-w-0 h-full"
              style={
                gradient.startsWith("/")
                  ? {
                      backgroundImage: `url(${gradient})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            >
              {!gradient.startsWith("/") && (
                <div
                  className={`w-full h-full bg-gradient-to-br ${gradient}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Carousel indicators */}
      <div className="absolute z-20 flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-foreground w-6"
                : "bg-foreground/40 hover:bg-foreground/60"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projects[slug as ProjectKey] : null;

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold font-display">
            Project Not Found
          </h1>
          <p className="mb-6 text-muted-foreground">
            The case study you're looking for doesn't exist.
          </p>
          <Link to="/#projects">
            <Button variant="glow">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <BackgroundCarousel slides={project.backgroundSlides} />
        <div className="absolute inset-0 z-10 bg-background/60" />
        <div className="container relative z-10 px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 mb-8 transition-colors text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-secondary text-muted-foreground">
              {project.category}
            </span>

            <h1 className="mb-6 text-4xl font-bold md:text-6xl font-display">
              {project.title}
            </h1>

            <p className="max-w-2xl mb-8 text-xl text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.metrics.map((metric, i) => (
                <span
                  key={i}
                  className="px-4 py-2 font-medium rounded-lg bg-secondary text-foreground"
                >
                  {metric}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-12 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="mb-4 text-2xl font-semibold font-display">
                  The Challenge
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {project.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="mb-4 text-2xl font-semibold font-display">
                  The Solution
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="mb-4 text-2xl font-semibold font-display">
                  The Results
                </h2>
                <ul className="space-y-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-6 border rounded-2xl bg-card border-border">
                <h3 className="mb-4 text-lg font-semibold">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      Timeline
                    </span>
                    <p className="font-medium">{project.timeline}</p>
                  </div>

                  <div>
                    <span className="text-sm text-muted-foreground">
                      Services Provided
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.services.map((service, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <h3 className="mb-2 text-lg font-semibold">
                  Ready to start your project?
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Let's discuss how we can help you achieve similar results.
                </p>
                <Link to="/#contact">
                  <Button variant="glow" className="w-full">
                    Get in Touch
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
