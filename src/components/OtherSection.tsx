import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const OtherSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="other" className="relative py-15">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              How to become a network{" "}
              <span className="text-primary">Marketer</span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Ready to earn and learn at the same time? Let's discuss how I can
              help you achieve your goals.
            </p>

            {/* Video Thumbnail */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative max-w-3xl mx-auto mt-8 overflow-hidden cursor-pointer rounded-2xl aspect-video group"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Video Thumbnail Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30" />

              {/* Placeholder Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 to-transparent" />
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-20 h-20 transition-shadow duration-300 rounded-full shadow-2xl md:w-24 md:h-24 bg-primary shadow-primary/50 group-hover:shadow-primary/70"
                >
                  <Play
                    className="w-8 h-8 ml-1 md:w-10 md:h-10 text-primary-foreground"
                    fill="currentColor"
                  />
                </motion.div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/10" />
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-4 mt-10 sm:flex-row"
          >
            <Button size="lg" className="group">
              Get Started
              <Play className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[80vh] overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute z-10 p-2 right-2 top-2 text-white/80 hover:text-white"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Video Player */}
              <video
                src="/videos/network-marketer.mp4"
                poster="/videos/network-marketer-thumbnail.jpg"
                className="object-contain w-full h-full rounded-xl"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OtherSection;
