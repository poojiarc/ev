import { motion } from "framer-motion";
import { Target, Eye, Zap, Factory, Wrench, ShoppingCart, TrendingUp, Leaf } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutBg from "@/assets/about-bg.jpg";
import pic2 from "@/assets/pic2.jpg";
import pic4 from "@/assets/pic4.jpg";

const values = [
  { icon: Factory, title: "Manufacturing Excellence", desc: "We manufacture EV charging stations using the latest technology and highest quality standards." },
  { icon: ShoppingCart, title: "Sales & Distribution", desc: "Providing a wide range of EV charging equipment from AC chargers to DC fast chargers." },
  { icon: Wrench, title: "Installation & Service", desc: "End-to-end installation and dedicated after-sales servicing across all locations." },
  { icon: Leaf, title: "Solar Integration", desc: "Combining solar energy with EV charging for a truly green and sustainable solution." },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="About EVHub" className="w-full h-full object-cover" />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center section-container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-heading font-bold text-primary-foreground"
          >
            About <span className="gradient-text">EVHub</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 mt-4 text-lg max-w-xl mx-auto"
          >
            Driving India's EV revolution through innovation and sustainability.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Who We Are</span>
                <h2 className="section-heading text-foreground">
                  Building India's <span className="text-primary">EV Infrastructure</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  EVHub is a pioneering company focused on accelerating the adoption of electric vehicles in India. 
                  We specialize in the complete lifecycle of EV charging infrastructure — from manufacturing world-class 
                  charging stations to their sales, installation, and ongoing servicing.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of experienced engineers and industry experts work tirelessly to deliver reliable, 
                  efficient, and cutting-edge charging solutions. We believe in a future powered by clean energy 
                  and are committed to making EV charging accessible to everyone.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <img src={pic4} alt="EV Charging" className="rounded-2xl shadow-2xl w-full h-80 lg:h-[420px] object-cover" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="section-container grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="glass-card p-8 h-full space-y-4">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center">
                <Target size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate India's transition to electric mobility by building a reliable, accessible, 
                and sustainable EV charging network. We aim to eliminate range anxiety and make EV ownership 
                a seamless experience for every Indian.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 h-full space-y-4">
              <div className="w-14 h-14 rounded-xl gradient-bg-amber flex items-center justify-center">
                <Eye size={28} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's leading EV infrastructure company, setting the standard for quality, innovation, 
                and sustainability. We envision a future where every petrol pump has an EV charger and every 
                rooftop contributes clean energy.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="section-heading text-foreground">Our Core Strengths</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} className="glass-card p-6 text-center space-y-4 h-full">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto">
                    <item.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Future */}
      <section className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <img src={pic2} alt="Fast Charger" className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl gradient-bg-amber flex items-center justify-center">
                  <TrendingUp size={28} className="text-accent-foreground" />
                </div>
                <h2 className="section-heading">The Future of EV Infrastructure</h2>
                <p className="text-secondary-foreground/70 leading-relaxed">
                  India is rapidly moving towards electric mobility with government initiatives like FAME II 
                  and state-level EV policies. The EV charging infrastructure market is projected to grow 
                  exponentially over the next decade.
                </p>
                <p className="text-secondary-foreground/70 leading-relaxed">
                  At EVHub, we are positioned at the forefront of this revolution. Our integrated approach 
                  combining EV charging with solar energy makes us a unique player in the market, offering 
                  truly sustainable energy solutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
