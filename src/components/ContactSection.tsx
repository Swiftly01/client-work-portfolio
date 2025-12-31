import { Mail, MessageCircle, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
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
          <Button variant="hero" size="xl" className="group mb-16">
            <Mail className="w-5 h-5" />
            Get in Touch
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
