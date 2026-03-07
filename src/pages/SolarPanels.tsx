import { motion } from "framer-motion";
import { Sun, Leaf, TrendingDown, Zap, Battery, Home, Building, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import solarHero from "@/assets/solar-hero.jpg";

const benefits = [
  { icon: TrendingDown, title: "Reduce Electricity Bills", desc: "Save up to 90% on your electricity bills by harnessing the power of the sun. Solar panels pay for themselves within 3-5 years." },
  { icon: Leaf, title: "Go Green", desc: "Reduce your carbon footprint significantly. A typical 5kW system offsets about 7 tons of CO₂ per year — equivalent to planting 350 trees." },
  { icon: Zap, title: "Energy Independence", desc: "Generate your own electricity and reduce dependence on the grid. With battery storage, you can have power even during outages." },
  { icon: TrendingDown, title: "Government Subsidies", desc: "Take advantage of central and state government subsidies that can cover 20-40% of your solar installation costs." },
];

const howItWorks = [
  { step: "1", title: "Solar Panels", desc: "Photovoltaic panels on your rooftop capture sunlight and convert it into DC electricity." },
  { step: "2", title: "Inverter", desc: "The inverter converts DC electricity from panels into AC electricity that powers your home/business." },
  { step: "3", title: "Net Metering", desc: "Excess energy is exported to the grid, earning you credits on your electricity bill." },
  { step: "4", title: "Battery Storage", desc: "Optional battery systems store excess energy for use during nighttime or power outages." },
];

const solutions = [
  { icon: Home, title: "Residential Solar", desc: "1kW to 10kW systems for homes. Reduce bills, increase property value, and contribute to a cleaner environment.", features: ["Rooftop installation", "Net metering", "25-year panel warranty", "Mobile app monitoring"] },
  { icon: Building, title: "Commercial Solar", desc: "10kW to 500kW+ systems for businesses. Cut operational costs and demonstrate your commitment to sustainability.", features: ["Custom system design", "Accelerated depreciation benefits", "Power purchase agreements", "Professional O&M support"] },
  { icon: Battery, title: "Solar + EV Charging", desc: "Combine solar panels with EV charging stations for a truly green mobility solution. Charge your EV with clean energy.", features: ["Integrated solar-EV systems", "Smart energy management", "Reduced charging costs", "Zero-emission mobility"] },
];

const installProcess = [
  { num: "01", title: "Site Assessment", desc: "Our team visits your location to assess rooftop area, orientation, shading, and structural integrity." },
  { num: "02", title: "Custom Design", desc: "We design a system tailored to your energy consumption patterns and available rooftop space." },
  { num: "03", title: "Installation", desc: "Professional installation by certified technicians, typically completed within 2-5 days." },
  { num: "04", title: "Commissioning", desc: "System testing, net meter installation, and handover with complete documentation and training." },
];

const SolarPanels = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={solarHero} alt="Solar Panels" className="w-full h-full object-cover" />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center section-container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-heading font-bold text-primary-foreground"
          >
            <span className="gradient-text">Solar</span> Energy Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 mt-4 text-lg max-w-xl mx-auto"
          >
            Switch to solar energy and save money while saving the planet.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Solar?</span>
            <h2 className="section-heading text-foreground">Benefits of Solar Energy</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} className="glass-card p-6 text-center space-y-4 h-full">
                  <div className="w-14 h-14 rounded-full gradient-bg-amber flex items-center justify-center mx-auto">
                    <item.icon size={28} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="section-container">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="section-heading text-foreground">Solar Panel System Explained</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto text-2xl font-heading font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Solutions</span>
            <h2 className="section-heading text-foreground">Solar Solutions for Everyone</h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <AnimatedSection key={sol.title} delay={i * 0.15}>
                <motion.div whileHover={{ y: -8 }} className="glass-card p-8 h-full space-y-5">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center">
                    <sol.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">{sol.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{sol.desc}</p>
                  <ul className="space-y-2">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-ev-green shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
        <div className="section-container">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <span className="text-ev-amber font-semibold text-sm uppercase tracking-widest">Installation</span>
            <h2 className="section-heading">Our Installation Process</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {installProcess.map((item, i) => (
              <AnimatedSection key={item.num} delay={i * 0.15}>
                <div className="space-y-4">
                  <span className="text-5xl font-heading font-bold text-primary/30">{item.num}</span>
                  <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-secondary-foreground/70">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <span className="text-ev-green font-semibold text-sm uppercase tracking-widest">Impact</span>
                <h2 className="section-heading text-foreground">Environmental Impact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every kilowatt of solar energy generated reduces our dependence on fossil fuels. A typical 
                  residential solar system prevents the emission of approximately 1.5 tons of CO₂ per year per kW installed.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-3xl font-heading font-bold text-primary">90%</p>
                    <p className="text-sm text-muted-foreground">Bill Savings</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-heading font-bold text-ev-amber">25+</p>
                    <p className="text-sm text-muted-foreground">Years Lifespan</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-heading font-bold text-ev-green">7 Tons</p>
                    <p className="text-sm text-muted-foreground">CO₂ Offset/Year</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-heading font-bold text-primary">3-5 Yrs</p>
                    <p className="text-sm text-muted-foreground">Payback Period</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <img src={solarHero} alt="Solar Panels" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
                <div className="absolute -bottom-6 -right-6 p-4 glass-card">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-bg-amber flex items-center justify-center">
                      <Sun size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">Clean Energy</p>
                      <p className="text-sm text-muted-foreground">100% Renewable</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50 text-center">
        <div className="section-container space-y-6">
          <AnimatedSection>
            <h2 className="section-heading text-foreground">Ready to Switch to Solar?</h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Get a free site assessment and custom solar system design for your property.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-all ev-glow mt-8"
            >
              Get Free Quote <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default SolarPanels;
