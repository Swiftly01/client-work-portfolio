import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const OtherSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="other" className="relative py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold md:text-2xl">
              How to become a network{" "}
              <span className="text-primary">Marketer</span>
            </h2>

            <p className="max-w-xl mx-auto mt-2 text-sm text-muted-foreground">
              Earn and learn at the same time with guided support.
            </p>
          </motion.div>

          {/* Minimal Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            onClick={() => setIsVideoOpen(true)}
            className="flex items-center gap-4 p-4 mx-auto mt-8 border cursor-pointer max-w-md rounded-xl bg-background hover:bg-muted transition"
          >
            {/* Small Play Button */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <Play className="w-5 h-5 ml-0.5" />
            </div>

            {/* Text */}
            <div className="text-left">
              <p className="text-sm font-medium">Watch short video</p>
              <p className="text-xs text-muted-foreground">
                Learn how to become a network marketer
              </p>
            </div>
          </motion.div>

          {/* Minimal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 pt-4"
          >
            <a
              href="https://wa.me/2348152629929?text=Hi%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="h-8 px-3 text-xs">
                Get started
              </Button>
            </a>

            <Button
              size="sm"
              variant="ghost"
              className="h-8 px-3 text-xs text-muted-foreground"
            >
              Learn more
            </Button>
          </motion.div>
        </div>
      </div>

      {/* <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute z-10 p-2 right-2 top-2 text-white/80 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <video
                src="/videos/network-marketer.mp4"
                poster="/videos/network-marketer-thumbnail.jpg"
                className="w-full h-full object-contain rounded-xl"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
        {" "}
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            {" "}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[80vh] overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {" "}
              {/* Close Button */}{" "}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute z-10 p-2 right-2 top-2 text-white/80 hover:text-white"
              >
                {" "}
                <X className="w-8 h-8" />{" "}
              </button>{" "}
              {/* Video Player */}{" "}
              <video
                src="/videos/network-marketer.mp4"
                poster="/videos/network-marketer-thumbnail.jpg"
                className="object-contain w-full h-full rounded-xl"
                controls
                autoPlay
                playsInline
              />{" "}
            </motion.div>{" "}
          </motion.div>
        )}{" "}
      </AnimatePresence>
    </section>
  );
};

export default OtherSection;
