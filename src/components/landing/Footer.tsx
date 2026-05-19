import { Instagram, Facebook, MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/zypdrive", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576407295882", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.link/3vijz3", label: "WhatsApp" },
    { icon: Mail, href: "mailto:contact.mohandaspatil@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+919108721342", label: "Phone" },
  ];

  const exploreLinks = [
    { label: "Home", to: "/" },
    { label: "Why Zypdrive", to: "/#why" },
    { label: "Pricing", to: "/#pricing" },
    { label: "How it works", to: "/#how" },
    { label: "Scooter showcase", to: "/#scooter" },
  ];

  const companyLinks = [
    { label: "About us", to: "/about" },
    { label: "FAQ", to: "/#faq" },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <footer className="pt-12 pb-8 border-t bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 pb-10 border-b">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src="/logo_proper.png" alt="Zypdrive Logo" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              Electric scooter subscriptions built for working women in India.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {exploreLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">
              Get in touch
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="mailto:contact.mohandaspatil@gmail.com" className="hover:text-primary transition-colors break-all">
                  contact.mohandaspatil@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919108721342" className="hover:text-primary transition-colors">
                  +91 91087 21342
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                  >
                    <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-6 text-muted-foreground text-sm text-center">
          Made with ❤️ by Tejas © {new Date().getFullYear()} Zypdrive. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
