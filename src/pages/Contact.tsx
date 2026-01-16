import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  MapPin,
  TicketCheckIcon,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { SiTelegram, SiUpwork, SiFiverr } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useEmail } from "@/hooks/useEmail";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "vincenthypeman@gmail.com",
    href: "mailto:vincenthypeman@gmail.com",
  },

  {
    icon: SiTelegram,
    title: "Telegram",
    value: "t.me/ricvinny",
    href: "http://t.me/ricvinny",
  },
  {
    icon: SiUpwork,
    title: "Upwork",
    value: "Upwork Profile",
    href: "https://www.upwork.com/freelancers/~018597e4d4e62a265a",
  },
  {
    icon: SiFiverr,
    title: "Fiverr",
    value: "fiverr.com/godsapplematt",
    href: "http://fiverr.com/godsapplematt",
  },
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(255, "Email must be less than 255 characters"),
  project: z
    .string()
    .trim()
    .min(1, "Project type is required")
    .max(100, "Project type must be less than 100 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      project: "",
      message: "",
    },
  });

  const { isLoading, sendEmail } = useEmail();

  const onSubmit = (data: ContactFormData) => {
    const success = sendEmail(data);
    if (success) {
      form.reset();
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <section className="relative py-24 pt-32">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Ready to elevate your Web3 project? Get in touch and let's discuss
              how we can work together.
            </p>
          </motion.div>

          <div className="grid max-w-5xl gap-12 mx-auto lg:grid-cols-2">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="mb-6 text-2xl font-semibold">Get in Touch</h2>

              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-4 p-4 transition-all border rounded-xl bg-card border-border hover:border-primary/50 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 transition-colors rounded-xl bg-primary/10 group-hover:bg-primary/20">
                      <method.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {method.title}
                      </div>
                      <div className="font-medium">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <></>
            <Form {...form}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="p-8 border rounded-2xl bg-card border-border">
                  <h2 className="mb-6 text-2xl font-semibold">
                    Send a Message
                  </h2>

                  <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                       
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">
                                Your Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  className="bg-secondary border-border focus:border-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div>
                       
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">
                                Email Address
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@example.com"
                                  className="bg-secondary border-border focus:border-primary"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div>
                      
                      <FormField
                        control={form.control}
                        name="project"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">
                              Project Type
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., DeFi Protocol, NFT Collection, DAO..."
                                className="bg-secondary border-border focus:border-primary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">
                              Your Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell me about your project and how I can help..."
                                className="bg-secondary border-border focus:border-primary min-h-[150px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                     {isLoading ? "Sending...." : "Send Message"}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </Form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
