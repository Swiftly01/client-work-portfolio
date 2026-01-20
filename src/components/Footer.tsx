import { motion } from "framer-motion";
import { Twitter, Send, Mail } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const UpworkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
  </svg>
);

const FiverrIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.79h-.684c-.547 0-.841.41-.841 1.093v2.466h-1.61v-4.082h1.61v.571a1.64 1.64 0 0 1 1.38-.703c.63 0 1.156.27 1.467.756a2.01 2.01 0 0 1 1.631-.756c.546 0 1.024.18 1.38.503V11.79h1.61zm-8.835 3.558h-1.61v-6.09h1.61zm-2.33-7.705a.929.929 0 0 1 .931-.929.93.93 0 0 1 0 1.858.929.929 0 0 1-.93-.929zM8.67 15.736c-1.4 0-2.396-1.024-2.396-2.476 0-1.396.85-2.475 2.396-2.475h.616v1.41h-.616c-.63 0-.977.48-.977 1.065 0 .587.346 1.066.977 1.066h.616v1.41zm-4.89-.147H2.17v-4.082h1.61v.571c.25-.405.673-.703 1.323-.703h.82v1.43h-.82c-.69 0-1.323.41-1.323 1.391z"/>
  </svg>
);

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "http://x.com/RicvinnyNetwork" },
  { name: "Telegram", icon: Send, href: "http://t.me/ricvinny" },
  { name: "Email", icon: Mail, href: "mailto:vincenthypeman@gmail.com" },
  { name: "TikTok", icon: TikTokIcon, href: "https://www.tiktok.com/@ricvinny?_r=1&_t=ZS-931CH8JDLZn" },
  { name: "Upwork", icon: UpworkIcon, href: "https://www.upwork.com/freelancers/~018597e4d4e62a265a" },
  { name: "Fiverr", icon: FiverrIcon, href: "http://fiverr.com/godsapplematt" },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t bg-card/50 backdrop-blur-sm border-border"
    >
      <div className="container px-6 py-12 mx-auto">
        {/* Main Footer Content */}
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display text-gradient">
              RICVINNY
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
             Helping your Business grow Using strategic, well-thought-out experiential marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-sm transition-colors text-muted-foreground hover:text-primary">
                About
              </a>
              <a href="#services" className="text-sm transition-colors text-muted-foreground hover:text-primary">
                Services
              </a>
              <a href="#contact" className="text-sm transition-colors text-muted-foreground hover:text-primary">
                Contact
              </a>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 border rounded-lg w-9 h-9 border-border bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/50"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-6 mt-10 border-t border-border">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} RICVINNY. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs transition-colors text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-xs transition-colors text-muted-foreground hover:text-foreground">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;