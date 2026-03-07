import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Factory, Wrench, ShoppingCart, Lightbulb, Sun, Phone, Mail, ArrowRight, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import pic1 from "@/assets/pic1.jpg";
import pic3 from "@/assets/pic3.jpg";

const services = [
  { icon: Factory, title: "EV Charging Station Manufacturing", desc: "State-of-the-art manufacturing of high-quality EV charging stations with cutting-edge technology." },
  { icon: Wrench, title: "EV Charging Station Installation", desc: "Professional installation services ensuring optimal placement and seamless integration." },
  { icon: Zap, title: "EV Charging Station Maintenance", desc: "Comprehensive maintenance programs to keep your charging infrastructure running at peak performance." },
  { icon: ShoppingCart, title: "EV Charging Equipment Sales", desc: "Wide range of charging equipment from Level 2 to DC fast chargers for every need." },
  { icon: Lightbulb, title: "EV Infrastructure Consulting", desc: "Expert consulting to help you plan, design, and implement your EV charging network." },
  { icon: Sun, title: "Solar Energy Integration", desc: "Integrate solar power with your EV charging stations for sustainable, cost-effective energy." },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="EV Charging" className="w-full h-full object-cover" />
          <div className="hero-overlay" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40"
              style={{ left: `${Math.random() * 100}%`, bottom: "-5%" }}
              animate={{ y: [0, -800], opacity: [1, 0], rotate: [0, 360] }}
              transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5, ease: "easeOut" }}
            />
          ))}
        </div>

        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm"
            >
              <Zap size={16} className="text-ev-amber" />
              Go Green with EVHub
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight">
              Powering the Future with{" "}
              <span className="gradient-text">EV Charging</span>{" "}
              & Solar Energy
            </h1>

            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              India's trusted partner for EV charging station manufacturing, installation, and solar energy integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-all ev-glow"
              >
                Our Services <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                Contact Us <Phone size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">About EVHub</span>
                <h2 className="section-heading text-foreground">
                  Leading the <span className="text-primary">EV Revolution</span> in India
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  EVHub specializes in complete EV charging infrastructure — from manufacturing and sales to installation and servicing. 
                  We are committed to building a sustainable future by making electric vehicle charging accessible and reliable across India.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <img src={pic3} alt="EV Charging Station" className="rounded-2xl shadow-2xl w-full object-cover h-80 lg:h-[400px]" />
                <div className="absolute -bottom-6 -left-6 p-4 glass-card">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                      <Zap size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">180 kW</p>
                      <p className="text-sm text-muted-foreground">Fast Charging</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="section-container">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Offer</span>
            <h2 className="section-heading text-foreground">Our Services</h2>
            <p className="section-subheading mx-auto">Comprehensive EV charging solutions tailored to your needs.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-6 h-full space-y-4 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center group-hover:amber-glow transition-shadow">
                    <service.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center space-y-4 mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Work</span>
            <h2 className="section-heading text-foreground">Charging Stations in Action</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            <AnimatedSection delay={0.1}>
              <img src={pic1} alt="EV Charging Station" className="rounded-2xl w-full h-72 object-cover shadow-lg hover:shadow-2xl transition-shadow" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img src={pic3} alt="EV Fast Charger" className="rounded-2xl w-full h-72 object-cover shadow-lg hover:shadow-2xl transition-shadow" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
        <div className="section-container text-center space-y-8">
          <AnimatedSection>
            <h2 className="section-heading">Get in Touch</h2>
            <p className="text-secondary-foreground/70 mt-4 max-w-lg mx-auto">
              Ready to power your location with EV charging? Contact us today.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:9390905955" className="flex items-center gap-3 text-lg">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                9390905955
              </a>
              <a href="mailto: evhub45@gmail.com" className="flex items-center gap-3 text-lg">
                <div className="w-12 h-12 rounded-xl gradient-bg-amber flex items-center justify-center">
                  <Mail size={20} className="text-accent-foreground" />
                </div>
                 evhub45@gmail.com
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-all ev-glow"
            >
              Send Us a Message <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
