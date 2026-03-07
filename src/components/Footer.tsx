import { Link } from "react-router-dom";
import { Home, Info, Briefcase, Sun, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/solar-panels", label: "Solar Panels", icon: Sun },
  { to: "/contact", label: "Contact", icon: Phone },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="EVHub" className="h-14 w-auto rounded-md" />
              <span className="text-2xl font-heading font-bold tracking-tight">
                <span className="text-primary">EV</span>
                <span className="text-secondary-foreground">Hub</span>
              </span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Powering the future with EV charging infrastructure and solar energy solutions.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1DNpEdq7a4/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    <link.icon size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <Phone size={14} className="mt-1 shrink-0 text-primary" />
                9390905955
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <Mail size={14} className="mt-1 shrink-0 text-primary" />
                evhub45@gmqil.com
              </li>
              <li className="flex items-start gap-2 text-sm text-secondary-foreground/70">
                <MapPin size={14} className="mt-1 shrink-0 text-primary" />
                8-128 near Ramalayam Temple, Sunkar Vari Thota
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span>9:30 AM – 6:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM – 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM – 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="section-container py-6 text-center space-y-2">
          <p className="text-sm text-secondary-foreground/60">
            Made with <Heart size={14} className="inline text-destructive fill-destructive" /> by{" "}
            <a href="https://staffarc.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              StaffArc
            </a>
          </p>
          <p className="text-xs text-secondary-foreground/40">
            © 2026 EVHub — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
