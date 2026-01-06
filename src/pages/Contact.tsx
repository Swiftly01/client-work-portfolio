import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@web3marketer.com",
    href: "mailto:hello@web3marketer.com"
  },
  {
    icon: MessageCircle,
    title: "Discord",
    value: "@web3marketer",
    href: "#"
  },
  {
    icon: Send,
    title: "Telegram",
    value: "@web3marketer",
    href: "#"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote / Worldwide",
    href: "#"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", project: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <section className="py-24 pt-32 relative">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to elevate your Web3 project? Get in touch and let's discuss 
              how we can work together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{method.title}</div>
                      <div className="font-medium">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Project Name</label>
                    <Input
                      placeholder="Your project name"
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
