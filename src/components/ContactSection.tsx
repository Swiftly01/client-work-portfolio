import { Mail, MessageCircle, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Ready to take your Web3 project to the next level? Let's discuss 
            how I can help you achieve your goals.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="hero" size="xl" className="group mb-16">
              <Mail className="w-5 h-5" />
              Get in Touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Discord</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
