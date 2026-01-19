import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormData } from "@/components/ContactSection";
import { useToast } from "@/hooks/use-toast";

export function useEmail() {
  const { toast } = useToast();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => emailjs.init("u1ytRzeS3hNKfY4Gi"), []);

  const sendEmail = async (data: ContactFormData) => {
    const serviceId = "service_bxptysl";
    const templateId = "template_0dd8wwx";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: data.name,
        email: data.email,
        project: data.project,
        message: data.message,
        time: new Date().toLocaleString(),
      });
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      return true;
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Message not sent!",
        description: "Something went wrong!!.",
      });
      return false; 
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, sendEmail };
}
