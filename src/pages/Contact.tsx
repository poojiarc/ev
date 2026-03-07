import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook,Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919390905955?text=${text}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-secondary text-secondary-foreground">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-heading font-bold"
          >
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary-foreground/70 mt-4 text-lg max-w-xl mx-auto"
          >
            Get in touch with us for any inquiries about EV charging or solar solutions.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-container grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <a href="tel:9390905955" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">9390905955</p>
                    </div>
                  </a>
                  <a href="mailto: evhub45@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors"> evhub45@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">8-128 near Ramalayam Temple, Sunkar Vari Thota</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-primary" /> Business Hours
                </h3>
                <div className="glass-card p-5 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">Monday – Friday</span>
                    <span className="text-muted-foreground">9:30 AM – 6:30 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">Saturday</span>
                    <span className="text-muted-foreground">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">Sunday</span>
                    <span className="text-muted-foreground">10:00 AM – 2:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/share/1DNpEdq7a4/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                    <Facebook size={22} />
                  </a>
                  <a href="https://chat.whatsapp.com/Gxay3UKd43FDflXmVduFjn?mode=gi_t" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card text-ev-green hover:bg-ev-green hover:text-primary-foreground transition-all">
                    <FaWhatsapp size={22} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="glass-card p-8">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    maxLength={15}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-all ev-glow"
                >
                  <Send size={18} />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
