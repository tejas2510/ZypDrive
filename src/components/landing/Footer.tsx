import { Instagram, Facebook, MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Mail, href: "#", label: "Email" },
    { icon: Phone, href: "#", label: "Phone" },
  ];

  return (
    <footer className="py-10 border-t bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo and Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo_proper.png" alt="Zypdrive Logo" className="h-14 w-auto object-contain" />
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
                  >
                    <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-muted-foreground text-sm text-center">
            Made with ❤️ by Tejas © {new Date().getFullYear()} Zypdrive. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
