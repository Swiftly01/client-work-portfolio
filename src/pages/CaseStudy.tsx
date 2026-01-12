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
  "odin-telegram-bots-launch": {
    title: "Odin Telegram Bots Launch",
    category: "Bot Launch & Marketing",
    description:
      "I began as the Raid Lead, then transitioned into Social Media Manager, where I helped drive and scale their growth.",
    metrics: ["$5M TVL", "15K Users", "50+ Partners"],
    backgroundSlides: ["/odin.jpg", "/odin-chat.jpg", "/asgard.jpg", "/x.jpg"],
    challenge:
      "Beyond launching in a saturated DeFi market with low initial brand awareness, the project required rapid community growth, sustained engagement, and trust-building while coordinating raids, affiliates, and partnerships—all within a 6-week launch window.",
    solution:
      "I Started working with Odin at launch in November 2024.I began as the Raid Lead, then transitioned into Social Media Manager, where I helped drive and scale their growth. After that, I became an affiliate, actively promoting the bot.I’m still working closely with the developer and partners.",
    responsibilities: [
      "Led and coordinated launch-phase raid campaigns to drive early awareness and user acquisition",
      "Managed and scaled social media presence across Telegram and X, maintaining daily engagement",
      "Designed and executed community growth strategies to convert raiders into long-term users",
      "Acted as a liaison between the developer, community, and partners to ensure aligned messaging",
      "Recruited, managed, and motivated affiliates to promote the bot post-launch",
      "Supported partnership outreach and cross-promotions with other DeFi projects",
      "Monitored community feedback and sentiment to optimize messaging and campaigns in real time",
    ],
    results: [
      "Reached ~$5M Total Value Locked within the first month post-launch",
      "Scaled Telegram community to 15,000+ engaged members",
      "Established 50+ ecosystem partnerships with DeFi tools, bots, and communities",
      "Generated over 1.5M organic impressions across Telegram and X during launch phase",
      "Maintained strong user retention through ongoing raids, affiliate activity, and community engagement",
    ],

    timeline: "6 weeks",
    services: [
      "Token Launch Strategy",
      "Community Building",
      "Influencer Marketing",
      "Partnership Development",
    ],
  },
  "powercouple-memecoin": {
    title: "Powercouple memecoin($PCP)",
    category: "Community & Growth",
    description:
      "I served as Project Manager and Community Manager for PowerCouple, which launched in April 2024.I Built and scaled the community from 0 to 50K members, driving organic growth through strategic partnerships.",
    metrics: ["50K Members", "100K NFTs", "Top 10 Marketplace"],
    backgroundSlides: [
      "/power.jpg",
      "/powercouple-telegram.jpg",
      "/powercouple-x.jpg",
    ],
    challenge:
      "The project needed to launch and scale a new memecoin and NFT ecosystem from zero in an oversaturated market, requiring rapid community trust, sustained engagement, and cross-platform growth while coordinating multiple teams and delivering new product features under tight timelines.",

    solution:
      "I ensured a smooth and well-structured pre-launch, then scaled the community to around 5,000 Telegram members and 5,000 Twitter followers. I also grew Discord engagement to approximately 1,000 members through organic promotion and community campaigns.I managed the core team, coordinated community initiatives, and worked closely with the developer. I also assisted in hiring a developer to build the staking pool and the “Memeverse” feature on the website.The project reached an ATH of $696k market cap before winding down.",
    responsibilities: [
      "Led end-to-end project management for the PowerCouple launch, coordinating developers, designers, and moderators",
      "Built and scaled the community from 0 to 50,000 members across Telegram, Discord, and X",
      "Planned and executed organic growth campaigns, contests, and community-driven initiatives",
      "Managed daily community operations, moderation, and engagement to maintain high activity levels",
      "Oversaw pre-launch strategy and ensured smooth execution of launch milestones",
      "Worked closely with the core developer to scope, prioritize, and ship new features",
      "Assisted in recruiting and onboarding a developer to build the staking pool and Memeverse feature",
      "Developed partnerships with creators, artists, and NFT communities to drive adoption",
      "Monitored market sentiment and adjusted messaging and campaigns accordingly",
    ],

    results: [
      "Built and scaled a cross-platform community to 50,000+ total members",
      "Grew Telegram to ~5,000 active members and X to ~5,000 followers organically",
      "Drove over 100,000 NFT mints and secondary trades through community campaigns",
      "Achieved a peak market cap of ~$696K during active trading phase",
      "Onboarded 300+ creators and artists into the ecosystem",
      "Reached Top 10 marketplace ranking by volume during peak activity periods",
    ],

    timeline: "4 months",
    services: [
      "Community Management",
      "Growth Marketing",
      "Creator Relations",
      "Brand Strategy",
    ],
  },
  "crazylivedao-project-manager": {
    title: "CRAZYLIVEDAO Project Manager",
    category: "CRAZYLIVEDAO Operations",
    description:
      "CRAZYLIVEDAO is a Chinese-owned company based in the U.S. focused on cash-flow education for the Chinese community.",
    metrics: ["$20M Treasury", "10K Voters", "200+ Proposals"],
    backgroundSlides: [
      "/crazylive.jpg",
      "/dao-meme-token.jpg",
      "/dao-telegram.jpg",
    ],
    challenge:
      "After an initial Pump.fun token launch failed to gain traction, the project faced declining community engagement, unclear leadership, and fragmented operations. The challenge was to take over project management, rebuild trust, restructure the team, relaunch marketing and community efforts, and guide the project toward sustainable growth while managing a large DAO treasury and expanding onto the Solana ecosystem.",
    solution:
      "CRAZYLIVEDAO is a Chinese-owned company based in the U.S. focused on cash-flow education for the Chinese community. The project aimed to expand its presence onto the Solana blockchain.The token initially launched via Pump.fun in January 2024 but lost momentum. I joined the project in August 2024 and took over overall project management.",
    responsibilities: [
      "Took full ownership of project strategy and execution",
      "Curated recovery and growth plans post-launch",
      "Created and managed all social channels (Twitter/X, Telegram, Discord)",
      "Rebranded and positioned the Twitter account for growth",
      "Built and managed the core team",
      "Planned and executed major community and marketing campaigns",
      "Hired and coordinated KOLs and influencers",
      "Set up and managed exchange listing on WEEX",
      "Oversaw daily operations and ongoing project activities",
    ],
    results: [
      "Stabilized and relaunched the project after a stalled Pump.fun launch, restoring community confidence",
      "Scaled market capitalization from approximately $45K to a peak of ~$8.5M during active growth phase",
      "Rebuilt and managed core operations across community, marketing, and governance",
      "Expanded community participation to 10,000+ active voters across governance proposals",
      "Successfully coordinated a centralized exchange listing on WEEX",
      "Established consistent marketing and operational processes to support long-term sustainability",
    ],

    timeline: "3 months",
    services: [
      "Governance Design",
      "Tokenomics",
      "DAO Operations",
      "Community Coordination",
    ],
  },

  "quorum-project-manager": {
  title: "Quorum — Project Manager",
  category: "Farcaster (Mini App)",
  description:
    "Quorum is a Farcaster mini app that enables creators, DAOs, and communities to create polls, collect votes, and visualize sentiment in real time with a fast, lightweight user experience.",
  metrics: ["5K+ Users", "25K+ Votes Cast", "Live on Farcaster"],
  backgroundSlides: ["/quorum.jpg", "/quorum-tg.jpg", "/quorum-poll.jpg"],

  challenge:
    "Farcaster lacked a lightweight, intuitive polling tool that allowed communities to quickly gauge sentiment without leaving the platform. The challenge was to design, build, and launch a mini app that balanced speed, usability, and engagement while shipping within a short delivery window.",

  solution:
    "Built and launched Quorum, a Farcaster-native polling mini app that allows fast poll creation, real-time result visualization, and optional incentives to drive engagement, all optimized for quick interactions.",

  responsibilities: [
    "Wrote and executed a 2-month product and delivery roadmap",
    "Assembled and coordinated a cross-functional team across design, development, and operations",
    "Managed day-to-day task execution and development milestones",
    "Improved project visibility and internal communication workflows",
    "Led the end-to-end product launch on Farcaster",
    "Developed the post-launch marketing and adoption strategy",
  ],

  results: [
    "Successfully launched the Quorum mini app on Farcaster",
    "Delivered a functional, user-friendly polling experience aligned with community needs",
    "Enabled creators and communities to collect real-time sentiment without friction",
    "Established a clear roadmap for future adoption, engagement, and feature expansion",
  ],

  timeline: "3 months",

  services: [
    "Product Management",
    "Project Delivery",
    "Cross-Functional Coordination",
    "Launch Strategy",
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
            className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex
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

              {project.responsibilities.length !== 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="mb-4 text-2xl font-semibold font-display">
                    Key Responsibilities & Achievements
                  </h2>
                  <ul className="space-y-3">
                    {project.responsibilities.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
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
