import { Mail, MessageCircle, Twitter, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useEmail } from "@/hooks/useEmail";

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

const ContactSection = () => {
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

  const onSubmit = async (data: ContactFormData) => {
    const success = sendEmail(data);
    if (success) {
      form.reset();
    }
  };

  return (
    <section id="contact" className="relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-9">
            <h2 className="mb-6 text-4xl font-bold md:text-6xl font-display">
              Let's Build Something{" "}
              <span className="text-gradient">Amazing</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
              Ready to take your Web3 project to the next level? Let's discuss
              how I can help you achieve your goals.
            </p>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 border mb-9 bg-card border-border rounded-2xl md:p-10"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
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
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full group"
                >
                  <Send className="w-5 h-5" />
                  {isLoading ? "Sending...." : "Send Message"}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
