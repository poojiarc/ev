import { motion } from "framer-motion";
import { Factory, Wrench, Zap, ShoppingCart, Lightbulb, Sun, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import pic1 from "@/assets/pic1.jpg";
import pic4 from "@/assets/pic4.jpg";

const services = [
  {
    icon: Factory,
    title: "EV Charging Station Manufacturing",
    desc: "We design and manufacture high-quality EV charging stations ranging from 3.3 kW AC chargers to 180 kW DC fast chargers. Our state-of-the-art manufacturing facility ensures every unit meets international standards.",
    features: ["AC Level 2 Chargers", "DC Fast Chargers (60kW–180kW)", "Custom branding options", "Smart connectivity features"],
  },
  {
    icon: Wrench,
    title: "EV Charging Station Installation",
    desc: "Our expert team handles complete installation from site survey and planning to electrical infrastructure setup and commissioning. We ensure minimal disruption and maximum performance.",
    features: ["Site assessment & planning", "Electrical infrastructure setup", "Equipment mounting & wiring", "Testing & commissioning"],
  },
  {
    icon: Zap,
    title: "EV Charging Station Maintenance",
    desc: "Keep your charging stations running at peak performance with our comprehensive maintenance programs. We offer preventive maintenance, emergency repairs, and remote monitoring.",
    features: ["Preventive maintenance plans", "24/7 emergency support", "Remote diagnostics & monitoring", "Spare parts management"],
  },
  {
    icon: ShoppingCart,
    title: "EV Charging Equipment Sales",
    desc: "We offer a wide range of EV charging equipment from leading manufacturers. Whether you need a single home charger or a fleet of commercial chargers, we have solutions for every budget.",
    features: ["Home chargers", "Commercial chargers", "Fleet charging solutions", "Accessories & cables"],
  },
  {
    icon: Lightbulb,
    title: "EV Infrastructure Consulting",
    desc: "Our experts help you plan and design your EV charging network. From feasibility studies to ROI analysis, we provide end-to-end consulting to help you make informed decisions.",
    features: ["Feasibility studies", "Network planning & design", "ROI analysis", "Government subsidy guidance"],
  },
  {
    icon: Sun,
    title: "Solar Energy Integration",
    desc: "Combine your EV charging stations with solar energy for a truly sustainable solution. We design and install solar-powered charging systems that reduce electricity costs and carbon footprint.",
    features: ["Solar panel installation", "Battery storage systems", "Grid-tied solutions", "Net metering setup"],
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Services" className="w-full h-full object-cover" />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center section-container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-heading font-bold text-primary-foreground"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 mt-4 text-lg max-w-xl mx-auto"
          >
            End-to-end EV charging infrastructure solutions for a greener tomorrow.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-container space-y-16">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-card p-6 lg:p-10 grid lg:grid-cols-[auto_1fr] gap-8 items-start"
              >
                <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <service.icon size={32} className="text-primary-foreground" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl lg:text-2xl text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-ev-green shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="section-container">
          <AnimatedSection className="text-center space-y-4 mb-12">
            <h2 className="section-heading text-foreground">Our Installations</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            <AnimatedSection delay={0.1}>
              <img src={pic1} alt="Charging Station" className="rounded-2xl w-full h-72 object-cover shadow-lg" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img src={pic4} alt="EV Charging" className="rounded-2xl w-full h-72 object-cover shadow-lg" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground text-center">
        <div className="section-container space-y-6">
          <AnimatedSection>
            <h2 className="section-heading">Ready to Get Started?</h2>
            <p className="text-secondary-foreground/70 mt-4 max-w-md mx-auto">
              Contact us today for a free consultation on your EV charging needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-all ev-glow mt-8"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
