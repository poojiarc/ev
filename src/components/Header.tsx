import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Briefcase, Sun, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/solar-panels", label: "Solar Panels", icon: Sun },
  { to: "/contact", label: "Contact", icon: Phone },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-border/30">
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="EVHub Logo" className="h-10 lg:h-14 w-auto rounded-md" />
          <span className="text-xl lg:text-2xl font-heading font-bold tracking-tight">
            <span className="text-primary">EV</span>
            <span className="text-secondary-foreground">Hub</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-secondary-foreground p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-secondary/95 backdrop-blur-md overflow-hidden border-t border-border/30"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-secondary-foreground/80 hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
